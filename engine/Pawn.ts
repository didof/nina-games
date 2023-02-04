import { GoOk } from "../types/global"
import Cell from "./Cell"
import {Bitmask, bitmask, bitflag, bitwise, b } from "bitmask-decorator"

export default abstract class Pawn {
    private placed = false

    private static upgrade(cell: Cell) {
        // return new PlacedPawn(cell.getUnsafePawn().characteristics, cell)
    }

    abstract isSameAsCell(cell: Cell): boolean

    public place(cell: Cell): GoOk<Pawn> {
        if (this.placed) {
            return [null, false]
        }
        // TODO[impl] upgrade
        return [cell.getUnsafePawn(), true]
    }
}

// abstract class PlacedPawn extends Pawn {
//     constructor(characteristics: BitwiseMask, private cell: Cell) {
//         super(characteristics)
//     }

//     getCell(): Cell {
//         return this.cell
//     }


// }

export interface PawnQuarto extends Bitmask {}
@bitmask
export class PawnQuarto extends Pawn {
    @bitflag(0) private round!: bitwise
    @bitflag(0) private dark!: bitwise
    @bitflag(0) private hole!: bitwise
    @bitflag(0) private tall!: bitwise

    isSameAsCell(cell: Cell): boolean {
        throw new Error("Method not implemented.")
    }
}

export enum PawnQuartoFeatures {
    Round = b.w1,
    Dark = b.w2,
    Hole = b.w3,
    Tall = b.w4
}

const p = new PawnQuarto()