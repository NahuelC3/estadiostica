// ============================================================
//  data/bra-serieA/matches.js — partidos de la liga (GENERADO)
//  70 partidos en 7 jornadas (5 finalizadas, 1 en curso,
//  1 próxima). Dos partidos finalizados traen `detail` completo
//  (alineaciones x/y, formación, 12 métricas, eventos y ratings).
//  Las páginas comprueban `match.detail`, no un campo aparte.
// ============================================================

/**
 * @typedef {Object} PartidoCrudo
 * @property {string} id
 * @property {string} leagueId
 * @property {number} matchday
 * @property {string} date        "YYYY-MM-DD"
 * @property {string} time        "HH:MM"
 * @property {'finished'|'live'|'scheduled'} status
 * @property {string} home        teamId
 * @property {string} away        teamId
 * @property {{home:number,away:number}|null} score
 * @property {number|null} minute  minuto de juego si status==='live'
 * @property {Object} [detail]     presente sólo en partidos con detalle profundo
 */

/** @type {PartidoCrudo[]} */
export const PARTIDOS = [
    {
        id: "match:bra-2026-08-08-fla-rem",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:bra-fla",
        away: "team:bra-rem",
        score: {
            home: 2,
            away: 1
        },
        minute: null,
        detail: {
            formations: {
                home: "4-2-3-1",
                away: "3-5-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:bra-fla-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:bra-fla-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:bra-fla-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:bra-fla-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:bra-fla-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:bra-fla-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:bra-fla-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:bra-fla-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:bra-fla-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:bra-fla-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:bra-fla-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:bra-rem-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:bra-rem-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:bra-rem-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:bra-rem-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:bra-rem-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:bra-rem-6",
                        number: 6,
                        x: 31,
                        y: 38
                    },
                    {
                        playerId: "player:bra-rem-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:bra-rem-8",
                        number: 8,
                        x: 69,
                        y: 38
                    },
                    {
                        playerId: "player:bra-rem-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:bra-rem-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:bra-rem-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 44,
                    remates: 12,
                    rematesAlArco: 3,
                    corners: 6,
                    faltas: 18,
                    amarillas: 4,
                    rojas: 0,
                    pases: 385,
                    precisionPases: 71,
                    offsides: 3,
                    atajadas: 3,
                    xg: 2.04
                },
                away: {
                    posesion: 56,
                    remates: 12,
                    rematesAlArco: 4,
                    corners: 6,
                    faltas: 13,
                    amarillas: 2,
                    rojas: 0,
                    pases: 465,
                    precisionPases: 87,
                    offsides: 2,
                    atajadas: 1,
                    xg: 1.54
                }
            },
            events: [
                {
                    minuto: 8,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:bra-fla-11"
                },
                {
                    minuto: 27,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-rem-4"
                },
                {
                    minuto: 43,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:bra-fla-7"
                },
                {
                    minuto: 44,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:bra-rem-7"
                },
                {
                    minuto: 54,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-rem-9"
                },
                {
                    minuto: 68,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:bra-fla-10"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:bra-rem-11"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:bra-rem-6"
                },
                {
                    minuto: 81,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:bra-fla-10"
                },
                {
                    minuto: 83,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:bra-fla-3"
                },
                {
                    minuto: 84,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-rem-7"
                }
            ],
            ratings: {
                "player:bra-fla-1": {
                    nota: 6.9
                },
                "player:bra-fla-2": {
                    nota: 6.4
                },
                "player:bra-fla-3": {
                    nota: 6.4
                },
                "player:bra-fla-4": {
                    nota: 6.8
                },
                "player:bra-fla-5": {
                    nota: 6.1
                },
                "player:bra-fla-6": {
                    nota: 7.6
                },
                "player:bra-fla-7": {
                    nota: 6.1
                },
                "player:bra-fla-8": {
                    nota: 7.9
                },
                "player:bra-fla-9": {
                    nota: 6
                },
                "player:bra-fla-10": {
                    nota: 8.5
                },
                "player:bra-fla-11": {
                    nota: 7.2
                },
                "player:bra-rem-1": {
                    nota: 8
                },
                "player:bra-rem-2": {
                    nota: 7.2
                },
                "player:bra-rem-3": {
                    nota: 6.1
                },
                "player:bra-rem-4": {
                    nota: 7.4
                },
                "player:bra-rem-5": {
                    nota: 6.3
                },
                "player:bra-rem-6": {
                    nota: 5.9
                },
                "player:bra-rem-7": {
                    nota: 8.1
                },
                "player:bra-rem-8": {
                    nota: 5.9
                },
                "player:bra-rem-9": {
                    nota: 6.5
                },
                "player:bra-rem-10": {
                    nota: 7.9
                },
                "player:bra-rem-11": {
                    nota: 7.9
                }
            }
        }
    },
    {
        id: "match:bra-2026-08-08-cha-pal",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:bra-cha",
        away: "team:bra-pal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-bot-cty",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:bra-bot",
        away: "team:bra-cty",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-cap-cru",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:bra-cap",
        away: "team:bra-cru",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-cam-vit",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:bra-cam",
        away: "team:bra-vit",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-san-int",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:bra-san",
        away: "team:bra-int",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-sao-mir",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:bra-sao",
        away: "team:bra-mir",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-bgt-flu",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:bra-bgt",
        away: "team:bra-flu",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-bah-vas",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:bra-bah",
        away: "team:bra-vas",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-08-gre-cor",
        leagueId: "league:bra-serieA",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:bra-gre",
        away: "team:bra-cor",
        score: {
            home: 1,
            away: 2
        },
        minute: null,
        detail: {
            formations: {
                home: "3-5-2",
                away: "4-3-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:bra-gre-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:bra-gre-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:bra-gre-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:bra-gre-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:bra-gre-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:bra-gre-6",
                        number: 6,
                        x: 31,
                        y: 62
                    },
                    {
                        playerId: "player:bra-gre-7",
                        number: 7,
                        x: 50,
                        y: 62
                    },
                    {
                        playerId: "player:bra-gre-8",
                        number: 8,
                        x: 69,
                        y: 62
                    },
                    {
                        playerId: "player:bra-gre-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:bra-gre-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:bra-gre-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:bra-cor-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:bra-cor-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:bra-cor-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:bra-cor-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:bra-cor-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:bra-cor-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:bra-cor-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:bra-cor-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:bra-cor-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:bra-cor-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:bra-cor-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 62,
                    remates: 11,
                    rematesAlArco: 5,
                    corners: 4,
                    faltas: 15,
                    amarillas: 3,
                    rojas: 0,
                    pases: 569,
                    precisionPases: 84,
                    offsides: 1,
                    atajadas: 2,
                    xg: 1.69
                },
                away: {
                    posesion: 38,
                    remates: 12,
                    rematesAlArco: 4,
                    corners: 5,
                    faltas: 14,
                    amarillas: 3,
                    rojas: 0,
                    pases: 349,
                    precisionPases: 80,
                    offsides: 2,
                    atajadas: 4,
                    xg: 2.5
                }
            },
            events: [
                {
                    minuto: 6,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:bra-gre-8"
                },
                {
                    minuto: 11,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:bra-cor-9"
                },
                {
                    minuto: 29,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:bra-cor-11"
                },
                {
                    minuto: 36,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-cor-6"
                },
                {
                    minuto: 43,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:bra-gre-5"
                },
                {
                    minuto: 64,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:bra-gre-4"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:bra-gre-3"
                },
                {
                    minuto: 75,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-cor-2"
                },
                {
                    minuto: 76,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:bra-cor-5"
                },
                {
                    minuto: 78,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:bra-cor-2"
                },
                {
                    minuto: 79,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:bra-gre-11"
                },
                {
                    minuto: 79,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:bra-cor-9"
                },
                {
                    minuto: 81,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:bra-gre-6"
                }
            ],
            ratings: {
                "player:bra-gre-1": {
                    nota: 6.2
                },
                "player:bra-gre-2": {
                    nota: 6.1
                },
                "player:bra-gre-3": {
                    nota: 7.7
                },
                "player:bra-gre-4": {
                    nota: 6.3
                },
                "player:bra-gre-5": {
                    nota: 6
                },
                "player:bra-gre-6": {
                    nota: 7
                },
                "player:bra-gre-7": {
                    nota: 6.8
                },
                "player:bra-gre-8": {
                    nota: 7.3
                },
                "player:bra-gre-9": {
                    nota: 6.5
                },
                "player:bra-gre-10": {
                    nota: 6.2
                },
                "player:bra-gre-11": {
                    nota: 6.3
                },
                "player:bra-cor-1": {
                    nota: 7.3
                },
                "player:bra-cor-2": {
                    nota: 6.4
                },
                "player:bra-cor-3": {
                    nota: 6.7
                },
                "player:bra-cor-4": {
                    nota: 7.6
                },
                "player:bra-cor-5": {
                    nota: 7.7
                },
                "player:bra-cor-6": {
                    nota: 6.9
                },
                "player:bra-cor-7": {
                    nota: 7.7
                },
                "player:bra-cor-8": {
                    nota: 7.2
                },
                "player:bra-cor-9": {
                    nota: 7.1
                },
                "player:bra-cor-10": {
                    nota: 5.9
                },
                "player:bra-cor-11": {
                    nota: 7.8
                }
            }
        }
    },
    {
        id: "match:bra-2026-08-13-cha-fla",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:bra-cha",
        away: "team:bra-fla",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-rem-cty",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:bra-rem",
        away: "team:bra-cty",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-cap-pal",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:bra-cap",
        away: "team:bra-pal",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-bot-vit",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:bra-bot",
        away: "team:bra-vit",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-san-cru",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:bra-san",
        away: "team:bra-cru",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-cam-mir",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:bra-cam",
        away: "team:bra-mir",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-bgt-int",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:bra-bgt",
        away: "team:bra-int",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-sao-vas",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:bra-sao",
        away: "team:bra-vas",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-gre-flu",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:bra-gre",
        away: "team:bra-flu",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-13-bah-cor",
        leagueId: "league:bra-serieA",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:bra-bah",
        away: "team:bra-cor",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-fla-cty",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:bra-fla",
        away: "team:bra-cty",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-cap-cha",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:bra-cap",
        away: "team:bra-cha",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-rem-vit",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:bra-rem",
        away: "team:bra-vit",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-san-pal",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:bra-san",
        away: "team:bra-pal",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-bot-mir",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:bra-bot",
        away: "team:bra-mir",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-bgt-cru",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:bra-bgt",
        away: "team:bra-cru",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-cam-vas",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:bra-cam",
        away: "team:bra-vas",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-gre-int",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:bra-gre",
        away: "team:bra-int",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-sao-cor",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:bra-sao",
        away: "team:bra-cor",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-18-bah-flu",
        leagueId: "league:bra-serieA",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:bra-bah",
        away: "team:bra-flu",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-cap-fla",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:bra-cap",
        away: "team:bra-fla",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-cty-vit",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:bra-cty",
        away: "team:bra-vit",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-san-cha",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:bra-san",
        away: "team:bra-cha",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-rem-mir",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:bra-rem",
        away: "team:bra-mir",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-bgt-pal",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:bra-bgt",
        away: "team:bra-pal",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-bot-vas",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:bra-bot",
        away: "team:bra-vas",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-gre-cru",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:bra-gre",
        away: "team:bra-cru",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-cam-cor",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:bra-cam",
        away: "team:bra-cor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-bah-int",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:bra-bah",
        away: "team:bra-int",
        score: {
            home: 3,
            away: 3
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-23-sao-flu",
        leagueId: "league:bra-serieA",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:bra-sao",
        away: "team:bra-flu",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-fla-vit",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:bra-fla",
        away: "team:bra-vit",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-san-cap",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:bra-san",
        away: "team:bra-cap",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-cty-mir",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:bra-cty",
        away: "team:bra-mir",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-bgt-cha",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:bra-bgt",
        away: "team:bra-cha",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-rem-vas",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:bra-rem",
        away: "team:bra-vas",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-gre-pal",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:bra-gre",
        away: "team:bra-pal",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-bot-cor",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:bra-bot",
        away: "team:bra-cor",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-bah-cru",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:bra-bah",
        away: "team:bra-cru",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-cam-flu",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:bra-cam",
        away: "team:bra-flu",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:bra-2026-08-28-sao-int",
        leagueId: "league:bra-serieA",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:bra-sao",
        away: "team:bra-int",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:bra-2026-09-01-san-fla",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:bra-san",
        away: "team:bra-fla",
        score: {
            home: 0,
            away: 1
        },
        minute: 56
    },
    {
        id: "match:bra-2026-09-01-vit-mir",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:bra-vit",
        away: "team:bra-mir",
        score: {
            home: 0,
            away: 2
        },
        minute: 53
    },
    {
        id: "match:bra-2026-09-01-bgt-cap",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:bra-bgt",
        away: "team:bra-cap",
        score: {
            home: 0,
            away: 1
        },
        minute: 29
    },
    {
        id: "match:bra-2026-09-01-cty-vas",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:bra-cty",
        away: "team:bra-vas",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-gre-cha",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:bra-gre",
        away: "team:bra-cha",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-rem-cor",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:bra-rem",
        away: "team:bra-cor",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-bah-pal",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:bra-bah",
        away: "team:bra-pal",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-bot-flu",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:bra-bot",
        away: "team:bra-flu",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-sao-cru",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:bra-sao",
        away: "team:bra-cru",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-01-cam-int",
        leagueId: "league:bra-serieA",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:bra-cam",
        away: "team:bra-int",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-fla-mir",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:bra-fla",
        away: "team:bra-mir",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-bgt-san",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:bra-bgt",
        away: "team:bra-san",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-vit-vas",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:bra-vit",
        away: "team:bra-vas",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-gre-cap",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:bra-gre",
        away: "team:bra-cap",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-cty-cor",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:bra-cty",
        away: "team:bra-cor",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-bah-cha",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:bra-bah",
        away: "team:bra-cha",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-rem-flu",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:bra-rem",
        away: "team:bra-flu",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-sao-pal",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:bra-sao",
        away: "team:bra-pal",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-bot-int",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:bra-bot",
        away: "team:bra-int",
        score: null,
        minute: null
    },
    {
        id: "match:bra-2026-09-06-cam-cru",
        leagueId: "league:bra-serieA",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:bra-cam",
        away: "team:bra-cru",
        score: null,
        minute: null
    }
];
