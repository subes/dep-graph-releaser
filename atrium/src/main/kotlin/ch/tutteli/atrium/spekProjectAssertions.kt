package ch.tutteli.atrium

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.Project
import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin
import ch.loewenfels.depgraph.data.maven.jenkins.JenkinsSingleMavenReleaseCommand
import ch.tutteli.atrium.api.cc.en_GB.*
import org.spekframework.spek2.style.specification.Suite

private const val EXAMPLE = "com.example"
private const val DIRECT_DEPENDENT = "direct dependent"
private const val INDIRECT_DEPENDENT = "indirect dependent"

val syntheticRoot =
    IdAndVersions(MavenProjectId("ch.loewenfels", "synthetic-root"), "0.0.0-SNAPSHOT", "0.0.0", "0.1.0-SNAPSHOT")
val singleProjectIdAndVersions =
    IdAndVersions(MavenProjectId(EXAMPLE, "example"), "1.0-SNAPSHOT", "1.0", "2.0-SNAPSHOT")
val exampleA = IdAndVersions(MavenProjectId(EXAMPLE, "a"), "1.1.1-SNAPSHOT", "1.1.1", "1.1.2-SNAPSHOT")
val exampleB = IdAndVersions(MavenProjectId(EXAMPLE, "b"), "1.0.1-SNAPSHOT", "1.0.1", "1.0.2-SNAPSHOT")
val exampleC = IdAndVersions(MavenProjectId(EXAMPLE, "c"), "3.0.0-SNAPSHOT", "3.0.0", "3.1.0-SNAPSHOT")
val exampleD = IdAndVersions(MavenProjectId(EXAMPLE, "d"), "4.1-SNAPSHOT", "4.1", "4.2-SNAPSHOT")
val exampleE = IdAndVersions(MavenProjectId(EXAMPLE, "e"), "5.1.3-SNAPSHOT", "5.1.3", "5.1.4-SNAPSHOT")
val exampleDeps = IdAndVersions(MavenProjectId(EXAMPLE, "deps"), "9-SNAPSHOT", "9", "10-SNAPSHOT")


fun Suite.assertSingleProject(releasePlan: ReleasePlan, projectToRelease: IdAndVersions) {
    assertRootProjectOnlyReleaseCommand(releasePlan, projectToRelease)

    assertHasNoDependentsAndIsOnLevel(releasePlan, "root", projectToRelease, 0)
    assertReleasePlanHasNumOfProjectsAndDependents(releasePlan, 1)
    assertReleasePlanHasNoWarningsAndNoInfos(releasePlan)
    it("ReleasePlan.iterator() returns only the root Project projects in the expected order") {
        assert(releasePlan).iteratorReturnsRootAndStrictly()
    }
}

fun Suite.assertProjectAWithDependentBWithDependentC(
    releasePlan: ReleasePlan,
    projectB: IdAndVersions = exampleB
) {
    assertRootProjectWithDependents(releasePlan, exampleA, projectB)
    assertHasRelativePath(releasePlan, "root", exampleA, "./")

    assertOneDirectDependent(releasePlan, DIRECT_DEPENDENT, projectB, exampleC)
    assertHasRelativePath(releasePlan, DIRECT_DEPENDENT, projectB, "./")

    assertOneUpdateAndOneReleaseCommand(releasePlan, INDIRECT_DEPENDENT, exampleC, exampleB)
    assertHasNoDependentsAndIsOnLevel(releasePlan, INDIRECT_DEPENDENT, exampleC, 2)
    assertHasRelativePath(releasePlan, INDIRECT_DEPENDENT, exampleC, "./")

    assertReleasePlanHasNumOfProjectsAndDependents(releasePlan, 3)
}

fun Suite.assertHasRelativePath(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    relativePath: String
) {
    it("$name has relative path $relativePath") {
        assert(releasePlan.getProject(project.id).relativePath).toBe(relativePath)
    }
}

fun Suite.assertHasConfig(
    releasePlan: ReleasePlan,
    configKey: ConfigKey,
    expected: String
) {
    it("has config for key $configKey which is $expected") {
        assert(releasePlan.getConfig(configKey)).toBe(expected)
    }
}

