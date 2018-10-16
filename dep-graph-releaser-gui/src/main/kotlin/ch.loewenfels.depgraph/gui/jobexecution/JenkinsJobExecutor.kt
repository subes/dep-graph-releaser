package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.gui.*
import ch.loewenfels.depgraph.gui.components.Messages.Companion.showInfo
import ch.loewenfels.depgraph.gui.jobexecution.exceptions.JobNotTriggeredException
import ch.loewenfels.depgraph.gui.jobexecution.exceptions.PollTimeoutException
import org.w3c.fetch.Response
import kotlin.browser.window
import kotlin.js.Promise

class JenkinsJobExecutor : JobExecutor {

    override fun trigger(
        jobExecutionData: JobExecutionData,
        jobQueuedHook: (queuedItemUrl: String?) -> Promise<*>,
        jobStartedHook: (buildNumber: Int) -> Promise<*>,
        pollEverySecond: Int,
        maxWaitingTimeForCompletenessInSeconds: Int,
        verbose: Boolean
    ): Promise<Pair<CrumbWithId?, Int>> {
        val jobName = jobExecutionData.jobName
        return issueCrumb(jobExecutionData).then { crumbWithId: CrumbWithId? ->
            triggerJob(crumbWithId, jobExecutionData)
                .then(::checkStatusIgnoreOpaqueRedirect)
                .catch<Pair<Response, String>> {
                    throw JobNotTriggeredException(
                        "Could not trigger the job $jobName." +
                            "\nPlease visit ${jobExecutionData.jobBaseUrl} to see if it was triggered nonetheless." +
                            "\nYou can manually set the command to Succeeded if the job was triggered/executed and ended successfully."
                        , it
                    )
                }.then { (response, _) ->
                    jobExecutionData.queuedItemUrlExtractor.extract(crumbWithId, response, jobExecutionData)
                }.then { nullableQueuedItemUrl: String? ->
                    showInfoQueuedItemIfVerbose(verbose, nullableQueuedItemUrl, jobName)
                    val queuedItemUrl = getQueuedItemUrlOrNull(nullableQueuedItemUrl)
                    jobQueuedHook(queuedItemUrl).then {
                        startOrResumeFromExtractBuildNumber(
                            jobExecutionData,
                            nullableQueuedItemUrl,
                            jobStartedHook,
                            pollEverySecond,
                            maxWaitingTimeForCompletenessInSeconds,
                            crumbWithId,
                            verbose
                        )
                    }
                }
        }.unwrap3Promise()
    }

    private fun issueCrumb(jobExecutionData: JobExecutionData): Promise<CrumbWithId?> {
        val jenkinsBaseUrl = jobExecutionData.getJenkinsBaseUrl()
        return issueCrumb(jenkinsBaseUrl)
    }

    private fun startOrResumeFromExtractBuildNumber(
        jobExecutionData: JobExecutionData,
        nullableQueuedItemUrl: String?,
        jobStartedHook: (buildNumber: Int) -> Promise<*>,
        pollEverySecond: Int,
        maxWaitingTimeForCompletenessInSeconds: Int,
        crumbWithId: CrumbWithId?,
        verbose: Boolean
    ): Promise<Pair<CrumbWithId?, Int>> {
        return extractBuildNumber(nullableQueuedItemUrl, crumbWithId, jobExecutionData).then { buildNumber: Int ->
            if (verbose) {
                showInfo(
                    "${jobExecutionData.jobName} started with build number $buildNumber, wait for completion...",
                    2 * SECOND
                )
            }
            jobStartedHook(buildNumber).then {
                pollJobForCompletion(
                    crumbWithId,
                    jobExecutionData,
                    buildNumber,
                    pollEverySecond,
                    maxWaitingTimeForCompletenessInSeconds
                )
            }
        }.unwrap2Promise()
    }

    private fun getQueuedItemUrlOrNull(nullableQueuedItemUrl: String?) =
        if (nullableQueuedItemUrl != null) "${nullableQueuedItemUrl}api/xml/" else null

    private fun triggerJob(crumbWithId: CrumbWithId?, jobExecutionData: JobExecutionData): Promise<Response> {
        val headers = createHeaderWithCrumb(crumbWithId)
        headers["content-type"] = "application/x-www-form-urlencoded; charset=utf-8"
        val init = createRequestInit(jobExecutionData.body, RequestVerb.POST, headers)
        return window.fetch(jobExecutionData.jobTriggerUrl, init)
    }

