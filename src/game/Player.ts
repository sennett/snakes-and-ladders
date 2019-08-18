import IPlayer from './IPlayer'
import IBoard from './IBoard'
import IPiece from './IPiece'
import Piece from './Piece'

class Player implements IPlayer {
  constructor (private board: IBoard) {
    this.piece = new Piece(this)
    board.setPiece(this.piece)
  }
  private piece: IPiece
  takeTurn (): void {
    throw new Error('Method not implemented.')
  }
}

export default Player
