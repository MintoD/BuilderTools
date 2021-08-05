/// <reference path="./Command.ts" />

enum ID_COMMAND {
    name = "//id"
}

const idCmd = new Command(ID_COMMAND.name, false);

idCmd.execute(() => {
    Game.tipMessage(
        `ID: ${Player.getCarriedItem().id}:${Player.getCarriedItem().data}`
    );
});
