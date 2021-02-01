import {game_start, kill, new_player} from '../util/regex.js'
import {getFileLines} from '../util/data.js'
import {registerMatch, registerPlayer, registerKill} from './gameService.js'
import GameMap from '../model/gameMap.js'
import Game from '../model/game.js'

function parseFile (filepath) {
    let games = new GameMap(), game_index = 0, pattern
    const lines = getFileLines(filepath)   

    lines.forEach(line => {
        if (line.match(game_start)) {
            game_index++;
            registerMatch(games, game_index)
        } else if (pattern = line.match(new_player)) {
            registerPlayer(games, game_index, pattern)
        } else if (pattern = line.match(kill)) {
            registerKill(games, game_index, pattern)
        } 
    })
    return games
}

function parsedMatch(filepath, match_id) {
    const parsed_matches = parseFile(filepath)
    return parsed_matches[Game.name(match_id)]
}

export default {
    parseFile, 
    parsedMatch
}