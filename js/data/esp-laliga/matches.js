// ============================================================
//  data/esp-laliga/matches.js — partidos de la liga (GENERADO)
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
        id: "match:esp-2026-08-08-rma-mal",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:esp-rma",
        away: "team:esp-mal",
        score: {
            home: 1,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "3-4-3",
                away: "3-4-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:esp-rma-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:esp-rma-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:esp-rma-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:esp-rma-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:esp-rma-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:esp-rma-6",
                        number: 6,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:esp-rma-7",
                        number: 7,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:esp-rma-8",
                        number: 8,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:esp-rma-9",
                        number: 9,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:esp-rma-10",
                        number: 10,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:esp-rma-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:esp-mal-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:esp-mal-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:esp-mal-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:esp-mal-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:esp-mal-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:esp-mal-6",
                        number: 6,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:esp-mal-7",
                        number: 7,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:esp-mal-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:esp-mal-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:esp-mal-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:esp-mal-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 43,
                    remates: 14,
                    rematesAlArco: 4,
                    corners: 3,
                    faltas: 13,
                    amarillas: 3,
                    rojas: 0,
                    pases: 392,
                    precisionPases: 90,
                    offsides: 2,
                    atajadas: 3,
                    xg: 1.48
                },
                away: {
                    posesion: 57,
                    remates: 12,
                    rematesAlArco: 3,
                    corners: 6,
                    faltas: 15,
                    amarillas: 3,
                    rojas: 0,
                    pases: 529,
                    precisionPases: 89,
                    offsides: 2,
                    atajadas: 3,
                    xg: 0.99
                }
            },
            events: [
                {
                    minuto: 29,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:esp-mal-4"
                },
                {
                    minuto: 54,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-rma-8"
                },
                {
                    minuto: 64,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:esp-rma-10"
                },
                {
                    minuto: 69,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:esp-mal-5"
                },
                {
                    minuto: 71,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:esp-mal-7"
                },
                {
                    minuto: 74,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:esp-rma-3"
                },
                {
                    minuto: 74,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:esp-rma-4"
                },
                {
                    minuto: 82,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-rma-9"
                },
                {
                    minuto: 86,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-rma-4"
                }
            ],
            ratings: {
                "player:esp-rma-1": {
                    nota: 7.6
                },
                "player:esp-rma-2": {
                    nota: 6.2
                },
                "player:esp-rma-3": {
                    nota: 6.8
                },
                "player:esp-rma-4": {
                    nota: 6.4
                },
                "player:esp-rma-5": {
                    nota: 6.7
                },
                "player:esp-rma-6": {
                    nota: 6.5
                },
                "player:esp-rma-7": {
                    nota: 6.7
                },
                "player:esp-rma-8": {
                    nota: 6.7
                },
                "player:esp-rma-9": {
                    nota: 6.1
                },
                "player:esp-rma-10": {
                    nota: 7.9
                },
                "player:esp-rma-11": {
                    nota: 6
                },
                "player:esp-mal-1": {
                    nota: 6.8
                },
                "player:esp-mal-2": {
                    nota: 7.3
                },
                "player:esp-mal-3": {
                    nota: 8.1
                },
                "player:esp-mal-4": {
                    nota: 6.7
                },
                "player:esp-mal-5": {
                    nota: 6.7
                },
                "player:esp-mal-6": {
                    nota: 7.1
                },
                "player:esp-mal-7": {
                    nota: 6
                },
                "player:esp-mal-8": {
                    nota: 6
                },
                "player:esp-mal-9": {
                    nota: 6.7
                },
                "player:esp-mal-10": {
                    nota: 7.8
                },
                "player:esp-mal-11": {
                    nota: 7.7
                }
            }
        }
    },
    {
        id: "match:esp-2026-08-08-lev-bar",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:esp-lev",
        away: "team:esp-bar",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-atm-elc",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:esp-atm",
        away: "team:esp-elc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-ala-ath",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:esp-ala",
        away: "team:esp-ath",
        score: {
            home: 0,
            away: 2
        },
        minute: null,
        detail: {
            formations: {
                home: "3-4-3",
                away: "4-4-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:esp-ala-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:esp-ala-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:esp-ala-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:esp-ala-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:esp-ala-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:esp-ala-6",
                        number: 6,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:esp-ala-7",
                        number: 7,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:esp-ala-8",
                        number: 8,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:esp-ala-9",
                        number: 9,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:esp-ala-10",
                        number: 10,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:esp-ala-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:esp-ath-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:esp-ath-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:esp-ath-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:esp-ath-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:esp-ath-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:esp-ath-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:esp-ath-7",
                        number: 7,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:esp-ath-8",
                        number: 8,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:esp-ath-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:esp-ath-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:esp-ath-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 43,
                    remates: 9,
                    rematesAlArco: 3,
                    corners: 4,
                    faltas: 13,
                    amarillas: 3,
                    rojas: 0,
                    pases: 402,
                    precisionPases: 87,
                    offsides: 3,
                    atajadas: 5,
                    xg: 0.93
                },
                away: {
                    posesion: 57,
                    remates: 14,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 11,
                    amarillas: 4,
                    rojas: 0,
                    pases: 536,
                    precisionPases: 87,
                    offsides: 1,
                    atajadas: 3,
                    xg: 2.86
                }
            },
            events: [
                {
                    minuto: 13,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:esp-ath-8"
                },
                {
                    minuto: 23,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-ala-1"
                },
                {
                    minuto: 28,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:esp-ath-1"
                },
                {
                    minuto: 37,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:esp-ath-7"
                },
                {
                    minuto: 54,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:esp-ath-11"
                },
                {
                    minuto: 55,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-ala-3"
                },
                {
                    minuto: 67,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:esp-ala-7"
                },
                {
                    minuto: 68,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:esp-ala-6"
                },
                {
                    minuto: 73,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:esp-ala-2"
                },
                {
                    minuto: 78,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:esp-ath-5"
                },
                {
                    minuto: 81,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:esp-ath-5"
                },
                {
                    minuto: 85,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:esp-ath-5"
                }
            ],
            ratings: {
                "player:esp-ala-1": {
                    nota: 6.8
                },
                "player:esp-ala-2": {
                    nota: 6.4
                },
                "player:esp-ala-3": {
                    nota: 7
                },
                "player:esp-ala-4": {
                    nota: 6.8
                },
                "player:esp-ala-5": {
                    nota: 6
                },
                "player:esp-ala-6": {
                    nota: 7.8
                },
                "player:esp-ala-7": {
                    nota: 8.1
                },
                "player:esp-ala-8": {
                    nota: 7.1
                },
                "player:esp-ala-9": {
                    nota: 6.2
                },
                "player:esp-ala-10": {
                    nota: 7.3
                },
                "player:esp-ala-11": {
                    nota: 5.9
                },
                "player:esp-ath-1": {
                    nota: 6.6
                },
                "player:esp-ath-2": {
                    nota: 6.6
                },
                "player:esp-ath-3": {
                    nota: 7
                },
                "player:esp-ath-4": {
                    nota: 6
                },
                "player:esp-ath-5": {
                    nota: 5.9
                },
                "player:esp-ath-6": {
                    nota: 8
                },
                "player:esp-ath-7": {
                    nota: 8.5
                },
                "player:esp-ath-8": {
                    nota: 8.4
                },
                "player:esp-ath-9": {
                    nota: 6.2
                },
                "player:esp-ath-10": {
                    nota: 8.1
                },
                "player:esp-ath-11": {
                    nota: 7.5
                }
            }
        }
    },
    {
        id: "match:esp-2026-08-08-rso-esp",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:esp-rso",
        away: "team:esp-esp",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-get-bet",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:esp-get",
        away: "team:esp-bet",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-vil-mll",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:esp-vil",
        away: "team:esp-mll",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-ray-sev",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:esp-ray",
        away: "team:esp-sev",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-val-cel",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:esp-val",
        away: "team:esp-cel",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-08-osa-gir",
        leagueId: "league:esp-laliga",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:esp-osa",
        away: "team:esp-gir",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-lev-rma",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:esp-lev",
        away: "team:esp-rma",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-mal-elc",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:esp-mal",
        away: "team:esp-elc",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-ala-bar",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:esp-ala",
        away: "team:esp-bar",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-atm-esp",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:esp-atm",
        away: "team:esp-esp",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-get-ath",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:esp-get",
        away: "team:esp-ath",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-rso-mll",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:esp-rso",
        away: "team:esp-mll",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-ray-bet",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:esp-ray",
        away: "team:esp-bet",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-vil-cel",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:esp-vil",
        away: "team:esp-cel",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-osa-sev",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:esp-osa",
        away: "team:esp-sev",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-13-val-gir",
        leagueId: "league:esp-laliga",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:esp-val",
        away: "team:esp-gir",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-rma-elc",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:esp-rma",
        away: "team:esp-elc",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-ala-lev",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:esp-ala",
        away: "team:esp-lev",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-mal-esp",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:esp-mal",
        away: "team:esp-esp",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-get-bar",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:esp-get",
        away: "team:esp-bar",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-atm-mll",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:esp-atm",
        away: "team:esp-mll",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-ray-ath",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:esp-ray",
        away: "team:esp-ath",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-rso-cel",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:esp-rso",
        away: "team:esp-cel",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-osa-bet",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:esp-osa",
        away: "team:esp-bet",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-vil-gir",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:esp-vil",
        away: "team:esp-gir",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-18-val-sev",
        leagueId: "league:esp-laliga",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:esp-val",
        away: "team:esp-sev",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-ala-rma",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:esp-ala",
        away: "team:esp-rma",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-elc-esp",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:esp-elc",
        away: "team:esp-esp",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-get-lev",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:esp-get",
        away: "team:esp-lev",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-mal-mll",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:esp-mal",
        away: "team:esp-mll",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-ray-bar",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:esp-ray",
        away: "team:esp-bar",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-atm-cel",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:esp-atm",
        away: "team:esp-cel",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-osa-ath",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:esp-osa",
        away: "team:esp-ath",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-rso-gir",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:esp-rso",
        away: "team:esp-gir",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-val-bet",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:esp-val",
        away: "team:esp-bet",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-23-vil-sev",
        leagueId: "league:esp-laliga",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:esp-vil",
        away: "team:esp-sev",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-rma-esp",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:esp-rma",
        away: "team:esp-esp",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-get-ala",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:esp-get",
        away: "team:esp-ala",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-elc-mll",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:esp-elc",
        away: "team:esp-mll",
        score: {
            home: 3,
            away: 3
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-ray-lev",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:esp-ray",
        away: "team:esp-lev",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-mal-cel",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:esp-mal",
        away: "team:esp-cel",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-osa-bar",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:esp-osa",
        away: "team:esp-bar",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-atm-gir",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:esp-atm",
        away: "team:esp-gir",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-val-ath",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:esp-val",
        away: "team:esp-ath",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-rso-sev",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:esp-rso",
        away: "team:esp-sev",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:esp-2026-08-28-vil-bet",
        leagueId: "league:esp-laliga",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:esp-vil",
        away: "team:esp-bet",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:esp-2026-09-01-get-rma",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:esp-get",
        away: "team:esp-rma",
        score: {
            home: 1,
            away: 2
        },
        minute: 46
    },
    {
        id: "match:esp-2026-09-01-esp-mll",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:esp-esp",
        away: "team:esp-mll",
        score: {
            home: 2,
            away: 2
        },
        minute: 56
    },
    {
        id: "match:esp-2026-09-01-ray-ala",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:esp-ray",
        away: "team:esp-ala",
        score: {
            home: 1,
            away: 0
        },
        minute: 31
    },
    {
        id: "match:esp-2026-09-01-elc-cel",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:esp-elc",
        away: "team:esp-cel",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-osa-lev",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:esp-osa",
        away: "team:esp-lev",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-mal-gir",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:esp-mal",
        away: "team:esp-gir",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-val-bar",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:esp-val",
        away: "team:esp-bar",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-atm-sev",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:esp-atm",
        away: "team:esp-sev",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-vil-ath",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:esp-vil",
        away: "team:esp-ath",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-01-rso-bet",
        leagueId: "league:esp-laliga",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:esp-rso",
        away: "team:esp-bet",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-rma-mll",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:esp-rma",
        away: "team:esp-mll",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-ray-get",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:esp-ray",
        away: "team:esp-get",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-esp-cel",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:esp-esp",
        away: "team:esp-cel",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-osa-ala",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:esp-osa",
        away: "team:esp-ala",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-elc-gir",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:esp-elc",
        away: "team:esp-gir",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-val-lev",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:esp-val",
        away: "team:esp-lev",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-mal-sev",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:esp-mal",
        away: "team:esp-sev",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-vil-bar",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:esp-vil",
        away: "team:esp-bar",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-atm-bet",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:esp-atm",
        away: "team:esp-bet",
        score: null,
        minute: null
    },
    {
        id: "match:esp-2026-09-06-rso-ath",
        leagueId: "league:esp-laliga",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:esp-rso",
        away: "team:esp-ath",
        score: null,
        minute: null
    }
];
