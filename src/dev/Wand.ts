enum WAND {
    stringID = "buildertools.wand",
    name = "Builder Wand",
}

IDRegistry.genItemID(WAND.stringID);

Item.createItem(
    WAND.stringID,
    WAND.name,
    {
        name: "wand",
        data: 0,
    },
    {
        stack: 1,
    }
);
