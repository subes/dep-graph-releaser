package ch.loewenfels.depgraph.maven

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.LevelIterator
import ch.loewenfels.depgraph.data.*
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsSingleMavenReleaseCommand
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency
import ch.loewenfels.depgraph.manipulation.ReleasePlanManipulator
import ch.tutteli.kbox.appendToStringBuilder
import ch.tutteli.kbox.mapWithIndex
import java.util.logging.Logger

class JenkinsReleasePlanCreator(
    private val versionDeterminer: VersionDeterminer,
    private val options: Options
) {
    fun create(projectsToRelease: List<MavenProjectId>, analyser: Analyser): ReleasePlan {
        require(projectsToRelease.isNotEmpty()) {
            "No project given which should be released, aborting now."
        }

        projectsToRelease.forEach { projectToRelease ->
            require(analyser.getCurrentVersion(projectToRelease) != null) {
                """Can only release a project which is part of the analysis.
                |Given: ${projectToRelease.identifier}
                |Analysed projects: ${analyser.getAnalysedProjectsAsString()}
            """.trimMargin()
            }
            require(!analyser.isSubmodule(projectToRelease)) {
                """Cannot release a submodule, the given project is part of a multi-module hierarchy
                |Given: $projectsToRelease
                |Multi modules: ${analyser.getMultiModules(projectToRelease).joinToString(",")}
            """.trimMargin()
            }
        }

        val rootProject = createRootProject(analyser, projectsToRelease)
        val paramObject = createDependents(analyser, rootProject)

        val warnings = mutableListOf<String>()
        warnings.addAll(analyser.getWarnings())
        reportCyclicDependencies(paramObject, warnings)
        warnings.addAll(analyser.getErroneousPomFiles())
        warnings.addAll(analyser.getErroneousProjects())
        warnings.addAll(analyser.getUnresolvedProperties())

        val infos = mutableListOf<String>()
        reportInterModuleCyclicDependencies(paramObject, infos)

        val config = options.config.toMutableMap()
        updateConfigToProjectSpecificJenkinsUrl(paramObject, analyser, config, warnings)

        val releasePlan = ReleasePlan(
            options.publishId,
            ReleaseState.READY,
            TypeOfRun.EXPLORE,
            rootProject.id,
            paramObject.projects,
            paramObject.submodules,
            paramObject.dependents,
            warnings,
            infos,
            config
        )

        return disableProjectsAsDefinedInOptions(releasePlan)
    }

    private fun updateConfigToProjectSpecificJenkinsUrl(
        paramObject: ParamObject,
        analyser: Analyser,
        config: MutableMap<ConfigKey, String>,
        warnings: MutableList<String>
    ) {
        val currentRemoteRegex = config[ConfigKey.REMOTE_REGEX]
        val currentJobMapping = config[ConfigKey.JOB_MAPPING]
        val remoteRegex = StringBuilder(currentRemoteRegex?.trim() ?: "")
        val jobMapping = StringBuilder(currentJobMapping?.trim() ?: "")

        paramObject.projects.keys.forEach { projectId ->
            val jenkinsUrl = (projectId as? MavenProjectId)?.let { analyser.getJenkinsUrl(it) } ?: return@forEach
            if (!jenkinsUrl.contains("/job/")) {
                warnings.add(
                    "ciManagement url was invalid, cannot use it for ${ConfigKey.REMOTE_REGEX.asString()} nor for ${ConfigKey.JOB_MAPPING.asString()}, please adjust manually if necessary." +
                       "\nProject: ${projectId.identifier}\nciManagement-url: $jenkinsUrl" +
                        "\n\nWe look for /job/ in the given <url>. Please define the url in the following format: https://server.com/jenkins/job/jobName"
                )
                return@forEach
            }

            val (url, jobName) = jenkinsUrl.split("/job/")
            remoteRegex.insert(0, "\n").insert(0, url).insert(0, '#').insert(0, projectId.identifier)
            if (jobName != projectId.artifactId) {
                jobMapping.append("\n").append( projectId.identifier).append('=').append(jobName)
            }
        }
        config[ConfigKey.REMOTE_REGEX] = remoteRegex.toString()
        config[ConfigKey.JOB_MAPPING] = jobMapping.toString()

    }

    private fun createRootProject(analyser: Analyser, projectsToRelease: List<MavenProjectId>): Project {
        return if (projectsToRelease.size == 1) {
            createRootProject(analyser, projectsToRelease[0], CommandState.Ready)
        } else {
            val syntheticRoot = analyser.createSyntheticRoot(projectsToRelease)
            createRootProject(analyser, syntheticRoot, listOf())
        }
    }

    private fun createRootProject(
        analyser: Analyser,
        rootProjectId: MavenProjectId,
        commandState: CommandState
    ): Project {
        val currentVersion = analyser.getCurrentVersion(rootProjectId)
        val commands = mutableListOf(
            createJenkinsReleasePlugin(analyser, rootProjectId, currentVersion!!, commandState)
        )
        return createRootProject(analyser, rootProjectId, commands)
    }

    private fun createRootProject(analyser: Analyser, rootProjectId: MavenProjectId, commands: List<Command>): Project {
        val currentVersion = analyser.getCurrentVersion(rootProjectId)
        val relativePath = analyser.getRelativePath(rootProjectId)
        return createInitialProject(rootProjectId, false, currentVersion!!, 0, commands, relativePath)
    }

    private fun createJenkinsReleasePlugin(
        analyser: Analyser,
        projectId: MavenProjectId,
        currentVersion: String,
        state: CommandState
    ): Command {
        val nextDevVersion = versionDeterminer.nextDevVersion(currentVersion)
        return if (analyser.hasSubmodules(projectId)) {
            JenkinsMultiMavenReleasePlugin(state, nextDevVersion)
        } else {
            JenkinsSingleMavenReleaseCommand(state, nextDevVersion)
        }
    }

    private fun createInitialProject(
        projectId: MavenProjectId,
        isSubmodule: Boolean,
        currentVersion: String,
        level: Int,
        commands: List<Command>,
        relativePath: String
    ) = Project(
        projectId,
        isSubmodule,
        currentVersion,
        versionDeterminer.releaseVersion(currentVersion),
        level,
        commands,
        relativePath
    )

    private fun createDependents(analyser: Analyser, rootProject: Project): ParamObject {
        val paramObject = ParamObject(analyser, rootProject)
        while (paramObject.levelIterator.hasNext()) {
            val dependent = paramObject.levelIterator.next()
            paramObject.submodules[dependent.id] = analyser.getSubmodules(dependent.id as MavenProjectId)
            createCommandsForDependents(paramObject, dependent)
        }
        return paramObject
    }

    private fun createCommandsForDependents(paramObject: ParamObject, dependency: Project) {
        paramObject.initDependency(dependency)

        paramObject.analyser.getDependentsOf(paramObject.dependencyId).forEach { relation ->
            paramObject.relation = relation
            if (paramObject.isDependencyNotSubmoduleOfRelation()) {
                val existingDependent = paramObject.projects[relation.id]
                when {
                    existingDependent == null ->
                        initDependentInclusiveCommands(paramObject)

                    existingDependent.level < paramObject.getAnticipatedLevel() ->
                        checkForCyclicAndUpdateIfOk(paramObject, existingDependent)

                    else ->
                        updateCommandsAddDependentAddToProjectsAndUpdateMultiModuleIfNecessary(
                            paramObject,
                            existingDependent
                        )
                }
            }
        }
    }

    private fun initDependentInclusiveCommands(paramObject: ParamObject) {
        val newDependent = initDependent(paramObject)
        updateCommandsAddDependentAddToProjectsAndUpdateMultiModuleIfNecessary(paramObject, newDependent)
    }

    private fun initDependent(paramObject: ParamObject): Project {
        val relativePath = paramObject.analyser.getRelativePath(paramObject.relation.id)
        val newDependent = createInitialWaitingProject(paramObject, relativePath)
        paramObject.dependents[newDependent.id] = hashSetOf()
        paramObject.levelIterator.addToNextLevel(newDependent.id to newDependent)
        return newDependent
    }

    private fun checkForCyclicAndUpdateIfOk(paramObject: ParamObject, existingDependent: Project): Boolean {
        analyseCycles(paramObject, existingDependent)
        return if (paramObject.hasRelationNoCycleToDependency()) {
            //TODO if we have submodule with a dependent and we need to update the level of the multi module
            //then we need to update the level even in case of a cycle -> write spec
            val dependent = updateLevelIfNecessaryAndRevisitInCase(paramObject, existingDependent)
            updateCommandsAddDependentAddToProjectsAndUpdateMultiModuleIfNecessary(paramObject, dependent)
            true
        } else {
            //we ignore the relation because it would introduce a cyclic dependency which we currently do not support.
            false
        }
    }

    private fun updateLevelIfNecessaryAndRevisitInCase(paramObject: ParamObject, existingDependent: Project): Project {
        val level = determineLevel(paramObject)
        if (existingDependent.level != level) {
            val updatedDependent = Project(existingDependent, level)
            paramObject.projects[existingDependent.id] = updatedDependent
            //we need to re-visit at least this project so that we can update the levels of the dependents as well
            paramObject.levelIterator.removeIfOnSameLevelAndReAddOnNext(updatedDependent.id to updatedDependent)
            return updatedDependent
        }
        return existingDependent
    }

    /**
     * It actually adds the given [dependent] to [ParamObject.projects] or *updates* the entry if already exists
     * => not only Add as indicated in the method name.
     */
    private fun updateCommandsAddDependentAddToProjectsAndUpdateMultiModuleIfNecessary(
        paramObject: ParamObject,
        dependent: Project
    ) {
        addAndUpdateCommandsOfDependent(paramObject, dependent)
        addDependentAddToProjects(paramObject, dependent)
        updateMultiModuleIfNecessary(paramObject, dependent)
    }

    private fun addDependentAddToProjects(paramObject: ParamObject, dependent: Project) {
        addDependentToDependentsOfDependency(paramObject, dependent)
        paramObject.projects[dependent.id] = dependent
    }

    private fun updateMultiModuleIfNecessary(paramObject: ParamObject, dependent: Project) {
        if (dependent.isSubmodule) {
            val multiModules = paramObject.analyser.getMultiModules(paramObject.relation.id)
            val topMultiModuleId = multiModules.last()
            val topMultiModule = paramObject.projects[topMultiModuleId]
            if (topMultiModule == null && isNotDependentOfDependency(paramObject, topMultiModuleId)) {
                // It might be that the multi module is not part of the dependents graph, in such a case we have to add
                // it to the analysis nonetheless, because we have a release dependency to track.
                val tmpRelation = paramObject.relation
                paramObject.relation =
                    Relation(topMultiModuleId, paramObject.analyser.getCurrentVersion(topMultiModuleId)!!, false)
                val newDependent = initDependent(paramObject)
                addDependentAddToProjects(paramObject, newDependent)
                paramObject.relation = tmpRelation
            } else if (topMultiModule != null && topMultiModule.level < dependent.level) {
                val tmpRelation = paramObject.relation
                paramObject.relation = Relation(topMultiModuleId, topMultiModule.currentVersion, false)
                val wouldHaveCycles = !checkForCyclicAndUpdateIfOk(paramObject, topMultiModule)
                paramObject.relation = tmpRelation
                if (wouldHaveCycles) {
                    paramObject.initDependency(topMultiModule)
                    //updating the multi module would introduce a cycle, thus we need to adjust the submodule instead
                    updateLevelIfNecessaryAndRevisitInCase(paramObject, dependent)
                }
            }
        }
    }

    private fun isNotDependentOfDependency(
        paramObject: ParamObject,
        topMultiModuleId: MavenProjectId
    ) = paramObject.analyser.getDependentsOf(paramObject.dependencyId).none { it.id == topMultiModuleId }

    private fun addAndUpdateCommandsOfDependent(paramObject: ParamObject, dependent: Project) {
        // if the version is not self managed then it suffices that we have a dependency to the project
        // which manages this version for us, we do not need to do anything here.
        if (paramObject.isRelationDependencyVersionNotSelfManaged()) return

        // we do not have to update the commands because we already have the dependency (only the level changed)
        if (paramObject.isRelationAlreadyDependentOfDependencyAndWaitsInCommand()) return

        // if the dependency is the synthetic root, then we do not need an update command
        if (paramObject.isDependencySyntheticRoot()) return


        val dependencyId = paramObject.dependencyId
        val list = dependent.commands as MutableList
        if (paramObject.isRelationNotSubmodule()) {
            addDependencyToReleaseCommands(list, dependencyId)
        }

        // submodule -> multi module or submodule -> submodule relation is updated by M2 Release Plugin
        // if relation is a submodule and dependency as well and they share a common multi module, then we do not
        // need to update anything because the submodules will have the same version after releasing (or the
        // release breaks in which case we cannot do much about it)
        if (paramObject.isRelationNotInSameMultiModuleCircleAsDependency()) {
            val state = CommandState.Waiting(hashSetOf(dependencyId))
            list.add(0, JenkinsUpdateDependency(state, dependencyId))
        }
    }

    private fun addDependencyToReleaseCommands(list: List<Command>, dependencyId: MavenProjectId) {
        list.filter { it is ReleaseCommand }.forEach { command ->
            val state = command.state
            if (state is CommandState.Waiting) {
                (state.dependencies as MutableSet).add(dependencyId)
            } else if (state !== CommandState.Disabled) {
                throw IllegalStateException("only state Waiting and Disabled expected, found: $state")
            }
        }
    }

    private fun addDependentToDependentsOfDependency(paramObject: ParamObject, dependent: Project) {
        paramObject.getDependentsOfDependency().add(dependent.id)
    }

    private fun createInitialWaitingProject(paramObject: ParamObject, relativePath: String): Project {
        val relation = paramObject.relation
        val isNotSubmodule = paramObject.isRelationNotSubmodule()
        val commands = if (isNotSubmodule) {
            mutableListOf(
                createJenkinsReleasePlugin(
                    paramObject.analyser,
                    relation.id,
                    relation.currentVersion,
                    CommandState.Waiting(mutableSetOf(paramObject.dependencyId))
                )
            )
        } else {
            mutableListOf()
        }
        val level = determineLevel(paramObject)
        return createInitialProject(
            relation.id,
            !isNotSubmodule,
            relation.currentVersion,
            level,
            commands,
            relativePath
        )
    }

    private fun determineLevel(paramObject: ParamObject): Int {
        return if (paramObject.isRelationNotInSameMultiModuleCircleAsDependency()) {
            paramObject.getAnticipatedLevel()
        } else {
            paramObject.dependency.level
        }
    }

    private fun analyseCycles(paramObject: ParamObject, existingDependent: Project) {
        val dependencyId = paramObject.dependencyId
        val visitedProjects = hashSetOf<ProjectId>()
        val projectsToVisit = linkedMapOf(existingDependent.id to mutableListOf<ProjectId>(dependencyId))
        while (projectsToVisit.isNotEmpty()) {
            val (dependentId, dependentBranch) = projectsToVisit.iterator().next()
            projectsToVisit.remove(dependentId)
            visitedProjects.add(dependentId)
            paramObject.getDependents(dependentId).forEach {
                if (it == dependencyId) {
                    if (paramObject.isRelationNotInSameMultiModuleCircleAsDependency()) {
                        val map = paramObject.cyclicDependents.getOrPut(existingDependent.id) { linkedMapOf() }
                        map[dependencyId] = dependentBranch
                        return
                    } else {
                        val map = paramObject.interModuleCyclicDependents.getOrPut(existingDependent.id) {
                            linkedMapOf()
                        }
                        map[dependencyId] = dependentBranch
                        // we cannot stop here because cyclic inter module dependencies can be dealt with
                        // but not other cyclic dependencies (at least not yet)
                    }
                } else if (!visitedProjects.contains(it)) {
                    projectsToVisit[it] = ArrayList<ProjectId>(dependentBranch.size + 1).apply {
                        addAll(dependentBranch)
                        add(paramObject.getProject(it).id)
                    }
                }
            }
        }
    }

    private fun reportCyclicDependencies(paramObject: ParamObject, warnings: MutableList<String>) {
        paramObject.cyclicDependents.mapTo(warnings) { (projectId, dependentEntry) ->
            val sb = StringBuilder()
            sb.append("Project ").append(projectId.identifier).append(" has one or more cyclic dependencies. ")
                .append("The corresponding relation (first ->) was ignored, you need to address this circumstance manually:\n")
            appendCyclicDependents(sb, projectId, dependentEntry.values)
            sb.toString()
        }
    }

    private fun reportInterModuleCyclicDependencies(paramObject: ParamObject, infos: MutableList<String>) {
        paramObject.interModuleCyclicDependents.mapTo(infos) { (projectId, dependentEntry) ->
            val sb = StringBuilder()
            sb.append("Project ").append(projectId.identifier)
                .append(" has one or more inter module cyclic dependencies. ")
                .append("Might be handled by the Release Command depending what relation they have and depending on where they are defined. Yet, it might also fail:\n")
            appendCyclicDependents(sb, projectId, dependentEntry.values)
            sb.toString()
        }
    }

    private fun appendCyclicDependents(
        sb: StringBuilder,
        dependency: ProjectId,
        dependencies: Collection<List<ProjectId>>
    ) {
        sb.append("-> ")
        dependencies.appendToStringBuilder(sb, "\n-> ") { list ->
            list.appendToStringBuilder(sb, " -> ") { it ->
                sb.append(it.identifier)
            }
            sb.append(" -> ").append(dependency.identifier)
        }
    }


    private fun disableProjectsAsDefinedInOptions(releasePlan: ReleasePlan): ReleasePlan {
        var transformedReleasePlan = releasePlan
        val deactivatedProjects = hashSetOf<String>()
        releasePlan.getProjects().forEach { project ->
            val projectId = project.id
            if (options.disableReleaseFor.matches(projectId.identifier)) {
                deactivatedProjects.add(projectId.identifier)
                project.commands.asSequence()
                    .mapWithIndex()
                    .filter { (_, command) -> command is ReleaseCommand && command.state !== CommandState.Disabled }
                    .forEach inner@{ (index, _) ->
                        val manipulator = ReleasePlanManipulator(transformedReleasePlan)
                        transformedReleasePlan = manipulator.disableCommand(projectId, index)
                        // we only need to disable the first release-command we find
                        // others will be disabled automatically
                        return@inner
                    }
            }
        }
        if (deactivatedProjects.isNotEmpty()) {
            logger.info(
                "Deactivated release commands of the following projects " +
                    "due to the specified disableReleaseFor regex." +
                    "\nRegex: ${options.disableReleaseFor.pattern}" +
                    "\nProjects:\n" + deactivatedProjects.asSequence().sorted().joinToString("\n")
            )
        }
        return transformedReleasePlan
    }

    companion object {
        private val logger = Logger.getLogger(JenkinsReleasePlanCreator::class.qualifiedName)
    }

    private class ParamObject(
        val analyser: Analyser,
        rootProject: Project
    ) {
        val projects = hashMapOf(rootProject.id to rootProject)
        val submodules = hashMapOf<ProjectId, Set<ProjectId>>()
        val dependents = hashMapOf(rootProject.id to hashSetOf<ProjectId>())
        val cyclicDependents = hashMapOf<ProjectId, LinkedHashMap<ProjectId, MutableList<ProjectId>>>()
        val interModuleCyclicDependents = hashMapOf<ProjectId, LinkedHashMap<ProjectId, MutableList<ProjectId>>>()
        val levelIterator = LevelIterator(rootProject.id to rootProject)

        private lateinit var _dependency: Project
        var dependency: Project
            get() = _dependency
            private set(value) {
                _dependency = value
            }
        private lateinit var _dependencyId: MavenProjectId
        var dependencyId: MavenProjectId
            get() = _dependencyId
            private set(value) {
                _dependencyId = value
            }
        lateinit var relation: Relation<MavenProjectId>

        fun initDependency(dependency: Project) {
            this.dependency = dependency
            this.dependencyId = dependency.id as MavenProjectId
        }

        /**
         * Returns [dependency.level][Project.level] + 1 which is only the anticipated level because it depends on
         * whether [relation] is a submodule of [dependency] etc.
         */
        fun getAnticipatedLevel() = dependency.level + 1

        /**
         * Returns true if the [relation] is not a (nested) submodule of [dependencyId] and if they are not a submodule
         * of a same common (super) multi module.
         *
         * Or in other words returns `true` if they are not in the same multi module circle; otherwise false.
         */
        fun isRelationNotInSameMultiModuleCircleAsDependency(): Boolean {
            return isRelationNotSubmoduleOfDependency() &&
                isDependencyNotSubmoduleOfRelation() &&
                relationAndDependencyHaveNotCommonMultiModule()
        }

        fun isRelationNotSubmodule() = !analyser.isSubmodule(relation.id)
        fun isRelationNotSubmoduleOfDependency() = !analyser.isSubmoduleOf(relation.id, dependencyId)
        fun isDependencyNotSubmoduleOfRelation() = !analyser.isSubmoduleOf(dependencyId, relation.id)
        fun isDependencySyntheticRoot() = analyser.isSyntheticRoot(dependencyId)

        private fun relationAndDependencyHaveNotCommonMultiModule(): Boolean {
            val multiModulesOfDependency = analyser.getMultiModules(dependencyId)
            return multiModulesOfDependency.isEmpty() ||
                !analyser.getMultiModules(relation.id).asSequence().any {
                    multiModulesOfDependency.contains(it)
                }
        }

        fun isRelationDependencyVersionNotSelfManaged() = !relation.isDependencyVersionSelfManaged
        fun isRelationAlreadyDependentOfDependencyAndWaitsInCommand(): Boolean {
            if (getDependentsOfDependency().contains(relation.id)) {
                return getProject(relation.id).commands.any {
                    val state = it.state
                    state is CommandState.Waiting && state.dependencies.contains(dependencyId)
                }
            }
            return false
        }

        fun hasRelationNoCycleToDependency(): Boolean {
            return when {
                cyclicDependents[relation.id]?.containsKey(dependencyId) == true -> false
                interModuleCyclicDependents[relation.id]?.containsKey(dependencyId) == true -> false
                else -> true
            }
        }

        fun getProject(projectId: ProjectId) =
            projects[projectId] ?: throw IllegalStateException("$projectId was not found in projects")

        fun getDependents(projectId: ProjectId) =
            dependents[projectId] ?: throw IllegalStateException("$projectId was not found in dependents")

        fun getDependentsOfDependency() = getDependents(dependencyId)
    }


    /**
     * Options for the [JenkinsReleasePlanCreator].
     */
    data class Options(
        val publishId: String,
        val disableReleaseFor: Regex,
        val config: Map<ConfigKey, String>
    ) {
        constructor(publishId: String, disableReleaseFor: String) : this(publishId, Regex(disableReleaseFor), mapOf())
    }
}