    private fun showInfoQueuedItemIfVerbose(verbose: Boolean, nullableQueuedItemUrl: String?, jobName: String) {
        if (verbose) {
            if (nullableQueuedItemUrl != null) {
                showInfo(
                    "Queued $jobName successfully, wait for execution...\nQueued item URL: ${nullableQueuedItemUrl}api/xml",
                    2 * SECOND
                )
            } else {
                showInfo(
                    "$jobName is probably already running (queued item could not be found), trying to fetch execution number from Job history.",
                    2 * SECOND
                )
            }
        }
    }

    private fun extractBuildNumber(
        nullableQueuedItemUrl: String?,
        crumbWithId: CrumbWithId?,
        jobExecutionData: JobExecutionData
    ): Promise<Int> =
        if (nullableQueuedItemUrl != null) {
            QueuedItemBasedBuildNumberExtractor(crumbWithId, nullableQueuedItemUrl).extract()
        } else {
            BuildHistoryBasedBuildNumberExtractor(crumbWithId, jobExecutionData).extract()
        }

    override fun rePollQueueing(
        jobExecutionData: JobExecutionData,
        queuedItemUrl: String,
        jobStartedHook: (buildNumber: Int) -> Promise<*>,
        pollEverySecond: Int,
        maxWaitingTimeForCompletenessInSeconds: Int
    ): Promise<Pair<CrumbWithId?, Int>> {
        return issueCrumb(jobExecutionData).then { crumbWithId ->
            startOrResumeFromExtractBuildNumber(
                jobExecutionData,
                queuedItemUrl,
                jobStartedHook,
                pollEverySecond,
                maxWaitingTimeForCompletenessInSeconds,
                crumbWithId,
                verbose = false
            )
        }.unwrapPromise()
    }

    override fun rePoll(
        jobExecutionData: JobExecutionData,
        buildNumber: Int,
        pollEverySecond: Int,
        maxWaitingTimeForCompletenessInSeconds: Int
    ): Promise<Pair<CrumbWithId?, Int>> {
        val jenkinsBaseUrl = jobExecutionData.getJenkinsBaseUrl()
        return issueCrumb(jenkinsBaseUrl).then { crumbWithId ->
            pollJobForCompletion(
                crumbWithId,
                jobExecutionData,
                buildNumber,
                pollEverySecond,
                maxWaitingTimeForCompletenessInSeconds
            )
        }.unwrapPromise()
    }


    private fun pollJobForCompletion(
        crumbWithId: CrumbWithId?,
        jobExecutionData: JobExecutionData,
        buildNumber: Int,
        pollEverySecond: Int,
        maxWaitingTimeForCompletenessInSeconds: Int
    ): Promise<Pair<CrumbWithId?, Int>> {
        return sleep(pollEverySecond * HALF_A_SECOND) {
            pollAndExtract(
                crumbWithId,
                "${jobExecutionData.jobBaseUrl}$buildNumber/api/xml",
                resultRegex,
                pollEverySecond,
                maxWaitingTimeForCompletenessInSeconds,
                errorHandler = { e -> throw e }
            )
                .then { result -> buildNumber to result }
                .then { (buildNumber, result) ->
                    check(result == SUCCESS) {
                        "${jobExecutionData.jobName} failed, job did not end with status $SUCCESS but $result." +
                            "\nVisit ${jobExecutionData.jobBaseUrl}$buildNumber/$END_OF_CONSOLE_URL_SUFFIX for further information"
                    }
                    crumbWithId to buildNumber
                }
        }.unwrapPromise()
    }

    override fun pollAndExtract(
        crumbWithId: CrumbWithId?,
        url: String,
        regex: Regex,
        pollEverySecond: Int,
        maxWaitingTimeInSeconds: Int,
        errorHandler: (PollTimeoutException) -> Nothing
    ): Promise<String> =
        Poller.pollAndExtract(crumbWithId, url, regex, pollEverySecond, maxWaitingTimeInSeconds, errorHandler)

    companion object {
        private val resultRegex = Regex("<result>([A-Z]+)</result>")
        private const val SUCCESS = "SUCCESS"
    }
}