fun Suite.assertMultiModuleAWithSubmoduleBWithDependentC(
    releasePlan: ReleasePlan,
    projectB: IdAndVersions
) {
    assertRootProjectMultiReleaseCommandWithSubmodulesAndSameDependents(releasePlan, exampleA, projectB)

    assertHasNoCommands(releasePlan, "submodule", projectB)
    assertHasOneDependentAndIsOnLevel(releasePlan, "submodule", projectB, exampleC, 0)

    assertOneUpdateAndOneReleaseCommand(releasePlan, INDIRECT_DEPENDENT, exampleC, projectB)
    assertHasNoDependentsAndIsOnLevel(releasePlan, INDIRECT_DEPENDENT, exampleC, 1)

    assertReleasePlanHasNumOfProjectsAndDependents(releasePlan, 3)
    assertReleasePlanHasNoWarningsAndNoInfos(releasePlan)
    assertReleasePlanIteratorReturnsRootAndStrictly(releasePlan, exampleB, exampleC)
}

fun Suite.assertProjectAWithDependentB(releasePlan: ReleasePlan) {
    assertRootProjectWithDependents(releasePlan, exampleA, exampleB)

    assertOneUpdateAndOneReleaseCommand(releasePlan, DIRECT_DEPENDENT, exampleB, exampleA)
    assertHasNoDependentsAndIsOnLevel(releasePlan, DIRECT_DEPENDENT, exampleB, 1)

    assertReleasePlanHasNumOfProjectsAndDependents(releasePlan, 2)
}

fun Suite.assertRootProjectWithDependents(
    releasePlan: ReleasePlan,
    rootProjectIdAndVersions: IdAndVersions,
    dependentIdAndVersions: IdAndVersions,
    vararg otherDependentIdAndVersions: IdAndVersions
) {
    assertRootProjectOnlyReleaseCommand(releasePlan, rootProjectIdAndVersions)

    assertRootProjectHasDependents(
        releasePlan,
        rootProjectIdAndVersions,
        dependentIdAndVersions,
        *otherDependentIdAndVersions
    )
}

fun Suite.assertRootProjectHasDependents(
    releasePlan: ReleasePlan,
    rootProjectIdAndVersions: IdAndVersions,
    dependentIdAndVersions: IdAndVersions,
    vararg otherDependentIdAndVersions: IdAndVersions
) {
    assertHasDependents(
        releasePlan,
        "root",
        rootProjectIdAndVersions,
        dependentIdAndVersions,
        *otherDependentIdAndVersions
    )
}

fun Suite.assertRootProjectMultiReleaseCommandWithSubmodulesAndSameDependents(
    releasePlan: ReleasePlan,
    rootProjectIdAndVersions: IdAndVersions,
    submodule: IdAndVersions,
    vararg otherSubmodules: IdAndVersions
) {
    assertRootProjectMultiReleaseCommand(releasePlan, rootProjectIdAndVersions)
    assertRootProjectHasSubmodules(releasePlan, rootProjectIdAndVersions, submodule, *otherSubmodules)
    assertRootProjectHasDependents(releasePlan, rootProjectIdAndVersions, submodule, *otherSubmodules)
}

fun Suite.assertRootProjectHasSubmodules(
    releasePlan: ReleasePlan,
    project: IdAndVersions,
    submodule: IdAndVersions,
    vararg otherSubmodules: IdAndVersions
) = assertHasSubmodules(releasePlan, "root", project, submodule, *otherSubmodules)

fun Suite.assertRootProjectMultiReleaseCommand(
    releasePlan: ReleasePlan,
    rootProjectIdAndVersions: IdAndVersions
) {
    val rootProject = assertRootProject(releasePlan, rootProjectIdAndVersions)
    it("root project contains just the ${JenkinsMultiMavenReleasePlugin::class.simpleName} command") {
        assert(rootProject) {
            property(subject::commands).containsExactly {
                isA<JenkinsMultiMavenReleasePlugin> {}
            }
        }
    }
    it("the command is in state Ready with ${JenkinsSingleMavenReleaseCommand::nextDevVersion.name} = ${rootProjectIdAndVersions.nextDevVersion}\"") {
        assert(rootProject.commands[0]).isA<JenkinsMultiMavenReleasePlugin> {
            isStateReady()
            property(subject::nextDevVersion).toBe(rootProjectIdAndVersions.nextDevVersion)
        }
    }
}

