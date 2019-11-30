package ch.loewenfels.depgraph.runner.console

import ch.tutteli.atrium.api.cc.en_GB.contains
import ch.tutteli.atrium.api.cc.en_GB.message
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.expect
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

object OnlyFolderAndSubFolderFileVerifierSpec : Spek({

    describe("error cases") {
        context("given path which contains ..") {
            val fileDescription = "testFile"
            val errMsg = "Using `..` in the path of the $fileDescription is prohibited"
            it("throws an IllegalArgumentException, mentioning $errMsg") {
                expect {
                    OnlyFolderAndSubFolderPathVerifier.path("../test", fileDescription)
                }.toThrow<IllegalArgumentException> { message { contains(errMsg) } }
            }
        }

         context("given which points to /Windows, hence not folder or subfolder") {
            val fileDescription = "testFile"
            val errMsg = "$fileDescription is neither a relative path nor an absolute path"
            it("throws an IllegalArgumentException, mentioning $errMsg") {
                expect {
                    OnlyFolderAndSubFolderPathVerifier.path("/Windows", fileDescription)
                }.toThrow<IllegalArgumentException> { message { contains(errMsg) } }
            }
        }
    }
})
