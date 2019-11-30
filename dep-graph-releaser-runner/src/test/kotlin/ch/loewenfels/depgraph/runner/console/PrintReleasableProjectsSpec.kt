package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.runner.commands.PrintReleasableProjects
import ch.tutteli.atrium.api.cc.en_GB.contains
import ch.tutteli.atrium.api.cc.en_GB.message
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.expect
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.spek.extensions.MemoizedTempFolder
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

class PrintReleasableProjectsSpec : Spek({
    include(PrintReleasableProjectsCommandSpec)

    describe("validation errors") {
        context("non-existing directory") {
            val errMsg = "The given directory to analyse does not exist."
            val inputArgs = arrayOf("projectName", "directory")
            it("throws an error, mentioning $errMsg") {
                expect {
                    PrintReleasableProjects.execute(inputArgs, errorHandler)
                }.toThrow<IllegalStateException> { message { contains(errMsg) } }
            }
        }
    }

}) {
    object PrintReleasableProjectsCommandSpec : CommandSpec(
        PrintReleasableProjects,
        ::getNotEnoughArgs,
        ::getTooManyArgs,
        2..2
    )

    companion object {
        fun getNotEnoughArgs(@Suppress("UNUSED_PARAMETER") tempFolder: MemoizedTempFolder): Array<out String> {
            return arrayOf(
                PrintReleasableProjects.name
                //dir is required as well
                //tempFolder.tmpDir.absolutePath,
            )
        }

        fun getTooManyArgs(tempFolder: MemoizedTempFolder): Array<out String> {
            return arrayOf(
                PrintReleasableProjects.name,
                tempFolder.tmpDir.absolutePathAsString,
                "unexpectedAdditionalArg"
            )
        }
    }
}
