package ch.loewenfels.depgraph.runner.console

import ch.loewenfels.depgraph.runner.commands.ConsoleCommand

import ch.loewenfels.depgraph.runner.commands.Man
fun dispatch(
    args: Array<out String?>,
    errorHandler: ErrorHandler,
    commandsList: List<ConsoleCommand>
) {
    if (commandsList.isEmpty()) {
        errorHandler.error("Main is misconfigured, no commands provided for dispatch")
    }

    val commandsBeforeMan = commandsList.associateBy { it.name }
    val manCommand = Man(commandsBeforeMan)
    if (args.isEmpty()) {
        errorHandler.error("No arguments supplied.\n\n${manCommand.showAllCommands()}")
    }
    val commandName = args[0]
    //TODO change to isNullOrBlank with Kotlin 1.3 where smart cast for isNullOrBlank should be supported
    if (commandName == null || commandName.isBlank()) {
        errorHandler.error(
            "The first argument needs to be specified, null or a blank given." +
                "\n\n${manCommand.showAllCommands()}"
        )
    }

    val nonBlankArgs = args.asSequence()
        .filterNotNull()
        .toList()
        .toTypedArray()

    val command = if (commandName == Man.name) {
        manCommand
    } else {
        manCommand.getCommand(commandName, errorHandler)
    }

    if (command.numOfArgsNotOk(nonBlankArgs.size)) {
        errorHandler.error(
            """
            |Not enough or too many arguments supplied for command: ${command.name}
            |
            |${expectedArgsAndGiven(command, nonBlankArgs)}
            |
            |Following an example:
            |${command.example}
            """.trimMargin()
        )
    }

    command.execute(nonBlankArgs, errorHandler)

}
