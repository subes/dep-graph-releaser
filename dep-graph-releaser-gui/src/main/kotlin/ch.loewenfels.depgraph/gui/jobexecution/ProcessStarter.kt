package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.data.*
import ch.loewenfels.depgraph.gui.ContentContainer
import ch.loewenfels.depgraph.gui.actions.Publisher
import ch.loewenfels.depgraph.gui.actions.Releaser
import ch.loewenfels.depgraph.gui.components.Pipeline
import ch.loewenfels.depgraph.gui.getTextField
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import ch.tutteli.kbox.mapWithIndex
import kotlin.js.Promise

class ProcessStarter(
    private val publisher: Publisher,
    private val jenkinsJobExecutor: JenkinsJobExecutor,
    private val simulatingJobExecutor: SimulatingJobExecutor,
    releaserSupplier: (ProcessStarter) -> Releaser
) {
    private val releaser : Releaser by lazy { releaserSupplier(this) }

    /**
     * Applies changes and publishes the new release.json with the help of the [publisher] which in turn uses the
     * predefined [jenkinsJobExecutor] to carry out this job.
     * @return `true` if publishing was carried out, `false` in case there were not any changes.
     */
    fun publishChanges(verbose: Boolean): Promise<Boolean> = publishChanges(jenkinsJobExecutor, verbose)

    /**
     * Applies changes and publishes the new release.json with the help of the [publisher] which in turn uses the given
     * [jobExecutor] to carry out this job.
     * @return `true` if publishing was carried out, `false` in case there were not any changes.
     */
    fun publishChanges(jobExecutor: JobExecutor, verbose: Boolean): Promise<Boolean> {
        val changed = publisher.applyChanges()
        return if (changed) {
            val publishId = getTextField(ContentContainer.RELEASE_ID_HTML_ID).value
            val newFileName = "release-$publishId"
            publisher.publish(newFileName, verbose, jobExecutor)
                .then { true }
        } else {
            Promise.resolve(false)
        }
    }

    fun dryRun(modifiableState: ModifiableState): Promise<Boolean> =
        triggerProcess(modifiableState, TypeOfRun.DRY_RUN) {
            releaser.release(jenkinsJobExecutor, modifiableState.dryRunExecutionDataFactory)
        }

    fun release(modifiableState: ModifiableState): Promise<Boolean> =
        triggerProcess(modifiableState, TypeOfRun.RELEASE) {
            releaser.release(jenkinsJobExecutor, modifiableState.releaseJobExecutionDataFactory)
        }

    fun explore(modifiableState: ModifiableState): Promise<Boolean> =
        triggerProcess(modifiableState, TypeOfRun.EXPLORE) {
            releaser.release(simulatingJobExecutor, modifiableState.releaseJobExecutionDataFactory)
        }

    private fun triggerProcess(
        modifiableState: ModifiableState,
        typeOfRun: TypeOfRun,
        action: () -> Promise<Boolean>
    ): Promise<Boolean> {
        if (Pipeline.getReleaseState() === ReleaseState.FAILED) {
            if (typeOfRun == TypeOfRun.DRY_RUN) {
                turnFailedProjectsIntoReTriggerAndReady(modifiableState.releasePlan)
            } else {
                turnFailedCommandsIntoStateReTrigger(modifiableState.releasePlan)
            }
        }
        if (Pipeline.getReleaseState() === ReleaseState.SUCCEEDED) {
            Pipeline.changeReleaseState(ReleaseState.READY)
        }
        Pipeline.changeTypeOfRun(typeOfRun)
        return action()
    }


    private fun turnFailedProjectsIntoReTriggerAndReady(releasePlan: ReleasePlan) {
        releasePlan.iterator().forEach { project ->
            if (!project.isSubmodule && project.hasFailedCommandsOrSubmoduleHasFailedCommands(releasePlan)) {
                turnCommandsIntoStateReadyToReTriggerAndReady(releasePlan, project)
            }
        }
    }

    private fun turnCommandsIntoStateReadyToReTriggerAndReady(releasePlan: ReleasePlan, project: Project) {
        project.commands.forEachIndexed { index, _ ->
            val commandState = Pipeline.getCommandState(project.id, index)
            if (CommandState.isFailureState(commandState)) {
                changeToStateReadyToReTrigger(project, index)
            } else if (commandState === CommandState.Succeeded) {
                changeStateToReadyWithoutCheck(project, index)
            }
        }
        releasePlan.getSubmodules(project.id).forEach {
            val submodule = releasePlan.getProject(it)
            turnCommandsIntoStateReadyToReTriggerAndReady(releasePlan, submodule)
        }
    }

    private fun Project.hasFailedCommandsOrSubmoduleHasFailedCommands(releasePlan: ReleasePlan): Boolean {
        return commands.mapWithIndex()
            .any { (index, _) -> CommandState.isFailureState(Pipeline.getCommandState(id, index)) }
            || releasePlan.getSubmodules(id).any {
            releasePlan.getProject(it).hasFailedCommandsOrSubmoduleHasFailedCommands(releasePlan)
        }
    }

    private fun turnFailedCommandsIntoStateReTrigger(releasePlan: ReleasePlan) {
        releasePlan.iterator().forEach { project ->
            project.commands.forEachIndexed { index, _ ->
                val commandState = Pipeline.getCommandState(project.id, index)
                if (CommandState.isFailureState(commandState)) {
                    changeToStateReadyToReTrigger(project, index)
                }
            }
        }
    }

    private fun changeStateToReadyWithoutCheck(project: Project, index: Int) {
        Pipeline.changeStateOfCommand(project, index, CommandState.Ready, Pipeline.STATE_READY) { _, _ ->
            // we do not check transition here, Succeeded to Ready is normally not allowed
            CommandState.Ready
        }
    }

    private fun changeToStateReadyToReTrigger(project: Project, index: Int) {
        Pipeline.changeStateOfCommand(project, index, CommandState.ReadyToReTrigger, Pipeline.STATE_READY_TO_BE_TRIGGER)
    }

    fun reTrigger(project: Project, modifiableState: ModifiableState) {
        val (jobExecutor, dataFactory) = when (Pipeline.getTypeOfRun()) {
            TypeOfRun.EXPLORE -> simulatingJobExecutor to modifiableState.releaseJobExecutionDataFactory
            TypeOfRun.DRY_RUN -> jenkinsJobExecutor to modifiableState.dryRunExecutionDataFactory
            TypeOfRun.RELEASE -> jenkinsJobExecutor to modifiableState.releaseJobExecutionDataFactory
        }
        releaser.reTrigger(project.id, jobExecutor, dataFactory)
    }
}
