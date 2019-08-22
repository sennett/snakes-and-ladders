import IBoard, { IPiecePosition } from './IBoard'
import IPiece from './IPiece'
import { number } from 'prop-types';

const START_POSITION = 1
const BOARD_LENGTH = 100

class Board implements IBoard {
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
