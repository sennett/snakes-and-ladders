import { IBoardState } from './IBoard'

interface IGame {
  getState (): IGameState
}

export interface IGameState {
  board: IBoardState
  // players: Array<IPlayerState>
}

export default IGame
