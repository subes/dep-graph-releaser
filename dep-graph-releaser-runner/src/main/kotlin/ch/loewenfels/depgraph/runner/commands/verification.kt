package ch.loewenfels.depgraph.runner.commands

import ch.loewenfels.depgraph.runner.Main
import ch.loewenfels.depgraph.runner.console.ErrorHandler
import ch.loewenfels.depgraph.runner.console.expectedArgsAndGiven
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.niok.exists
import java.nio.file.Path

fun toVerifiedExistingFile(
    filePath: String,
    fileDescription: String,
    command: ConsoleCommand,
    args: Array<out String>,
    errorHandler: ErrorHandler,
    suffix: String = ""
): Path {
    val safeFile = filePath.toVerifiedFile(fileDescription)
    if (!safeFile.exists) {
        errorHandler.error(
            """
            |The given $fileDescription$suffix does not exist. Maybe you mixed up the order of the arguments?"
            |$fileDescription: ${safeFile.absolutePathAsString}
            |
            |${expectedArgsAndGiven(command, args)}
            """.trimMargin()
        )
    }
    return safeFile
}

fun toVerifiedFileIfParentExists(
    filePath: String,
    fileDescription: String,
    errorHandler: ErrorHandler
): Path {
    val file = filePath.toVerifiedFile(fileDescription)
    if (!file.parent.exists) {
        errorHandler.error(
            """
                |The directory in which the resulting $fileDescription shall be created does not exist.
                |Directory: ${file.parent.absolutePathAsString}
                """.trimMargin()
        )
    }
    return file
}

private fun String.toVerifiedFile(fileDescription: String): Path = Main.pathVerifier.path(this, fileDescription)
