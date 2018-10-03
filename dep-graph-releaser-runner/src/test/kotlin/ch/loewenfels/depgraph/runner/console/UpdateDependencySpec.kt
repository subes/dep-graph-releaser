package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.maven.getTestDirectory
import ch.loewenfels.depgraph.runner.commands.UpdateDependency
import ch.tutteli.atrium.copyPom
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.spek.extensions.TempFolder
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.include


class UpdateDependencySpec : Spek({
    include(UpdateDependencyCommandSpec)

    //TODO write spec for non-existing pom
    //given("non-existing pom"){}

}) {
    object UpdateDependencyCommandSpec : CommandSpec(
        UpdateDependency,
        ::getNotEnoughArgs,
        ::getTooManyArgs,
        5..5
    )

    companion object {
        fun getNotEnoughArgs(tempFolder: TempFolder): Array<out String> {
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

        fun getTooManyArgs(tempFolder: TempFolder): Array<out String> {
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
