import Cell from "./Cell"

export default class Board {
    private grid: Cell[][]

    constructor(width: number, height: number) {
        if (width < 0 || width % 2 == 0) {
            throw new Error("widht negative or even")
        }
        if (height < 0) {
            throw new Error("height negative")
        }

        const grid: Cell[][] = new Array(height)
        for(let y = 0; y < height; y++) {
            const row: Cell[] = []
            for(let x = 0; x < width; x++) {
                row[x] = Cell.create(x, y)
            }
            grid[y] = row
        }
        this.grid = grid
    }
}
