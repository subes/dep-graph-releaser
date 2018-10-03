package ch.loewenfels.depgraph.runner.console


import java.nio.file.Path
import java.nio.file.Paths

object OnlyFolderAndSubFolderPathVerifier : PathVerifier {
    override fun path(path: String, fileDescription: String): Path {
        require(!path.contains("..")) {
            "Using `..` in the path of the $fileDescription is prohibited due to security reasons." +
                "\nPath: $path"
        }
        val secureFile = Paths.get(path).toAbsolutePath().normalize()
        require(secureFile.startsWith(Paths.get("").toAbsolutePath().normalize())) {
            "$fileDescription is neither a relative path nor " +
                "an absolute path pointing to the same folder (or sub folder) where this command is executed." +
                "\nPath: $path"
        }
        return secureFile
    }
}
