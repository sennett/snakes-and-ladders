import IPiece from './IPiece'

interface IBoard {
  setPiece (piece: IPiece): void
  movePiece (piece: IPiece, spaces: number): void
}

export default IBoard
