package ch.loewenfels.depgraph.data.serialization

/**
 * A polymorphic type (usually an interface) which is serializable where its name can be represented with [typeId].
 */
interface PolymorphSerializable {
    /**
     * Identifies this type (unique per type hierarchy) used in serialization.
     */
    val typeId: String
}
