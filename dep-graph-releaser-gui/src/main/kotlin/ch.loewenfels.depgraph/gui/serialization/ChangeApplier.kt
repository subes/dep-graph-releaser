package ch.loewenfels.depgraph.gui.serialization

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.*
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.data.maven.jenkins.*
import ch.loewenfels.depgraph.data.serialization.toJson
import ch.loewenfels.depgraph.gui.ContentContainer
import ch.loewenfels.depgraph.gui.components.Pipeline
import ch.loewenfels.depgraph.gui.elementById
import ch.loewenfels.depgraph.gui.getTextField
import ch.loewenfels.depgraph.gui.getTextFieldOrNull
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement

object ChangeApplier {

    fun createReleasePlanJsonWithChanges(releasePlan: ReleasePlan, json: String): Pair<Boolean, String> {
        val releasePlanJson = JSON.parse<ReleasePlanJson>(json)
        val changed = applyChanges(releasePlan, releasePlanJson)
        val newJson = JSON.stringify(releasePlanJson)
        return changed to newJson
    }

    private fun applyChanges(releasePlan: ReleasePlan, releasePlanJson: ReleasePlanJson): Boolean {
        var changed = false

        changed = changed or replacePublishIdIfChanged(releasePlanJson)
        changed = changed or replaceReleaseStateIfChanged(releasePlanJson)
        changed = changed or replaceTypeOfRunIfChanged(releasePlanJson)

        releasePlanJson.projects.forEach { project ->
            val mavenProjectId = deserializeProjectId(project.id)
            changed = changed or replaceReleaseVersionIfChanged(releasePlan, releasePlanJson, project, mavenProjectId)

            project.commands.forEachIndexed { index, command ->
                changed = changed or
                    replaceCommandStateIfChanged(command, mavenProjectId, index) or
                    replaceFieldsIfChanged(command, mavenProjectId, index)
            }
        }

        changed = changed or replaceConfigEntriesIfChanged(releasePlanJson)
        return changed
    }

    private fun replacePublishIdIfChanged(releasePlanJson: ReleasePlanJson): Boolean {
        var changed = false
        val input = getTextField(ContentContainer.RELEASE_ID_HTML_ID)
        if (releasePlanJson.releaseId != input.value) {
            check(input.value.isNotBlank()) {
                "An empty or blank ReleaseId is not allowed"
            }
            releasePlanJson.releaseId = input.value
            changed = true
        }
        return changed
    }

    private fun replaceReleaseStateIfChanged(releasePlanJson: ReleasePlanJson): Boolean {
        var changed = false
        val newState = Pipeline.getReleaseState()
        val currentState = deserializeReleaseState(releasePlanJson)
        if (currentState != newState) {
            releasePlanJson.state = newState.name.unsafeCast<ReleaseState>()
            changed = true
        }
        return changed
    }

    private fun replaceTypeOfRunIfChanged(releasePlanJson: ReleasePlanJson): Boolean {
        var changed = false
        val newTypeOfRun = Pipeline.getTypeOfRun()
        val currentTypeOfRun = deserializeTypeOfRun(releasePlanJson)
        if (currentTypeOfRun != newTypeOfRun) {
            releasePlanJson.typeOfRun = newTypeOfRun.name.unsafeCast<TypeOfRun>()
            changed = true
        }
        return changed
    }

    private fun replaceConfigEntriesIfChanged(releasePlanJson: ReleasePlanJson): Boolean {
        var changed = false
        releasePlanJson.config.forEach { arr ->
            check(arr.size == 2) {
                "config entry corrupt, does not have two entries:\n" +
                    if (arr.isNotEmpty()) arr[0] else releasePlanJson.config.joinToString { it.joinToString() }
            }

            val input = elementById("config-${arr[0]}")
            val value = getConfigValue(arr, input)
            if (arr[1] != value) {
                arr[1] = value
                changed = true
            }
        }
        return changed
    }

    private fun getConfigValue(arr: Array<String>, input: HTMLElement): String {
        return when (arr[0]) {
            ConfigKey.REGEX_PARAMS.asString(),
            ConfigKey.REMOTE_REGEX.asString(),
            ConfigKey.BUILD_WITH_PARAM_JOBS.asString(),
            ConfigKey.JOB_MAPPING.asString() -> (input as HTMLTextAreaElement).value
            else -> (input as HTMLInputElement).value
        }
    }

    private fun replaceReleaseVersionIfChanged(
        releasePlan: ReleasePlan,
        releasePlanJson: ReleasePlanJson,
        project: ProjectJson,
        mavenProjectId: ProjectId
    ): Boolean {
        val input = getTextFieldOrNull("${mavenProjectId.identifier}:releaseVersion")
        if (input != null && project.releaseVersion != input.value) {
            check(input.value.isNotBlank()) {
                "An empty or blank Release Version is not allowed"
            }
            project.releaseVersion = input.value
            updateReleaseVersionOfSubmodules(releasePlan, releasePlanJson, mavenProjectId, input.value)
            return true
        }
        return false
    }

