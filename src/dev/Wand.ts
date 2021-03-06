/*
  ____        _ _     _        _______          _     
 |  _ \      (_) |   | |      |__   __|        | |    
 | |_) |_   _ _| | __| | ___ _ __| | ___   ___ | |___ 
 |  _ <| | | | | |/ _` |/ _ \ '__| |/ _ \ / _ \| / __|
 | |_) | |_| | | | (_| |  __/ |  | | (_) | (_) | \__ \
 |____/ \__,_|_|_|\__,_|\___|_|  |_|\___/ \___/|_|___/
                                        by MintoD
*/

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
