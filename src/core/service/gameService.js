import killEvent from '../model/killEvent.js'
import playerEvent from '../model/playerEvent.js'

function registerKill(games, game_index, pattern) {
    const killer = killEvent.killer(pattern)
    const killed = killEvent.killed(pattern)
    games.addGameKill(game_index, killer, killed)
}

function registerPlayer(games, game_index, pattern) {
    const player = playerEvent.player(pattern)
    games.addGamePlayer(game_index, player)
}

function registerMatch(games, game_index) {
    games.addGame(game_index)
}

export {
    registerKill,
    registerPlayer,
    registerMatch
}