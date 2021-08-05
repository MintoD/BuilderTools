enum WAND_COMMAND {
    name = "//wand",
};

const wandCmd = new Command(WAND_COMMAND.name, false);

wandCmd.execute(() => {
    Player.addItemToInventory(Item.getNumericId(WAND.stringID), 1, 0);
});
