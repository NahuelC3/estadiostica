// ============================================================
//  data/arg-lpf/matches.js — partidos de la liga (GENERADO)
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
        id: "match:arg-2026-08-08-riv-pla",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:arg-riv",
        away: "team:arg-pla",
        score: {
            home: 3,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "4-2-3-1",
                away: "4-4-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:arg-riv-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:arg-riv-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:arg-riv-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:arg-riv-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:arg-riv-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:arg-riv-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:arg-riv-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:arg-riv-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:arg-riv-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:arg-riv-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:arg-riv-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:arg-pla-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:arg-pla-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:arg-pla-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:arg-pla-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:arg-pla-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:arg-pla-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:arg-pla-7",
                        number: 7,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:arg-pla-8",
                        number: 8,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:arg-pla-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:arg-pla-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:arg-pla-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 55,
                    remates: 17,
                    rematesAlArco: 5,
                    corners: 5,
                    faltas: 15,
                    amarillas: 3,
                    rojas: 0,
                    pases: 477,
                    precisionPases: 71,
                    offsides: 1,
                    atajadas: 4,
                    xg: 3.44
                },
                away: {
                    posesion: 45,
                    remates: 11,
                    rematesAlArco: 4,
                    corners: 6,
                    faltas: 14,
                    amarillas: 2,
                    rojas: 0,
                    pases: 372,
                    precisionPases: 85,
                    offsides: 2,
                    atajadas: 2,
                    xg: 0.91
                }
            },
            events: [
                {
                    minuto: 19,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:arg-riv-8"
                },
                {
                    minuto: 44,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:arg-riv-6"
                },
                {
                    minuto: 59,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:arg-pla-1"
                },
                {
                    minuto: 63,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:arg-pla-5"
                },
                {
                    minuto: 66,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:arg-pla-9"
                },
                {
                    minuto: 71,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:arg-riv-7"
                },
                {
                    minuto: 76,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:arg-riv-8"
                },
                {
                    minuto: 78,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:arg-riv-9"
                },
                {
                    minuto: 79,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:arg-riv-6"
                },
                {
                    minuto: 85,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:arg-riv-7"
                }
            ],
            ratings: {
                "player:arg-riv-1": {
                    nota: 7.3
                },
                "player:arg-riv-2": {
                    nota: 7.3
                },
                "player:arg-riv-3": {
                    nota: 6.8
                },
                "player:arg-riv-4": {
                    nota: 6.1
                },
                "player:arg-riv-5": {
                    nota: 7.3
                },
                "player:arg-riv-6": {
                    nota: 6.7
                },
                "player:arg-riv-7": {
                    nota: 8.3
                },
                "player:arg-riv-8": {
                    nota: 7.9
                },
                "player:arg-riv-9": {
                    nota: 7.7
                },
                "player:arg-riv-10": {
                    nota: 6.1
                },
                "player:arg-riv-11": {
                    nota: 6.3
                },
                "player:arg-pla-1": {
                    nota: 6.9
                },
                "player:arg-pla-2": {
                    nota: 7.6
                },
                "player:arg-pla-3": {
                    nota: 6.6
                },
                "player:arg-pla-4": {
                    nota: 7.1
                },
                "player:arg-pla-5": {
                    nota: 7.1
                },
                "player:arg-pla-6": {
                    nota: 7.5
                },
                "player:arg-pla-7": {
                    nota: 6.7
                },
                "player:arg-pla-8": {
                    nota: 6.2
                },
                "player:arg-pla-9": {
                    nota: 8.1
                },
                "player:arg-pla-10": {
                    nota: 6.5
                },
                "player:arg-pla-11": {
                    nota: 8
                }
            }
        }
    },
    {
        id: "match:arg-2026-08-08-bar-boc",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:arg-bar",
        away: "team:arg-boc",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-rac-ban",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:arg-rac",
        away: "team:arg-ban",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-bel-est",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:arg-bel",
        away: "team:arg-est",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-vel-ins",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:arg-vel",
        away: "team:arg-ins",
        score: {
            home: 2,
            away: 2
        },
        minute: null,
        detail: {
            formations: {
                home: "4-2-3-1",
                away: "3-4-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:arg-vel-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:arg-vel-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:arg-vel-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:arg-vel-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:arg-vel-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:arg-vel-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:arg-vel-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:arg-vel-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:arg-vel-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:arg-vel-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:arg-vel-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:arg-ins-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:arg-ins-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:arg-ins-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:arg-ins-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:arg-ins-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:arg-ins-6",
                        number: 6,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:arg-ins-7",
                        number: 7,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:arg-ins-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:arg-ins-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:arg-ins-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:arg-ins-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 60,
                    remates: 17,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 12,
                    amarillas: 3,
                    rojas: 0,
                    pases: 502,
                    precisionPases: 73,
                    offsides: 3,
                    atajadas: 3,
                    xg: 3.12
                },
                away: {
                    posesion: 40,
                    remates: 11,
                    rematesAlArco: 5,
                    corners: 2,
                    faltas: 12,
                    amarillas: 3,
                    rojas: 0,
                    pases: 342,
                    precisionPases: 71,
                    offsides: 2,
                    atajadas: 5,
                    xg: 2.3
                }
            },
            events: [
                {
                    minuto: 6,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:arg-ins-11"
                },
                {
                    minuto: 22,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:arg-ins-2"
                },
                {
                    minuto: 23,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:arg-ins-7"
                },
                {
                    minuto: 38,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:arg-vel-10"
                },
                {
                    minuto: 50,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:arg-ins-9"
                },
                {
                    minuto: 54,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:arg-vel-10"
                },
                {
                    minuto: 61,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:arg-vel-7"
                },
                {
                    minuto: 71,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:arg-ins-9"
                },
                {
                    minuto: 74,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:arg-vel-7"
                },
                {
                    minuto: 78,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:arg-vel-9"
                },
                {
                    minuto: 83,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:arg-ins-1"
                }
            ],
            ratings: {
                "player:arg-vel-1": {
                    nota: 6.2
                },
                "player:arg-vel-2": {
                    nota: 6.5
                },
                "player:arg-vel-3": {
                    nota: 7
                },
                "player:arg-vel-4": {
                    nota: 7.1
                },
                "player:arg-vel-5": {
                    nota: 7.4
                },
                "player:arg-vel-6": {
                    nota: 6.4
                },
                "player:arg-vel-7": {
                    nota: 8.2
                },
                "player:arg-vel-8": {
                    nota: 7.9
                },
                "player:arg-vel-9": {
                    nota: 6.6
                },
                "player:arg-vel-10": {
                    nota: 8.2
                },
                "player:arg-vel-11": {
                    nota: 7.7
                },
                "player:arg-ins-1": {
                    nota: 6.4
                },
                "player:arg-ins-2": {
                    nota: 6.8
                },
                "player:arg-ins-3": {
                    nota: 6.9
                },
                "player:arg-ins-4": {
                    nota: 6
                },
                "player:arg-ins-5": {
                    nota: 7.7
                },
                "player:arg-ins-6": {
                    nota: 7.9
                },
                "player:arg-ins-7": {
                    nota: 8.2
                },
                "player:arg-ins-8": {
                    nota: 7.1
                },
                "player:arg-ins-9": {
                    nota: 7.8
                },
                "player:arg-ins-10": {
                    nota: 7.7
                },
                "player:arg-ins-11": {
                    nota: 8.3
                }
            }
        }
    },
    {
        id: "match:arg-2026-08-08-gim-tal",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:arg-gim",
        away: "team:arg-tal",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-ind-nob",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:arg-ind",
        away: "team:arg-nob",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-cen-slo",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:arg-cen",
        away: "team:arg-slo",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-arg-hur",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:arg-arg",
        away: "team:arg-hur",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-08-dyj-lan",
        leagueId: "league:arg-lpf",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:arg-dyj",
        away: "team:arg-lan",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-bar-riv",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:arg-bar",
        away: "team:arg-riv",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-pla-ban",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:arg-pla",
        away: "team:arg-ban",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-bel-boc",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:arg-bel",
        away: "team:arg-boc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-rac-ins",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:arg-rac",
        away: "team:arg-ins",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-gim-est",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:arg-gim",
        away: "team:arg-est",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-vel-nob",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:arg-vel",
        away: "team:arg-nob",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-cen-tal",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:arg-cen",
        away: "team:arg-tal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-ind-hur",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:arg-ind",
        away: "team:arg-hur",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-dyj-slo",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:arg-dyj",
        away: "team:arg-slo",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-13-arg-lan",
        leagueId: "league:arg-lpf",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:arg-arg",
        away: "team:arg-lan",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-riv-ban",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:arg-riv",
        away: "team:arg-ban",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-bel-bar",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:arg-bel",
        away: "team:arg-bar",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-pla-ins",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:arg-pla",
        away: "team:arg-ins",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-gim-boc",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:arg-gim",
        away: "team:arg-boc",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-rac-nob",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:arg-rac",
        away: "team:arg-nob",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-cen-est",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:arg-cen",
        away: "team:arg-est",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-vel-hur",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:arg-vel",
        away: "team:arg-hur",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-dyj-tal",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:arg-dyj",
        away: "team:arg-tal",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-ind-lan",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:arg-ind",
        away: "team:arg-lan",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-18-arg-slo",
        leagueId: "league:arg-lpf",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:arg-arg",
        away: "team:arg-slo",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-bel-riv",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:arg-bel",
        away: "team:arg-riv",
        score: {
            home: 0,
            away: 3
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-ban-ins",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:arg-ban",
        away: "team:arg-ins",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-gim-bar",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:arg-gim",
        away: "team:arg-bar",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-pla-nob",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:arg-pla",
        away: "team:arg-nob",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-cen-boc",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:arg-cen",
        away: "team:arg-boc",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-rac-hur",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:arg-rac",
        away: "team:arg-hur",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-dyj-est",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:arg-dyj",
        away: "team:arg-est",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-vel-lan",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:arg-vel",
        away: "team:arg-lan",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-arg-tal",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:arg-arg",
        away: "team:arg-tal",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-23-ind-slo",
        leagueId: "league:arg-lpf",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:arg-ind",
        away: "team:arg-slo",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-riv-ins",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:arg-riv",
        away: "team:arg-ins",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-gim-bel",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:arg-gim",
        away: "team:arg-bel",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-ban-nob",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:arg-ban",
        away: "team:arg-nob",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-cen-bar",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:arg-cen",
        away: "team:arg-bar",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-pla-hur",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:arg-pla",
        away: "team:arg-hur",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-dyj-boc",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:arg-dyj",
        away: "team:arg-boc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-rac-lan",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:arg-rac",
        away: "team:arg-lan",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-arg-est",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:arg-arg",
        away: "team:arg-est",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-vel-slo",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:arg-vel",
        away: "team:arg-slo",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-08-28-ind-tal",
        leagueId: "league:arg-lpf",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:arg-ind",
        away: "team:arg-tal",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:arg-2026-09-01-gim-riv",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:arg-gim",
        away: "team:arg-riv",
        score: {
            home: 1,
            away: 1
        },
        minute: 68
    },
    {
        id: "match:arg-2026-09-01-ins-nob",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:arg-ins",
        away: "team:arg-nob",
        score: {
            home: 1,
            away: 0
        },
        minute: 73
    },
    {
        id: "match:arg-2026-09-01-cen-bel",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:arg-cen",
        away: "team:arg-bel",
        score: {
            home: 1,
            away: 1
        },
        minute: 51
    },
    {
        id: "match:arg-2026-09-01-ban-hur",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:arg-ban",
        away: "team:arg-hur",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-dyj-bar",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:arg-dyj",
        away: "team:arg-bar",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-pla-lan",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:arg-pla",
        away: "team:arg-lan",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-arg-boc",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:arg-arg",
        away: "team:arg-boc",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-rac-slo",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:arg-rac",
        away: "team:arg-slo",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-ind-est",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:arg-ind",
        away: "team:arg-est",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-01-vel-tal",
        leagueId: "league:arg-lpf",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:arg-vel",
        away: "team:arg-tal",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-riv-nob",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:arg-riv",
        away: "team:arg-nob",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-cen-gim",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:arg-cen",
        away: "team:arg-gim",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-ins-hur",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:arg-ins",
        away: "team:arg-hur",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-dyj-bel",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:arg-dyj",
        away: "team:arg-bel",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-ban-lan",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:arg-ban",
        away: "team:arg-lan",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-arg-bar",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:arg-arg",
        away: "team:arg-bar",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-pla-slo",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:arg-pla",
        away: "team:arg-slo",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-ind-boc",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:arg-ind",
        away: "team:arg-boc",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-rac-tal",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:arg-rac",
        away: "team:arg-tal",
        score: null,
        minute: null
    },
    {
        id: "match:arg-2026-09-06-vel-est",
        leagueId: "league:arg-lpf",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:arg-vel",
        away: "team:arg-est",
        score: null,
        minute: null
    }
];
