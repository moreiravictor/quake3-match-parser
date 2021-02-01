import GameMap from '../../../../src/core/model/gameMap.js'
import {registerMatch, registerPlayer, registerKill} from '../../../../src/core/service/gameService.js'
import {new_player, kill} from '../../../../src/core/util/regex.js'

const new_player_line = ' 20:34 ClientUserinfoChanged: 2 n\\Isgalamido\\t\\0...'
const player_pattern = new_player_line.match(new_player)
let games = new GameMap()
let game_index = 1


describe('GameService', () => {
    beforeEach(() => {
        registerMatch(games, game_index)
        registerPlayer(games, game_index, player_pattern)
    })
    afterEach(() => {
        games = new GameMap()
        game_index = 1
    })

    it('should register a new match', () => {
        expect(games.game_1.total_kills).toBe(0)
    }),
    it('should register a new player', () => {
        expect(games.game_1.players).toContain('Isgalamido')
    }),
    it('should register a new player only once', () => {        
        registerPlayer(games, game_index, player_pattern)

        expect(games.game_1.players).toHaveLength(1)
    }),
    it('should register a normal kill', () => {
        const kill_line = ' 22:06 Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH'
        const kill_pattern = kill_line.match(kill)

        registerKill(games, game_index, kill_pattern)

        expect(games.game_1.kills.Isgalamido).toBe(1)
    }),
    it('should not register a suicide', () => {
        const kill_line = ' 22:06 Kill: 2 3 7: Isgalamido killed Isgalamido by MOD_ROCKET_SPLASH'
        const kill_pattern = kill_line.match(kill)

        registerKill(games, game_index, kill_pattern)

        expect(games.game_1.kills.Isgalamido).toBe(0)
    }),
    it('should take 1 kill from player killed when <world> kills player', () => {
        const kill_line = ' 22:06 Kill: 2 3 7: <world> killed Isgalamido by MOD_ROCKET_SPLASH'
        const kill_pattern = kill_line.match(kill)

        registerKill(games, game_index, kill_pattern)

        expect(games.game_1.kills.Isgalamido).toBe(-1)

    })
})