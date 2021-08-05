class Command {
    public commandName: string;
    public hasAlias: boolean;
    public alias: string;

    constructor(commandName: string, hashAlias: boolean, alias?: string) {
        this.commandName = commandName;
        this.hasAlias = hashAlias;
        this.alias = alias;
    }

    public execute(execFunc: Function): void {
        Callback.addCallback("NativeCommand", (command: Nullable<string>) => {
            const args: any[] = command.split(" ");
            if (this.hasAlias) {
                if (
                    args[0] == this.commandName ||
                    args[0] == this.alias
                ) {
                    execFunc(args);
                }
            } else {
                if (args[0] == this.commandName) {
                    execFunc(args);
                }
            }
        });
    }
}
