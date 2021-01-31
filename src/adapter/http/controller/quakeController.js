import parser from '../../../core/service/parserService.js'
import {filepath} from '../../../core/config/config.js'
import { NotFound } from '../../../core/util/error.js'


export default {
    async getAll(req, res) {
        try {
            const parsed_matches = parser.parseFile(filepath)
            return res.json(parsed_matches)
        } catch(err) {
            next(err)
        }
    },
    async getById(req, res, next) {
        try {
            const {match_id} = req.params
            const chosen_match = parser.parsedMatch(filepath, match_id)
            if (chosen_match)
                return res.json(chosen_match)
            throw new NotFound('match not found')
        } catch(err) {
            next(err)
        }
    }
}