package ch.loewenfels.depgraph

import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.jobexecution.BuildWithParamFormat


fun parseRemoteRegex(releasePlan: ReleasePlan) =
    parseRemoteRegex(releasePlan.getConfig(ConfigKey.REMOTE_REGEX))

fun parseRemoteRegex(regex: String): List<Pair<Regex, String>> {
    return parseRegex(regex, "remoteRegex", ::requireHttpsDefined) { it }
}

fun parseRegexParameters(releasePlan: ReleasePlan) =
    parseRegexParameters(releasePlan.getConfig(ConfigKey.REGEX_PARAMS))

fun parseRegexParameters(regex: String): List<Pair<Regex, List<String>>> {
    return parseRegex(regex, "regexParameters", ::requireAtLeastOneParameter) { params ->
        params.split(';')
    }
}

fun parseBuildWithParamJobs(releasePlan: ReleasePlan) =
    parseBuildWithParamJobs(releasePlan.getConfig(ConfigKey.BUILD_WITH_PARAM_JOBS))

fun parseBuildWithParamJobs(regex: String): List<Pair<Regex, BuildWithParamFormat>> {
    return parseRegex(regex, "buildWithParamJobs", ::requireFormatAndNames, ::createBuildWithParamFormat)
}

private fun <T> parseRegex(
    configValue: String,
    name: String,
    requireRightSideToBe: (String, String) -> Unit,
    rightSideConverter: (String) -> T
): List<Pair<Regex, T>> {
    val trimmedValue = configValue.trim()
    return if (trimmedValue.isNotEmpty()) {
        val mutableList = mutableListOf<Pair<Regex, T>>()
        var startIndex = 0
        var endRegex = trimmedValue.indexOf('#', startIndex)
        checkEntryHasHash(endRegex, name, trimmedValue)
        while (endRegex >= 0) {
            checkRegexNotEmpty(endRegex, name, trimmedValue)
            val regex = getUnescapedRegex(trimmedValue, startIndex, endRegex)
            val (endRightSide, rightSide) = getRightSide(trimmedValue, endRegex)
            requireRightSideToBe(rightSide, trimmedValue)
            mutableList.add(regex to rightSideConverter(rightSide))
            startIndex = endRightSide + 1
            endRegex = trimmedValue.indexOf('#', startIndex)
            if (startIndex < trimmedValue.length) {
                checkEntryHasHash(endRegex, name, trimmedValue.substring(startIndex))
            }
        }
        mutableList
    } else {
        emptyList()
    }
}

private fun checkEntryHasHash(endRegex: Int, name: String, configValue: String) {
    require(endRegex >= 0) { "You forgot to separate regex from the rest with #\n$name: $configValue" }
}

private fun getUnescapedRegex(value: String, startIndex: Int, endRegex: Int): Regex {
    val regexEscaped = value.substring(startIndex, endRegex)
    return Regex(regexEscaped.replace(Regex("([ \t\\n])"), ""))
}

private fun getRightSide(value: String, endRegex: Int): Pair<Int, String> {
    val indexOf = value.indexOf("\n", endRegex)
    val endRightSide = if (indexOf < 0) value.length else indexOf
    val rightSide = value.substring(endRegex + 1, endRightSide)
    return Pair(endRightSide, rightSide)
}

private fun checkRegexNotEmpty(index: Int, name: String, input: String) {
    require(index > 0) {
        "regex requires at least one character.\n$name: $input"
    }
}

private fun requireHttpsDefined(jenkinsBaseUrl: String, remoteRegex: String) {
    require(jenkinsBaseUrl.startsWith("https")) {
        "A remoteRegex requires a related jenkins base url which starts with https.\nremoteRegex: $remoteRegex"
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

private fun createBuildWithParamFormat(formatAndNames: String): BuildWithParamFormat {
    val (format, namesAsString) = formatAndNames.split('#')
    return when (format) {
        "query" -> {
            val (releaseVersion, nextDevVersion) = namesAsString.split(';')
            BuildWithParamFormat.Query(releaseVersion, nextDevVersion)
        }
        "maven" -> {
            val (releaseVersion, nextDevVersion, parameterName) = namesAsString.split(';')
            BuildWithParamFormat.Maven(releaseVersion, nextDevVersion, parameterName)
        }
        else -> throw IllegalArgumentException("Illegal format $format")
    }
}
