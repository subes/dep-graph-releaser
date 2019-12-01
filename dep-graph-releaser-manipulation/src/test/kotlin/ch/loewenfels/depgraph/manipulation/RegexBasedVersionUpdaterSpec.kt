package ch.loewenfels.depgraph.manipulation

import ch.loewenfels.depgraph.maven.getTestDirectory
import ch.tutteli.atrium.IdAndVersions
import ch.tutteli.atrium.api.cc.en_GB.contains
import ch.tutteli.atrium.api.cc.en_GB.message
import ch.tutteli.atrium.api.cc.en_GB.toThrow
import ch.tutteli.atrium.assertSameAsBeforeAfterReplace
import ch.tutteli.atrium.exampleA
import ch.tutteli.atrium.expect
import ch.tutteli.niok.absolutePathAsString
import ch.tutteli.niok.readAllBytes
import ch.tutteli.niok.writeBytes
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.Suite
import org.spekframework.spek2.style.specification.describe
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

object RegexBasedVersionUpdaterSpec : Spek({
    val tempFolder = Files.createTempDirectory("spek")

    val testee = RegexBasedVersionUpdater

    describe("error cases") {
        context("pom file which does not exist") {
            val errMessage = "pom file does not exist"
            it("throws an IllegalArgumentException, mentioning `$errMessage`") {
                val pom = Paths.get("nonExisting")
                expect {
                    testee.updateDependency(pom, "com.google.code.gson", "gson", "4.4")
                }.toThrow<IllegalArgumentException> {
                    message {
                        contains(errMessage, pom.absolutePathAsString, "com.google.code.gson", "gson", "4.4")
                    }
                }
            }
        }

        context("single project with third party dependency without version") {
            val errMessage = "the dependency was not found"
            it("throws an IllegalStateException, mentioning `$errMessage`") {
                val pom = getTestDirectory("singleProject").resolve("pom.xml")
                val tmpPom = copyPom(tempFolder, pom)
                expect {
                    testee.updateDependency(tmpPom, "com.google.code.gson", "gson", "4.4")
                }.toThrow<IllegalStateException> { message { contains(errMessage) } }
            }
        }

        context("project with dependent and version partially static with property") {
            val errMessage = "Version was neither static nor a reference to a single property"
            it("throws an UnsupportedOperationException, mentioning `$errMessage`") {
                val pom = getPom("errorCases/versionPartiallyStaticAndProperty.pom")
                val tmpPom = copyPom(tempFolder, pom)
                expect {
                    updateDependency(testee, tmpPom, exampleA)
                }.toThrow<UnsupportedOperationException> { message { contains(errMessage, "1.0.\${a.fix}") } }
            }
        }

        context("dependency with two <version>") {
            val errMessage = "<dependency> has two <version>"
            it("throws an IllegalStateException, mentioning `$errMessage`") {
                val pom = getPom("errorCases/twoVersions.pom")
                val tmpPom = copyPom(tempFolder, pom)
                expect {
                    updateDependency(testee, tmpPom, exampleA)
                }.toThrow<IllegalStateException> { message { contains(errMessage, exampleA.id.identifier) } }
            }
        }

        context("property which contains another property") {
            val errMessage = "Property contains another property"
            it("throws an UnsupportedOperationException, mentioning `$errMessage`") {
                val pom = getPom("errorCases/propertyWithProperty.pom")
                val tmpPom = copyPom(tempFolder, pom)
                expect {
                    updateDependency(testee, tmpPom, exampleA)
                }.toThrow<UnsupportedOperationException> {
                    message { contains(errMessage, "a.version", "\${aVersion}") }
                }
            }
        }

        context("version via property but property is absent") {
            val errMessage = "version is managed via one or more properties but they are not present"
            it("throws an IllegalStateException, mentioning `$errMessage`") {
                val pom = getPom("errorCases/absentProperty.pom")
                val tmpPom = copyPom(tempFolder, pom)
                expect {
                    updateDependency(testee, tmpPom, exampleA)
                }.toThrow<IllegalStateException> { message { contains(errMessage, "a.version", "another.version") } }
            }
        }

        context("new version = old version") {
            testSameVersionThrowsIllegalArgumentException("errorCases/sameVersion.pom", tempFolder, testee)
        }

        context("new version = old version in dependency management") {
            testSameVersionThrowsIllegalArgumentException(
                "errorCases/sameVersionDependencyManagement.pom", tempFolder, testee
            )
        }

        context("new version = old version in property") {
            testSameVersionThrowsIllegalArgumentException("errorCases/sameVersionInProperty.pom", tempFolder, testee)
        }
    }

    describe("single project with third party dependency") {
        val pom = getTestDirectory("singleProject").resolve("pom.xml")

        context("dependency shall be updated, new version") {
            it("updates the dependency") {
                val tmpPom = copyPom(tempFolder, pom)
                testee.updateDependency(tmpPom, "junit", "junit", "4.4")
                assertSameAsBeforeAfterReplace(tmpPom, pom, "4.12", "4.4")
            }
        }

        context("dependency occurs multiple times") {
            it("updates the dependency") {
                val tmpPom = copyPom(tempFolder, pom)
                testee.updateDependency(tmpPom, "test", "test", "3.0")
                assertSameAsBeforeAfterReplace(tmpPom, pom, "2.0", "3.0")
            }
        }

        context("dependency once without version") {
            it("updates the dependency with version") {
                val tmpPom = copyPom(tempFolder, pom)
                testee.updateDependency(tmpPom, "test", "onceWithoutVersion", "3.4")
                assertSameAsBeforeAfterReplace(tmpPom, pom, "3.0", "3.4")
            }
        }
    }

    describe("project with dependency") {

        context("project with dependency and version in dependency management") {
            val pom = getTestDirectory("managingVersions/viaDependencyManagement").resolve("b.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and version is \${project.version}") {
            val pom = getPom("versionIsProjectVersion.pom")
            testProjectVersionWithExampleA(tempFolder, pom, testee)
        }

        context("project with parent dependency") {
            val pom = getTestDirectory("parentRelations/parent").resolve("b.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and version in property") {
            val pom = getTestDirectory("managingVersions/viaProperty").resolve("b.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and version in property which is \${project.version}") {
            val pom = getPom("propertyIsProjectVersion.pom")
            testProjectVersionWithExampleA(tempFolder, pom, testee)
        }

        context("project with dependency and version in property which is in different profiles") {
            val pom = getPom("propertiesInProfile.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and empty <properties>") {
            val pom = getPom("emptyProperties.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project which has a property which is built up by another property but not the one we want to update") {
            val pom = getPom("propertyWithProperty.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and dependency in exclusion of other dependency as well") {
            val pom = getPom("dependencyInExclusion.pom")
            testWithExampleA(testee, tempFolder, pom)
        }

        context("project with dependency and dependency in exclusion of other managed dependency as well") {
            val pom = getPom("dependencyInExclusionOfDependencyManagement.pom")
            testWithExampleA(testee, tempFolder, pom)
        }
    }
})

private fun Suite.testSameVersionThrowsIllegalArgumentException(
    pomName: String,
    tempFolder: Path,
    testee: RegexBasedVersionUpdater
) {
    val errMessage = "Version is already up-to-date; did you pass wrong argument for newVersion?"
    it("throws an IllegalArgumentException, mentioning `$errMessage`") {
        val pom = getPom(pomName)
        val tmpPom = copyPom(tempFolder, pom)
        expect {
            updateDependency(testee, tmpPom, exampleA)
        }.toThrow<IllegalArgumentException> { message { contains(errMessage, exampleA.releaseVersion) } }
    }
}

private fun Suite.testProjectVersionWithExampleA(
    tempFolder: Path,
    pom: Path,
    testee: RegexBasedVersionUpdater
) {
    context("dependency shall be updated, same version") {
        it("nevertheless replaces \${project.version} with the current version") {
            val tmpPom = copyPom(tempFolder, pom)
            updateDependency(testee, tmpPom, exampleA, "1.0.0")
            assertSameAsBeforeAfterReplace(tmpPom, pom, "\${project.version}", "1.0.0")
        }
    }

    context("dependency shall be updated, new version") {
        it("replaces \${project.version} with the new version") {
            val tmpPom = copyPom(tempFolder, pom)
            updateDependency(testee, tmpPom, exampleA)
            assertSameAsBeforeAfterReplace(tmpPom, pom, "\${project.version}", "1.1.1")
        }
    }
}

private fun Suite.testWithExampleA(
    testee: RegexBasedVersionUpdater,
    tempFolder: Path,
    pom: Path
) {
    context("dependency shall be updated, new version") {
        it("updates the property") {
            val tmpPom = copyPom(tempFolder, pom)
            updateDependency(testee, tmpPom, exampleA)
            assertSameAsBeforeAfterReplace(tmpPom, pom, "1.0.0", "1.1.1")
        }
    }
}

fun copyPom(tempFolder: Path, pom: Path): Path {
    val tmpPom = tempFolder.resolve("pom.xml")
    tmpPom.writeBytes(pom.readAllBytes())
    return tmpPom
}

private fun getPom(pomName: String): Path =
    Paths.get(RegexBasedVersionUpdaterSpec.javaClass.getResource("/$pomName").toURI())

private fun updateDependency(testee: RegexBasedVersionUpdater, tmpPom: Path, project: IdAndVersions) {
    updateDependency(testee, tmpPom, project, project.releaseVersion)
}

private fun updateDependency(
    testee: RegexBasedVersionUpdater,
    tmpPom: Path,
    project: IdAndVersions,
    oldVersion: String
) {
    testee.updateDependency(tmpPom, project.id.groupId, project.id.artifactId, oldVersion)
}

