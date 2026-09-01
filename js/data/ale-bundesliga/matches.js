// ============================================================
//  data/ale-bundesliga/matches.js — partidos de la liga (GENERADO)
//  63 partidos en 7 jornadas (5 finalizadas, 1 en curso,
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
        id: "match:ale-2026-08-08-fcb-s04",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ale-fcb",
        away: "team:ale-s04",
        score: {
            home: 3,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "3-4-3",
                away: "3-5-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:ale-fcb-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ale-fcb-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ale-fcb-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:ale-fcb-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ale-fcb-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ale-fcb-6",
                        number: 6,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:ale-fcb-7",
                        number: 7,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:ale-fcb-8",
                        number: 8,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ale-fcb-9",
                        number: 9,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ale-fcb-10",
                        number: 10,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:ale-fcb-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:ale-s04-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ale-s04-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ale-s04-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:ale-s04-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ale-s04-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ale-s04-6",
                        number: 6,
                        x: 31,
                        y: 38
                    },
                    {
                        playerId: "player:ale-s04-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:ale-s04-8",
                        number: 8,
                        x: 69,
                        y: 38
                    },
                    {
                        playerId: "player:ale-s04-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ale-s04-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ale-s04-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 40,
                    remates: 15,
                    rematesAlArco: 6,
                    corners: 4,
                    faltas: 8,
                    amarillas: 2,
                    rojas: 0,
                    pases: 382,
                    precisionPases: 78,
                    offsides: 1,
                    atajadas: 6,
                    xg: 3.23
                },
                away: {
                    posesion: 60,
                    remates: 13,
                    rematesAlArco: 6,
                    corners: 7,
                    faltas: 11,
                    amarillas: 1,
                    rojas: 0,
                    pases: 558,
                    precisionPases: 89,
                    offsides: 2,
                    atajadas: 3,
                    xg: 1.51
                }
            },
            events: [
                {
                    minuto: 24,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-s04-11"
                },
                {
                    minuto: 25,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ale-fcb-10"
                },
                {
                    minuto: 63,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ale-fcb-3"
                },
                {
                    minuto: 67,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ale-fcb-4"
                },
                {
                    minuto: 72,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ale-s04-9"
                },
                {
                    minuto: 74,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ale-s04-4"
                },
                {
                    minuto: 78,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-s04-2"
                },
                {
                    minuto: 83,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ale-fcb-7"
                },
                {
                    minuto: 83,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ale-fcb-6"
                },
                {
                    minuto: 86,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-s04-8"
                },
                {
                    minuto: 89,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ale-fcb-8"
                }
            ],
            ratings: {
                "player:ale-fcb-1": {
                    nota: 7.4
                },
                "player:ale-fcb-2": {
                    nota: 7.5
                },
                "player:ale-fcb-3": {
                    nota: 8.1
                },
                "player:ale-fcb-4": {
                    nota: 6.5
                },
                "player:ale-fcb-5": {
                    nota: 7.1
                },
                "player:ale-fcb-6": {
                    nota: 6.9
                },
                "player:ale-fcb-7": {
                    nota: 7.8
                },
                "player:ale-fcb-8": {
                    nota: 7.7
                },
                "player:ale-fcb-9": {
                    nota: 7.5
                },
                "player:ale-fcb-10": {
                    nota: 6.7
                },
                "player:ale-fcb-11": {
                    nota: 7.8
                },
                "player:ale-s04-1": {
                    nota: 7.3
                },
                "player:ale-s04-2": {
                    nota: 6.3
                },
                "player:ale-s04-3": {
                    nota: 7.9
                },
                "player:ale-s04-4": {
                    nota: 6.7
                },
                "player:ale-s04-5": {
                    nota: 6
                },
                "player:ale-s04-6": {
                    nota: 6.8
                },
                "player:ale-s04-7": {
                    nota: 7.8
                },
                "player:ale-s04-8": {
                    nota: 7.2
                },
                "player:ale-s04-9": {
                    nota: 7.9
                },
                "player:ale-s04-10": {
                    nota: 6.7
                },
                "player:ale-s04-11": {
                    nota: 7.8
                }
            }
        }
    },
    {
        id: "match:ale-2026-08-08-hsv-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ale-hsv",
        away: "team:ale-b04",
        score: {
            home: 1,
            away: 3
        },
        minute: null,
        detail: {
            formations: {
                home: "4-4-2",
                away: "3-5-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:ale-hsv-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ale-hsv-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ale-hsv-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:ale-hsv-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:ale-hsv-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ale-hsv-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ale-hsv-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:ale-hsv-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:ale-hsv-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ale-hsv-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ale-hsv-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:ale-b04-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ale-b04-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ale-b04-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:ale-b04-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ale-b04-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ale-b04-6",
                        number: 6,
                        x: 31,
                        y: 38
                    },
                    {
                        playerId: "player:ale-b04-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:ale-b04-8",
                        number: 8,
                        x: 69,
                        y: 38
                    },
                    {
                        playerId: "player:ale-b04-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ale-b04-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ale-b04-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 58,
                    remates: 17,
                    rematesAlArco: 5,
                    corners: 7,
                    faltas: 10,
                    amarillas: 1,
                    rojas: 1,
                    pases: 542,
                    precisionPases: 85,
                    offsides: 2,
                    atajadas: 4,
                    xg: 1.97
                },
                away: {
                    posesion: 42,
                    remates: 12,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 12,
                    amarillas: 2,
                    rojas: 0,
                    pases: 390,
                    precisionPases: 91,
                    offsides: 2,
                    atajadas: 4,
                    xg: 3.62
                }
            },
            events: [
                {
                    minuto: 27,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-b04-5"
                },
                {
                    minuto: 31,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-b04-10"
                },
                {
                    minuto: 36,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ale-hsv-10"
                },
                {
                    minuto: 51,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ale-b04-8"
                },
                {
                    minuto: 52,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ale-b04-10"
                },
                {
                    minuto: 60,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ale-hsv-2"
                },
                {
                    minuto: 60,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ale-hsv-2"
                },
                {
                    minuto: 63,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ale-b04-11"
                },
                {
                    minuto: 68,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ale-b04-4"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ale-hsv-1"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ale-b04-8"
                },
                {
                    minuto: 88,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ale-b04-4"
                }
            ],
            ratings: {
                "player:ale-hsv-1": {
                    nota: 7.5
                },
                "player:ale-hsv-2": {
                    nota: 6.1
                },
                "player:ale-hsv-3": {
                    nota: 7.6
                },
                "player:ale-hsv-4": {
                    nota: 7.8
                },
                "player:ale-hsv-5": {
                    nota: 5.9
                },
                "player:ale-hsv-6": {
                    nota: 8.1
                },
                "player:ale-hsv-7": {
                    nota: 6.8
                },
                "player:ale-hsv-8": {
                    nota: 6.9
                },
                "player:ale-hsv-9": {
                    nota: 5.9
                },
                "player:ale-hsv-10": {
                    nota: 8.2
                },
                "player:ale-hsv-11": {
                    nota: 7.2
                },
                "player:ale-b04-1": {
                    nota: 7.6
                },
                "player:ale-b04-2": {
                    nota: 7.2
                },
                "player:ale-b04-3": {
                    nota: 7.9
                },
                "player:ale-b04-4": {
                    nota: 6
                },
                "player:ale-b04-5": {
                    nota: 7
                },
                "player:ale-b04-6": {
                    nota: 7.9
                },
                "player:ale-b04-7": {
                    nota: 7.3
                },
                "player:ale-b04-8": {
                    nota: 8.2
                },
                "player:ale-b04-9": {
                    nota: 7.9
                },
                "player:ale-b04-10": {
                    nota: 7.1
                },
                "player:ale-b04-11": {
                    nota: 6.7
                }
            }
        }
    },
    {
        id: "match:ale-2026-08-08-rbl-stp",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ale-rbl",
        away: "team:ale-stp",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-koe-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ale-koe",
        away: "team:ale-bvb",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-vfb-m05",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ale-vfb",
        away: "team:ale-m05",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-fca-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ale-fca",
        away: "team:ale-sge",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-scf-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ale-scf",
        away: "team:ale-tsg",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-fcu-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ale-fcu",
        away: "team:ale-wob",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-08-bmg-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ale-bmg",
        away: "team:ale-svw",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-hsv-fcb",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ale-hsv",
        away: "team:ale-fcb",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-s04-stp",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ale-s04",
        away: "team:ale-stp",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-koe-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ale-koe",
        away: "team:ale-b04",
        score: {
            home: 0,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-rbl-m05",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ale-rbl",
        away: "team:ale-m05",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-fca-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ale-fca",
        away: "team:ale-bvb",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-vfb-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ale-vfb",
        away: "team:ale-tsg",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-fcu-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ale-fcu",
        away: "team:ale-sge",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-scf-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ale-scf",
        away: "team:ale-svw",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-13-bmg-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ale-bmg",
        away: "team:ale-wob",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-fcb-stp",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ale-fcb",
        away: "team:ale-stp",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-koe-hsv",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ale-koe",
        away: "team:ale-hsv",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-s04-m05",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ale-s04",
        away: "team:ale-m05",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-fca-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ale-fca",
        away: "team:ale-b04",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-rbl-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ale-rbl",
        away: "team:ale-tsg",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-fcu-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ale-fcu",
        away: "team:ale-bvb",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-vfb-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ale-vfb",
        away: "team:ale-svw",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-bmg-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ale-bmg",
        away: "team:ale-sge",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-18-scf-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ale-scf",
        away: "team:ale-wob",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-koe-fcb",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ale-koe",
        away: "team:ale-fcb",
        score: {
            home: 0,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-stp-m05",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ale-stp",
        away: "team:ale-m05",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-fca-hsv",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ale-fca",
        away: "team:ale-hsv",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-s04-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ale-s04",
        away: "team:ale-tsg",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-fcu-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ale-fcu",
        away: "team:ale-b04",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-rbl-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ale-rbl",
        away: "team:ale-svw",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-bmg-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ale-bmg",
        away: "team:ale-bvb",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-vfb-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ale-vfb",
        away: "team:ale-wob",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-23-scf-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ale-scf",
        away: "team:ale-sge",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-fcb-m05",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ale-fcb",
        away: "team:ale-m05",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-fca-koe",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ale-fca",
        away: "team:ale-koe",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-stp-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ale-stp",
        away: "team:ale-tsg",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-fcu-hsv",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ale-fcu",
        away: "team:ale-hsv",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-s04-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ale-s04",
        away: "team:ale-svw",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-bmg-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ale-bmg",
        away: "team:ale-b04",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-rbl-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ale-rbl",
        away: "team:ale-wob",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-scf-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ale-scf",
        away: "team:ale-bvb",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-08-28-vfb-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ale-vfb",
        away: "team:ale-sge",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ale-2026-09-01-fca-fcb",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:ale-fca",
        away: "team:ale-fcb",
        score: {
            home: 1,
            away: 0
        },
        minute: 63
    },
    {
        id: "match:ale-2026-09-01-m05-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:ale-m05",
        away: "team:ale-tsg",
        score: {
            home: 0,
            away: 2
        },
        minute: 49
    },
    {
        id: "match:ale-2026-09-01-fcu-koe",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:ale-fcu",
        away: "team:ale-koe",
        score: {
            home: 2,
            away: 0
        },
        minute: 48
    },
    {
        id: "match:ale-2026-09-01-stp-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ale-stp",
        away: "team:ale-svw",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-01-bmg-hsv",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ale-bmg",
        away: "team:ale-hsv",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-01-s04-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:ale-s04",
        away: "team:ale-wob",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-01-scf-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:ale-scf",
        away: "team:ale-b04",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-01-rbl-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ale-rbl",
        away: "team:ale-sge",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-01-vfb-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ale-vfb",
        away: "team:ale-bvb",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-fcb-tsg",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ale-fcb",
        away: "team:ale-tsg",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-fcu-fca",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ale-fcu",
        away: "team:ale-fca",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-m05-svw",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ale-m05",
        away: "team:ale-svw",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-bmg-koe",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ale-bmg",
        away: "team:ale-koe",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-stp-wob",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ale-stp",
        away: "team:ale-wob",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-scf-hsv",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ale-scf",
        away: "team:ale-hsv",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-s04-sge",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ale-s04",
        away: "team:ale-sge",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-vfb-b04",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ale-vfb",
        away: "team:ale-b04",
        score: null,
        minute: null
    },
    {
        id: "match:ale-2026-09-06-rbl-bvb",
        leagueId: "league:ale-bundesliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ale-rbl",
        away: "team:ale-bvb",
        score: null,
        minute: null
    }
];
