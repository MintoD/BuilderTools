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

    /*if(Selector.pos1.x == undefined || Selector.pos2.x == undefined) {
        Game.message(Native.Color.DARK_RED + "Please select the position first");
        return;
    }*/

    FILL_COMMAND.callback(Player.getCarriedItem());
});
