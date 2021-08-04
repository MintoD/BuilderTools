/*
  ____        _ _     _        _______          _     
 |  _ \      (_) |   | |      |__   __|        | |    
 | |_) |_   _ _| | __| | ___ _ __| | ___   ___ | |___ 
 |  _ <| | | | | |/ _` |/ _ \ '__| |/ _ \ / _ \| / __|
 | |_) | |_| | | | (_| |  __/ |  | | (_) | (_) | \__ \
 |____/ \__,_|_|_|\__,_|\___|_|  |_|\___/ \___/|_|___/
                                        by MintoD
*/

class Replacement {
    public static replace(find: IDBlock, replace: ItemInstance): void {
        const pos = [
            {
                x: Selector.pos1.x,
                y: Selector.pos1.y,
                z: Selector.pos1.z,
            },
            {
                x: Selector.pos2.x,
                y: Selector.pos2.y,
                z: Selector.pos2.z,
            },
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
                    if(World.getBlock(x, y, z).id == find.id && World.getBlock(x, y, z).data == find.data) {
                        World.setBlock(x, y, z, replace.id, replace.data);
                    }
                }
            }
        }
    }
}
