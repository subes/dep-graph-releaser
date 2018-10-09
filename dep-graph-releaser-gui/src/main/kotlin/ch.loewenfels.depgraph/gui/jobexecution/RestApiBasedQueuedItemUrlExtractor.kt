package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.regex.NONE_OR_SOME_CHARS
import org.w3c.fetch.Response
import kotlin.browser.window
import kotlin.js.Promise

class RestApiBasedQueuedItemUrlExtractor(private val identifyingParams: Map<String, String>) : QueuedItemUrlExtractor {

    override fun extract(
        authData: AuthData,
        response: Response,
        jobExecutionData: JobExecutionData
    ): Promise<String?> {

        // We somehow have to get the build number. Unfortunately it is not returned by M2Plugin from the POST request
        // (also not in header) that is why we browse the Jenkins queue and search for a match
        // based on the given identifyingParams.
        val jenkinsBaseUrl = jobExecutionData.jobBaseUrl.substringBefore("/job/")
        val t = jobExecutionData.jobBaseUrl.substringAfter("/job/")
        val jobName = if (t.endsWith("/")) t.substringBeforeLast("/") else t
        val headers = createHeaderWithAuthAndCrumb(authData)
        val init = createGetRequest(headers)
        val paramsIdentification = createParameterRegexPattern(identifyingParams)

        return window.fetch("$jenkinsBaseUrl/queue/api/xml", init)
            .then(::checkStatusOk)
            .then { (_, body) ->
                val queuedItemRegex = Regex(
                    "<item>$NONE_OR_SOME_CHARS" +
                        paramsIdentification +
                        "<task>$NONE_OR_SOME_CHARS<name>$jobName</name>$NONE_OR_SOME_CHARS</task>$NONE_OR_SOME_CHARS" +
                        "<url>([^<]+)</url>$NONE_OR_SOME_CHARS" +
                    "</item>"
                )
                val matchResult = queuedItemRegex.find(body)
                if (matchResult != null) {
                    jenkinsBaseUrl + "/" + matchResult.groupValues[1]
                } else {
                    null
                }
            }
    }
}
