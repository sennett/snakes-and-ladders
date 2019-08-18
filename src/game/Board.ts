import IBoard from './IBoard'
import IPiece from './IPiece'

class Board implements IBoard {
  setPiece (piece: IPiece): void {
    throw new Error('Method not implemented.')
  }
}

export default Board
