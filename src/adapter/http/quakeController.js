import Game from '../../core/model/game.js'
import parser from '../../core/service/parser.js'

export default {
    async getAll(req, res) {
        const parsed_matches = parser.parseFile()
        return res.json(parsed_matches)
    },
    async getById(req, res) {
        const {match_id} = req.params;
        const parsed_matches = parser.parseFile()
        const chosen_match = parsed_matches[Game.key(match_id)]
        return res.json(chosen_match)
    }
}