package ch.loewenfels.depgraph.gui.components

import ch.loewenfels.depgraph.data.ReleasePlan
import ch.loewenfels.depgraph.gui.elementById
import ch.loewenfels.depgraph.gui.jobexecution.UsernameTokenRegistry
import ch.loewenfels.depgraph.parseRemoteRegex
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
            UsernameTokenRegistry.register(defaultJenkinsBaseUrl).then { pair ->
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


    fun loadOtherApiTokens(releasePlan: ReleasePlan): Promise<*> {
        val remoteRegex = parseRemoteRegex(releasePlan)
        val mutableList = ArrayList<Promise<*>>(remoteRegex.size)

        remoteRegex.forEach { (_, remoteJenkinsBaseUrl) ->
            val promise = if (isUrlAndNotYetRegistered(remoteJenkinsBaseUrl)) {
                UsernameTokenRegistry.register(remoteJenkinsBaseUrl).then { pair ->
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
        remoteJenkinsBaseUrl.startsWith("http") && UsernameTokenRegistry.forHost(remoteJenkinsBaseUrl) == null


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
    }
}
