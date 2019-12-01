package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.maven.getTestDirectory
import ch.loewenfels.depgraph.runner.commands.UpdateDependency
import ch.tutteli.atrium.api.cc.en_GB.contains
import ch.tutteli.atrium.api.cc.en_GB.message
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.copyPom
import ch.tutteli.atrium.expect
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.spek.extensions.MemoizedTempFolder
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

class UpdateDependencySpec : Spek({
    include(UpdateDependencyCommandSpec)

    describe("validation errors") {
        context("non-existing pom") {
            val errMsg = "The given pom file does not exist."
            val inputArgs = arrayOf(
                UpdateDependency.name,
                "non_existing_path/pom.xml",
                "junit",
                "junit",
                "4.12"
            )
            it("throws an error, mentioning $errMsg") {
                expect {
                    UpdateDependency.execute(inputArgs, errorHandler)
                }.toThrow<IllegalStateException> { message { contains(errMsg) } }
            }
        }
    }



}) {
    object UpdateDependencyCommandSpec : CommandSpec(
        UpdateDependency,
        ::getNotEnoughArgs,
        ::getTooManyArgs,
        5..5
    )

    companion object {
        fun getNotEnoughArgs(tempFolder: MemoizedTempFolder): Array<out String> {
            val pom = getTestDirectory("singleProject").resolve("pom.xml")
            val tmpPom = copyPom(tempFolder, pom)
            return arrayOf(
                UpdateDependency.name,
                tmpPom.absolutePathAsString,
                "junit",
                "junit"
                //version is required as well
                //"4.12"
            )
        }

        fun getTooManyArgs(tempFolder: MemoizedTempFolder): Array<out String> {
            val pom = getTestDirectory("singleProject").resolve("pom.xml")
            val tmpPom = copyPom(tempFolder, pom)
            return arrayOf(
                UpdateDependency.name,
                tmpPom.absolutePathAsString,
                "junit",
                "junit",
                "4.12",
                "unexpectedAdditionalArg"
            )
        }
    }
}
