import Player from './Player'
import IBoard from './IBoard'
import IDice from './IDice'
import { Substitute, Arg, SubstituteOf } from '@fluffy-spoon/substitute'

describe('Player', () => {
  let mockBoard: SubstituteOf<IBoard>
  let mockDice: SubstituteOf<IDice>
  let player: Player

  beforeEach(() => {
    mockBoard = Substitute.for<IBoard>()
    mockDice = Substitute.for<IDice>()
    player = new Player(mockBoard, mockDice)
  })

  it('sets a piece on the board', () => {
    mockBoard.received().setPiece(Arg.any())
  })

  describe('taking a turn', () => {
    it('moves the piece', () => {
      mockDice.roll().returns(4)
      player.takeTurn()
      mockBoard.received().movePiece(Arg.any(), 4)
    })
  })
})
