package ch.loewenfels.depgraph.data

import kotlin.reflect.KClass

val KClass<*>.simpleNameNonNull get() = simpleName ?: "<simpleName absent>"
