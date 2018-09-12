package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.Command
import ch.loewenfels.depgraph.data.serialization.CommandTypeIdMapper
import kotlin.reflect.KClass

class DummyCommandTypeIdMapper : CommandTypeIdMapper {
    override fun toClass(typeId: String): KClass<out Command>? =
        if (typeId == DummyCommand.TYPE_ID) DummyCommand::class else null
}