    private fun updateReleaseVersionOfSubmodules(
        releasePlan: ReleasePlan,
        releasePlanJson: ReleasePlanJson,
        mavenProjectId: ProjectId,
        releaseVersion: String
    ) {
        releasePlan.getSubmodules(mavenProjectId).forEach { submoduleId ->
            releasePlanJson.projects
                .asSequence()
                .map { it to deserializeProjectId(it.id) }
                .first { it.second == submoduleId }
                .apply {
                    first.releaseVersion = releaseVersion
                    updateReleaseVersionOfSubmodules(releasePlan, releasePlanJson, second, releaseVersion)
                }
        }
    }

    private fun replaceCommandStateIfChanged(
        genericCommand: GenericType<Command>,
        mavenProjectId: ProjectId,
        index: Int
    ): Boolean {
        val command = genericCommand.p
        val previousState = deserializeCommandState(command)
        val newState = Pipeline.getCommandState(mavenProjectId, index)

        if (previousState::class != newState::class) {
            val stateObject = js("({})")
            stateObject.state = toJson(newState).state.name
            if (newState is CommandState.Deactivated || newState is CommandState.Timeout) {
                stateObject.previous = command.state
            }
            command.asDynamic().state = stateObject
            if (newState is CommandState.Waiting) {
                serializeWaitingDependencies(newState, command)
            }
            return true
        }
        if (previousState is CommandState.Waiting &&
            newState is CommandState.Waiting &&
            previousState.dependencies.size != newState.dependencies.size
        ) {
            serializeWaitingDependencies(newState, command)
        }
        return false
    }

    private fun serializeWaitingDependencies(newState: CommandState.Waiting, command: Command) {
        /* state has to be put in the following structure
            "state": {
                "state": "WAITING",
                "dependencies": [
                    {
                        "t": "MavenProjectId",
                        "p": {
                            "groupId": "com.example",
                            "artifactId": "artifact"
                        }
                    }
                ]
            },
            */
        val newDependencies = newState.dependencies.map {
            when (it) {
                is MavenProjectId -> {
                    val entry = js("({})")
                    entry.t = MavenProjectId.TYPE_ID
                    val p = js("({})")
                    p.groupId = it.groupId
                    p.artifactId = it.artifactId
                    entry.p = p
                    entry.unsafeCast<GenericMapEntry<String, ProjectId>>()
                }
                else -> throw UnsupportedOperationException("$it is not supported.")
            }
        }
        command.state.asDynamic().dependencies = newDependencies.toTypedArray()
    }

    private fun replaceFieldsIfChanged(command: GenericType<Command>, mavenProjectId: ProjectId, index: Int): Boolean {
        return when (command.t) {
            JenkinsSingleMavenReleaseCommand.TYPE_ID, JenkinsMultiMavenReleasePlugin.TYPE_ID -> {
                replaceNextDevVersionIfChanged(command.p, mavenProjectId, index) or
                    replaceBuildUrlIfChanged(command.p, mavenProjectId, index)
            }
            JenkinsUpdateDependency.TYPE_ID -> replaceBuildUrlIfChanged(command.p, mavenProjectId, index)
            else -> throw UnsupportedOperationException("${command.t} is not supported.")
        }
    }

    private fun replaceNextDevVersionIfChanged(command: Command, mavenProjectId: ProjectId, index: Int): Boolean {
        val m2Command = command.unsafeCast<JenkinsNextDevReleaseCommand>()
        val input = getTextField(Pipeline.getCommandId(mavenProjectId, index) + Pipeline.NEXT_DEV_VERSION_SUFFIX)
        if (m2Command.nextDevVersion != input.value) {
            check(input.value.isNotBlank()) {
                "An empty or blank Next Dev Version is not allowed"
            }
            m2Command.asDynamic().nextDevVersion = input.value
            return true
        }
        return false
    }

    private fun replaceBuildUrlIfChanged(command: Command, mavenProjectId: ProjectId, index: Int): Boolean {
        val jenkinsCommand = command.unsafeCast<JenkinsCommand>()
        val guiCommand = Pipeline.getCommand(mavenProjectId, index)

        val newBuildUrl = guiCommand.asDynamic().buildUrl as? String
        if (newBuildUrl != null && jenkinsCommand.buildUrl != newBuildUrl) {
            jenkinsCommand.asDynamic().buildUrl = newBuildUrl
            return true
        }
        return false
    }
}
