const WAND_COMMAND = {
    cmdName: "//wand",
    callback: () => {
        Player.addItemToInventory(Item.getNumericId(WAND.stringID), 1, 0);
    },
};

Callback.addCallback("NativeCommand", (cmd) => {
    const command = cmd.split(" ");

    if (command[0] == WAND_COMMAND.cmdName) {
        WAND_COMMAND.callback();
    }
});
