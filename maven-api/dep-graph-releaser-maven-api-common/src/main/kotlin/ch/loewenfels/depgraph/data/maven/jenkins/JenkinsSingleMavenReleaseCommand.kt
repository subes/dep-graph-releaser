package ch.loewenfels.depgraph.data.maven.jenkins

import ch.loewenfels.depgraph.data.CommandState
import ch.loewenfels.depgraph.data.Project

/**
 * Represents the command to execute a release for a Jenkins job.
 *
 * It carries the [nextDevVersion], release version is contained in the [Project].
 */
data class JenkinsSingleMavenReleaseCommand(
    override val state: CommandState,
    override val nextDevVersion: String,
    override val buildUrl: String? = null
) : JenkinsNextDevReleaseCommand {

    override val typeId = TYPE_ID
    override fun asNewState(newState: CommandState) = JenkinsSingleMavenReleaseCommand(newState, nextDevVersion, buildUrl)

    companion object {
        const val TYPE_ID = "JenkinsSingleMavenRelease"
    }
}
