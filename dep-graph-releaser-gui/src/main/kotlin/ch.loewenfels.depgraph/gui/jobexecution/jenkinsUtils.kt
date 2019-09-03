package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.regex.NONE_OR_SOME_CHARS

fun createParameterRegexPattern(parameters: Map<String, String>): String =
    parameters.entries.joinToString(NONE_OR_SOME_CHARS) { (k, v) ->
        "<parameter$NONE_OR_SOME_CHARS" +
            "<name>$k</name>$NONE_OR_SOME_CHARS" +
            "<value>$v</value>$NONE_OR_SOME_CHARS" +
            "</parameter>$NONE_OR_SOME_CHARS"
    }

fun toQueryParameters(parameters: Map<String, String>): String =
    parameters.entries.joinToString("&") { (k, v) -> "$k=$v" }

const val END_OF_CONSOLE_URL_SUFFIX = "console#footer"
