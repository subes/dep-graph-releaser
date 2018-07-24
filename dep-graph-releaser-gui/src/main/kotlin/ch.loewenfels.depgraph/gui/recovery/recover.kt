package ch.loewenfels.depgraph.gui.recovery

import ch.loewenfels.depgraph.data.*
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsCommand
import ch.loewenfels.depgraph.data.serialization.CommandStateJson
import ch.loewenfels.depgraph.gui.App
import ch.loewenfels.depgraph.gui.jobexecution.*
import ch.loewenfels.depgraph.gui.jobexecution.BuilderNumberExtractor.Companion.numberRegex
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import ch.loewenfels.depgraph.gui.serialization.ProjectJson
import ch.loewenfels.depgraph.gui.serialization.ReleasePlanJson
import ch.loewenfels.depgraph.gui.serialization.deserializeProjectId
import ch.loewenfels.depgraph.gui.showDialog
import ch.loewenfels.depgraph.gui.showInfo
import ch.loewenfels.depgraph.gui.showThrowable
import kotlin.browser.window
import kotlin.js.*


fun recover(modifiableState: ModifiableState, defaultJenkinsBaseUrl: String?): Promise<ModifiableState> {
    if (defaultJenkinsBaseUrl == null) {
        showInfo(
            "You have opened a pipeline which is in state ${ReleaseState.IN_PROGRESS.name}.\n" +
                "Yet, since you have not provided a ${App.PUBLISH_JOB} in the URL we cannot recover the ongoing process."
        )
        return Promise.resolve(modifiableState)
    }

    return showDialog(
        """
            |You have opened a pipeline which is in state ${ReleaseState.IN_PROGRESS.name} currently executing '${modifiableState.releasePlan.typeOfRun.toProcessName()}' for root project ${modifiableState.releasePlan.rootProjectId.identifier}.
            |Are you the release manager and would like to recover the ongoing process?
            |
            |Extra information: By clicking 'Yes' the dep-graph-releaser will check if the current state of the individual commands is still appropriate and update if necessary. Furthermore, it will resume the process meaning it will trigger dependent jobs if a job finishes. Or in other words, it will almost look like you have never left the page.
            |
            |Do not click 'Yes' (but 'No') if you (or some else) have started the release process in another tab/browser since otherwise dependent jobs will be triggered multiple times.
            """.trimMargin()
    ).then { isReleaseManager ->
        if (!isReleaseManager) {
            showInfo(
                "We do not yet support tracking of a release process at the moment. Which means, what you see above is only a state of the process but the process as such has likely progressed already." +
                    "\nPlease open a feature request $GITHUB_NEW_ISSUE if you have the need of tracking a release (which runs in another tab/browser)."
            )
            val releasePlanJson = JSON.parse<ReleasePlanJson>(modifiableState.json)
            releasePlanJson.state = ReleaseState.WATCHING.name.unsafeCast<ReleaseState>()
            return@then Promise.resolve(releasePlanJson)
        }
        recoverCommandStates(modifiableState, defaultJenkinsBaseUrl)
    }.then { ModifiableState(modifiableState, JSON.stringify(it)) }
}

private fun recoverCommandStates(
    modifiableState: ModifiableState,
    jenkinsBaseUrl: String
): Promise<ReleasePlanJson> {
    val releasePlanJson = JSON.parse<ReleasePlanJson>(modifiableState.json)
    val promises = modifiableState.releasePlan.iterator().asSequence().map { project ->
        val lazyProjectJson by lazy {
            releasePlanJson.projects.single { deserializeProjectId(it.id) == project.id }
        }
        val promises = mapCommandStates(project, modifiableState, jenkinsBaseUrl, lazyProjectJson)
        Promise.all(promises.toTypedArray())
    }
    return Promise.all(promises.toList().toTypedArray()).then {
        releasePlanJson
    }
}

private fun mapCommandStates(
    project: Project,
    modifiableState: ModifiableState,
    jenkinsBaseUrl: String,
    lazyProjectJson: ProjectJson
): List<Promise<Any?>> {
    return project.commands.mapIndexed { index, command ->
        when (command.state) {
        //TODO we need also to check if a job is queueing or already finished if the state is Ready.
        // It could be that we trigger a job and then the browser crashed (or the user closed the page)
        // before we had a chance to publish the new state => We could introduce a state Triggered but
        // this would mean we need one more publish per job which is bad. This brings me to another idea,
        // we could get rid of the save after state queueing if we implement recovery from state ready.
        // Nah... then we wouldn't save anything anymore which is bad as well (we have to save from time
        // to time :D). But I think there is potential here to reduce the number of publishes per pipeline.
            is CommandState.Ready -> Promise.resolve(Unit)
            is CommandState.Queueing -> recoverStateQueueing(
                modifiableState, jenkinsBaseUrl, project, command, lazyProjectJson, index
            )
            is CommandState.InProgress -> recoverStateTo(lazyProjectJson, index, CommandStateJson.State.RE_POLLING)

            is CommandState.Waiting,
            is CommandState.ReadyToReTrigger,
            is CommandState.StillQueueing,
            is CommandState.RePolling,
            is CommandState.Succeeded,
            is CommandState.Failed,
            is CommandState.Deactivated,
            is CommandState.Disabled -> Promise.resolve(Unit)
        }
    }
}

