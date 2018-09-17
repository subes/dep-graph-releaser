package ch.loewenfels.depgraph.gui

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.gui.components.Menu
import ch.loewenfels.depgraph.gui.components.Pipeline
import ch.loewenfels.depgraph.gui.components.textAreaWithLabel
import ch.loewenfels.depgraph.gui.components.textFieldWithLabel
import ch.loewenfels.depgraph.gui.jobexecution.ProcessStarter
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import kotlinx.html.DIV
import kotlinx.html.div
import kotlinx.html.dom.append
import org.w3c.dom.asList
import kotlin.browser.document

class ContentContainer(modifiableState: ModifiableState, private val menu: Menu, processStarter: ProcessStarter?) {

    init {
        val releasePlan = modifiableState.releasePlan
        val rootProjectId = releasePlan.rootProjectId
        val htmlTitle = (rootProjectId as? MavenProjectId)?.artifactId ?: rootProjectId.identifier
        document.title = "Release $htmlTitle"
        releasePlan.warnings.forEach { showWarning(it) }
        setInfoBubble(releasePlan.infos)
        setUpConfig(releasePlan)
        Pipeline(modifiableState, menu, processStarter)
    }

    private fun setInfoBubble(messages: List<String>) {
        if (messages.isNotEmpty()) {
            val minimized = elementById("infosMinimized")
            minimized.style.display = "block"
            minimized.addEventListener("click", {
                minimized.style.display = "none"
                messages.forEach { showInfo(it) }
            })
        }
        val messagesDiv = elementById("messages")
        elementById(HIDE_MESSAGES_HTML_ID).addClickEventListener {
            document.querySelectorAll("#messages > div")
                .asList()
                .forEach { messagesDiv.removeChild(it) }
        }
    }

    private fun setUpConfig(releasePlan: ReleasePlan) {
        //TODO add description for each property => see https://github.com/loewenfels/dep-graph-releaser/issues/22
        elementById("config").append {
            div {
                textFieldWithLabel(RELEASE_ID_HTML_ID, "ReleaseId", releasePlan.releaseId, menu)

                val config = releasePlan.config
                arrayOf(
                    ConfigKey.COMMIT_PREFIX,
                    ConfigKey.UPDATE_DEPENDENCY_JOB,
                    ConfigKey.DRY_RUN_JOB,
                    ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX,
                    ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX,
                    ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT,
                    ConfigKey.INITIAL_RELEASE_JSON
                ).forEach(configTextField(config))

                arrayOf(
                    ConfigKey.REGEX_PARAMS,
                    ConfigKey.REMOTE_REGEX,
                    ConfigKey.BUILD_WITH_PARAM_JOBS,
                    ConfigKey.JOB_MAPPING
                ).forEach(configTextArea(config))
            }
        }
        val initialSite = getTextField("config-${ConfigKey.INITIAL_RELEASE_JSON.asString()}")
        if (initialSite.value.isBlank()) {
            initialSite.value = App.determineJsonUrl() ?: ""
        }
    }

    private fun DIV.configTextField(config: Map<ConfigKey, String>): (ConfigKey) -> Unit = { key ->
        textFieldWithLabel("config-${key.asString()}", key.asString(), config[key] ?: "", menu)
    }

    private fun DIV.configTextArea(config: Map<ConfigKey, String>): (ConfigKey) -> Unit {
        return { key ->
            val value = config[key]
                ?.replace("\t", "  ")
                ?.trim()
                ?: ""
            textAreaWithLabel(
                "config-${key.asString()}", key.asString(), value, menu
            )
        }
    }

    companion object {
        const val RELEASE_ID_HTML_ID = "releaseId"
        const val HIDE_MESSAGES_HTML_ID = "hideMessages"
    }
}
