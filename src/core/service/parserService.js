import {game_start, kill, new_player} from '../util/regex.js'
import {filepath} from '../config/config.js'
import {getFileLines} from '../util/data.js'
import {registerMatch, registerPlayer, registerKill} from './gameService.js'
import GameList from '../model/gameList.js'

function parseFile () {
    let games = new GameList(), game_index = 0, pattern
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

export default {parseFile}