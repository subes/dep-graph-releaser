package ch.loewenfels.depgraph.maven

import ch.tutteli.atrium.api.cc.en_GB.toBe
import ch.tutteli.atrium.assert
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe

object VersionDeterminerSpec : Spek({
    val testee = VersionDeterminer()

    describe("fun ${testee::releaseVersion.name}") {
        mapOf(
            "2.0.1-10-SNAPSHOT" to "2.0.1-10",
            "2.0.1-SNAPSHOT" to "2.0.1",
            "2.x.1-SNAPSHOT" to "2.x.1",
            "2.0-SNAPSHOT" to "2.0",
            "2.x-SNAPSHOT" to "2.x",
            "2-SNAPSHOT" to "2",
            "2.0.3" to "2.0.4",
            "2.0.49" to "2.0.50",
            "2.0.99" to "2.0.100",
            "2.19" to "2.20",
            "9" to "10",
            "10" to "11",
            "2.0.3final" to "2.0.4",
            "2.5" to "2.6",
            "2.x" to "3",
            "2" to "3",
            "lovelyVersion" to "lovelyVersion.2",
            "2.0.3.9" to "2.0.3.10",
            "2.1.5.0" to "2.1.6.0",
            "2.1.0" to "2.2.0",
            "2.0.0" to "2.1.0",
            "2.0" to "3.0",
            "2.0.3.9-a1" to "2.0.3.9-a2",
            "2.0.3-RC-1" to "2.0.3-RC-2",
            "2.0.rc1" to "2.0.rc2",
            "2_RC1" to "2_RC2",
            "0.0.0-SNAPSHOT" to "0.0.0",
            "0.0-SNAPSHOT" to "0.0",
            "0-SNAPSHOT" to "0",
            "0.0.0.0" to "0.0.1.0",
            "0.0.0" to "0.1.0",
            "0.0" to "1.0",
            "0" to "1"
        ).forEach { (version, expected) ->
            it("$version turns into $expected") {
                val result = testee.releaseVersion(version)
                assert(result).toBe(expected)
            }
            it("v$version turns into v$expected") {
                val result = testee.releaseVersion("v$version")
                assert(result).toBe("v$expected")
            }
        }
    }

    describe("fun ${testee::nextDevVersion.name}") {
        mapOf(
            "2.0.1-10-SNAPSHOT" to "2.0.1-11-SNAPSHOT",
            "2.0.1-SNAPSHOT" to "2.0.2-SNAPSHOT",
            "2.x.1-SNAPSHOT" to "2.x.2-SNAPSHOT",
            "2.0-SNAPSHOT" to "2.1-SNAPSHOT",
            "2.x-SNAPSHOT" to "3-SNAPSHOT",
            "2-SNAPSHOT" to "3-SNAPSHOT",
            "2.0.3" to "2.0.5-SNAPSHOT",
            "2.0.3final" to "2.0.5-SNAPSHOT",
            "2.5" to "2.7-SNAPSHOT",
            "2.x" to "4-SNAPSHOT",
            "2" to "4-SNAPSHOT",
            "2.0.48" to "2.0.50-SNAPSHOT",
            "2.0.49" to "2.0.51-SNAPSHOT",
            "2.0.98" to "2.0.100-SNAPSHOT",
            "2.0.99" to "2.0.101-SNAPSHOT",
            "2.18" to "2.20-SNAPSHOT",
            "2.19" to "2.21-SNAPSHOT",
            "8" to "10-SNAPSHOT",
            "9" to "11-SNAPSHOT",
            "10" to "12-SNAPSHOT",
            "lovelyVersion" to "lovelyVersion.3-SNAPSHOT",
            "2.1.5.0-SNAPSHOT" to "2.1.6.0-SNAPSHOT",
            "2.1.0-SNAPSHOT" to "2.2.0-SNAPSHOT",
            "2.0-SNAPSHOT" to "3.0-SNAPSHOT",
            "2.0.3.9" to "2.0.3.11-SNAPSHOT",
            "2.1.5.0" to "2.1.7.0-SNAPSHOT",
            "2.1.0" to "2.3.0-SNAPSHOT",
            "2.0.0" to "2.2.0-SNAPSHOT",
            "2.0" to "4.0-SNAPSHOT",
            "2.0.3.9-a1-SNAPSHOT" to "2.0.3.9-a2-SNAPSHOT",
            "2.0.3-RC-1-SNAPSHOT" to "2.0.3-RC-2-SNAPSHOT",
            "2.0.rc1-SNAPSHOT" to "2.0.rc2-SNAPSHOT",
            "2_RC1-SNAPSHOT" to "2_RC2-SNAPSHOT",
            "2.0.3.9-a1" to "2.0.3.9-a3-SNAPSHOT",
            "2.0.3-RC-1" to "2.0.3-RC-3-SNAPSHOT",
            "2.0.rc1" to "2.0.rc3-SNAPSHOT",
            "2_RC1" to "2_RC3-SNAPSHOT",
            "0.0.0-SNAPSHOT" to "0.1.0-SNAPSHOT",
            "0.0-SNAPSHOT" to "1.0-SNAPSHOT",
            "0-SNAPSHOT" to "1-SNAPSHOT",
            "0.0.0.0" to "0.0.2.0-SNAPSHOT",
            "0.0.0" to "0.2.0-SNAPSHOT",
            "0.0" to "2.0-SNAPSHOT",
            "0" to "2-SNAPSHOT"
        ).forEach { (version, expected) ->
            it("$version turns into $expected") {
                val result = testee.nextDevVersion(version)
                assert(result).toBe(expected)
            }
            it("v$version turns into v$expected") {
                val result = testee.nextDevVersion("v$version")
                assert(result).toBe("v$expected")
            }
        }
    }
})
