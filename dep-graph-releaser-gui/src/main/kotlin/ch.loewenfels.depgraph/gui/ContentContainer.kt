package ch.loewenfels.depgraph.gui

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.gui.components.Menu
import ch.loewenfels.depgraph.gui.components.Pipeline
import ch.loewenfels.depgraph.gui.components.textAreaWithLabel
import ch.loewenfels.depgraph.gui.components.textFieldWithLabel
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import kotlinx.html.div
import kotlinx.html.dom.append
import org.w3c.dom.asList
import kotlin.browser.document

class ContentContainer(modifiableState: ModifiableState, private val menu: Menu) {

    init {
        val releasePlan = modifiableState.releasePlan
        val rootProjectId = releasePlan.rootProjectId
        val htmlTitle = (rootProjectId as? MavenProjectId)?.artifactId ?: rootProjectId.identifier
        document.title = "Release $htmlTitle"
        releasePlan.warnings.forEach { showWarning(it) }
        setInfoBubble(releasePlan.infos)
        setUpConfig(releasePlan)
        Pipeline(modifiableState, menu)
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
                listOf(
                    ConfigKey.COMMIT_PREFIX,
                    ConfigKey.UPDATE_DEPENDENCY_JOB,
                    ConfigKey.DRY_RUN_JOB,
                    ConfigKey.REMOTE_REGEX,
                    ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX,
                    ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX,
                    ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT,
                    ConfigKey.REGEX_PARAMS,
                    ConfigKey.INITIAL_RELEASE_JSON
                ).forEach { key ->
                    textFieldWithLabel("config-${key.asString()}", key.asString(), config[key] ?: "", menu)
                }
                val key = ConfigKey.JOB_MAPPING
                textAreaWithLabel(
                    "config-${key.asString()}", key.asString(), config[key]?.replace("|", "\n") ?: "", menu
                )
            }
        }
        val initialSite = getTextField("config-${ConfigKey.INITIAL_RELEASE_JSON.asString()}")
        if (initialSite.value.isBlank()) {
            initialSite.value = App.determineJsonUrl() ?: ""
        }
    }

    companion object {
        const val RELEASE_ID_HTML_ID = "releaseId"
        const val HIDE_MESSAGES_HTML_ID = "hideMessages"
    }
}
