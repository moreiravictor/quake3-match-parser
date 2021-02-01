import killEvent from '../model/killEvent.js'
import playerEvent from '../model/playerEvent.js'

function registerKill(games, pattern) {
    const killer = killEvent.killer(pattern)
    const killed = killEvent.killed(pattern)
    games.addGameKill(killer, killed)
}

function registerPlayer(games, pattern) {
    const player = playerEvent.player(pattern)
    games.addGamePlayer(player)
}

function registerGame(games) {
    games.addGame()
}

export {
    registerKill,
    registerPlayer,
    registerGame
}