import {game_start, kill, new_player} from "../../../../src/core/util/regex"

describe('Regex test', () => {
    it('should recognize game start line', () => {
        const line = ' 00:90 InitGame wathever'
        const res = line.match(game_start)
        expect(res).not.toBeNull()
    }),
    it('should not recognize wrong line as game start line', () => {
        const line = ' 00:90 wathever'
        const res = line.match(game_start)
        expect(res).toBeNull()
    }),
    it('should recognize kill line ', () => {
        const line = '  20:54 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT'
        const res = line.match(kill)
        expect(res).not.toBeNull()
        expect(res[1]).toBe('<world>')
        expect(res[3]).toBe('Isgalamido')
    }),
    it('should not recognize wrong line as kill line', () => {
        const line = ' 00:90 wathever'
        const res = line.match(kill)
        expect(res).toBeNull()
    }),
    it('should recognize new_player line ', () => {
        const line = ' 20:38 ClientUserinfoChanged: 2 n\\Isgalamido\\t\\0...'
        const res = line.match(new_player)
        expect(res).not.toBeNull()
        expect(res[1]).toBe('Isgalamido')
    }),
    it('should not recognize wrong line as new_player line', () => {
        const line = ' 00:90 wathever'
        const res = line.match(new_player)
        expect(res).toBeNull()
    })
})