const HELP_COMMAND = {
    cmdName: "//help",
    callback: () => {
        Game.message("//help To see the list of commands\n//wand To get the builder wand\n//id To get the ID of item that you are carrying\n//fill Use the ID of the block held by you");
    }
}

Callback.addCallback("NativeCommand", (command) => {
    const cmd = command.split(" ");

    if(cmd[0] !== HELP_COMMAND.cmdName) {
        return;
    }

    HELP_COMMAND.callback();
});
