package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.serialization.ProjectIdTypeIdMapper
import kotlin.reflect.KClass

class DummyProjectIdTypeIdMapper : ProjectIdTypeIdMapper {
    override fun toClass(typeId: String): KClass<out ProjectId>? =
        if (typeId == DummyProjectId.TYPE_ID) DummyProjectId::class else null
}
