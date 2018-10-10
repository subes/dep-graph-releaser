package ch.loewenfels.depgraph.gui.jobexecution

import ch.loewenfels.depgraph.gui.SECOND
import ch.loewenfels.depgraph.gui.sleep
import kotlin.browser.window
import kotlin.js.Promise

object Poller {

    fun pollAndExtract(
        crumbWithId: CrumbWithId?,
        url: String,
        regex: Regex,
        pollEverySecond: Int,
        maxWaitingTimeInSeconds: Int,
        errorHandler: (PollTimeoutException) -> Nothing
    ): Promise<String> {
        return poll(PollData(crumbWithId, url, pollEverySecond, maxWaitingTimeInSeconds) { body ->
            val matchResult = regex.find(body)
            if (matchResult != null) {
                true to matchResult.groupValues[1]
            } else {
                false to null
            }
        }).catch { t ->
            if (t is PollTimeoutException) {
                errorHandler(t)
            } else {
                throw t
            }
        }
    }

    @Suppress("ThrowsCount")
    private fun <T : Any> poll(pollData: PollData<T>): Promise<T> {
        val headers = createHeaderWithCrumb(pollData.crumbWithId)
        val init = createGetRequest(headers)

        fun rePoll(body: String): T {
            if (pollData.numberOfTries * pollData.pollEverySecond >= pollData.maxWaitingTimeInSeconds) {
                throw PollTimeoutException(
                    "Waited at least ${pollData.maxWaitingTimeInSeconds} seconds",
                    body
                )
            }
            val p = sleep(pollData.pollEverySecond * SECOND) {
                poll(pollData.newWithIncreasedNumberOfTimes())
            }
            // unsafeCast is used because javascript resolves the result automatically on return
            // will not result in Promise<Promise<T>> but T
            return p.unsafeCast<T>()
        }

        return window.fetch(pollData.pollUrl, init)
            .then(::checkStatusOk)
            .then { (_, body) ->
                val (success, result) = pollData.action(body)
                if (success) {
                    result ?: throw IllegalStateException(
                        "Result was null even though success flag during polling was true." +
                            "\nPlease report a bug: $GITHUB_NEW_ISSUE"
                    )
                } else {
                    rePoll(body)
                }
            }.catch { t ->
                when (t) {
                    is PollTimeoutException -> throw t
                    is Exception -> {
                        console.log(t)
                        rePoll("")
                    }
                    else -> throw t
                }
            }
    }

    @Suppress("DataClassPrivateConstructor")
    data class PollData<T> private constructor(
        val crumbWithId: CrumbWithId?,
        val pollUrl: String,
        val pollEverySecond: Int,
        val maxWaitingTimeInSeconds: Int,
        val action: (String) -> Pair<Boolean, T?>,
        val numberOfTries: Int
    ) {
        constructor(
            crumbWithId: CrumbWithId?,
            pollUrl: String,
            pollEverySecond: Int,
            maxWaitingTimeInSeconds: Int,
            action: (String) -> Pair<Boolean, T?>
        ) : this(
            crumbWithId,
            pollUrl,
            pollEverySecond,
            maxWaitingTimeInSeconds,
            action,
            numberOfTries = 0
        )

        fun newWithIncreasedNumberOfTimes(): PollData<T> = PollData(
            crumbWithId,
            pollUrl,
            pollEverySecond,
            maxWaitingTimeInSeconds,
            action,
            numberOfTries + 1
        )
    }

}
