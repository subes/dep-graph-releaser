package ch.loewenfels.depgraph.data

fun Any.getToStringRepresentation(): String {
    val representation = this.toString()
    return if (representation == "[object Object]") this::class.simpleName!! else representation
}
