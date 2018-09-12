package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.ProjectId

data class DummyProjectId(override val identifier: String) : ProjectId {
    override val typeId = TYPE_ID

    companion object {
        const val TYPE_ID = "DummyProjectId"
    }
}
