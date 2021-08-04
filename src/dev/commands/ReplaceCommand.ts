const REPLACE_COMMAND = {
    cmdName: "//replace",
    callback: (findBlock: IDBlock, replaceBlock: ItemInstance) => {
        Replacement.replace(findBlock, replaceBlock);
    }
}

Callback.addCallback("NativeCommand", (command) => {
    const cmd = command.split(" ");

    if(cmd[0] !== REPLACE_COMMAND.cmdName) {
        return;
    }

    if(cmd[1] == "") {
        Game.message(Native.Color.DARK_RED + `Usage: ${REPLACE_COMMAND.cmdName} id:data id:data\n Example: //replace 1:0 2:0 It will find stone and replace it into grass`);
    }

    const findBlock = cmd[1].split(":");

    REPLACE_COMMAND.callback({id: findBlock[0], data: findBlock[1]}, Player.getCarriedItem());
});
