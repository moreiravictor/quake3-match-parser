import Game from "./game.js"
import { WORLD } from "../config/config.js"

class GameMap {
    
    constructor() {}

    addGame(game_index) {
        this[Game.name(game_index)] = new Game()
    }

    addGamePlayer(game_index, player) {
        if (this[Game.name(game_index)].kills[player] === undefined) {
            this[Game.name(game_index)].addToKillsList(player)
            this[Game.name(game_index)].addPlayer(player)
        }
    }

    addGameKill(game_index, killer, killed) {
        if (killer === WORLD)
            this[Game.name(game_index)].removePlayerKill(killed)
        else if (killer !== killed)
            this[Game.name(game_index)].addPlayerKill(killer)
        
        this[Game.name(game_index)].addKill()
    }

}

export default GameMap