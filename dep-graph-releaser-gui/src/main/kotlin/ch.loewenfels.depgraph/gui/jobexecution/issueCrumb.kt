package ch.loewenfels.depgraph.gui.jobexecution

import org.w3c.fetch.Response
import kotlin.browser.window
import kotlin.js.Promise

fun issueCrumb(jenkinsBaseUrl: String): Promise<CrumbWithId?> {
    val url = "$jenkinsBaseUrl/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,\":\",//crumb)"
    val init = createGetRequest(null)
    return window.fetch(url, init)
        .then(::checkStatusOkOr404)
        .catch<Pair<Response, String?>> {
            throw IllegalStateException("Cannot issue a crumb", it)
        }.then { (_, crumbWithIdString) ->
            crumbWithIdString?.let {
                val (id, crumb) = it.split(':')
                CrumbWithId(id, crumb)
            }
        }
}

