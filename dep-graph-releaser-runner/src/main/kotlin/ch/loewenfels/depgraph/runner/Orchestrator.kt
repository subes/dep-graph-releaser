package ch.loewenfels.depgraph.runner

import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.generateEclipsePsf
import ch.loewenfels.depgraph.generateGitCloneCommands
import ch.loewenfels.depgraph.generateListOfDependentsWithoutSubmoduleAndExcluded
import ch.loewenfels.depgraph.manipulation.RegexBasedVersionUpdater
import ch.loewenfels.depgraph.maven.Analyser
import ch.loewenfels.depgraph.maven.JenkinsReleasePlanCreator
import ch.loewenfels.depgraph.maven.VersionDeterminer
import ch.loewenfels.depgraph.serialization.Serializer
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.niok.exists
import ch.tutteli.niok.newOutputStream
import ch.tutteli.niok.writeText
import java.nio.file.Path
import java.util.logging.Logger

object Orchestrator {
    private const val NOTICE_INCL_DEPENDENTS_WITHOUT_SUBMODULES =
        "(incl. dependents of dependent projects etc. but without submodules)"

    private val logger = Logger.getLogger(Orchestrator::class.qualifiedName)
    private val serializer = Serializer()


    fun analyseAndCreateJson(
        directoryToAnalyse: Path,
        outputFile: Path,
        projectsToRelease: List<MavenProjectId>,
        releasePlanCreatorOptions: JenkinsReleasePlanCreator.Options
    ) {
        val releasePlan = createReleasePlan(directoryToAnalyse, projectsToRelease, releasePlanCreatorOptions)

        logger.info("Going to serialize the release plan to a json file.")
        logIfFileExists(outputFile, "resulting json file")
        val json = serializer.serialize(releasePlan)
        outputFile.writeText(json)
        logger.info { "Created json file at: ${outputFile.absolutePathAsString}" }
    }


    private fun createReleasePlan(
        directoryToAnalyse: Path,
        rootProjects: List<MavenProjectId>,
        releasePlanCreatorOptions: JenkinsReleasePlanCreator.Options
    ): ReleasePlan {
        logger.info { "Going to analyse: ${directoryToAnalyse.absolutePathAsString}" }
        val analyser = Analyser(directoryToAnalyse, Analyser.Options())
        logger.info { "Analysed ${analyser.getNumberOfProjects()} projects." }

        logger.info("Going to create the release plan with ${rootProjects.joinToString { it.identifier }} as root.")
        val releasePlaner = JenkinsReleasePlanCreator(VersionDeterminer(), releasePlanCreatorOptions)
        val releasePlan = releasePlaner.create(rootProjects, analyser)
        logger.info("Release plan created.")
        return releasePlan
    }


    fun printReleasableProjects(directoryToAnalyse: Path) {
        logger.info { "Going to analyse: ${directoryToAnalyse.absolutePathAsString}" }
        val analyser = Analyser(directoryToAnalyse, Analyser.Options(false))
        logger.info { "Analysed ${analyser.getNumberOfProjects()} projects." }
        val list = analyser.getAllReleasableProjects().asSequence().sortedBy { it.artifactId }.joinToString("\n") {
            it.artifactId.padEnd(30, " -") + " groupId: " + it.groupId
        }
        println(list)
    }

    private fun CharSequence.padEnd(length: Int, padString: String): String {
        if (length <= this.length)
            return this.subSequence(0, this.length).toString()

        val sb = StringBuilder(length)
        sb.append(this)
        for (i in 1..(length - this.length) step padString.length)
            sb.append(padString)
        return sb.toString()
    }

