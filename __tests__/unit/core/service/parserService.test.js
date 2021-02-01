import parser from '../../../../src/core/service/parserService.js'
import {filepath} from '../../../../src/core/config/config.js'
import response from '../../../properties/response'
import GameMap from '../../../../src/core/model/GameMap.js'

describe('Parser test', () => {
    it('should parse the whole file correctly', () => {
        const parsed = parser.parseFile(filepath)
        const parsed_json = JSON.stringify(parsed)
        const expected_json = JSON.stringify(response)
        expect(parsed_json).toBe(expected_json)
    }),
    it ('should return empty gameList for null file', () => {
        const parsed = parser.parseFile('__tests__/properties/wrong.log')
        const empty_game_list = new GameMap()
        expect(parsed).toStrictEqual(empty_game_list)
    })
})