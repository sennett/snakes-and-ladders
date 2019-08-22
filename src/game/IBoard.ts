import IPiece from './IPiece'

interface IBoard {
  setPiece (piece: IPiece): void
  movePiece (piece: IPiece, spaces: number): void
  getPositionForPiece (piece: IPiece): number
  hasPieceAtEndState (): boolean
}

export interface IPiecePosition {
  position: number
  piece: IPiece
}

export default IBoard
