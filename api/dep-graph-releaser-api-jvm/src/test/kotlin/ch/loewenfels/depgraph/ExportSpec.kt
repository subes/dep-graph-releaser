package ch.loewenfels.depgraph

import ch.loewenfels.depgraph.data.Project
import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.maven.MavenProjectId
import ch.tutteli.atrium.api.cc.en_GB.containsNot
import ch.tutteli.atrium.assert
import ch.tutteli.atrium.createReleasePlanWithDefaults
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

class ExportSpec : Spek({

    fun createProject(
        id: ProjectId,
        isSubmodule: Boolean,
        currentVersion: String,
        releaseVersion: String, level: Int
    ) = Project(id, isSubmodule, currentVersion, releaseVersion, level, listOf(), "")

    describe("list of dependents") {

        context("release of both project A and project B") {

            val rootProjectId = MavenProjectId("com.example", "parent-parent")
            val rootProject = createProject(rootProjectId, false, "1.1.0-SNAPSHOT", "1.2.0", 0)

            val syntheticRootId = MavenProjectId("ch.loewenfels", "synthetic-root")
            val syntheticRoot = createProject(syntheticRootId, false, "0.0.0-SNAPSHOT", "0.0.0", 1)

            val projectInterfaceId = MavenProjectId("com.example", "interface")
            val projectInterface = createProject(projectInterfaceId, false, "2.0", "3.0", 2)

            val projectAnnotationsId = MavenProjectId("com.example", "annotations")
            val projectAnnotations = createProject(projectAnnotationsId, false, "4.0", "4.1", 3)

            val projectNotifierId = MavenProjectId("com.example", "notifier")
            val projectNotifier = createProject(projectNotifierId, false, "5.0", "5.1", 4)

            val dependents = mapOf<ProjectId, Set<MavenProjectId>>(
                rootProjectId to setOf(syntheticRootId),
                syntheticRootId to setOf(projectInterfaceId, projectAnnotationsId, projectNotifierId),
                projectInterfaceId to setOf(projectAnnotationsId, projectNotifierId),
                projectAnnotationsId to setOf(projectNotifierId),
                projectNotifierId to setOf()
            )
            val releasePlan = createReleasePlanWithDefaults(
                "releaseId",
                rootProjectId,
                mapOf(
                    rootProjectId to rootProject,
                    syntheticRootId to syntheticRoot,
                    projectInterfaceId to projectInterface,
                    projectAnnotationsId to projectAnnotations,
                    projectNotifierId to projectNotifier
                ),
                mapOf(),
                dependents
            )

            it("does not return synthetic root project") {
                val list = generateListOfDependentsWithoutSubmoduleAndExcluded(
                    releasePlan,
                    Regex(".*# ")
                )
                assert(list).containsNot("ch.loewenfels:synthetic-root")
            }
        }
    }
})
