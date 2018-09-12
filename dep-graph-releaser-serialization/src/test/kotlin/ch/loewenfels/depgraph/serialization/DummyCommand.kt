package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.Command
import ch.loewenfels.depgraph.data.CommandState

data class DummyCommand(override val state: CommandState) :
    Command {
    override val typeId = TYPE_ID
    override fun asNewState(newState: CommandState) = DummyCommand(newState)

    companion object {
        const val TYPE_ID = "DummyCommand"
    }
}
