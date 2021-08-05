/// <reference path="./Command.ts" />

const A = {
    cmdName: "//fill",
    callback: (id: ItemInstance) => {
        Filler.flatFill(id)
    },
};

enum FILL_COMMAND {
    name = "//fill"
}

const fillCmd = new Command(FILL_COMMAND.name, false);

fillCmd.execute(() => {
    Filler.flatFill(Player.getCarriedItem());
});
