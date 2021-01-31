import Game from '../../../core/model/game.js'
import parser from '../../../core/service/parserService.js'
import {filepath} from '../../../core/config/config.js'


export default {
    async getAll(req, res) {
        const parsed_matches = parser.parseFile(filepath)
        return res.json(parsed_matches)
    },
    async getById(req, res) {
        const {match_id} = req.params
        const chosen_match = parser.parsedMatch(filepath, match_id)
        return (chosen_match) ? res.json(chosen_match) : res.status(404).send()
    }
}