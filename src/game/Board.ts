import IBoard from './IBoard'
import IPiece from './IPiece'

const START_POSITION = 1
const BOARD_LENGTH = 100

class Board implements IBoard {
  private pieces: Array<IPiecePosition> = new Array<IPiecePosition>()

  movePiece (piece: IPiece, spaces: number): void {
    throw new Error('Method not implemented.')
  }

  setPiece (piece: IPiece): void {
    this.pieces.push({
      piece,
      position: START_POSITION
    })
  }

  get state (): Array<IPiecePosition> {
    return this.pieces
  }
}

interface IPiecePosition {
  position: number
  piece: IPiece
}

export default Board
