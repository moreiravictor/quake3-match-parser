# :video_game: quake3-log-parser

quake3-log-parser is a parser made for Quake3 log file in order to get games informations (kills, total kills and players).
It is made based on REGEX and line by line reading.

## Setup:

#### First, install the dependencies:
```bash
~$ npm install
```

#### Run the server:
It will run at port 4043 but you can change it at src/server.js
 ```bash
~$ npm start
 ```
 
 #### Run tests:
 ```bash
~$ npm test
 ```
 
 ## Routes
 
 ### 1. GET all games infos (/games)

This endpoint will retrieve all games informations contained in the log file
  
  Example Response:
 ```bash
{
    "game_1": {
        "total_kills": 0,
        "players": [
            "Isgalamido"
        ],
        "kills": {
            "Isgalamido": 0
        }
    },
    "game_2": {
        "total_kills": 11,
        "players": [
            "Isgalamido",
            "Dono da Bola",
            "Mocinha"
        ],
        "kills": {
            "Isgalamido": -7,
            "Dono da Bola": 0,
            "Mocinha": 0
        }
    }
}
 ```
 
  ### 2. GET specific game info (/games/:game_id)
 
  Example Response:
 ```bash
{
    "total_kills": 105,
    "players": [
        "Dono da Bola",
        "Isgalamido",
        "Zeh",
        "Assasinu Credi"
    ],
    "kills": {
        "Dono da Bola": 9,
        "Isgalamido": 19,
        "Zeh": 20,
        "Assasinu Credi": 12
    }
}
 ```

