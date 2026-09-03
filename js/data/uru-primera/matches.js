// ============================================================
//  data/uru-primera/matches.js — partidos de la liga (GENERADO)
//  56 partidos en 7 jornadas (5 finalizadas, 1 en curso,
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
        id: "match:uru-2026-08-08-pen-cen",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:uru-pen",
        away: "team:uru-cen",
        score: {
            home: 3,
            away: 0
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
                        playerId: "player:uru-pen-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:uru-pen-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:uru-pen-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:uru-pen-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:uru-pen-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:uru-pen-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:uru-pen-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:uru-pen-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:uru-pen-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:uru-pen-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:uru-pen-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:uru-cen-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:uru-cen-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:uru-cen-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:uru-cen-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:uru-cen-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:uru-cen-6",
                        number: 6,
                        x: 31,
                        y: 38
                    },
                    {
                        playerId: "player:uru-cen-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:uru-cen-8",
                        number: 8,
                        x: 69,
                        y: 38
                    },
                    {
                        playerId: "player:uru-cen-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:uru-cen-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:uru-cen-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 44,
                    remates: 8,
                    rematesAlArco: 3,
                    corners: 5,
                    faltas: 17,
                    amarillas: 3,
                    rojas: 0,
                    pases: 351,
                    precisionPases: 76,
                    offsides: 1,
                    atajadas: 5,
                    xg: 2.81
                },
                away: {
                    posesion: 56,
                    remates: 14,
                    rematesAlArco: 5,
                    corners: 6,
                    faltas: 15,
                    amarillas: 4,
                    rojas: 0,
                    pases: 402,
                    precisionPases: 71,
                    offsides: 1,
                    atajadas: 0,
                    xg: 0.96
                }
            },
            events: [
                {
                    minuto: 5,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:uru-pen-11"
                },
                {
                    minuto: 34,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:uru-pen-11"
                },
                {
                    minuto: 34,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-cen-7"
                },
                {
                    minuto: 41,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-cen-9"
                },
                {
                    minuto: 43,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:uru-pen-6"
                },
                {
                    minuto: 52,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:uru-pen-10"
                },
                {
                    minuto: 52,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-cen-7"
                },
                {
                    minuto: 68,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:uru-cen-10"
                },
                {
                    minuto: 76,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:uru-cen-5"
                },
                {
                    minuto: 78,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:uru-pen-7"
                },
                {
                    minuto: 82,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:uru-pen-11"
                },
                {
                    minuto: 85,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:uru-pen-8"
                }
            ],
            ratings: {
                "player:uru-pen-1": {
                    nota: 6.1
                },
                "player:uru-pen-2": {
                    nota: 7.1
                },
                "player:uru-pen-3": {
                    nota: 8
                },
                "player:uru-pen-4": {
                    nota: 6
                },
                "player:uru-pen-5": {
                    nota: 5.9
                },
                "player:uru-pen-6": {
                    nota: 7.3
                },
                "player:uru-pen-7": {
                    nota: 7.1
                },
                "player:uru-pen-8": {
                    nota: 7.3
                },
                "player:uru-pen-9": {
                    nota: 7.3
                },
                "player:uru-pen-10": {
                    nota: 6.9
                },
                "player:uru-pen-11": {
                    nota: 8.3
                },
                "player:uru-cen-1": {
                    nota: 7.3
                },
                "player:uru-cen-2": {
                    nota: 7
                },
                "player:uru-cen-3": {
                    nota: 7.8
                },
                "player:uru-cen-4": {
                    nota: 6.1
                },
                "player:uru-cen-5": {
                    nota: 6
                },
                "player:uru-cen-6": {
                    nota: 6.3
                },
                "player:uru-cen-7": {
                    nota: 8
                },
                "player:uru-cen-8": {
                    nota: 8.1
                },
                "player:uru-cen-9": {
                    nota: 7.1
                },
                "player:uru-cen-10": {
                    nota: 6.6
                },
                "player:uru-cen-11": {
                    nota: 7.9
                }
            }
        }
    },
    {
        id: "match:uru-2026-08-08-alb-nac",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:uru-alb",
        away: "team:uru-nac",
        score: {
            home: 0,
            away: 3
        },
        minute: null,
        detail: {
            formations: {
                home: "4-2-3-1",
                away: "4-3-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:uru-alb-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:uru-alb-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:uru-alb-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:uru-alb-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:uru-alb-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:uru-alb-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:uru-alb-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:uru-alb-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:uru-alb-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:uru-alb-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:uru-alb-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:uru-nac-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:uru-nac-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:uru-nac-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:uru-nac-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:uru-nac-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:uru-nac-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:uru-nac-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:uru-nac-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:uru-nac-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:uru-nac-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:uru-nac-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 53,
                    remates: 11,
                    rematesAlArco: 4,
                    corners: 5,
                    faltas: 17,
                    amarillas: 2,
                    rojas: 0,
                    pases: 418,
                    precisionPases: 74,
                    offsides: 1,
                    atajadas: 2,
                    xg: 0.73
                },
                away: {
                    posesion: 47,
                    remates: 12,
                    rematesAlArco: 5,
                    corners: 5,
                    faltas: 14,
                    amarillas: 4,
                    rojas: 0,
                    pases: 370,
                    precisionPases: 78,
                    offsides: 2,
                    atajadas: 4,
                    xg: 3.32
                }
            },
            events: [
                {
                    minuto: 30,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:uru-alb-1"
                },
                {
                    minuto: 36,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-nac-4"
                },
                {
                    minuto: 37,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:uru-nac-10"
                },
                {
                    minuto: 61,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-nac-10"
                },
                {
                    minuto: 62,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:uru-nac-7"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:uru-nac-8"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:uru-alb-9"
                },
                {
                    minuto: 75,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:uru-nac-1"
                },
                {
                    minuto: 79,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:uru-alb-1"
                },
                {
                    minuto: 80,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:uru-nac-4"
                },
                {
                    minuto: 90,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:uru-nac-10"
                }
            ],
            ratings: {
                "player:uru-alb-1": {
                    nota: 7.5
                },
                "player:uru-alb-2": {
                    nota: 7.8
                },
                "player:uru-alb-3": {
                    nota: 7.3
                },
                "player:uru-alb-4": {
                    nota: 7
                },
                "player:uru-alb-5": {
                    nota: 6.3
                },
                "player:uru-alb-6": {
                    nota: 7.4
                },
                "player:uru-alb-7": {
                    nota: 7.1
                },
                "player:uru-alb-8": {
                    nota: 6.5
                },
                "player:uru-alb-9": {
                    nota: 7.9
                },
                "player:uru-alb-10": {
                    nota: 6.4
                },
                "player:uru-alb-11": {
                    nota: 6.3
                },
                "player:uru-nac-1": {
                    nota: 6.6
                },
                "player:uru-nac-2": {
                    nota: 7.9
                },
                "player:uru-nac-3": {
                    nota: 7.2
                },
                "player:uru-nac-4": {
                    nota: 7.3
                },
                "player:uru-nac-5": {
                    nota: 6.7
                },
                "player:uru-nac-6": {
                    nota: 7.4
                },
                "player:uru-nac-7": {
                    nota: 8.3
                },
                "player:uru-nac-8": {
                    nota: 6
                },
                "player:uru-nac-9": {
                    nota: 7.7
                },
                "player:uru-nac-10": {
                    nota: 8.8
                },
                "player:uru-nac-11": {
                    nota: 6.8
                }
            }
        }
    },
    {
        id: "match:uru-2026-08-08-mal-cer",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:uru-mal",
        away: "team:uru-cer",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-08-juv-liv",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:uru-juv",
        away: "team:uru-liv",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-08-def-pro",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:uru-def",
        away: "team:uru-pro",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-08-wan-dan",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:uru-wan",
        away: "team:uru-dan",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-08-rac-tor",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:uru-rac",
        away: "team:uru-tor",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-08-cll-bri",
        leagueId: "league:uru-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:uru-cll",
        away: "team:uru-bri",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-alb-pen",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:uru-alb",
        away: "team:uru-pen",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-cen-cer",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:uru-cen",
        away: "team:uru-cer",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-juv-nac",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:uru-juv",
        away: "team:uru-nac",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-mal-pro",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:uru-mal",
        away: "team:uru-pro",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-wan-liv",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:uru-wan",
        away: "team:uru-liv",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-def-tor",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:uru-def",
        away: "team:uru-tor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-cll-dan",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:uru-cll",
        away: "team:uru-dan",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-13-rac-bri",
        leagueId: "league:uru-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:uru-rac",
        away: "team:uru-bri",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-pen-cer",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:uru-pen",
        away: "team:uru-cer",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-juv-alb",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:uru-juv",
        away: "team:uru-alb",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-cen-pro",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:uru-cen",
        away: "team:uru-pro",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-wan-nac",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:uru-wan",
        away: "team:uru-nac",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-mal-tor",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:uru-mal",
        away: "team:uru-tor",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-cll-liv",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:uru-cll",
        away: "team:uru-liv",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-def-bri",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:uru-def",
        away: "team:uru-bri",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-18-rac-dan",
        leagueId: "league:uru-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:uru-rac",
        away: "team:uru-dan",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-juv-pen",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:uru-juv",
        away: "team:uru-pen",
        score: {
            home: 0,
            away: 3
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-cer-pro",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:uru-cer",
        away: "team:uru-pro",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-wan-alb",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:uru-wan",
        away: "team:uru-alb",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-cen-tor",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:uru-cen",
        away: "team:uru-tor",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-cll-nac",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:uru-cll",
        away: "team:uru-nac",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-mal-bri",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:uru-mal",
        away: "team:uru-bri",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-rac-liv",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:uru-rac",
        away: "team:uru-liv",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-23-def-dan",
        leagueId: "league:uru-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:uru-def",
        away: "team:uru-dan",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-pen-pro",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:uru-pen",
        away: "team:uru-pro",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-wan-juv",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:uru-wan",
        away: "team:uru-juv",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-cer-tor",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:uru-cer",
        away: "team:uru-tor",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-cll-alb",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:uru-cll",
        away: "team:uru-alb",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-cen-bri",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:uru-cen",
        away: "team:uru-bri",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-rac-nac",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:uru-rac",
        away: "team:uru-nac",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-mal-dan",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:uru-mal",
        away: "team:uru-dan",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:uru-2026-08-28-def-liv",
        leagueId: "league:uru-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:uru-def",
        away: "team:uru-liv",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:uru-2026-09-01-wan-pen",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:uru-wan",
        away: "team:uru-pen",
        score: {
            home: 1,
            away: 1
        },
        minute: 53
    },
    {
        id: "match:uru-2026-09-01-pro-tor",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:uru-pro",
        away: "team:uru-tor",
        score: {
            home: 1,
            away: 1
        },
        minute: 69
    },
    {
        id: "match:uru-2026-09-01-cll-juv",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:uru-cll",
        away: "team:uru-juv",
        score: {
            home: 3,
            away: 0
        },
        minute: 47
    },
    {
        id: "match:uru-2026-09-01-cer-bri",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:uru-cer",
        away: "team:uru-bri",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-01-rac-alb",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:uru-rac",
        away: "team:uru-alb",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-01-cen-dan",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:uru-cen",
        away: "team:uru-dan",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-01-def-nac",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:uru-def",
        away: "team:uru-nac",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-01-mal-liv",
        leagueId: "league:uru-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:uru-mal",
        away: "team:uru-liv",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-pen-tor",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:uru-pen",
        away: "team:uru-tor",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-cll-wan",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:uru-cll",
        away: "team:uru-wan",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-pro-bri",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:uru-pro",
        away: "team:uru-bri",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-rac-juv",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:uru-rac",
        away: "team:uru-juv",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-cer-dan",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:uru-cer",
        away: "team:uru-dan",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-def-alb",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:uru-def",
        away: "team:uru-alb",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-cen-liv",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:uru-cen",
        away: "team:uru-liv",
        score: null,
        minute: null
    },
    {
        id: "match:uru-2026-09-06-mal-nac",
        leagueId: "league:uru-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:uru-mal",
        away: "team:uru-nac",
        score: null,
        minute: null
    }
];
