package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.serialization.PolymorphSerializable
import ch.loewenfels.depgraph.data.serialization.TypeIdMapper
import com.squareup.moshi.JsonAdapter
import com.squareup.moshi.JsonReader
import com.squareup.moshi.JsonWriter
import com.squareup.moshi.Moshi
import java.lang.reflect.Modifier
import java.lang.reflect.Type

/**
 * A [JsonAdapter.Factory] which relies on the order of the fields to provide fast processing for a [polymorphicType]
 * (interface or abstract class) using given [typeIdMappers].
 *
 * This factory does not support processing of concrete classes with subtypes (introduce an interface,
 * that is better anyway).
 */
class PolymorphicAdapterFactory<T : PolymorphSerializable>(
    private val polymorphicType: Class<T>,
    private val typeIdMappers: List<TypeIdMapper<T>>
) : JsonAdapter.Factory {
    init {
        require(polymorphicType.isInterface || Modifier.isAbstract(polymorphicType.modifiers)) {
            "Do not use ${PolymorphicAdapterFactory::class.simpleName} for non abstract types (neither an interface nor an abstract class).\n" +
                "Given: ${polymorphicType.name}"
        }
    }

    override fun create(type: Type, annotations: MutableSet<out Annotation>, moshi: Moshi): JsonAdapter<*>? =
        if (polymorphicType == type) PolymorphicAdapter(moshi, typeIdMappers)
        else null

    private class PolymorphicAdapter<T : PolymorphSerializable>(
        private val moshi: Moshi,
        private val typeIdMappers: List<TypeIdMapper<T>>
    ) : NonNullJsonAdapter<T>() {

        override fun toJsonNonNull(writer: JsonWriter, value: T) {
            val runtimeClass = value::class.java
            val adapter: JsonAdapter<T> = getAdapter(runtimeClass)
            writer.writeObject {
                //If you make changes here, then you have to make changes in fromJson
                writeNameAndValue(TYPE, value.typeId)
                writeNameAndValue(PAYLOAD, value, adapter)
            }
        }

        private fun getAdapter(runtimeClass: Class<out T>): JsonAdapter<T> {
            //TODO change if https://youtrack.jetbrains.com/issue/KT-20372 is solved
            require(!runtimeClass.name.matches(ANONYMOUS_CLASS_NAME_REGEX)) {
                "Cannot serialize an anonymous class, given: ${runtimeClass.name}"
            }
            @Suppress("UNCHECKED_CAST" /* entity is of type T, should be fine, required for toJson */)
            return moshi.adapter(runtimeClass) as JsonAdapter<T>
        }

        override fun fromJson(reader: JsonReader): T? = reader.readObject {
            //If you make changes here, then you have to make changes in toJson
            checkFieldName(reader, TYPE)
            val entityTypeId = reader.nextString()
            val runtimeClass = typeIdMappers.asSequence()
                .map { it.toClass(entityTypeId) }
                .filterNotNull()
                .firstOrNull()
                ?: throw IllegalStateException("No ${TypeIdMapper::class.simpleName} found for entity with type id $entityTypeId")
            checkFieldName(reader, PAYLOAD)
            moshi.adapter(runtimeClass.java).fromJson(reader)
        }

        private fun checkFieldName(reader: JsonReader, expectedName: String) {
            reader.checkNextFieldName("polymorphic type", expectedName)
        }
    }

    companion object {
        const val TYPE = "t"
        const val PAYLOAD = "p"
        val ANONYMOUS_CLASS_NAME_REGEX = Regex(".*\\$[0-9]+$")
    }
}
