/// <reference path="./Command.ts" />

enum CLEAR_INVENTORY_COMMAND {
    name = "//clearinventory",
    alias = "//clrinv",
}

const clrInvCmd = new Command(
    CLEAR_INVENTORY_COMMAND.name,
    true,
    CLEAR_INVENTORY_COMMAND.alias
);

clrInvCmd.execute(() => {
    for (let i = 0; i < 36; i++) {
        Player.setInventorySlot(i, 0, 0, 0);
    }
});
