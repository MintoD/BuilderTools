const ID_COMMAND = {
    cmdName: "//id",
    callback: () => {
        Game.tipMessage(
            `ID: ${Player.getCarriedItem().id}:${Player.getCarriedItem().data}`
        );
    },
};

Callback.addCallback("NativeCommand", (cmd) => {
    const command = cmd.split(" ");

    if (command[0] == ID_COMMAND.cmdName) {
        ID_COMMAND.callback();
    }
});