fun Suite.assertRootProjectOnlyReleaseCommand(
    releasePlan: ReleasePlan,
    rootProjectIdAndVersions: IdAndVersions
) {
    val rootProject = assertRootProject(releasePlan, rootProjectIdAndVersions)
    it("root project contains just the ${JenkinsSingleMavenReleaseCommand::class.simpleName} command, which is Ready with ${JenkinsSingleMavenReleaseCommand::nextDevVersion.name} = ${rootProjectIdAndVersions.nextDevVersion}") {
        assert(rootProject) {
            property(subject::commands).containsExactly {
                isA<JenkinsSingleMavenReleaseCommand> {
                    isStateReady()
                    property(subject::nextDevVersion).toBe(rootProjectIdAndVersions.nextDevVersion)
                }
            }
        }
    }
}


fun Suite.assertSyntheticRootProject(releasePlan: ReleasePlan) {
    assertRootProject(releasePlan, syntheticRoot)
    assertHasNoCommands(releasePlan, "synthetic root", syntheticRoot)
    assertHasRelativePath(releasePlan, "synthetic root", syntheticRoot, "::nonExistingPath::")
}

fun Suite.assertRootProject(releasePlan: ReleasePlan, rootProjectIdAndVersions: IdAndVersions): Project {
    it("${ReleasePlan::rootProjectId.name} is expected rootProject") {
        assert(releasePlan.rootProjectId).toBe(rootProjectIdAndVersions.id)
    }
    val rootProject = releasePlan.getProject(rootProjectIdAndVersions.id)
    it("root project's ${Project::id.name} and versions are $rootProjectIdAndVersions") {
        assert(rootProject) {
            idAndVersions(rootProjectIdAndVersions)
        }
    }
    it("root project's level is 0") {
        assert(rootProject) {
            property(subject::level).toBe(0)
        }
    }
    return rootProject
}

fun Suite.assertOneDirectDependent(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependent: IdAndVersions
) {
    assertOneUpdateAndOneReleaseCommand(releasePlan, name, project, exampleA)
    assertHasOneDependentAndIsOnLevel(releasePlan, name, project, dependent, 1)
}

fun Suite.assertHasOneDependentAndIsOnLevel(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependent: IdAndVersions,
    level: Int
) {
    assertHasDependents(releasePlan, name, project, dependent)
    assertProjectIsOnLevel(releasePlan, name, project, level)
}

fun Suite.assertHasTwoDependentsAndIsOnLevel(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependent1: IdAndVersions,
    dependent2: IdAndVersions,
    level: Int
) {
    assertHasDependents(releasePlan, name, project, dependent1, dependent2)
    assertProjectIsOnLevel(releasePlan, name, project, level)
}

private fun Suite.assertHasDependents(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependentIdAndVersions: IdAndVersions,
    vararg otherDependentIdAndVersions: IdAndVersions
) {
    it("$name project has ${otherDependentIdAndVersions.size + 1} dependent(s)") {
        assert(releasePlan).hasDependentsForProject(project, dependentIdAndVersions, *otherDependentIdAndVersions)
    }
}


fun Suite.assertHasNoDependentsAndIsOnLevel(
    releasePlan: ReleasePlan,
    name: String,
    dependent: IdAndVersions,
    level: Int
) {
    it("$name project does not have dependents") {
        assert(releasePlan).hasNoDependentsForProject(dependent)
    }
    assertProjectIsOnLevel(releasePlan, name, dependent, level)
}

private fun Suite.assertProjectIsOnLevel(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    level: Int
) {
    it("$name project is on level $level") {
        assert(releasePlan.getProject(project.id).level).toBe(level)
    }
}

fun Suite.assertOnlyWaitingReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name project has only one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly {
                isJenkinsMavenReleaseWaiting(project.nextDevVersion, dependency)
            }
        }
    }
}

