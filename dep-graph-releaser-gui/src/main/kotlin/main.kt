import ch.loewenfels.depgraph.gui.App
import ch.loewenfels.depgraph.gui.HALF_A_SECOND
import ch.loewenfels.depgraph.gui.SECOND
import kotlin.browser.window

@JsName("main")
fun main() {
    window.onload = { App() }
}

@Suppress("unused")
val onlyUsedToCallMain = main()

@JsName("failAfterSteps")
var failAfterSteps = 10 * SECOND

@JsName("failWithTimeout")
var failWithTimeout = false

@JsName("failDuringQueueing")
var failDuringQueueing = false

@JsName("waitBetweenSteps")
var waitBetweenSteps = HALF_A_SECOND


@JsName("stepWise")
var stepWise = false

@JsName("options")
fun options() {
    console.log(
        mapOf(
            "failAfterSteps" to failAfterSteps,
            "failWithTimeout" to failWithTimeout,
            "failDuringQueueing" to failDuringQueueing,
            "waitBetweenSteps" to waitBetweenSteps,
            "stepWise" to stepWise
        ).entries.joinToString("\n") { (k, v) -> "$k: $v" }
    )
}
