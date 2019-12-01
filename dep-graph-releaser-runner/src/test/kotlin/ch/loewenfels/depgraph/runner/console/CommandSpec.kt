package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.runner.Main
import ch.loewenfels.depgraph.runner.commands.ConsoleCommand
import ch.tutteli.atrium.api.cc.en_GB.messageContains
import ch.tutteli.atrium.api.cc.en_GB.toBe
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.assert
import ch.tutteli.atrium.expect
import ch.tutteli.spek.extensions.MemoizedTempFolder
import ch.tutteli.spek.extensions.memoizedTempFolder
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import java.nio.file.Paths

abstract class CommandSpec(
    testee: ConsoleCommand,
    notEnoughArgs: (MemoizedTempFolder) -> Array<out String>,
    tooManyArgs: (MemoizedTempFolder) -> Array<out String>,
    allowedNumberOfArgs: IntRange
) : Spek({
    val tempFolder by memoizedTempFolder()

    Main.pathVerifier = object : PathVerifier {
        override fun path(path: String, fileDescription: String) = Paths.get(path)
    }

    describe("[CommandSpec] validation errors") {

        it("throws an error if not enough arguments are supplied") {
            expect {
                dispatch(notEnoughArgs(tempFolder), errorHandler, listOf(testee))
            }.toThrow<IllegalStateException> {
                messageContains("Not enough or too many arguments supplied")
            }
        }

        it("throws an error if too many arguments are supplied") {
            expect {
                dispatch(tooManyArgs(tempFolder), errorHandler, listOf(testee))
            }.toThrow<IllegalStateException> {
                messageContains("Not enough or too many arguments supplied")
            }
        }

    }

    group("fun ${testee::numOfArgsNotOk.name} returns false for a correct number of args") {
        allowedNumberOfArgs.forEach { number ->
            test("$number") {
                assert(testee.numOfArgsNotOk(number)).toBe(false)
            }
        }
    }
    group("fun ${testee::numOfArgsNotOk.name} returns true for an incorrect number of args") {
        listOf(allowedNumberOfArgs.first - 1, allowedNumberOfArgs.last + 1).forEach { number ->
            test("$number") {
                assert(testee.numOfArgsNotOk(number)).toBe(true)
            }
        }
    }
})