fun Suite.assertHasNoCommands(releasePlan: ReleasePlan, name: String, idAndVersions: IdAndVersions) {
    it("$name project has no commands") {
        assert(releasePlan.getProject(idAndVersions.id)) {
            idAndVersions(idAndVersions)
            property(subject::commands).isEmpty()
        }
    }
}

fun Suite.assertOneUpdateCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name project has one waiting UpdateVersion and one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly {
                isJenkinsUpdateDependencyWaiting(dependency)
            }
        }
    }
}

fun Suite.assertOneUpdateAndOneReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name project has one waiting UpdateVersion and one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyWaiting(dependency) },
                { isJenkinsMavenReleaseWaiting(project.nextDevVersion, dependency) }
            )
        }
    }
}


fun Suite.assertOneReleaseCommandWaitingForSyntheticRoot(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions
) {
    it("$name project has only one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly {
                isJenkinsMavenReleaseWaiting(project.nextDevVersion, syntheticRoot)
            }
        }
    }
}

fun Suite.assertOneUpdateAndOneDisabledReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name has one waiting Update and one disabled Release command with ${JenkinsSingleMavenReleaseCommand::nextDevVersion.name} = ${project.nextDevVersion}") {
        assert(releasePlan.getProject(project.id)) {
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyWaiting(dependency) },
                { isJenkinsMavenReleaseDisabled(project.nextDevVersion) }
            )
        }
    }
}

fun Suite.assertOneDeactivatedUpdateAndOneDeactivatedReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name has one deactivated Update and one deactivated Release command with ${JenkinsSingleMavenReleaseCommand::nextDevVersion.name} = ${project.nextDevVersion}") {
        assert(releasePlan.getProject(project.id)) {
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyDeactivatedWaiting(dependency) },
                { isJenkinsMavenReleaseDeactivatedWaiting(project.nextDevVersion, dependency) }
            )
        }
    }
}

fun Suite.assertOneDeactivatedUpdateAndOneDisabledReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name has one deactivated Update and one disabled Release command with ${JenkinsSingleMavenReleaseCommand::nextDevVersion.name} = ${project.nextDevVersion}") {
        assert(releasePlan.getProject(project.id)) {
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyDeactivatedWaiting(dependency) },
                { isJenkinsMavenReleaseDisabled(project.nextDevVersion) }
            )
        }
    }
}

fun Suite.assertOneUpdateAndOneMultiReleaseCommandAndIsOnLevelAndSubmodulesAreDependents(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions,
    level: Int,
    submodule: IdAndVersions,
    vararg otherSubmodules: IdAndVersions
) {
    assertOneUpdateAndOneMultiReleaseCommand(releasePlan, name, project, dependency)
    assertHasSubmodules(releasePlan, name, project, submodule, *otherSubmodules)
    assertHasDependents(releasePlan, name, project, submodule, *otherSubmodules)
    assertProjectIsOnLevel(releasePlan, name, project, level)
}

fun Suite.assertOneMultiReleaseCommandAndIsOnLevelAndSubmodulesAreDependents(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions,
    level: Int,
    submodule: IdAndVersions,
    vararg otherSubmodules: IdAndVersions
) {
    it("$name project has one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly {
                isJenkinsMultiMavenReleaseWaiting(project.nextDevVersion, dependency)
            }
        }
    }
    assertHasSubmodules(releasePlan, name, project, submodule, *otherSubmodules)
    assertHasDependents(releasePlan, name, project, submodule, *otherSubmodules)
    assertProjectIsOnLevel(releasePlan, name, project, level)
}

fun Suite.assertOneUpdateAndOneMultiReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency: IdAndVersions
) {
    it("$name project has one waiting UpdateVersion and one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyWaiting(dependency) },
                { isJenkinsMultiMavenReleaseWaiting(project.nextDevVersion, dependency) }
            )
        }
    }
}

fun Suite.assertTwoUpdateAndOneReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency1: IdAndVersions,
    dependency2: IdAndVersions
) {
    it("$name project has two waiting UpdateVersion and one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyWaiting(dependency1) },
                { isJenkinsUpdateDependencyWaiting(dependency2) },
                { isJenkinsMavenReleaseWaiting(project.nextDevVersion, dependency1, dependency2) }
            )
        }
    }
}

