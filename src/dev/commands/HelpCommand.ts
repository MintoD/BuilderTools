/// <reference path="./Command.ts" />

enum HELP_COMMAND {
    name = "//help",
    alias = "//h",
}

const helpCmd = new Command(HELP_COMMAND.name, true, HELP_COMMAND.alias);

helpCmd.execute(() => {
    Game.message(
        "//help To see the list of commands\n//wand To get the builder wand\n//id To get the ID of item that you are carrying\n//fill To fill the selected area\n//replace To replace blocks in selected area"
    );
});
