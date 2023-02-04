import { GoOk } from "../types/global"
import Pawn from "./Pawn"

export default class Cell {
    private _pawn: Pawn | null = null
    constructor(private x: number, private y: number) {
        // TODO[idea] expose the x and y via visitor?
    }

    static create(x: number, y: number): Cell {
        return new Cell(x, y)
    }

    getUnsafePawn(): Pawn {
        return this._pawn!
    }

    getPawn(): GoOk<Pawn> {
        if (this._pawn === null) {
            return [null, false]
        }
        return [this._pawn, true]
    }

    setPawn(pawn: Pawn): boolean {
        if (this._pawn) {
            return false
        }
        this._pawn = pawn
        return true
    }

    hasPawn(): boolean {
        return this._pawn !== null
    }
}
