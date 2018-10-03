package ch.loewenfels.depgraph.runner.console

import java.nio.file.Path

interface PathVerifier {
    fun path(path: String, fileDescription: String): Path
}
