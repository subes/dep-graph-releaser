package ch.loewenfels.depgraph.data.serialization

import kotlin.reflect.KClass

/**
 * A mapper which maps a [PolymorphSerializable.typeId] to a corresponding [KClass].
 */
interface TypeIdMapper<T : PolymorphSerializable> {
    /**
     * Returns the class to the given [typeId] or null in case it does not know the typeId.
     * @return The class corresponding to the given [typeId] or null if it is unknown.
     */
    fun toClass(typeId: String): KClass<out T>?
}
