const game_start = /[0-9]{0,3}:[0-9]{2} InitGame/
const kill =  /[0-9]: ([\s\S]+) (killed) ([\s\S]+) by/
const new_player = /[0-9]{0,3}:[0-9]{2} ClientUserinfoChanged: [0-9] n\\([^\\]+)\\t/ 

export {
    game_start,
    kill,
    new_player
}