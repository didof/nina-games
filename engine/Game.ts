import { Bitmask } from "bitmask-decorator/lib/bitmask.decorator"
import Board from "./Board"
import Cell from "./Cell"

class Game {
    constructor(protected board: Board) { }
}

interface GameOptions {
    width: number
    height: number
}
const defaultGameOptions: GameOptions = {
    width: 11,
    height: 11
}


export function newQuartoGame(opts: GameOptions = defaultGameOptions) {
    const board = new Board(opts.width, opts.height)

    // const game = new Game(board)
}