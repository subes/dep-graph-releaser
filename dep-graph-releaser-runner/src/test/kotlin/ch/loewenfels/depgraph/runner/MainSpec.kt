package ch.loewenfels.depgraph.runner

import ch.loewenfels.depgraph.ConfigKey
import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.maven.getTestDirectory
import ch.loewenfels.depgraph.runner.Main.errorHandler
import ch.loewenfels.depgraph.runner.Main.pathVerifier
import ch.loewenfels.depgraph.runner.commands.Json
import ch.loewenfels.depgraph.runner.console.ErrorHandler
import ch.loewenfels.depgraph.runner.console.PathVerifier
import ch.loewenfels.depgraph.serialization.Serializer
import ch.tutteli.atrium.*
import ch.tutteli.atrium.api.cc.en_GB.*
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.niok.exists
import ch.tutteli.spek.extensions.memoizedTempFolder
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import java.nio.file.Files
import java.nio.file.Paths
import java.util.*

object MainSpec : Spek({
    val jsonFile = Files.createTempFile("test", "json")
    errorHandler = object : ErrorHandler {
        override fun error(msg: String) = throw AssertionError(msg)
    }
    pathVerifier = object : PathVerifier {
        override fun path(path: String, fileDescription: String) = Paths.get(path)
    }

    describe("json") {
        context("project A with dependent project B (happy case)") {
            val dryRunJob = "dgr-dry-run"
            val updateJob = "dgr-updater"
            val remoteRegex = "^$#https://none.com\n(a\n\tcomplicated|regex)(?!\n\ta|\n\tb).*#https://somewhere.else.com/\nb#https://test"
            val relativePathExcludeProjectRegex = "[^/]+/[^/]+/.+"
            val relativePathToGitRepoRegex = "^(.*)/\$"
            val relativePathToGitRepoReplacement = "https://github.com/$1"
            val regexParams = ".*#branch.name=master\na.*#param1=2;param2=3"
            val jobMapping = "com.example:project=ownJobName"
            val commitPrefix = "[DGR] DEV-12345"
            val buildWithParamsJob = "^$#maven#r;n;a\n.*#query#releaseVersion;nextDevVersion"
            Main.main(
                "json", "com.example:a;com.example:b",
                getTestDirectory("managingVersions/inDependency").absolutePathAsString,
                jsonFile.toAbsolutePath().toString(),
                updateJob,
                dryRunJob,
                remoteRegex,
                relativePathExcludeProjectRegex,
                relativePathToGitRepoRegex,
                relativePathToGitRepoReplacement,
                "${Json.REGEX_PARAMS_ARG}$regexParams",
                "${Json.JOB_MAPPING_ARG}$jobMapping",
                "${Json.COMMIT_PREFIX_ARG}$commitPrefix",
                "${Json.BUILD_WITH_PARAM_JOBS_ARG}$buildWithParamsJob"
            )
            it("creates a corresponding json file") {
                assert(jsonFile).property(jsonFile::exists).toBe(true)
            }

            val json = Scanner(jsonFile, Charsets.UTF_8.name()).useDelimiter("\\Z").use { it.next() }
            val releasePlan = Serializer().deserialize(json)
            it("the json file can be de-serialized and is expected project A with dependent B") {
                assert(releasePlan) {
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.UPDATE_DEPENDENCY_JOB).toBe(updateJob)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.DRY_RUN_JOB).toBe(dryRunJob)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.DRY_RUN_JOB).toBe(dryRunJob)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.REMOTE_REGEX).toBe(remoteRegex)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX).toBe(relativePathExcludeProjectRegex)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX).toBe(relativePathToGitRepoRegex)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT).toBe(relativePathToGitRepoReplacement)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.REGEX_PARAMS).toBe(regexParams)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.JOB_MAPPING).toBe(jobMapping)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.COMMIT_PREFIX).toBe(commitPrefix)
                    returnValueOf(ReleasePlan::getConfig, ConfigKey.BUILD_WITH_PARAM_JOBS).toBe(buildWithParamsJob)
                }
            }
            assertReleasePlanHasNoWarningsAndNoInfos(releasePlan)
        }
    }

    describe("update") {
        describe("single project with third party dependency") {
            val tempFolder by memoizedTempFolder()
            val pom = getTestDirectory("singleProject").resolve("pom.xml")

            context("dependency shall be updated, same version") {
                val errMessage = "Version is already up-to-date; did you pass wrong argument for newVersion"
                it("throws an IllegalArgumentException, mentioning `$errMessage`") {
                    val tmpPom = copyPom(tempFolder, pom)
                    expect {
                        Main.main("update", tmpPom.absolutePathAsString, "junit", "junit", "4.12")
                    }.toThrow<IllegalArgumentException> { message { contains(errMessage, "4.12") } }
                }
            }

            context("dependency shall be updated, new version") {
                it("updates the dependency") {
                    val tmpPom = copyPom(tempFolder, pom)
                    Main.main("update", tmpPom.absolutePathAsString, "junit", "junit", "4.4")
                    assertSameAsBeforeAfterReplace(tmpPom, pom, "4.12", "4.4")
                }
            }
        }
    }
})
