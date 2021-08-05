enum REPLACE_COMMAND {
    name = "//replace",
}

const replaceCmd = new Command(REPLACE_COMMAND.name, false);

replaceCmd.execute((args) => {
    const findBlock: any[] = args[1].split(":");

    Replacement.replace(
        { id: findBlock[0], data: findBlock[1] },
        Player.getCarriedItem()
    );
});
