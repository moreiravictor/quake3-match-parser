import Game from "./game.js"
import { WORLD } from "../config/config.js"
import {hiddenProp} from '../util/util.js'

class GameMap {
    
    constructor() {
        hiddenProp(this, 'game_index',0)
    }

    addGame() {
        this.game_index++
        this[Game.name(this.game_index)] = new Game()
    }

    addGamePlayer(player) {
        if (this[Game.name(this.game_index)].kills[player] === undefined) {
            this[Game.name(this.game_index)].addToKillsList(player)
            this[Game.name(this.game_index)].addPlayer(player)
        }
    }

    addGameKill(killer, killed) {
        if (killer === WORLD)
            this[Game.name(this.game_index)].removePlayerKill(killed)
        else if (killer !== killed)
            this[Game.name(this.game_index)].addPlayerKill(killer)
        
        this[Game.name(this.game_index)].addKill()
    }

    getGame(game_index) {
        return this[Game.name(game_index)]
    }

}

export default GameMap