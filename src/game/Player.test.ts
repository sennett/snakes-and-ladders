import Player from './Player'
import IBoard from './IBoard'
import { Substitute, Arg } from '@fluffy-spoon/substitute'

describe('Player', () => {
  it('sets a piece on the board', () => {
    const mockBoard = Substitute.for<IBoard>()
    const player = new Player(mockBoard)
    mockBoard.received().setPiece(Arg.any())
  })
})
