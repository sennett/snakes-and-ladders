import Board from './Board'
import Substitute, { SubstituteOf } from '@fluffy-spoon/substitute'
import IPiece from './IPiece'

describe('Board', () => {
  let board: Board
  beforeEach(() => {
    board = new Board()
  })
  it('can be created', () => {
    expect(board).toBeInstanceOf(Board)
  })

  describe('setPiece', () => {
    it('sets the piece at the start', () => {
      const mockPiece: SubstituteOf<IPiece> = Substitute.for<IPiece>()
      board.setPiece(mockPiece)
      expect(board.state.length).toBe(1)
      expect(board.state[0].position).toBe(1)
    })
  })
})
