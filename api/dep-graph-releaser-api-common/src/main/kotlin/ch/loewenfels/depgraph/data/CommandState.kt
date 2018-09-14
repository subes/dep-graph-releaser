package ch.loewenfels.depgraph.data

import kotlin.reflect.KClass

sealed class CommandState {
    data class Waiting(val dependencies: Set<ProjectId>) : CommandState()
    object Ready : CommandState()
    object ReadyToReTrigger : CommandState()

    /**
     * Command is queued to be executed.
     */
    object Queueing : CommandState()

    /**
     * Command was queueing before we recovered an ongoing process and is still queueing now.
     */
    object StillQueueing : CommandState()

    object InProgress : CommandState()

    /**
     * Command has to be re-polled, meaning it should be kind of [InProgress] again
     * but we want to track this state separately.
     */
    object RePolling : CommandState()

    object Succeeded : CommandState()
    object Failed : CommandState()
    /**
     * Command run into a timeout.
     */
    object Timeout : CommandState()

    data class Deactivated(val previous: CommandState) : CommandState()

    /**
     * Such a command cannot be reactivated in contrast to [Deactivated].
     */
    object Disabled : CommandState()


    fun checkTransitionAllowed(newState: CommandState): CommandState {
        check(this !== Disabled) { "Cannot transition to any state if current state is ${Disabled::class.simpleName}." }
        check(this::class != newState::class) {
            "Cannot transition to the same state as the current." +
                //TODO use $this instead of $getToStringRepresentation(...) once https://youtrack.jetbrains.com/issue/KT-23970 is fixed
                "\nCurrent: ${this.getToStringRepresentation()}" +
                "\nNew: ${newState.getToStringRepresentation()}"
        }

        return when (newState) {

            is ReadyToReTrigger -> checkNewStateIsAfter(newState, Failed::class)
            is Ready -> {
                checkNewStateIsAfter(newState, Waiting::class)
                if (this is Waiting) { //could also be Deactivated with previous Ready
                    check(this.dependencies.isEmpty()) {
                        "Can only change from ${Waiting::class.simpleName} to ${Ready::class.simpleName} " +
                            "if there are not any dependencies left which we need to wait for." +
                            //TODO use $this instead of $getToStringRepresentation(...) once https://youtrack.jetbrains.com/issue/KT-23970 is fixed
                            "\nState was: ${this.getToStringRepresentation()}"
                    }
                }
                newState
            }
            is Queueing -> checkNewStateIsAfter(newState, Ready::class, ReadyToReTrigger::class)
            is StillQueueing -> checkNewStateIsAfter(newState, Queueing::class)
            is InProgress -> checkNewStateIsAfter(newState, Queueing::class)
            is RePolling -> checkNewStateIsAfter(newState, InProgress::class)
            is Succeeded -> checkNewStateIsAfter(newState, InProgress::class, RePolling::class)
            is Timeout -> checkNewStateIsAfter(newState, InProgress::class, RePolling::class)
            is Waiting,
            is Failed,
            is Deactivated,
            is Disabled -> newState
        }
    }

    private fun checkNewStateIsAfter(
        newState: CommandState,
        vararg requiredState: KClass<out CommandState>
    ): CommandState {
        if (this is Deactivated) {
            check(newState::class == this.previous::class) {
                "Cannot transition to ${newState::class.simpleName} because " +
                    "current state is ${Deactivated::class.simpleName}, can only transition to its previous state." +
                    "\nDeactivated.previous was: ${this.previous.getToStringRepresentation()}"
            }
        } else {
            check(requiredState.any { it.isInstance(this) }) {
                val states = if (requiredState.size == 1) {
                    requiredState[0].simpleName
                } else {
                    "one of: ${requiredState.joinToString { it.simpleName!! }}"
                }
                "Cannot transition to ${newState::class.simpleName} because state is not $states." +
                    //TODO use $this instead of $getToStringRepresentation(...) once https://youtrack.jetbrains.com/issue/KT-23970 is fixed
                    "\nState was: ${this.getToStringRepresentation()}"
            }
        }
        return newState
    }
}
