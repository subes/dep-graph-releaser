package ch.loewenfels.depgraph.gui.components

import ch.loewenfels.depgraph.gui.addClickEventListener
import ch.loewenfels.depgraph.gui.components.Messages.Companion.convertNewLinesToBrTabToTwoSpacesAndParseUrls
import ch.loewenfels.depgraph.gui.elementById
import ch.loewenfels.depgraph.gui.getUnderlyingHtmlElement
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.div
import org.w3c.dom.HTMLElement
import kotlin.browser.window
import kotlin.js.Promise

fun showDialog(msg: String): Promise<Boolean> {
    return Promise { resolve, _ ->
        showModal(msg) { box ->
            modalButton("Yes", box, resolve, true)
            modalButton("No", box, resolve, false)
        }
    }
}

fun showAlert(msg: String): Promise<Unit> {
    return Promise { resolve, _ ->
        showModal(msg) { box ->
            modalButton("OK", box, resolve, Unit)
        }
    }
}

fun showOutput(title: String, output: String): Promise<Unit> {
    return Promise { resolve, _ ->
        showModal(
            {
                div("output") {
                    i("material-icons") { +"list_alt" }; span { +title }
                    textArea { +output }
                }
            },
            { box -> modalButton("OK", box, resolve, Unit) }
        )
    }
}

private fun <T> DIV.modalButton(buttonText: String, box: HTMLElement, resolve: (T) -> Unit, objectToResolve: T) {
    span {
        +buttonText
        getUnderlyingHtmlElement().addClickEventListener(options = js("{once: true}")) {
            box.remove()
            resolve(objectToResolve)
        }
    }
}

private fun showModal(
    msg: String,
    buttonCreator: DIV.(HTMLElement) -> Unit
) = showModal(
    {
        i("material-icons") { +"help_outline" }
        div { convertNewLinesToBrTabToTwoSpacesAndParseUrls(msg) }
    },
    buttonCreator
)

private fun showModal(
    contentCreator: DIV.() -> Unit,
    buttonCreator: DIV.(HTMLElement) -> Unit
) {
    val modals = elementById("modals")
    modals.append {
        div("box") {
            val box = getUnderlyingHtmlElement()
            div("text") {
                contentCreator()
            }
            div("buttons") {
                buttonCreator(box)
            }
            box.style.visibility = "hidden"
        }
    }
    val box = modals.lastChild as HTMLElement
    val top = window.innerHeight / 2.5 - box.offsetHeight / 2
    val left = window.innerWidth / 2 - box.offsetWidth / 2
    box.style.top = "${top}px"
    box.style.left = "${left}px"
    box.style.visibility = "visible"
}
