class Filler {
    public static flatFill(id: ItemInstance): void {

        const pos = [
            {
                x: Selector.pos1.x,
                y: Selector.pos1.y,
                z: Selector.pos1.z,
            }, {
                x: Selector.pos2.x,
                y: Selector.pos2.y,
                z: Selector.pos2.z,
            }
        ];

        const minX = Math.min(pos[0].x, pos[1].x);
        const maxX = Math.max(pos[0].x, pos[1].x);
        const minY = Math.min(pos[0].y, pos[1].y);
        const maxY = Math.max(pos[0].y, pos[1].y);
        const minZ = Math.min(pos[0].z, pos[1].z);
        const maxZ = Math.max(pos[0].z, pos[1].z);

        for (let x = minX; x <= maxX; x++) {
            for (let z = minZ; z <= maxZ; z++) {
                for (let y = minY; y <= maxY; y++) {
                    World.setBlock(x, y, z, id.id, id.data);
                }
            }
        }
    }
}
