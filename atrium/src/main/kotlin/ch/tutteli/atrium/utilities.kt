package ch.tutteli.atrium

import ch.tutteli.atrium.api.cc.en_GB.toBe
import ch.tutteli.niok.readAllBytes
import ch.tutteli.niok.readText
import ch.tutteli.niok.writeBytes
import ch.tutteli.spek.extensions.TempFolder
import java.nio.file.Path

fun copyPom(tempFolder: TempFolder, pom: Path): Path {
    val tmpPom = tempFolder.newFile("pom.xml")
    tmpPom.writeBytes(pom.readAllBytes())
    return tmpPom
}

fun assertSameAsBeforeAfterReplace(tmpPom: Path, pom: Path, versionToReplace: String, newVersion: String) {
    val content = pom.readText()
    assert(tmpPom.readText()).toBe(content.replace(versionToReplace, newVersion))
}
