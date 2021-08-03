const FILL_COMMAND = {
    cmdName: "//fill",
    callback: (id: ItemInstance) => {
        Filler.flatFill(id)
    },
};

Callback.addCallback("NativeCommand", (cmd) => {
    const command = cmd.split(" ");

    if (command[0] !== FILL_COMMAND.cmdName) {
        return;
    }

    FILL_COMMAND.callback(Player.getCarriedItem());
});
