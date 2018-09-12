package ch.loewenfels.depgraph.data.serialization

import ch.loewenfels.depgraph.data.Command
import kotlin.reflect.KClass

/**
 * Marker interface for mappers which map [Command.typeId] to the corresponding [KClass].
 */
interface CommandTypeIdMapper: TypeIdMapper<Command>
