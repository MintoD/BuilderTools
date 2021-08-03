interface Position {
    x: number;
    y: number;
    z: number;
}

class Selector {
    public static pos1: Position;
    public static pos2: Position;

    public static setPos1(pos: Position) {
        this.pos1 = pos;
    }

    public static setPos2(pos: Position) {
        this.pos2 = pos;
    }
}
