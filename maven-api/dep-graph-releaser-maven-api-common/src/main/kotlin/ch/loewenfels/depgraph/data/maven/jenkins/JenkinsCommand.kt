package ch.loewenfels.depgraph.data.maven.jenkins

import ch.loewenfels.depgraph.data.Command

/**
 * Represents a [Command] which triggers a Jenkins job and thus has a [buildUrl] (as soon as the job is triggered).
 */
interface JenkinsCommand: Command {
    val buildUrl: String?
}