private fun recoverStateTo(lazyProjectJson: ProjectJson, index: Int, state: CommandStateJson.State): Promise<*> {
    lazyProjectJson.commands[index].p.state.asDynamic().state = state.name
    return Promise.resolve(Unit)
}

private fun recoverStateQueueing(
    modifiableState: ModifiableState,
    jenkinsBaseUrl: String,
    project: Project,
    command: Command,
    lazyProjectJson: ProjectJson,
    index: Int
): Promise<*> {
    if (command !is JenkinsCommand) {
        throw UnsupportedOperationException(
            "We do not know how to recover a command of type ${command::class.simpleName}." +
                "\nCommand: $command"
        )
    }

    val usernameAndApiToken = UsernameTokenRegistry.forHostOrThrow(jenkinsBaseUrl)
    return issueCrumb(jenkinsBaseUrl, usernameAndApiToken).then { authData ->
        val jobExecutionData = recoverJobExecutionData(modifiableState, project, command)
        val nullableQueuedItemUrl = command.buildUrl
        recoverToQueueingOrRePolling(nullableQueuedItemUrl, authData, jobExecutionData, lazyProjectJson, index)
            .catch { t ->
                showThrowable(IllegalStateException("job ${jobExecutionData.jobName} could not be recovered", t))
                recoverStateTo(lazyProjectJson, index, CommandStateJson.State.FAILED)
            }
    }
}

private fun updateBuildUrlAndTransitionToRePolling(
    jobExecutionData: JobExecutionData,
    lazyProjectJson: ProjectJson,
    index: Int,
    buildNumber: Int
): Promise<*> {
    lazyProjectJson.commands[index].p.asDynamic().buildUrl = jobExecutionData.jobBaseUrl + buildNumber
    return recoverStateTo(lazyProjectJson, index, CommandStateJson.State.RE_POLLING)
}

private fun recoverJobExecutionData(
    modifiableState: ModifiableState,
    project: Project,
    command: Command
): JobExecutionData {
    val jobExecutionDataFactory = when (modifiableState.releasePlan.typeOfRun) {
        TypeOfRun.DRY_RUN -> modifiableState.dryRunExecutionDataFactory
        TypeOfRun.RELEASE, TypeOfRun.EXPLORE -> modifiableState.releaseJobExecutionDataFactory
    }
    return jobExecutionDataFactory.create(project, command)
}

private fun recoverToQueueingOrRePolling(
    nullableQueuedItemUrl: String?,
    authData: AuthData,
    jobExecutionData: JobExecutionData,
    lazyProjectJson: ProjectJson,
    index: Int
): Promise<Promise<*>> {
    return recoverBuildNumberFromQueue(nullableQueuedItemUrl, authData).then { recoveredBuildNumber ->
        when (recoveredBuildNumber) {
            is RecoveredBuildNumber.Determined -> updateBuildUrlAndTransitionToRePolling(
                jobExecutionData, lazyProjectJson, index, recoveredBuildNumber.buildNumber
            )
            is RecoveredBuildNumber.StillQueueing -> recoverStateTo(
                lazyProjectJson, index, CommandStateJson.State.STILL_QUEUEING
            )
            is RecoveredBuildNumber.Undetermined -> {
                BuildHistoryBasedBuildNumberExtractor(authData, jobExecutionData)
                    .extract().then { buildNumber ->
                        updateBuildUrlAndTransitionToRePolling(
                            jobExecutionData, lazyProjectJson, index, buildNumber
                        )
                    }
            }
        }
    }
}

private fun recoverBuildNumberFromQueue(
    nullableQueuedItemUrl: String?,
    authData: AuthData
): Promise<RecoveredBuildNumber> {
    if (nullableQueuedItemUrl == null) return Promise.resolve(RecoveredBuildNumber.Undetermined)

    val headers = createHeaderWithAuthAndCrumb(authData)
    val init = createGetRequest(headers)
    return window.fetch(nullableQueuedItemUrl, init)
        .then(::checkStatusOkOr404)
        .then { (_, body) ->
            // might well be that we get a 404 (body is null) because the item is no longer in the queue
            // (the job is already being executed) => we return RecoverBuildNumber.Undetermined so that we recover
            // the build number from the job's build history
            if (body == null) return@then RecoveredBuildNumber.Undetermined

            val match = numberRegex.find(body)
            if (match != null) {
                RecoveredBuildNumber.Determined(match.groupValues[1].toInt())
            } else {
                RecoveredBuildNumber.StillQueueing
            }
        }
}

private sealed class RecoveredBuildNumber {
    data class Determined(val buildNumber: Int) : RecoveredBuildNumber()
    object StillQueueing : RecoveredBuildNumber()
    object Undetermined : RecoveredBuildNumber()
}

