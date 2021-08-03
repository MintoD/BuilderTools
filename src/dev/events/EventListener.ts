// Select the first position
Callback.addCallback("ItemUse", (coords) => {
    const { x, y, z } = coords;

    if (Player.getCarriedItem().id == Item.getNumericId(WAND.stringID)) {
        Selector.setPos1({ x, y, z });
        Game.tipMessage(
            Native.Color.GREEN + `Selected first position at ${x}, ${y}, ${z}`
        );
    }
});

// Select the second position
Callback.addCallback("DestroyBlock", (coords, block: Tile) => {
    const { x, y, z } = coords;
    const { id, data } = block;

    if (Player.getCarriedItem().id == Item.getNumericId(WAND.stringID)) {
        Selector.setPos2({ x, y, z });

        BlockSource.getCurrentWorldGenRegion().setBlock(x, y, z, id, data);
        Game.tipMessage(
            Native.Color.GREEN + `Selected second position at ${x}, ${y}, ${z}`
        );
    }
});
