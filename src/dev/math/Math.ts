class math {

    public static maxY: number = 0x100; // 256

    public static getMinX(pos1: number, pos2: number): number {
        return Math.min(pos1[0], pos2[0]);
    }

    public static getMaxX(pos1: number, pos2: number): number {
        return Math.max(pos1[0], pos2[0]);
    }

    public static getMinZ(pos1: number, pos2: number): number {
        return Math.min(pos1[2], pos2[2]);
    }

    public static getMaxZ(pos1: number, pos2: number): number {
        return Math.max(pos1[2], pos2[2]);
    }

    public static getMinY(pos1: number, pos2: number): number {
        return Math.max(Math.min(pos1[1], pos2[1], this.maxY), 0)
    }

    public static getMaxY(pos1: number, pos2: number): number {
        return Math.min(Math.max(pos1[1], pos2[1], 0), this.maxY);
    }
}
