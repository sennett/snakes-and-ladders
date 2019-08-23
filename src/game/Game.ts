import IGame, { IGameState } from './IGame'

class Game implements IGame {
  getState (): IGameState {
    throw new Error('Method not implemented.')
  }
}

export default Game
