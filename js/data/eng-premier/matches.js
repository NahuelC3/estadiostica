// ============================================================
//  data/eng-premier/matches.js — partidos de la liga (GENERADO)
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
        id: "match:eng-2026-08-08-mci-sou",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:eng-mci",
        away: "team:eng-sou",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-ips-ars",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:eng-ips",
        away: "team:eng-ars",
        score: {
            home: 1,
            away: 2
        },
        minute: null,
        detail: {
            formations: {
                home: "3-5-2",
                away: "4-4-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:eng-ips-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:eng-ips-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:eng-ips-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:eng-ips-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:eng-ips-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:eng-ips-6",
                        number: 6,
                        x: 31,
                        y: 62
                    },
                    {
                        playerId: "player:eng-ips-7",
                        number: 7,
                        x: 50,
                        y: 62
                    },
                    {
                        playerId: "player:eng-ips-8",
                        number: 8,
                        x: 69,
                        y: 62
                    },
                    {
                        playerId: "player:eng-ips-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:eng-ips-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:eng-ips-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:eng-ars-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:eng-ars-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ars-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ars-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ars-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ars-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ars-7",
                        number: 7,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ars-8",
                        number: 8,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ars-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ars-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:eng-ars-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 44,
                    remates: 7,
                    rematesAlArco: 3,
                    corners: 4,
                    faltas: 10,
                    amarillas: 3,
                    rojas: 0,
                    pases: 416,
                    precisionPases: 82,
                    offsides: 2,
                    atajadas: 5,
                    xg: 1.73
                },
                away: {
                    posesion: 56,
                    remates: 14,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 9,
                    amarillas: 1,
                    rojas: 0,
                    pases: 541,
                    precisionPases: 77,
                    offsides: 2,
                    atajadas: 2,
                    xg: 2.84
                }
            },
            events: [
                {
                    minuto: 15,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:eng-ars-8"
                },
                {
                    minuto: 26,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:eng-ips-4"
                },
                {
                    minuto: 33,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:eng-ars-11"
                },
                {
                    minuto: 38,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:eng-ips-8"
                },
                {
                    minuto: 59,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:eng-ips-9"
                },
                {
                    minuto: 70,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:eng-ars-7"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:eng-ars-8"
                },
                {
                    minuto: 81,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:eng-ips-7"
                },
                {
                    minuto: 81,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:eng-ars-6"
                },
                {
                    minuto: 92,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:eng-ars-5"
                }
            ],
            ratings: {
                "player:eng-ips-1": {
                    nota: 6.9
                },
                "player:eng-ips-2": {
                    nota: 6.8
                },
                "player:eng-ips-3": {
                    nota: 7.6
                },
                "player:eng-ips-4": {
                    nota: 7.4
                },
                "player:eng-ips-5": {
                    nota: 6.7
                },
                "player:eng-ips-6": {
                    nota: 6.9
                },
                "player:eng-ips-7": {
                    nota: 6.8
                },
                "player:eng-ips-8": {
                    nota: 7.3
                },
                "player:eng-ips-9": {
                    nota: 7.6
                },
                "player:eng-ips-10": {
                    nota: 6
                },
                "player:eng-ips-11": {
                    nota: 7.7
                },
                "player:eng-ars-1": {
                    nota: 7.5
                },
                "player:eng-ars-2": {
                    nota: 7.9
                },
                "player:eng-ars-3": {
                    nota: 6.1
                },
                "player:eng-ars-4": {
                    nota: 5.9
                },
                "player:eng-ars-5": {
                    nota: 7.9
                },
                "player:eng-ars-6": {
                    nota: 6.7
                },
                "player:eng-ars-7": {
                    nota: 6.8
                },
                "player:eng-ars-8": {
                    nota: 6.8
                },
                "player:eng-ars-9": {
                    nota: 7.1
                },
                "player:eng-ars-10": {
                    nota: 6.2
                },
                "player:eng-ars-11": {
                    nota: 8.6
                }
            }
        }
    },
    {
        id: "match:eng-2026-08-08-liv-lei",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:eng-liv",
        away: "team:eng-lei",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-bou-che",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:eng-bou",
        away: "team:eng-che",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-mun-nfo",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:eng-mun",
        away: "team:eng-nfo",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-wol-tot",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:eng-wol",
        away: "team:eng-tot",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-new-eve",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:eng-new",
        away: "team:eng-eve",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-cry-avl",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:eng-cry",
        away: "team:eng-avl",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-08-bha-ful",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:eng-bha",
        away: "team:eng-ful",
        score: {
            home: 1,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "3-5-2",
                away: "4-2-3-1"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:eng-bha-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:eng-bha-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:eng-bha-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:eng-bha-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:eng-bha-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:eng-bha-6",
                        number: 6,
                        x: 31,
                        y: 62
                    },
                    {
                        playerId: "player:eng-bha-7",
                        number: 7,
                        x: 50,
                        y: 62
                    },
                    {
                        playerId: "player:eng-bha-8",
                        number: 8,
                        x: 69,
                        y: 62
                    },
                    {
                        playerId: "player:eng-bha-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:eng-bha-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:eng-bha-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:eng-ful-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:eng-ful-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ful-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ful-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ful-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:eng-ful-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ful-7",
                        number: 7,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:eng-ful-8",
                        number: 8,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:eng-ful-9",
                        number: 9,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:eng-ful-10",
                        number: 10,
                        x: 88,
                        y: 53
                    },
                    {
                        playerId: "player:eng-ful-11",
                        number: 11,
                        x: 50,
                        y: 66
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 57,
                    remates: 19,
                    rematesAlArco: 7,
                    corners: 7,
                    faltas: 10,
                    amarillas: 1,
                    rojas: 0,
                    pases: 528,
                    precisionPases: 82,
                    offsides: 3,
                    atajadas: 3,
                    xg: 2.27
                },
                away: {
                    posesion: 43,
                    remates: 12,
                    rematesAlArco: 3,
                    corners: 3,
                    faltas: 11,
                    amarillas: 3,
                    rojas: 0,
                    pases: 429,
                    precisionPases: 88,
                    offsides: 1,
                    atajadas: 6,
                    xg: 0.69
                }
            },
            events: [
                {
                    minuto: 32,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:eng-bha-11"
                },
                {
                    minuto: 48,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:eng-ful-2"
                },
                {
                    minuto: 57,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:eng-ful-5"
                },
                {
                    minuto: 64,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:eng-bha-8"
                },
                {
                    minuto: 68,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:eng-bha-8"
                },
                {
                    minuto: 81,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:eng-ful-2"
                },
                {
                    minuto: 84,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:eng-bha-5"
                },
                {
                    minuto: 84,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:eng-ful-11"
                },
                {
                    minuto: 85,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:eng-bha-2"
                }
            ],
            ratings: {
                "player:eng-bha-1": {
                    nota: 7.9
                },
                "player:eng-bha-2": {
                    nota: 7.5
                },
                "player:eng-bha-3": {
                    nota: 5.9
                },
                "player:eng-bha-4": {
                    nota: 7.5
                },
                "player:eng-bha-5": {
                    nota: 6.1
                },
                "player:eng-bha-6": {
                    nota: 7.4
                },
                "player:eng-bha-7": {
                    nota: 6.5
                },
                "player:eng-bha-8": {
                    nota: 7.6
                },
                "player:eng-bha-9": {
                    nota: 7.9
                },
                "player:eng-bha-10": {
                    nota: 7.8
                },
                "player:eng-bha-11": {
                    nota: 6.4
                },
                "player:eng-ful-1": {
                    nota: 7.9
                },
                "player:eng-ful-2": {
                    nota: 6.8
                },
                "player:eng-ful-3": {
                    nota: 7.9
                },
                "player:eng-ful-4": {
                    nota: 7.7
                },
                "player:eng-ful-5": {
                    nota: 6.4
                },
                "player:eng-ful-6": {
                    nota: 6.4
                },
                "player:eng-ful-7": {
                    nota: 7.5
                },
                "player:eng-ful-8": {
                    nota: 6.1
                },
                "player:eng-ful-9": {
                    nota: 7.8
                },
                "player:eng-ful-10": {
                    nota: 6.8
                },
                "player:eng-ful-11": {
                    nota: 6.9
                }
            }
        }
    },
    {
        id: "match:eng-2026-08-08-bre-whu",
        leagueId: "league:eng-premier",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:eng-bre",
        away: "team:eng-whu",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-ips-mci",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:eng-ips",
        away: "team:eng-mci",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-sou-lei",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:eng-sou",
        away: "team:eng-lei",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-bou-ars",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:eng-bou",
        away: "team:eng-ars",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-liv-nfo",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:eng-liv",
        away: "team:eng-nfo",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-wol-che",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:eng-wol",
        away: "team:eng-che",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-mun-eve",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:eng-mun",
        away: "team:eng-eve",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-cry-tot",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:eng-cry",
        away: "team:eng-tot",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-new-ful",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:eng-new",
        away: "team:eng-ful",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-bre-avl",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:eng-bre",
        away: "team:eng-avl",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-13-bha-whu",
        leagueId: "league:eng-premier",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:eng-bha",
        away: "team:eng-whu",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-mci-lei",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:eng-mci",
        away: "team:eng-lei",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-bou-ips",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:eng-bou",
        away: "team:eng-ips",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-sou-nfo",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:eng-sou",
        away: "team:eng-nfo",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-wol-ars",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:eng-wol",
        away: "team:eng-ars",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-liv-eve",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:eng-liv",
        away: "team:eng-eve",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-cry-che",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:eng-cry",
        away: "team:eng-che",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-mun-ful",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:eng-mun",
        away: "team:eng-ful",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-bre-tot",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:eng-bre",
        away: "team:eng-tot",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-new-whu",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:eng-new",
        away: "team:eng-whu",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-18-bha-avl",
        leagueId: "league:eng-premier",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:eng-bha",
        away: "team:eng-avl",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-bou-mci",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:eng-bou",
        away: "team:eng-mci",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-lei-nfo",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:eng-lei",
        away: "team:eng-nfo",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-wol-ips",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:eng-wol",
        away: "team:eng-ips",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-sou-eve",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:eng-sou",
        away: "team:eng-eve",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-cry-ars",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:eng-cry",
        away: "team:eng-ars",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-liv-ful",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:eng-liv",
        away: "team:eng-ful",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-bre-che",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:eng-bre",
        away: "team:eng-che",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-mun-whu",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:eng-mun",
        away: "team:eng-whu",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-bha-tot",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:eng-bha",
        away: "team:eng-tot",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-23-new-avl",
        leagueId: "league:eng-premier",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:eng-new",
        away: "team:eng-avl",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-mci-nfo",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:eng-mci",
        away: "team:eng-nfo",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-wol-bou",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:eng-wol",
        away: "team:eng-bou",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-lei-eve",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:eng-lei",
        away: "team:eng-eve",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-cry-ips",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:eng-cry",
        away: "team:eng-ips",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-sou-ful",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:eng-sou",
        away: "team:eng-ful",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-bre-ars",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:eng-bre",
        away: "team:eng-ars",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-liv-whu",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:eng-liv",
        away: "team:eng-whu",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-bha-che",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:eng-bha",
        away: "team:eng-che",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-mun-avl",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:eng-mun",
        away: "team:eng-avl",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-08-28-new-tot",
        leagueId: "league:eng-premier",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:eng-new",
        away: "team:eng-tot",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:eng-2026-09-01-wol-mci",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:eng-wol",
        away: "team:eng-mci",
        score: {
            home: 0,
            away: 1
        },
        minute: 65
    },
    {
        id: "match:eng-2026-09-01-nfo-eve",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:eng-nfo",
        away: "team:eng-eve",
        score: {
            home: 2,
            away: 1
        },
        minute: 41
    },
    {
        id: "match:eng-2026-09-01-cry-bou",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:eng-cry",
        away: "team:eng-bou",
        score: {
            home: 1,
            away: 2
        },
        minute: 78
    },
    {
        id: "match:eng-2026-09-01-lei-ful",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:eng-lei",
        away: "team:eng-ful",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-bre-ips",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:eng-bre",
        away: "team:eng-ips",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-sou-whu",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:eng-sou",
        away: "team:eng-whu",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-bha-ars",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:eng-bha",
        away: "team:eng-ars",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-liv-avl",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:eng-liv",
        away: "team:eng-avl",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-new-che",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:eng-new",
        away: "team:eng-che",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-01-mun-tot",
        leagueId: "league:eng-premier",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:eng-mun",
        away: "team:eng-tot",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-mci-eve",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:eng-mci",
        away: "team:eng-eve",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-cry-wol",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:eng-cry",
        away: "team:eng-wol",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-nfo-ful",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:eng-nfo",
        away: "team:eng-ful",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-bre-bou",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:eng-bre",
        away: "team:eng-bou",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-lei-whu",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:eng-lei",
        away: "team:eng-whu",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-bha-ips",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:eng-bha",
        away: "team:eng-ips",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-sou-avl",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:eng-sou",
        away: "team:eng-avl",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-new-ars",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:eng-new",
        away: "team:eng-ars",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-liv-tot",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:eng-liv",
        away: "team:eng-tot",
        score: null,
        minute: null
    },
    {
        id: "match:eng-2026-09-06-mun-che",
        leagueId: "league:eng-premier",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:eng-mun",
        away: "team:eng-che",
        score: null,
        minute: null
    }
];
