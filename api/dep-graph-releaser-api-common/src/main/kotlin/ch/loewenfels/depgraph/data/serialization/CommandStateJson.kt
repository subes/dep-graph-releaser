package ch.loewenfels.depgraph.data.serialization

import ch.loewenfels.depgraph.data.CommandState
import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.serialization.CommandStateJson.State.*

data class CommandStateJson(
    var state: State,
    val dependencies: Set<ProjectId>?,
    var previous: CommandStateJson?
) {
    constructor(state: State) : this(state, null, null)
    constructor(state: State, dependencies: Set<ProjectId>) : this(state, dependencies, null)
    constructor(state: State, previous: CommandStateJson) : this(state, null, previous)

    enum class State {
        WAITING,
        READY,
        READY_TO_RE_TRIGGER,
        QUEUEING,
        STILL_QUEUEING,
        IN_PROGRESS,
        RE_POLLING,
        SUCCEEDED,
        FAILED,
        TIMEOUT,
        DEACTIVATED,
        DISABLED
    }
}

fun toJson(state: CommandState) : CommandStateJson = when (state) {
    is CommandState.Waiting -> CommandStateJson(WAITING, state.dependencies)
    is CommandState.Ready -> CommandStateJson(READY)
    is CommandState.ReadyToReTrigger -> CommandStateJson(READY_TO_RE_TRIGGER)
    is CommandState.Queueing -> CommandStateJson(QUEUEING)
    is CommandState.StillQueueing -> CommandStateJson(STILL_QUEUEING)
    is CommandState.InProgress -> CommandStateJson(IN_PROGRESS)
    is CommandState.RePolling -> CommandStateJson(RE_POLLING)
    is CommandState.Succeeded -> CommandStateJson(SUCCEEDED)
    is CommandState.Failed -> CommandStateJson(FAILED)
    is CommandState.Timeout -> CommandStateJson(TIMEOUT)
    is CommandState.Deactivated -> CommandStateJson(DEACTIVATED, toJson(state.previous))
    is CommandState.Disabled -> CommandStateJson(DISABLED)
}

fun fromJson(json: CommandStateJson): CommandState = when (json.state) {
    WAITING -> CommandState.Waiting(json.dependencies ?: throwIllegal("dependencies", WAITING.name))
    READY -> CommandState.Ready
    READY_TO_RE_TRIGGER -> CommandState.ReadyToReTrigger
    QUEUEING -> CommandState.Queueing
    STILL_QUEUEING -> CommandState.StillQueueing
    IN_PROGRESS -> CommandState.InProgress
    RE_POLLING -> CommandState.RePolling
    SUCCEEDED -> CommandState.Succeeded
    FAILED -> CommandState.Failed
    TIMEOUT -> CommandState.Timeout
    DEACTIVATED -> CommandState.Deactivated(fromJson(json.previous ?: throwIllegal("previous", DEACTIVATED.name)))
    DISABLED -> CommandState.Disabled
}

private fun throwIllegal(fieldName: String, stateName: String): Nothing = throw IllegalArgumentException("$fieldName must be defined for state $stateName")
