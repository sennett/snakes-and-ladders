import { times } from 'lodash'

import Board from './Board'
import Substitute, { SubstituteOf } from '@fluffy-spoon/substitute'
import IPiece from './IPiece'
import { IBoardState } from './IBoard'

describe('Board', () => {
  let board: Board
  const mockPiece: IPiece = Substitute.for<IPiece>()
  beforeEach(() => {
    board = new Board()
  })
  it('can be created', () => {
    expect(board).toBeInstanceOf(Board)
  })

  describe('setPiece', () => {
    it('sets the piece at the start', () => {
      board.setPiece(mockPiece)
      expect(board.getPositionForPiece(mockPiece)).toBe(1)
    })
  })

  describe('movePiece', () => {
    it('moves the piece', () => {
      board.setPiece(mockPiece)
      board.movePiece(mockPiece, 4)
      expect(board.getPositionForPiece(mockPiece)).toBe(5)
    })

    it('does not move another piece', () => {
      const nonMovingPiece: IPiece = Substitute.for<IPiece>()
      board.setPiece(nonMovingPiece)
      board.setPiece(mockPiece)
      board.movePiece(mockPiece, 4)
      expect(board.getPositionForPiece(mockPiece)).toBe(5)
      expect(board.getPositionForPiece(nonMovingPiece)).toBe(1)
    })

    describe('movement close to the end of the board', () => {
      it('moves the piece to the board length when exact', () => {
        board.setPiece(mockPiece)
        times(19, () => board.movePiece(mockPiece, 5))
        board.movePiece(mockPiece, 4)
        expect(board.getPositionForPiece(mockPiece)).toBe(100)
      })

      it('does not move a piece when there are insufficient remaing squares', () => {
        board.setPiece(mockPiece)
        times(19, () => board.movePiece(mockPiece, 5))
        board.movePiece(mockPiece, 5)
        expect(board.getPositionForPiece(mockPiece)).toBe(96)
      })
    })
  })

  describe('hasPieceAtEndState', () => {
    it('returns false if there is not a piece at the end', () => {
      board.setPiece(mockPiece)
      times(19, () => board.movePiece(mockPiece, 5))
      expect(board.hasPieceAtEndState()).toBe(false)
    })
    it('returns true if there is a piece at the end', () => {
      board.setPiece(mockPiece)
      times(19, () => board.movePiece(mockPiece, 5))
      board.movePiece(mockPiece, 4)
      expect(board.hasPieceAtEndState()).toBe(true)
    })
  })

  describe('exposing the board state', () => {
    it('includes the squares + numbers', () => {
      board.setPiece(mockPiece)
      const boardState: IBoardState = board.getState()
      expect(boardState.squares.length).toBe(100)
      expect(boardState.squares[0].number).toBe(1)
      expect(boardState.squares[99].number).toBe(100)
      expect(boardState.squares[50].number).toBe(51)
    })
    it.todo('shows where the pieces are')
  })
})
