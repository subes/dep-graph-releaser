package ch.loewenfels.depgraph

import ch.loewenfels.depgraph.data.ReleasePlan


fun parseRemoteRegex(releasePlan: ReleasePlan) =
    parseRemoteRegex(releasePlan.getConfig(ConfigKey.REMOTE_REGEX))

fun parseRemoteRegex(regex: String): List<Pair<Regex, String>> {
    return parseRegex(regex, ';', "remoteRegex", ::requireUrlDefined) { it }
}

fun parseRegexParameters(releasePlan: ReleasePlan) =
    parseRegexParameters(releasePlan.getConfig(ConfigKey.REGEX_PARAMS))

fun parseRegexParameters(regex: String): List<Pair<Regex, List<String>>> {
    return parseRegex(regex, '$', "regexParameters", ::requireAtLeastOneParameter) { params ->
        params.split(';')
    }
}

fun parseBuildWithParamJobs(regex: String): List<Pair<Regex, Pair<String, List<String>>>> {
    return parseRegex(regex, '$', "buildWithParamJobs", ::requireFormatAndNames) { formatAndNames ->
        val (format, namesAsString) = formatAndNames.split('#')
        format to namesAsString.split(';')
    }
}

private fun <T> parseRegex(
    configValue: String,
    splitChar: Char,
    name: String,
    requireRightSideToBe: (String, String) -> Unit,
    rightSideConverter: (String) -> T
): List<Pair<Regex, T>> {
    return if (configValue.isNotEmpty()) {
        configValue.splitToSequence(splitChar)
            .map { pair ->
                val index = checkRegexNotEmpty(pair, name, configValue)
                val rightSide = pair.substring(index + 1)
                requireRightSideToBe(rightSide, configValue)
                Regex(pair.substring(0, index).replace("\n", "")) to rightSideConverter(rightSide)
            }
            .toList()
    } else {
        emptyList()
    }
}

private fun checkRegexNotEmpty(pair: String, name: String, input: String): Int {
    val index = pair.indexOf('#')
    require(index > 0) {
        "regex requires at least one character.\n$name: $input"
    }
    return index
}

private fun requireUrlDefined(jenkinsBaseUrl: String, remoteRegex: String) {
    require(jenkinsBaseUrl.isNotBlank()) {
        "A remoteRegex requires a related jenkins base url.\remoteRegex: $remoteRegex"
    }
}

private fun requireAtLeastOneParameter(pair: String, regexParameters: String) {
    val index = pair.indexOf('=')
    require(index > 0) {
        "A regexParam requires at least one parameter.\nregexParameters: $regexParameters"
    }
}

private fun requireFormatAndNames(formatAndNames: String, buildWithParamJobs: String) {
    val (format, namesAsString) = formatAndNames.split('#')
    val numOfNames = when (format) {
        "query" -> 2
        "maven" -> 3
        else -> throw IllegalArgumentException("Illegal format `$format` provided, only `query` and `maven` supported.\nbuildWithParamJobs: $buildWithParamJobs")
    }
    val names = namesAsString.split(';')
    require(names.size == numOfNames) {
        "Format `$format` requires $numOfNames names, ${names.size} given.\nbuildWithParamJobs: $buildWithParamJobs"
    }
}
