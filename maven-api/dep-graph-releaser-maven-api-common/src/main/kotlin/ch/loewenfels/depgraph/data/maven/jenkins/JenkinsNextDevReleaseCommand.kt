package ch.loewenfels.depgraph.data.maven.jenkins

import ch.loewenfels.depgraph.data.ReleaseCommand

/**
 * A [ReleaseCommand] which also specifies the [nextDevVersion].
 */
interface JenkinsNextDevReleaseCommand: ReleaseCommand, JenkinsCommand {
    val nextDevVersion: String
}
