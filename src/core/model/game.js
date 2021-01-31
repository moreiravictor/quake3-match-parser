class Game {
    
    constructor() {
        this.total_kills = 0
        this.players = []
        this.kills  = {}
    }

    static name(game_index) {
        return `game_${game_index}`
    }

    addPlayer(player) {
        this.players.push(player)
    }

    addKill() {
        this.total_kills++
    }

    addPlayerKill(player) {
        this.kills[player]++
    }

    removePlayerKill(player) {
        this.kills[player]--
    }

    addToKillsList(player) {
        this.kills[player] = 0
    }
}

export default Game