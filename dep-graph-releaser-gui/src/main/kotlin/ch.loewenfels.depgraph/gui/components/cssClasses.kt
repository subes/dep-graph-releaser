package ch.loewenfels.depgraph.gui.components

import org.w3c.dom.HTMLElement
import kotlin.dom.hasClass

const val DEACTIVATED_CSS_CLASS = "deactivated"
const val DISABLED_CSS_CLASS = "disabled"

fun HTMLElement.isDeactivated() = hasClass(DEACTIVATED_CSS_CLASS)
fun HTMLElement.isNotDeactivated() = !isDeactivated()

fun HTMLElement.isDisabled() = hasClass(DISABLED_CSS_CLASS)
fun HTMLElement.isNotDisabled() = !isDisabled()
