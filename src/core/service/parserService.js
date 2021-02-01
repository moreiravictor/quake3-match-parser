import {game_start, kill, new_player} from '../util/regex.js'
import {getFileLines} from '../util/data.js'
import {registerGame, registerPlayer, registerKill} from './gameService.js'
import GameMap from '../model/gameMap.js'
import { NotFound } from '../util/error.js'

function parseFile (filepath) {
    let games = new GameMap(), pattern
    const lines = getFileLines(filepath)   

    lines.forEach(line => {
        if (line.match(game_start)) {
            registerGame(games)
        } else if (pattern = line.match(new_player)) {
            registerPlayer(games, pattern)
        } else if (pattern = line.match(kill)) {
            registerKill(games, pattern)
        } 
    })
    return games
}

function parsedGame(filepath, game_id) {
    const games = parseFile(filepath)
    const specific_game = games.getGame(game_id)
    if (!specific_game)
        throw new NotFound('game not found')
    return specific_game
}

export default {
    parseFile, 
    parsedGame
}