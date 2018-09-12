package ch.loewenfels.depgraph.maven.serialization

import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.data.serialization.ProjectIdTypeIdMapper
import kotlin.reflect.KClass

class MavenIdTypeIdMapper : ProjectIdTypeIdMapper {

    override fun toClass(typeId: String): KClass<out ProjectId>? =
        if (typeId == MavenProjectId.TYPE_ID) MavenProjectId::class else null
}
