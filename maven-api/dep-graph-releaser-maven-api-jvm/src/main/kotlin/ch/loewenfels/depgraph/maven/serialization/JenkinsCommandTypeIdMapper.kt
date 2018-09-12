package ch.loewenfels.depgraph.maven.serialization

import ch.loewenfels.depgraph.data.Command
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsSingleMavenReleaseCommand
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency
import ch.loewenfels.depgraph.data.serialization.CommandTypeIdMapper
import kotlin.reflect.KClass

class JenkinsCommandTypeIdMapper : CommandTypeIdMapper {

    override fun toClass(typeId: String): KClass<out Command>? =
        when (typeId) {
            JenkinsUpdateDependency.TYPE_ID -> JenkinsUpdateDependency::class
            JenkinsMultiMavenReleasePlugin.TYPE_ID -> JenkinsMultiMavenReleasePlugin::class
            JenkinsSingleMavenReleaseCommand.TYPE_ID -> JenkinsSingleMavenReleaseCommand::class
            else -> null
        }
}
