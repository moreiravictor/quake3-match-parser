import { WORLD } from "../config/config.js"
import Game from "../model/game.js"
import killEvent from "../model/killEvent.js"

function registerKill(games, game_index, pattern) {
    const killer = killEvent.killer(pattern)
    const killed = killEvent.killed(pattern)
    
    if (killer === WORLD)
        games[Game.key(game_index)].kills[killed]--
    else if (killer !== killed)
        games[Game.key(game_index)].kills[killer]++
        games[Game.key(game_index)].total_kills++
}

function registerPlayer(games, game_index, pattern) {
    const player = pattern[1]
    if (games[Game.key(game_index)].kills[player] === undefined) {
        games[Game.key(game_index)].kills[player] = 0
        games[Game.key(game_index)].players.push(player)
    }
}

function registerMatch(games, game_index) {
    games[Game.key(game_index)] = new Game()
    games[Game.key(game_index)].total_kills = 0
}

export {
    registerKill,
    registerPlayer,
    registerMatch
}