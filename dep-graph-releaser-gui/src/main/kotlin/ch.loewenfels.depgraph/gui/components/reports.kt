package ch.loewenfels.depgraph.gui.components

import ch.loewenfels.depgraph.data.Command
import ch.loewenfels.depgraph.data.Project
import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsNextDevReleaseCommand
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency
import ch.loewenfels.depgraph.gui.components.Messages.Companion.showThrowableAndThrow


internal fun generateChangelog(
    releasePlan: ReleasePlan,
    appendProjectToCsv: (StringBuilder, Project, String, String) -> Unit
): String {
    val sb = StringBuilder("Project;Release Version;Next Dev Version;Other Commands\n")
    releasePlan.iterator().asSequence()
        .filter { !it.isSubmodule }
        .filter { it.id.identifier != SYNTHETIC_ROOT }
        .forEach { project ->
            val nextDevVersion = project.commands.asSequence()
            .filterIsInstance<JenkinsNextDevReleaseCommand>()
            .first().nextDevVersion
        appendProjectToCsv(sb, project, project.releaseVersion, nextDevVersion)
    }
    return sb.toString()
}

private const val SYNTHETIC_ROOT = "ch.loewenfels:synthetic-root"

internal fun appendProjectToCsvExcel(
    sb: StringBuilder,
    project: Project,
    releaseVersion: String,
    nextDevVersion: String
): Unit = appendProjectToCsv(sb, project, releaseVersion, nextDevVersion, ::appendProjectToCsvWithoutWrapper) {
    //necessary, it is likely that excel parses versions as dates, e.g. 1.5.0 become 1st of May 2000
    "=\"$it\""
}

internal fun appendProjectToCsvWithoutWrapper(
    sb: StringBuilder,
    project: Project,
    releaseVersion: String,
    nextDevVersion: String
): Unit = appendProjectToCsv(sb, project, releaseVersion, nextDevVersion, ::appendProjectToCsvWithoutWrapper) { it }

private inline fun appendProjectToCsv(
    sb: StringBuilder,
    project: Project,
    releaseVersion: String,
    nextDevVersion: String,
    appendProjectToCsv: (StringBuilder, Project, String, String) -> Unit,
    wrapper: (String) -> String
) {
    sb.append(project.id.identifierForCsv).append(';')
        .append(wrapper(releaseVersion)).append(';')
        .append(wrapper(nextDevVersion)).append(';')
    project.commands.asSequence()
        .filter { it !is JenkinsNextDevReleaseCommand }
        .forEach {
            appendCommandToCsv(sb, it)
        }
    sb.append('\n')
    appendSubmodulesToCsv(sb, project, project.releaseVersion, nextDevVersion, appendProjectToCsv)
}

private inline fun appendSubmodulesToCsv(
    sb: StringBuilder,
    project: Project,
    releaseVersion: String,
    nextDevVersion: String,
    appendProjectToCsv: (StringBuilder, Project, String, String) -> Unit
) {
    val submodules = Menu.modifiableState.releasePlan.getSubmodules(project.id)
    submodules.forEach {
        appendProjectToCsv(sb, Menu.modifiableState.releasePlan.getProject(it), releaseVersion, nextDevVersion)
    }
}


private val ProjectId.identifierForCsv get() = (this as? MavenProjectId)?.artifactId ?: identifier

private fun appendCommandToCsv(sb: StringBuilder, command: Command) {
    sb.append(command::class.simpleName)
    when (command) {
        is JenkinsUpdateDependency -> sb.append(" ${command.projectId.identifierForCsv}")
        else -> showThrowableAndThrow(
            IllegalStateException("Unknown command found, cannot transform it to CSV.\n$command")
        )
    }
    sb.append(';')
}
