class Game {
    
    constructor() {
        this.total_kills = 0;
        this.players = []
        this.kills  = {}
    }

    static key(game_index) {
        return `game_${game_index}`;
    }
}

export default Game