package ch.loewenfels.depgraph.maven

class VersionDeterminer {
    fun releaseVersion(currentVersion: String): String = when {
        currentVersion.endsWith(SNAPSHOT_SUFFIX) -> currentVersion.substringBefore(SNAPSHOT_SUFFIX)
        else -> updateLastNumber(currentVersion)
    }

    fun nextDevVersion(currentVersion: String): String {
        val releaseVersion = releaseVersion(currentVersion)
        return updateLastNumber(releaseVersion) + SNAPSHOT_SUFFIX
    }

    private fun updateLastNumber(version: String): String {
        val matchResult = LAST_NUMBER_PATTERN.find(version)
        return if (matchResult != null) {
            val number = matchResult.groupValues[2].toInt()
            if (number == 0) {
                tryToIncrementSecondLastNumber(matchResult, number)
            } else {
                incrementLastNumber(matchResult, number)
            }
        } else {
            "$version.2"
        }
    }

    private fun tryToIncrementSecondLastNumber(matchResult: MatchResult, number: Int): String {
        val secondMatchResult = LAST_NUMBER_PATTERN.find(matchResult.groupValues[1])
        return if (secondMatchResult != null) {
            with(secondMatchResult.groupValues) {
                "${get(1)}${get(2).toInt() + 1}${get(3)}$number"
            }
        } else {
            incrementLastNumber(matchResult, number)
        }
    }

    private fun incrementLastNumber(matchResult: MatchResult, number: Int) =
        "${matchResult.groupValues[1]}${number + 1}"

    companion object {
        private const val SNAPSHOT_SUFFIX = "-SNAPSHOT"
        private val LAST_NUMBER_PATTERN = Regex("(.*[\\D])?(\\d+)(.*)")
    }
}
