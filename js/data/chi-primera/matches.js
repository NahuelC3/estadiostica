// ============================================================
//  data/chi-primera/matches.js — partidos de la liga (GENERADO)
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
        id: "match:chi-2026-08-08-col-dco",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:chi-col",
        away: "team:chi-dco",
        score: {
            home: 2,
            away: 2
        },
        minute: null,
        detail: {
            formations: {
                home: "4-4-2",
                away: "4-3-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:chi-col-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:chi-col-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:chi-col-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:chi-col-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:chi-col-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:chi-col-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:chi-col-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:chi-col-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:chi-col-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:chi-col-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:chi-col-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:chi-dco-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:chi-dco-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:chi-dco-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:chi-dco-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:chi-dco-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:chi-dco-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:chi-dco-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:chi-dco-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:chi-dco-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:chi-dco-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:chi-dco-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 44,
                    remates: 14,
                    rematesAlArco: 4,
                    corners: 6,
                    faltas: 13,
                    amarillas: 4,
                    rojas: 0,
                    pases: 377,
                    precisionPases: 79,
                    offsides: 2,
                    atajadas: 5,
                    xg: 2.42
                },
                away: {
                    posesion: 56,
                    remates: 13,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 16,
                    amarillas: 3,
                    rojas: 0,
                    pases: 456,
                    precisionPases: 76,
                    offsides: 2,
                    atajadas: 2,
                    xg: 2.82
                }
            },
            events: [
                {
                    minuto: 4,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:chi-col-9"
                },
                {
                    minuto: 25,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-col-4"
                },
                {
                    minuto: 25,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-col-8"
                },
                {
                    minuto: 41,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:chi-col-8"
                },
                {
                    minuto: 43,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:chi-dco-9"
                },
                {
                    minuto: 61,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:chi-dco-4"
                },
                {
                    minuto: 62,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:chi-dco-8"
                },
                {
                    minuto: 69,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-col-7"
                },
                {
                    minuto: 77,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:chi-col-3"
                },
                {
                    minuto: 82,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:chi-dco-4"
                },
                {
                    minuto: 85,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:chi-dco-7"
                },
                {
                    minuto: 85,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:chi-col-9"
                }
            ],
            ratings: {
                "player:chi-col-1": {
                    nota: 6.8
                },
                "player:chi-col-2": {
                    nota: 7.5
                },
                "player:chi-col-3": {
                    nota: 6.2
                },
                "player:chi-col-4": {
                    nota: 6.3
                },
                "player:chi-col-5": {
                    nota: 8
                },
                "player:chi-col-6": {
                    nota: 6.4
                },
                "player:chi-col-7": {
                    nota: 7.9
                },
                "player:chi-col-8": {
                    nota: 7.2
                },
                "player:chi-col-9": {
                    nota: 7.6
                },
                "player:chi-col-10": {
                    nota: 6.1
                },
                "player:chi-col-11": {
                    nota: 7.8
                },
                "player:chi-dco-1": {
                    nota: 6.5
                },
                "player:chi-dco-2": {
                    nota: 6.1
                },
                "player:chi-dco-3": {
                    nota: 5.9
                },
                "player:chi-dco-4": {
                    nota: 7.8
                },
                "player:chi-dco-5": {
                    nota: 6.8
                },
                "player:chi-dco-6": {
                    nota: 6.6
                },
                "player:chi-dco-7": {
                    nota: 7.7
                },
                "player:chi-dco-8": {
                    nota: 7.6
                },
                "player:chi-dco-9": {
                    nota: 7.6
                },
                "player:chi-dco-10": {
                    nota: 6
                },
                "player:chi-dco-11": {
                    nota: 8
                }
            }
        }
    },
    {
        id: "match:chi-2026-08-08-udk-uch",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:chi-udk",
        away: "team:chi-uch",
        score: {
            home: 1,
            away: 1
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
                        playerId: "player:chi-udk-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:chi-udk-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:chi-udk-3",
                        number: 3,
                        x: 50,
                        y: 78
                    },
                    {
                        playerId: "player:chi-udk-4",
                        number: 4,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:chi-udk-5",
                        number: 5,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:chi-udk-6",
                        number: 6,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:chi-udk-7",
                        number: 7,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:chi-udk-8",
                        number: 8,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:chi-udk-9",
                        number: 9,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:chi-udk-10",
                        number: 10,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:chi-udk-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:chi-uch-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:chi-uch-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:chi-uch-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:chi-uch-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:chi-uch-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:chi-uch-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:chi-uch-7",
                        number: 7,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:chi-uch-8",
                        number: 8,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:chi-uch-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:chi-uch-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:chi-uch-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 59,
                    remates: 13,
                    rematesAlArco: 4,
                    corners: 7,
                    faltas: 14,
                    amarillas: 3,
                    rojas: 0,
                    pases: 442,
                    precisionPases: 81,
                    offsides: 2,
                    atajadas: 3,
                    xg: 1.84
                },
                away: {
                    posesion: 41,
                    remates: 9,
                    rematesAlArco: 4,
                    corners: 4,
                    faltas: 15,
                    amarillas: 3,
                    rojas: 0,
                    pases: 328,
                    precisionPases: 75,
                    offsides: 3,
                    atajadas: 3,
                    xg: 1.48
                }
            },
            events: [
                {
                    minuto: 12,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:chi-uch-9"
                },
                {
                    minuto: 32,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-udk-6"
                },
                {
                    minuto: 33,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-udk-9"
                },
                {
                    minuto: 42,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:chi-uch-4"
                },
                {
                    minuto: 53,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:chi-udk-5"
                },
                {
                    minuto: 64,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:chi-uch-7"
                },
                {
                    minuto: 66,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:chi-udk-2"
                },
                {
                    minuto: 70,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:chi-uch-9"
                },
                {
                    minuto: 70,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:chi-uch-9"
                },
                {
                    minuto: 76,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:chi-uch-9"
                },
                {
                    minuto: 83,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:chi-udk-8"
                },
                {
                    minuto: 90,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:chi-udk-10"
                }
            ],
            ratings: {
                "player:chi-udk-1": {
                    nota: 6.1
                },
                "player:chi-udk-2": {
                    nota: 6.6
                },
                "player:chi-udk-3": {
                    nota: 6.3
                },
                "player:chi-udk-4": {
                    nota: 7.8
                },
                "player:chi-udk-5": {
                    nota: 6.6
                },
                "player:chi-udk-6": {
                    nota: 6.9
                },
                "player:chi-udk-7": {
                    nota: 6
                },
                "player:chi-udk-8": {
                    nota: 6.9
                },
                "player:chi-udk-9": {
                    nota: 6.9
                },
                "player:chi-udk-10": {
                    nota: 7.6
                },
                "player:chi-udk-11": {
                    nota: 7.6
                },
                "player:chi-uch-1": {
                    nota: 6.3
                },
                "player:chi-uch-2": {
                    nota: 6.5
                },
                "player:chi-uch-3": {
                    nota: 5.9
                },
                "player:chi-uch-4": {
                    nota: 6.4
                },
                "player:chi-uch-5": {
                    nota: 8.1
                },
                "player:chi-uch-6": {
                    nota: 6.9
                },
                "player:chi-uch-7": {
                    nota: 6.3
                },
                "player:chi-uch-8": {
                    nota: 6.2
                },
                "player:chi-uch-9": {
                    nota: 7.9
                },
                "player:chi-uch-10": {
                    nota: 7.2
                },
                "player:chi-uch-11": {
                    nota: 6.3
                }
            }
        }
    },
    {
        id: "match:chi-2026-08-08-uca-lim",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:chi-uca",
        away: "team:chi-lim",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-08-lsr-coq",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:chi-lsr",
        away: "team:chi-coq",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-08-nub-cal",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:chi-nub",
        away: "team:chi-cal",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-08-eve-pal",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:chi-eve",
        away: "team:chi-pal",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-08-aud-cob",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:chi-aud",
        away: "team:chi-cob",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-08-ohi-hua",
        leagueId: "league:chi-primera",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:chi-ohi",
        away: "team:chi-hua",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-udk-col",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:chi-udk",
        away: "team:chi-col",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-dco-lim",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:chi-dco",
        away: "team:chi-lim",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-lsr-uch",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:chi-lsr",
        away: "team:chi-uch",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-uca-cal",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:chi-uca",
        away: "team:chi-cal",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-eve-coq",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:chi-eve",
        away: "team:chi-coq",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-nub-cob",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:chi-nub",
        away: "team:chi-cob",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-ohi-pal",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:chi-ohi",
        away: "team:chi-pal",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-13-aud-hua",
        leagueId: "league:chi-primera",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:chi-aud",
        away: "team:chi-hua",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-col-lim",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:chi-col",
        away: "team:chi-lim",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-lsr-udk",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:chi-lsr",
        away: "team:chi-udk",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-dco-cal",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:chi-dco",
        away: "team:chi-cal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-eve-uch",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:chi-eve",
        away: "team:chi-uch",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-uca-cob",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:chi-uca",
        away: "team:chi-cob",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-ohi-coq",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:chi-ohi",
        away: "team:chi-coq",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-nub-hua",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:chi-nub",
        away: "team:chi-hua",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-18-aud-pal",
        leagueId: "league:chi-primera",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:chi-aud",
        away: "team:chi-pal",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-lsr-col",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:chi-lsr",
        away: "team:chi-col",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-lim-cal",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:chi-lim",
        away: "team:chi-cal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-eve-udk",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:chi-eve",
        away: "team:chi-udk",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-dco-cob",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:chi-dco",
        away: "team:chi-cob",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-ohi-uch",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:chi-ohi",
        away: "team:chi-uch",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-uca-hua",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:chi-uca",
        away: "team:chi-hua",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-aud-coq",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:chi-aud",
        away: "team:chi-coq",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-23-nub-pal",
        leagueId: "league:chi-primera",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:chi-nub",
        away: "team:chi-pal",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-col-cal",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:chi-col",
        away: "team:chi-cal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-eve-lsr",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:chi-eve",
        away: "team:chi-lsr",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-lim-cob",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:chi-lim",
        away: "team:chi-cob",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-ohi-udk",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:chi-ohi",
        away: "team:chi-udk",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-dco-hua",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:chi-dco",
        away: "team:chi-hua",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-aud-uch",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:chi-aud",
        away: "team:chi-uch",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-uca-pal",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:chi-uca",
        away: "team:chi-pal",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-08-28-nub-coq",
        leagueId: "league:chi-primera",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:chi-nub",
        away: "team:chi-coq",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:chi-2026-09-01-eve-col",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:chi-eve",
        away: "team:chi-col",
        score: {
            home: 2,
            away: 1
        },
        minute: 31
    },
    {
        id: "match:chi-2026-09-01-cal-cob",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:chi-cal",
        away: "team:chi-cob",
        score: {
            home: 1,
            away: 2
        },
        minute: 43
    },
    {
        id: "match:chi-2026-09-01-ohi-lsr",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:chi-ohi",
        away: "team:chi-lsr",
        score: {
            home: 2,
            away: 1
        },
        minute: 43
    },
    {
        id: "match:chi-2026-09-01-lim-hua",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:chi-lim",
        away: "team:chi-hua",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-01-aud-udk",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:chi-aud",
        away: "team:chi-udk",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-01-dco-pal",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:chi-dco",
        away: "team:chi-pal",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-01-nub-uch",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:chi-nub",
        away: "team:chi-uch",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-01-uca-coq",
        leagueId: "league:chi-primera",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:chi-uca",
        away: "team:chi-coq",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-col-cob",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:chi-col",
        away: "team:chi-cob",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-ohi-eve",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:chi-ohi",
        away: "team:chi-eve",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-cal-hua",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:chi-cal",
        away: "team:chi-hua",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-aud-lsr",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:chi-aud",
        away: "team:chi-lsr",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-lim-pal",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:chi-lim",
        away: "team:chi-pal",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-nub-udk",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:chi-nub",
        away: "team:chi-udk",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-dco-coq",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:chi-dco",
        away: "team:chi-coq",
        score: null,
        minute: null
    },
    {
        id: "match:chi-2026-09-06-uca-uch",
        leagueId: "league:chi-primera",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:chi-uca",
        away: "team:chi-uch",
        score: null,
        minute: null
    }
];
