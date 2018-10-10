package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.*
import ch.loewenfels.depgraph.gui.*
import ch.loewenfels.depgraph.gui.components.Menu
import ch.loewenfels.depgraph.gui.components.Messages
import ch.loewenfels.depgraph.gui.components.Pipeline
import ch.loewenfels.depgraph.gui.serialization.ModifiableState
import ch.loewenfels.depgraph.gui.serialization.deserialize
import org.w3c.dom.CustomEvent
import org.w3c.dom.CustomEventInit
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.js.Promise

class EventManager(
    private val usernameTokenRegistry: UsernameTokenRegistry,
    private val defaultJenkinsBaseUrl: String?
) {

    fun recoverEventState(processStarter: ProcessStarter?) {
        val modifiableState = Menu.modifiableState
        val releasePlan = modifiableState.releasePlan
        return when (releasePlan.state) {
            ReleaseState.READY -> Unit /* nothing to do */
            ReleaseState.IN_PROGRESS -> restartProcess(modifiableState, processStarter)
            ReleaseState.FAILED, ReleaseState.SUCCEEDED -> {
                EventManager.dispatchProcessStart()
                dispatchProcessEnd(success = releasePlan.state == ReleaseState.SUCCEEDED)
            }
            ReleaseState.WATCHING -> dispatchProcessStart()
        }
    }

    private fun restartProcess(modifiableState: ModifiableState, processStarter: ProcessStarter?) {
        when {
            processStarter != null -> {
                //TODO change to nicer code in case https://youtrack.jetbrains.com/issue/KT-12380 is implemented
                @Suppress("UNUSED_VARIABLE" /* used to check that we have covered all TypeOfRun */)
                val checkWhenExhaustiveness: Any? = when (modifiableState.releasePlan.typeOfRun) {
                    TypeOfRun.EXPLORE -> startExploration(modifiableState, processStarter)
                    TypeOfRun.DRY_RUN -> startDryRun(modifiableState, processStarter)
                    TypeOfRun.RELEASE -> startRelease(modifiableState, processStarter)
                }
            }
            modifiableState.releasePlan.typeOfRun == TypeOfRun.EXPLORE -> startExploration(modifiableState, null)
        }
    }

    fun resetForNewProcess(): Promise<Unit> {
        val currentReleasePlan = Menu.modifiableState.releasePlan
        val initialJson = currentReleasePlan.config[ConfigKey.INITIAL_RELEASE_JSON]
            ?: App.determineJsonUrlOrThrow()
        val usernameAndApiToken = if (defaultJenkinsBaseUrl != null) {
            usernameTokenRegistry.forHost(defaultJenkinsBaseUrl)
        } else {
            null
        }
        return App.loadJsonAndCheckStatus(initialJson, usernameAndApiToken).then { (_, body) ->
            val initialReleasePlan = deserialize(body)
            initialReleasePlan.getProjects().forEach { project ->
                project.commands.forEachIndexed { index, command ->
                    val newState = determineNewState(project, index, command)
                    Pipeline.changeBuildUrlOfCommand(project, index, "")
                    Pipeline.changeStateOfCommand(project, index, newState) { _, _ ->
                        // we do not check if the transition is allowed since we reset the command
                        newState
                    }
                }
            }
            Pipeline.changeReleaseState(ReleaseState.READY)
            dispatchProcessReset()
            elementById<HTMLInputElement>(ContentContainer.RELEASE_ID_HTML_ID).value = randomPublishId()
        }
    }

    fun startDryRun(modifiableState: ModifiableState, processStarter: ProcessStarter): Promise<*> =
        triggerProcess { processStarter.dryRun(modifiableState) }

    fun startRelease(modifiableState: ModifiableState, processStarter: ProcessStarter): Promise<*> =
        triggerProcess { processStarter.release(modifiableState) }

    fun startExploration(modifiableState: ModifiableState, processStarter: ProcessStarter?): Promise<*> {
        val nonNullProcessStarter = App.givenOrFakeProcessStarter(processStarter, modifiableState)
        return triggerProcess { nonNullProcessStarter.explore(modifiableState) }
    }

    private fun triggerProcess(action: () -> Promise<Boolean>): Promise<*> {
        Messages.putMessagesInHolder(Pipeline.getTypeOfRun())

        dispatchProcessStart()
        if (Pipeline.getReleaseState() === ReleaseState.SUCCEEDED) {
            dispatchProcessContinue()
        }
        return action().then(
            { result ->
                dispatchProcessEnd(success = result)
            },
            { t ->
                dispatchProcessEnd(success = false)
                // the user should see this, otherwise we only display it in the dev-console.
                Messages.showThrowableAndThrow(t)
            }
        )
    }

    private fun determineNewState(project: Project, index: Int, command: Command): CommandState {
        val currentState = Pipeline.getCommandState(project.id, index)
        return if (currentState is CommandState.Deactivated && command.state !is CommandState.Deactivated) {
            CommandState.Deactivated(command.state)
        } else {
            command.state
        }
    }

    companion object {

        private const val EVENT_PROCESS_START = "process.start"
        private const val EVENT_PROCESS_END = "process.end"
        private const val EVENT_PROCESS_CONTINUE = "process.continue"
        private const val EVENT_PROCESS_RESET = "process.reset"

        fun registerForProcessStartEvent(callback: (Event) -> Unit) {
            document.addEventListener(EVENT_PROCESS_START, callback)
        }

        fun registerForProcessEndEvent(callback: (Boolean) -> Unit) {
            document.addEventListener(EVENT_PROCESS_END, { e ->
                val customEvent = e as CustomEvent
                val success = customEvent.detail as Boolean
                callback(success)
            })
        }

        fun getDisabledMessage(): String =
            "disabled due to process '${Menu.modifiableState.releasePlan.typeOfRun.toProcessName()}' which is in progress."

        fun disableUnDisableForProcessStartAndEnd(input: HTMLInputElement, titleElement: HTMLElement) {
            registerForProcessStartEvent {
                input.asDynamic().oldDisabled = input.disabled
                input.disabled = true
                titleElement.setTitleSaveOld(getDisabledMessage())
            }
            registerForProcessEndEvent { _ ->
                if (input.id.startsWith("config-") || isInputFieldOfNonSuccessfulCommand(input.id)) {
                    unDisableInputField(input, titleElement)
                }
            }
        }

        private fun isInputFieldOfNonSuccessfulCommand(id: String): Boolean {
            if (id == ContentContainer.RELEASE_ID_HTML_ID) return false

            val project = Pipeline.getSurroundingProject(id)
            val releasePlan = Menu.modifiableState.releasePlan
            return releasePlan.getProject(project.id).commands.any {
                it.state !== CommandState.Succeeded && it.state !== CommandState.Disabled
            }
        }


        private fun unDisableInputField(input: HTMLInputElement, titleElement: HTMLElement) {
            input.disabled = input.asDynamic().oldDisabled as Boolean
            titleElement.title = titleElement.getOldTitle()
        }

        fun unDisableForProcessContinueAndReset(input: HTMLInputElement, titleElement: HTMLElement) {
            registerForProcessContinueEvent { unDisableInputField(input, titleElement) }
            registerForProcessResetEvent { unDisableInputField(input, titleElement) }
        }

        private fun registerForProcessContinueEvent(callback: (Event) -> Unit) {
            document.addEventListener(EVENT_PROCESS_CONTINUE, callback)
        }

        private fun registerForProcessResetEvent(callback: (Event) -> Unit) {
            document.addEventListener(EVENT_PROCESS_RESET, callback)
        }

        private fun dispatchProcessStart() {
            document.dispatchEvent(Event(EVENT_PROCESS_START))
        }

        private fun dispatchProcessEnd(success: Boolean) {
            document.dispatchEvent(CustomEvent(EVENT_PROCESS_END, CustomEventInit(detail = success)))
        }

        private fun dispatchProcessContinue() {
            document.dispatchEvent(Event(EVENT_PROCESS_CONTINUE))
        }

        private fun dispatchProcessReset() {
            document.dispatchEvent(Event(EVENT_PROCESS_RESET))
        }
    }
}
