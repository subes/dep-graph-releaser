package ch.loewenfels.depgraph.jobexecution

sealed class BuildWithParamFormat(protected val releaseVersionName: String, protected val nextDevVersionName: String) {

    abstract fun format(releaseVersion: String, nextDevVersion: String): Map<String, String>

    class Query(releaseVersionName: String, nextDevVersionName: String)
        : BuildWithParamFormat(releaseVersionName, nextDevVersionName) {

        override fun format(releaseVersion: String, nextDevVersion: String) =
            mapOf(releaseVersionName to releaseVersion, nextDevVersionName to nextDevVersion)

        override fun toString(): String
            = "BuildWithParamFormat.Query[rel: $releaseVersionName, dev: $nextDevVersionName]"
    }

    class Maven(releaseVersionName: String, nextDevVersionName: String, private val parameterName: String)
        : BuildWithParamFormat(releaseVersionName, nextDevVersionName) {

        override fun format(releaseVersion: String, nextDevVersion: String): Map<String, String>
            = mapOf(parameterName to "-D$releaseVersionName=$releaseVersion -D$nextDevVersionName=$nextDevVersion")

        override fun toString(): String
            = "BuildWithParamFormat.Maven[rel: $releaseVersionName, dev: $nextDevVersionName, paramName: $parameterName]"
    }
}
