package ch.loewenfels.depgraph.gui.components

import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.gui.elementById
import ch.loewenfels.depgraph.gui.jobexecution.checkStatusOkOr403
import ch.loewenfels.depgraph.gui.jobexecution.createFetchInitWithCredentials
import ch.loewenfels.depgraph.parseRemoteRegex
import org.w3c.fetch.Response
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.hasClass
import kotlin.dom.removeClass
import kotlin.js.Promise

class Login(private val defaultJenkinsBaseUrl: String?) {

    fun retrieveUserAndApiToken(): Promise<String?> {
        return if (defaultJenkinsBaseUrl == null) {
            disableButtonsDueToNoPublishUrl()
            Promise.resolve(null as String?)
        } else {
            register(defaultJenkinsBaseUrl).then { pair ->
                if (pair == null) {
                    disableButtonsDueToNoAuth(
                        "You need to log in if you want to use this functionality.",
                        "You need to log in if you want to use all functionality and not only a limited set." +
                            "\n$defaultJenkinsBaseUrl/login?from=" + window.location
                    )
                    null
                } else {
                    val (name, usernameToken) = pair
                    setVerifiedUser(name)
                    updateUserToolTip(defaultJenkinsBaseUrl, pair)
                    usernameToken
                }
            }
        }
    }


    /**
     * Retrieves the API token of the logged in user at [jenkinsBaseUrl] and registers it, moreover it returns the name
     * of the user in the same request (the name is not stored though).
     *
     * @return A pair consisting of the name and the username of the logged in user.
     */
    private fun register(jenkinsBaseUrl: String): Promise<Pair<String, String>?> =
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
        Messages.showThrowable(Error("Could not verify login (and retrieve user) for $urlWithoutSlash", t))
        return null
    }


    private fun extractNameAndApiToken(body: String): Pair<String, String> {
        val usernameMatch = usernameRegex.find(body) ?: throwCouldNotFind("username", body)
        val fullNameMatch = fullNameRegex.find(body) ?: throwCouldNotFind("user's name", body)
        return usernameMatch.groupValues[1] to fullNameMatch.groupValues[1]
    }

    private fun throwCouldNotFind(what: String, body: String): Nothing =
        throw IllegalStateException("Could not find $what in response.\n$body")

    fun loadOtherApiTokens(releasePlan: ReleasePlan): Promise<*> {
        val remoteRegex = parseRemoteRegex(releasePlan)
        val mutableList = ArrayList<Promise<*>>(remoteRegex.size)

        remoteRegex.forEach { (_, remoteJenkinsBaseUrl) ->
            val promise = if (isUrlAndNotYetRegistered(remoteJenkinsBaseUrl)) {
                register(remoteJenkinsBaseUrl).then { pair ->
                    updateUserToolTip(remoteJenkinsBaseUrl, pair)
                    if (pair == null) {
                        setHalfVerified(defaultJenkinsBaseUrl, remoteJenkinsBaseUrl)
                    }
                }
            } else {
                Promise.resolve(Unit)
            }
            mutableList.add(promise)
        }
        return Promise.all(mutableList.toTypedArray())
    }

    private fun isUrlAndNotYetRegistered(remoteJenkinsBaseUrl: String) =
        remoteJenkinsBaseUrl.startsWith("http") && forHost(remoteJenkinsBaseUrl) == null

    private fun forHost(jenkinsBaseUrl: String): String? = usernameTokens[urlWithoutEndingSlash(jenkinsBaseUrl)]

    private fun urlWithoutEndingSlash(jenkinsBaseUrl: String): String {
        return if (jenkinsBaseUrl.endsWith("/")) {
            jenkinsBaseUrl.substring(0, jenkinsBaseUrl.length - 1)
        } else {
            jenkinsBaseUrl
        }
    }

    private fun updateUserToolTip(url: String, pair: Pair<String, String>?) {
        appendToUserButtonToolTip(url, pair?.second ?: "Anonymous", pair?.first)
    }

    private fun disableButtonsDueToNoPublishUrl() {
        val titleButtons =
            "You need to specify &publishJob if you want to use other functionality than Download and Explore Release Order."
        disableButtonsDueToNoAuth(
            titleButtons, titleButtons +
                "\nAn example: ${window.location}&publishJob=jobUrl" +
                "\nwhere you need to replace jobUrl accordingly."
        )
    }

    private fun disableButtonsDueToNoAuth(titleButtons: String, info: String) {
        Messages.showInfo(info)
        userButton.title = titleButtons
        userButton.addClass(DEACTIVATED_CSS_CLASS)
        userName.innerText = "Anonymous"
        userIcon.innerText = "error"
        Menu.disableButtonsDueToNoAuth(titleButtons)
    }

    private fun setVerifiedUser(name: String) {
        userName.innerText = name
        userIcon.innerText = "verified_user"
        userButton.removeClass(DEACTIVATED_CSS_CLASS)
    }

    private fun setHalfVerified(defaultJenkinsBaseUrl: String?, remoteJenkinsBaseUrl: String) {
        if (!userButton.hasClass(DEACTIVATED_CSS_CLASS)) {
            userIcon.innerText = "error"
            userButton.addClass("warning")
            Messages.showWarning(
                "You are not logged in at $remoteJenkinsBaseUrl.\n" +
                    "You can perform a Dry Run (runs on $defaultJenkinsBaseUrl) but a release involving the remote jenkins will most likely fail.\n\n" +
                    "Go to the log in: $remoteJenkinsBaseUrl/login?from=" + window.location
            )
        }
    }

    private fun appendToUserButtonToolTip(url: String, username: String, name: String?) {
        val nameSuffix = if (name != null) " ($name)" else ""
        userButton.title += "\nLogged in as $username$nameSuffix @ $url"
    }

    companion object {
        private val userButton get() = elementById("user")
        private val userIcon get() = elementById("user.icon")
        private val userName get() = elementById("user.name")

        private val fullNameRegex = Regex("<input[^>]+name=\"_\\.fullName\"[^>]+value=\"([^\"]+)\"")
        private val usernameRegex = Regex("<a[^>]+href=\"[^\"]*/user/([^\"]+)\"")

        private val usernameTokens = hashMapOf<String, String>()
    }
}
