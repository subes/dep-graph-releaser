package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.gui.components.Messages.Companion.showThrowable
import org.w3c.fetch.Response
import kotlin.browser.window
import kotlin.js.Promise

object UsernameTokenRegistry {

    private val fullNameRegex = Regex("<input[^>]+name=\"_\\.fullName\"[^>]+value=\"([^\"]+)\"")
    private val usernameRegex = Regex("<a[^>]+href=\"[^\"]*/user/([^\"]+)\"")

    private val usernameTokens = hashMapOf<String, String>()

    fun forHost(jenkinsBaseUrl: String): String? = usernameTokens[urlWithoutEndingSlash(jenkinsBaseUrl)]

    private fun urlWithoutEndingSlash(jenkinsBaseUrl: String): String {
        return if (jenkinsBaseUrl.endsWith("/")) {
            jenkinsBaseUrl.substring(0, jenkinsBaseUrl.length - 1)
        } else {
            jenkinsBaseUrl
        }
    }


    /**
     * Retrieves the API token of the logged in user at [jenkinsBaseUrl] and registers it, moreover it returns the name
     * of the user in the same request (the name is not stored though).
     *
     * @return A pair consisting of the name and the username of the logged in user.
     */
    fun register(jenkinsBaseUrl: String): Promise<Pair<String, String>?> =
        retrieveUserAndApiTokenAndSaveToken(jenkinsBaseUrl)

    private fun retrieveUserAndApiTokenAndSaveToken(
        jenkinsBaseUrl: String
    ): Promise<Pair<String, String>?> {
        val urlWithoutSlash = urlWithoutEndingSlash(jenkinsBaseUrl)
        return window.fetch("$urlWithoutSlash/me/configure", createFetchInitWithCredentials())
            .then(::checkStatusOkOr403)
            .catch<Pair<Response, String?>?> { t ->
                errorHandling(urlWithoutSlash, t)
            }
            .then { pair ->
                val body = pair?.second
                if (body == null) {
                    null
                } else {
                    val (username, name) = extractNameAndApiToken(body)
                    usernameTokens[urlWithoutSlash] = username
                    name to username
                }
            }.catch { t ->
                errorHandling(urlWithoutSlash, t)
            }
    }

    private fun errorHandling(urlWithoutSlash: String, t: Throwable): Nothing? {
        showThrowable(Error("Could not verify login (and retrieve user) for $urlWithoutSlash", t))
        return null
    }


    private fun extractNameAndApiToken(body: String): Pair<String, String> {
        val usernameMatch = usernameRegex.find(body) ?: throwCouldNotFind("username", body)
        val fullNameMatch = fullNameRegex.find(body) ?: throwCouldNotFind("user's name", body)
        return usernameMatch.groupValues[1] to fullNameMatch.groupValues[1]
    }

    private fun throwCouldNotFind(what: String, body: String): Nothing =
        throw IllegalStateException("Could not find $what in response.\n$body")
}