    fun copyResources(outputDir: Path) {
        logger.info("Going to copy resource files")
        copyResourceToFile(outputDir, "kotlin.js")
        copyResourceToFile(outputDir, "kotlin.js.map")
        copyResourceToFile(outputDir, "kotlinx-html-js.js")
        copyResourceToFile(outputDir, "kotlinx-html-js.js.map")
        copyResourceToFile(outputDir, "kbox-js.js")
        copyResourceToFile(outputDir, "kbox-js.js.map")
        copyResourceToFile(outputDir, "dep-graph-releaser-api-js.js")
        copyResourceToFile(outputDir, "dep-graph-releaser-api-js.js.map")
        copyResourceToFile(outputDir, "dep-graph-releaser-maven-api-js.js")
        copyResourceToFile(outputDir, "dep-graph-releaser-maven-api-js.js.map")
        copyResourceToFile(outputDir, "dep-graph-releaser-gui.js")
        copyResourceToFile(outputDir, "dep-graph-releaser-gui.js.map")
        copyResourceToFile(outputDir, "style.css")
        copyResourceToFile(outputDir, "index.html")
        copyResourceToFile(outputDir, "material-icons.css")
        copyResourceToFile(outputDir, "MaterialIcons-Regular.ttf")
        copyResourceToFile(outputDir, "MaterialIcons-Regular.woff")
        copyResourceToFile(outputDir, "MaterialIcons-Regular.woff2")
        logger.info("copied resources files")
        logger.info("Everything done :)")
    }

    private fun copyResourceToFile(outputDir: Path, input: String) {
        val outputFile = outputDir.resolve(input)
        logIfFileExists(outputFile, "file $input")
        val stream = this::class.java.getResourceAsStream("/$input")
        check(stream != null) {
            "Could not find /$input, please verify it is part of the classpath"
        }
        stream.use { inputStream ->
            outputFile.newOutputStream().use { fileOut ->
                inputStream.copyTo(fileOut)
            }
        }
        logger.fine { "Created ${outputFile.absolutePathAsString}" }
    }

    private fun logIfFileExists(file: Path, fileDescription: String) {
        if (file.exists) {
            logger.info("The $fileDescription already exists, going to overwrite it.")
        }
    }

    fun updateDependency(pom: Path, groupId: String, artifactId: String, newVersion: String) {
        RegexBasedVersionUpdater.updateDependency(pom, groupId, artifactId, newVersion)
        logger.info("updated dependency $groupId:$artifactId to new version $newVersion")
    }

    fun printDependents(
        directoryToAnalyse: Path,
        projectToAnalyse: MavenProjectId,
        excludeRegex: Regex
    ) {
        val releasePlan = createReleasePlanForAnalysisOnly(directoryToAnalyse, listOf(projectToAnalyse))
        val list = generateListOfDependentsWithoutSubmoduleAndExcluded(releasePlan, excludeRegex)

        println(
            "Following the dependent projects $NOTICE_INCL_DEPENDENTS_WITHOUT_SUBMODULES of ${projectToAnalyse.identifier}:" +
                "\n$list"
        )
    }

    fun printGitCloneForDependents(
        directoryToAnalyse: Path,
        projectToAnalyse: MavenProjectId,
        excludeRegex: Regex,
        transformerRegex: Regex,
        transformerReplacement: String
    ) {
        val releasePlan = createReleasePlanForAnalysisOnly(directoryToAnalyse, listOf(projectToAnalyse))
        val gitCloneCommands = generateGitCloneCommands(
            releasePlan, excludeRegex, transformerRegex, transformerReplacement
        )
        println(
            "Following the git clone commands for the dependent projects $NOTICE_INCL_DEPENDENTS_WITHOUT_SUBMODULES of ${projectToAnalyse.identifier}:" +
                "\n$gitCloneCommands"
        )
    }

    fun createPsfFileForDependents(
        directoryToAnalyse: Path,
        projectToAnalyse: MavenProjectId,
        excludeRegex: Regex,
        transformerRegex: Regex,
        transformerReplacement: String,
        outputFile: Path
    ) {
        val releasePlan = createReleasePlanForAnalysisOnly(directoryToAnalyse, listOf(projectToAnalyse))
        logger.info("Going to create the psf file.")
        val psfContent = generateEclipsePsf(releasePlan, excludeRegex, transformerRegex, transformerReplacement)
        outputFile.writeText(psfContent)
        logger.info { "Created psf file at: ${outputFile.absolutePathAsString}" }
    }

    private fun createReleasePlanForAnalysisOnly(
        directoryToAnalyse: Path,
        projectToAnalyse: List<MavenProjectId>
    ) = createReleasePlan(directoryToAnalyse, projectToAnalyse, JenkinsReleasePlanCreator.Options("list", "^$"))
}
