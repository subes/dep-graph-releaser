package ch.loewenfels.depgraph.gui.jobexecution.exceptions

class JobNotExistingException(message: String, cause: Throwable?) : IllegalStateException(message, cause){
    constructor(message: String) : this(message, null)
}

