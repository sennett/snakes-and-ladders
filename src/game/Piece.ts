import IPiece from './IPiece'
import IPlayer from './IPlayer'

class Piece implements IPiece {
  private player: IPlayer
  constructor (player: IPlayer) {
    this.player = player
  }
}
export default Piece
