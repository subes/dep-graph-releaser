package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.maven.getTestDirectory
import ch.loewenfels.depgraph.runner.Main
import ch.loewenfels.depgraph.runner.commands.Json
import ch.tutteli.atrium.api.cc.en_GB.messageContains
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.expect
import ch.tutteli.spek.extensions.TempFolder
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.dsl.describe
import org.jetbrains.spek.api.include
import java.io.File
import java.util.regex.PatternSyntaxException

class JsonSpec : Spek({
    include(JsonCommandSpec)

    //TODO write spec for wrong regex, non-existing directory etc.
    //given("non-existing directory") {}

    val tempFolder = TempFolder.perTest()
    registerListener(tempFolder)

    Main.fileVerifier = object : FileVerifier {
        override fun file(path: String, fileDescription: String) = File(path)
    }

    describe(Json.BUILD_WITH_PARAM_JOBS_ARG) {

        fun createArgs(tempFolder: TempFolder, regex: String): Array<String> {
            val jsonFile = File(tempFolder.tmpDir, "test.json")
            return arrayOf(
                Json.name, "com.example", "a",
                getTestDirectory("managingVersions/inDependency").absolutePath,
                jsonFile.absolutePath,
                "dgr-updater",
                "dgr-dry-run",
                "^$#https://none.com",
                "[^/]+/[^/]+/.+",
                "^(.*)/\$",
                "https://github.com/$1",
                "${Json.REGEX_PARAMS_ARG}.*#branch.name=master",
                "${Json.DISABLE_RELEASE_FOR}ch.loewenfels.*",
                "${Json.JOB_MAPPING_ARG}com.example:project=ownJobName\ncom.example:anotherProject=another-project",
                "${Json.COMMIT_PREFIX_ARG}[TEST]",
                "${Json.BUILD_WITH_PARAM_JOBS_ARG}$regex"
            )
        }

        describe("validation errors") {

            describe("invalid regex") {
                test("throws PatternSyntaxException") {
                    val args = createArgs(tempFolder, "(shouldCloseParenthesis#query#rel;next")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<PatternSyntaxException> {}
                }
            }

            describe("invalid format") {
                test("throws IllegalArgumentException mentioning allowed formats") {
                    val args = createArgs(tempFolder, ".*#noFormat#rel;next")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<IllegalArgumentException> {
                        messageContains("Illegal format `noFormat`", "query", "maven")
                    }
                }
            }

            describe("nextDev param name not provided") {
                test("throws IllegalArgumentException mentioning not enough names") {
                    val args = createArgs(tempFolder, ".*#query#rel")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<IllegalArgumentException> {
                        messageContains("requires 2", "1 given")
                    }
                }
            }

            describe("too many params provided for format query") {
                test("throws IllegalArgumentException mentioning not enough names") {
                    val args = createArgs(tempFolder, ".*#query#rel;nextDev;")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<IllegalArgumentException> {
                        messageContains("requires 2", "3 given")
                    }
                }
            }

            describe("additional param name not provided for format maven") {
                test("throws IllegalArgumentException mentioning not enough names") {
                    val args = createArgs(tempFolder, ".*#maven#rel;nextDev")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<IllegalArgumentException> {
                        messageContains("requires 3", "2 given")
                    }
                }
            }

            describe("too many params provided for format maven") {
                test("throws IllegalArgumentException mentioning not enough names") {
                    val args = createArgs(tempFolder, ".*#maven#rel;nextDev;add;somethingElse")
                    expect {
                        dispatch(args, errorHandler, listOf(Json))
                    }.toThrow<IllegalArgumentException> {
                        messageContains("requires 3", "4 given")
                    }
                }
            }
        }
    }
}) {
    object JsonCommandSpec : CommandSpec(
        Json,
        ::getNotEnoughArgs,
        ::getTooManyArgs,
        11..16
    )

    companion object {
        fun getNotEnoughArgs(tempFolder: TempFolder): Array<out String> {
            val jsonFile = File(tempFolder.tmpDir, "test.json")
            return arrayOf(
                Json.name, "com.example", "a",
                getTestDirectory("managingVersions/inDependency").absolutePath,
                jsonFile.absolutePath,
                "dgr-updater",
                "dgr-dry-run",
                "^$#none",
                "[^/]+/[^/]+/.+",
                "^(.*)/\$"
                //the RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT is required as well
                //"https://github.com/$1"
            )
        }

        fun getTooManyArgs(tempFolder: TempFolder): Array<out String> {
            val jsonFile = File(tempFolder.tmpDir, "test.json")
            return arrayOf(
                Json.name, "com.example", "a",
                getTestDirectory("managingVersions/inDependency").absolutePath,
                jsonFile.absolutePath,
                "dgr-updater",
                "dgr-dry-run",
                "^$#none",
                "[^/]+/[^/]+/.+",
                "^(.*)/\$",
                "https://github.com/$1",
                "${Json.REGEX_PARAMS_ARG}.*#branch.name=master",
                "${Json.DISABLE_RELEASE_FOR}ch.loewenfels.*",
                "${Json.JOB_MAPPING_ARG}com.example.project=ownJobName|com.example.anotherProject=another-project",
                "${Json.COMMIT_PREFIX_ARG}[TEST]",
                "${Json.BUILD_WITH_PARAM_JOBS_ARG}test",
                "unexpectedAdditionalArg"
            )
        }
    }
}
