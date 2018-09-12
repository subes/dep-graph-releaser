package ch.loewenfels.depgraph.data.serialization

import ch.loewenfels.depgraph.data.ProjectId
import kotlin.reflect.KClass

/**
 * Marker interface for mappers which map [ProjectId.typeId] to the corresponding [KClass].
 */
interface ProjectIdTypeIdMapper: TypeIdMapper<ProjectId>
