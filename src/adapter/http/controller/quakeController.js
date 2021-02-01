import parser from '../../../core/service/parserService.js'
import {filepath} from '../../../core/config/config.js'

export default {
    async getAll(req, res, next) {
        try {
            const parsed_games = parser.parseFile(filepath)
            return res.json(parsed_games)
        } catch(err) {
            next(err)
        }
    },
    async getById(req, res, next) {
        try {
            const {game_id} = req.params
            const chosen_game = parser.parsedGame(filepath, game_id)
            return res.json(chosen_game)
        } catch(err) {
            next(err)
        }
    }
}