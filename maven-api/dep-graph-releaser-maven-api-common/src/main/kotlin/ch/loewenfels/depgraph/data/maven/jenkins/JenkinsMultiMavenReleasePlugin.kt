package ch.loewenfels.depgraph.data.maven.jenkins

import ch.loewenfels.depgraph.data.CommandState

data class JenkinsMultiMavenReleasePlugin(
    override val state: CommandState,
    override val nextDevVersion: String,
    override val buildUrl: String? = null
) : JenkinsNextDevReleaseCommand {

    override val typeId = TYPE_ID
    override fun asNewState(newState: CommandState) = JenkinsMultiMavenReleasePlugin(newState, nextDevVersion, buildUrl)

    companion object {
        const val TYPE_ID = "JenkinsMultiMavenRelease"
    }
}