fun Suite.assertTwoUpdateAndOneMultiReleaseCommand(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    dependency1: IdAndVersions,
    dependency2: IdAndVersions
) {
    it("$name project has two waiting UpdateVersion and one waiting Release command") {
        assert(releasePlan.getProject(project.id)) {
            idAndVersions(project)
            property(subject::commands).containsExactly(
                { isJenkinsUpdateDependencyWaiting(dependency1) },
                { isJenkinsUpdateDependencyWaiting(dependency2) },
                { isJenkinsMultiMavenReleaseWaiting(project.nextDevVersion, dependency1, dependency2) }
            )
        }
    }
}

fun Suite.assertReleasePlanHasNumOfProjectsAndDependents(releasePlan: ReleasePlan, num: Int) {
    it("release plan has $num projects and $num dependents") {
        assert(releasePlan) {
            returnValueOf(subject::getNumberOfProjects).toBe(num)
            returnValueOf(subject::getNumberOfDependents).toBe(num)
        }
    }
}

fun Suite.assertReleasePlanHasNoWarningsAndNoInfos(releasePlan: ReleasePlan) {
    assertReleasePlanHasNoWarnings(releasePlan)
    assertReleasePlanHasNoInfos(releasePlan)
}

fun Suite.assertReleasePlanHasNoWarnings(releasePlan: ReleasePlan) {
    it("it does not have warnings") {
        assert(releasePlan.warnings).isEmpty()
    }
}

fun Suite.assertReleasePlanHasNoInfos(releasePlan: ReleasePlan) {
    it("it does not have infos") {
        assert(releasePlan.infos).isEmpty()
    }
}

fun Suite.assertReleasePlanHasWarningsAboutCiManagement(
    releasePlan: ReleasePlan,
    warnings: List<String>
) {
    it("warnings contains only warning about ciManagement") {
        assert(releasePlan.warnings).containsExactly(warnings.first(), *warnings.drop(1).toTypedArray())
    }
}

fun Suite.assertReleasePlanHasWarningWithDependencyGraph(
    releasePlan: ReleasePlan,
    dependencyBranch: String,
    vararg otherDependencyBranches: String
) {
    it("warnings contains the cyclic dependency branch") {
        assert(releasePlan.warnings).containsExactly {
            contains("cyclic dependencies", dependencyBranch, *otherDependencyBranches)
        }
    }
}

fun Suite.assertReleasePlanHasInfoWithDependencyGraph(
    releasePlan: ReleasePlan,
    dependencyBranch: String,
    vararg otherDependencyBranches: String
) {
    it("infos contains the cyclic dependency branch") {
        assert(releasePlan.infos).containsExactly {
            contains("cyclic dependencies", dependencyBranch, *otherDependencyBranches)
        }
    }
}

fun Suite.assertReleasePlanIteratorReturnsRootAndStrictly(
    releasePlan: ReleasePlan,
    vararg projects: IdAndVersions
) {
    it("ReleasePlan.iterator() returns the projects in the expected order") {
        assert(releasePlan).iteratorReturnsRootAndStrictly(*projects.mapToProjectIds())
    }
}

fun Suite.assertReleasePlanIteratorReturnsRootAnd(
    releasePlan: ReleasePlan,
    vararg groups: List<IdAndVersions>
) {
    it("ReleasePlan.iterator() returns the projects in the expected order") {
        val projectGroups = groups.map { it.map { it.id } }.toTypedArray()
        assert(releasePlan).iteratorReturnsRootAndInOrderGrouped(*projectGroups)
    }
}

fun Suite.assertHasSubmodules(
    releasePlan: ReleasePlan,
    name: String,
    project: IdAndVersions,
    submodule: IdAndVersions,
    vararg otherSubmodules: IdAndVersions
) {
    it("$name project has ${otherSubmodules.size + 1} submodules") {
        assert(releasePlan.getSubmodules(project.id)).contains.inAnyOrder.only.values(
            submodule.id, *otherSubmodules.mapToProjectIds()
        )
    }
}


fun Array<out IdAndVersions>.mapToProjectIds() = this.map { it.id }.toTypedArray()
