package ch.loewenfels.depgraph.data.maven.jenkins

import ch.loewenfels.depgraph.data.CommandState

data class JenkinsMultiMavenReleasePlugin(
    override val state: CommandState,
    override val nextDevVersion: String,
    override val buildUrl: String? = null
) : JenkinsNextDevReleaseCommand {
    override fun asNewState(newState: CommandState) = JenkinsMultiMavenReleasePlugin(newState, nextDevVersion, buildUrl)
}
