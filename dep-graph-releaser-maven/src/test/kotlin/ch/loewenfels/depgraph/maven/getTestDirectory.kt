package ch.loewenfels.depgraph.maven

import java.nio.file.Path
import java.nio.file.Paths

fun getTestDirectory(name: String): Path = Paths.get(IntegrationSpec.javaClass.getResource("/$name/").toURI())
