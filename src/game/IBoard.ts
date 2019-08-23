import IPiece from './IPiece'

interface IBoard {
  setPiece (piece: IPiece): void
  movePiece (piece: IPiece, spaces: number): void
  getPositionForPiece (piece: IPiece): number
  hasPieceAtEndState (): boolean
  getState (): IBoardState
}

export interface IPiecePosition {
  position: number
  piece: IPiece
}

export interface IBoardState {
  squares: Array<IBoardSquare>
}

export interface IBoardSquare {
  number: number
}

export default IBoard
