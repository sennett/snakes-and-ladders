import IBoard, { IPiecePosition, IBoardState } from './IBoard'
import IPiece from './IPiece'
import _ from 'lodash'

const START_POSITION = 1
const BOARD_LENGTH = 100

class Board implements IBoard {
  getState (): IBoardState {
    let current = START_POSITION
    return {
      squares: _.times(BOARD_LENGTH, () => current++).map((squareNumber) => ({ number: squareNumber }))
    }
  }

  hasPieceAtEndState (): boolean {
    return this.pieces.some((piece) => piece.position === BOARD_LENGTH)
  }

  private pieces: Array<IPiecePosition> = new Array<IPiecePosition>()

  private getPiecePosition (piece: IPiece): IPiecePosition {
    return this.pieces.find((boardPosition) => boardPosition.piece === piece)!
  }

  movePiece (piece: IPiece, spaces: number): void {
    const piecePosition: IPiecePosition = this.getPiecePosition(piece)
    if (piecePosition.position + spaces <= BOARD_LENGTH) {
      piecePosition.position += spaces
    }
  }

  setPiece (piece: IPiece): void {
    this.pieces.push({
      piece,
      position: START_POSITION
    })
  }

  getPositionForPiece (piece: IPiece): number {
    return this.getPiecePosition(piece).position
  }
}

export default Board
