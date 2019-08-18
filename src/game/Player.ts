import IPlayer from './IPlayer'
import IBoard from './IBoard'
import IPiece from './IPiece'
import Piece from './Piece'
import IDice from './IDice'

class Player implements IPlayer {
  constructor (private board: IBoard, private dice: IDice) {
    this.piece = new Piece(this)
    board.setPiece(this.piece)
  }
  private piece: IPiece
  takeTurn (): void {
    const diceRoll = this.dice.roll()
    this.board.movePiece(this.piece, diceRoll)
  }
}

export default Player
