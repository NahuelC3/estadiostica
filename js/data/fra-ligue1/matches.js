// ============================================================
//  data/fra-ligue1/matches.js — partidos de la liga (GENERADO)
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
        id: "match:fra-2026-08-08-psg-lem",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:fra-psg",
        away: "team:fra-lem",
        score: {
            home: 2,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "4-3-3",
                away: "4-3-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:fra-psg-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:fra-psg-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:fra-psg-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:fra-psg-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:fra-psg-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:fra-psg-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:fra-psg-7",
                        number: 7,
                        x: 50,
                        y: 62
                    },
                    {
                        playerId: "player:fra-psg-8",
                        number: 8,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:fra-psg-9",
                        number: 9,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:fra-psg-10",
                        number: 10,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:fra-psg-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:fra-lem-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:fra-lem-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:fra-lem-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:fra-lem-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:fra-lem-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:fra-lem-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:fra-lem-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:fra-lem-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:fra-lem-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:fra-lem-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:fra-lem-11",
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
                    rematesAlArco: 6,
                    corners: 7,
                    faltas: 15,
                    amarillas: 2,
                    rojas: 0,
                    pases: 501,
                    precisionPases: 80,
                    offsides: 1,
                    atajadas: 2,
                    xg: 2.53
                },
                away: {
                    posesion: 45,
                    remates: 9,
                    rematesAlArco: 2,
                    corners: 4,
                    faltas: 11,
                    amarillas: 2,
                    rojas: 0,
                    pases: 421,
                    precisionPases: 79,
                    offsides: 2,
                    atajadas: 4,
                    xg: 0.41
                }
            },
            events: [
                {
                    minuto: 9,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:fra-psg-7"
                },
                {
                    minuto: 24,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:fra-psg-9"
                },
                {
                    minuto: 34,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:fra-psg-2"
                },
                {
                    minuto: 39,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:fra-lem-6"
                },
                {
                    minuto: 39,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:fra-lem-1"
                },
                {
                    minuto: 42,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:fra-psg-3"
                },
                {
                    minuto: 58,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:fra-lem-6"
                },
                {
                    minuto: 72,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:fra-psg-5"
                },
                {
                    minuto: 72,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:fra-psg-9"
                },
                {
                    minuto: 84,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:fra-lem-2"
                }
            ],
            ratings: {
                "player:fra-psg-1": {
                    nota: 7.5
                },
                "player:fra-psg-2": {
                    nota: 6.2
                },
                "player:fra-psg-3": {
                    nota: 6.2
                },
                "player:fra-psg-4": {
                    nota: 5.9
                },
                "player:fra-psg-5": {
                    nota: 7.2
                },
                "player:fra-psg-6": {
                    nota: 8
                },
                "player:fra-psg-7": {
                    nota: 7.9
                },
                "player:fra-psg-8": {
                    nota: 7
                },
                "player:fra-psg-9": {
                    nota: 7.7
                },
                "player:fra-psg-10": {
                    nota: 7.2
                },
                "player:fra-psg-11": {
                    nota: 6.3
                },
                "player:fra-lem-1": {
                    nota: 6.9
                },
                "player:fra-lem-2": {
                    nota: 7.7
                },
                "player:fra-lem-3": {
                    nota: 7.5
                },
                "player:fra-lem-4": {
                    nota: 6.3
                },
                "player:fra-lem-5": {
                    nota: 6.4
                },
                "player:fra-lem-6": {
                    nota: 6.2
                },
                "player:fra-lem-7": {
                    nota: 8
                },
                "player:fra-lem-8": {
                    nota: 7.4
                },
                "player:fra-lem-9": {
                    nota: 6.7
                },
                "player:fra-lem-10": {
                    nota: 7.9
                },
                "player:fra-lem-11": {
                    nota: 7.6
                }
            }
        }
    },
    {
        id: "match:fra-2026-08-08-tro-mar",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:fra-tro",
        away: "team:fra-mar",
        score: {
            home: 1,
            away: 1
        },
        minute: null,
        detail: {
            formations: {
                home: "4-4-2",
                away: "4-2-3-1"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:fra-tro-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:fra-tro-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:fra-tro-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:fra-tro-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:fra-tro-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:fra-tro-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:fra-tro-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:fra-tro-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:fra-tro-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:fra-tro-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:fra-tro-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:fra-mar-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:fra-mar-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:fra-mar-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:fra-mar-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:fra-mar-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:fra-mar-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:fra-mar-7",
                        number: 7,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:fra-mar-8",
                        number: 8,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:fra-mar-9",
                        number: 9,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:fra-mar-10",
                        number: 10,
                        x: 88,
                        y: 53
                    },
                    {
                        playerId: "player:fra-mar-11",
                        number: 11,
                        x: 50,
                        y: 66
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 45,
                    remates: 13,
                    rematesAlArco: 5,
                    corners: 3,
                    faltas: 15,
                    amarillas: 2,
                    rojas: 0,
                    pases: 385,
                    precisionPases: 76,
                    offsides: 2,
                    atajadas: 4,
                    xg: 1.88
                },
                away: {
                    posesion: 55,
                    remates: 18,
                    rematesAlArco: 5,
                    corners: 4,
                    faltas: 12,
                    amarillas: 2,
                    rojas: 0,
                    pases: 507,
                    precisionPases: 83,
                    offsides: 3,
                    atajadas: 4,
                    xg: 1.67
                }
            },
            events: [
                {
                    minuto: 20,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:fra-tro-8"
                },
                {
                    minuto: 31,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:fra-mar-2"
                },
                {
                    minuto: 32,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:fra-tro-7"
                },
                {
                    minuto: 58,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:fra-tro-9"
                },
                {
                    minuto: 59,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:fra-mar-8"
                },
                {
                    minuto: 59,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:fra-mar-9"
                },
                {
                    minuto: 60,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:fra-mar-11"
                },
                {
                    minuto: 64,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:fra-mar-3"
                },
                {
                    minuto: 75,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:fra-tro-11"
                },
                {
                    minuto: 77,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:fra-tro-1"
                },
                {
                    minuto: 85,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:fra-mar-6"
                }
            ],
            ratings: {
                "player:fra-tro-1": {
                    nota: 7.2
                },
                "player:fra-tro-2": {
                    nota: 7
                },
                "player:fra-tro-3": {
                    nota: 6.7
                },
                "player:fra-tro-4": {
                    nota: 6.1
                },
                "player:fra-tro-5": {
                    nota: 7
                },
                "player:fra-tro-6": {
                    nota: 6.6
                },
                "player:fra-tro-7": {
                    nota: 8.6
                },
                "player:fra-tro-8": {
                    nota: 5.9
                },
                "player:fra-tro-9": {
                    nota: 6.1
                },
                "player:fra-tro-10": {
                    nota: 6.8
                },
                "player:fra-tro-11": {
                    nota: 7.4
                },
                "player:fra-mar-1": {
                    nota: 8.1
                },
                "player:fra-mar-2": {
                    nota: 6.3
                },
                "player:fra-mar-3": {
                    nota: 6.2
                },
                "player:fra-mar-4": {
                    nota: 6.9
                },
                "player:fra-mar-5": {
                    nota: 6.1
                },
                "player:fra-mar-6": {
                    nota: 7.7
                },
                "player:fra-mar-7": {
                    nota: 6.4
                },
                "player:fra-mar-8": {
                    nota: 7.6
                },
                "player:fra-mar-9": {
                    nota: 7.2
                },
                "player:fra-mar-10": {
                    nota: 6.6
                },
                "player:fra-mar-11": {
                    nota: 8.6
                }
            }
        }
    },
    {
        id: "match:fra-2026-08-08-mon-pfc",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:fra-mon",
        away: "team:fra-pfc",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-lor-lil",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:fra-lor",
        away: "team:fra-lil",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-nic-hav",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:fra-nic",
        away: "team:fra-hav",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-ang-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:fra-ang",
        away: "team:fra-lyo",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-ren-aux",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:fra-ren",
        away: "team:fra-aux",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-tou-len",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:fra-tou",
        away: "team:fra-len",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-08-stg-bre",
        leagueId: "league:fra-ligue1",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:fra-stg",
        away: "team:fra-bre",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-tro-psg",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:fra-tro",
        away: "team:fra-psg",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-lem-pfc",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:fra-lem",
        away: "team:fra-pfc",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-lor-mar",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:fra-lor",
        away: "team:fra-mar",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-mon-hav",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:fra-mon",
        away: "team:fra-hav",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-ang-lil",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:fra-ang",
        away: "team:fra-lil",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-nic-aux",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:fra-nic",
        away: "team:fra-aux",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-tou-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:fra-tou",
        away: "team:fra-lyo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-ren-bre",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:fra-ren",
        away: "team:fra-bre",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-13-stg-len",
        leagueId: "league:fra-ligue1",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:fra-stg",
        away: "team:fra-len",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-psg-pfc",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:fra-psg",
        away: "team:fra-pfc",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-lor-tro",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:fra-lor",
        away: "team:fra-tro",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-lem-hav",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:fra-lem",
        away: "team:fra-hav",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-ang-mar",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:fra-ang",
        away: "team:fra-mar",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-mon-aux",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:fra-mon",
        away: "team:fra-aux",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-tou-lil",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:fra-tou",
        away: "team:fra-lil",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-nic-bre",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:fra-nic",
        away: "team:fra-bre",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-stg-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:fra-stg",
        away: "team:fra-lyo",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-18-ren-len",
        leagueId: "league:fra-ligue1",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:fra-ren",
        away: "team:fra-len",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-lor-psg",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:fra-lor",
        away: "team:fra-psg",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-pfc-hav",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:fra-pfc",
        away: "team:fra-hav",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-ang-tro",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:fra-ang",
        away: "team:fra-tro",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-lem-aux",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:fra-lem",
        away: "team:fra-aux",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-tou-mar",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:fra-tou",
        away: "team:fra-mar",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-mon-bre",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:fra-mon",
        away: "team:fra-bre",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-stg-lil",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:fra-stg",
        away: "team:fra-lil",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-nic-len",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:fra-nic",
        away: "team:fra-len",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-23-ren-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:fra-ren",
        away: "team:fra-lyo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-psg-hav",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:fra-psg",
        away: "team:fra-hav",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-ang-lor",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:fra-ang",
        away: "team:fra-lor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-pfc-aux",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:fra-pfc",
        away: "team:fra-aux",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-tou-tro",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:fra-tou",
        away: "team:fra-tro",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-lem-bre",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:fra-lem",
        away: "team:fra-bre",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-stg-mar",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:fra-stg",
        away: "team:fra-mar",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-mon-len",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:fra-mon",
        away: "team:fra-len",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-ren-lil",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:fra-ren",
        away: "team:fra-lil",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-08-28-nic-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:fra-nic",
        away: "team:fra-lyo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:fra-2026-09-01-ang-psg",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:fra-ang",
        away: "team:fra-psg",
        score: {
            home: 1,
            away: 0
        },
        minute: 57
    },
    {
        id: "match:fra-2026-09-01-hav-aux",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:fra-hav",
        away: "team:fra-aux",
        score: {
            home: 2,
            away: 2
        },
        minute: 60
    },
    {
        id: "match:fra-2026-09-01-tou-lor",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:fra-tou",
        away: "team:fra-lor",
        score: {
            home: 1,
            away: 2
        },
        minute: 71
    },
    {
        id: "match:fra-2026-09-01-pfc-bre",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:fra-pfc",
        away: "team:fra-bre",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-01-stg-tro",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:fra-stg",
        away: "team:fra-tro",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-01-lem-len",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:fra-lem",
        away: "team:fra-len",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-01-ren-mar",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:fra-ren",
        away: "team:fra-mar",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-01-mon-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:fra-mon",
        away: "team:fra-lyo",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-01-nic-lil",
        leagueId: "league:fra-ligue1",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:fra-nic",
        away: "team:fra-lil",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-psg-aux",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:fra-psg",
        away: "team:fra-aux",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-tou-ang",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:fra-tou",
        away: "team:fra-ang",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-hav-bre",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:fra-hav",
        away: "team:fra-bre",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-stg-lor",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:fra-stg",
        away: "team:fra-lor",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-pfc-len",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:fra-pfc",
        away: "team:fra-len",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-ren-tro",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:fra-ren",
        away: "team:fra-tro",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-lem-lyo",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:fra-lem",
        away: "team:fra-lyo",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-nic-mar",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:fra-nic",
        away: "team:fra-mar",
        score: null,
        minute: null
    },
    {
        id: "match:fra-2026-09-06-mon-lil",
        leagueId: "league:fra-ligue1",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:fra-mon",
        away: "team:fra-lil",
        score: null,
        minute: null
    }
];
