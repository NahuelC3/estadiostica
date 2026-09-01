// ============================================================
//  data/por-primeira/matches.js — partidos de la liga (GENERADO)
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
        id: "match:por-2026-08-08-por-avi",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:por-por",
        away: "team:por-avi",
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
                        playerId: "player:por-por-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:por-por-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:por-por-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:por-por-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:por-por-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:por-por-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:por-por-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:por-por-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:por-por-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:por-por-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:por-por-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:por-avi-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:por-avi-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:por-avi-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:por-avi-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:por-avi-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:por-avi-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:por-avi-7",
                        number: 7,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:por-avi-8",
                        number: 8,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:por-avi-9",
                        number: 9,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:por-avi-10",
                        number: 10,
                        x: 88,
                        y: 53
                    },
                    {
                        playerId: "player:por-avi-11",
                        number: 11,
                        x: 50,
                        y: 66
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 48,
                    remates: 11,
                    rematesAlArco: 4,
                    corners: 6,
                    faltas: 14,
                    amarillas: 3,
                    rojas: 0,
                    pases: 454,
                    precisionPases: 74,
                    offsides: 2,
                    atajadas: 4,
                    xg: 1.59
                },
                away: {
                    posesion: 52,
                    remates: 17,
                    rematesAlArco: 5,
                    corners: 5,
                    faltas: 12,
                    amarillas: 2,
                    rojas: 0,
                    pases: 466,
                    precisionPases: 87,
                    offsides: 2,
                    atajadas: 3,
                    xg: 1.92
                }
            },
            events: [
                {
                    minuto: 52,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:por-por-10"
                },
                {
                    minuto: 60,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:por-por-11"
                },
                {
                    minuto: 65,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:por-avi-6"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:por-por-9"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:por-avi-8"
                },
                {
                    minuto: 76,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:por-avi-11"
                },
                {
                    minuto: 77,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:por-por-6"
                },
                {
                    minuto: 80,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:por-avi-3"
                },
                {
                    minuto: 88,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:por-avi-8"
                }
            ],
            ratings: {
                "player:por-por-1": {
                    nota: 7
                },
                "player:por-por-2": {
                    nota: 6.2
                },
                "player:por-por-3": {
                    nota: 8.1
                },
                "player:por-por-4": {
                    nota: 6.8
                },
                "player:por-por-5": {
                    nota: 7.7
                },
                "player:por-por-6": {
                    nota: 7
                },
                "player:por-por-7": {
                    nota: 7.7
                },
                "player:por-por-8": {
                    nota: 6.6
                },
                "player:por-por-9": {
                    nota: 6.5
                },
                "player:por-por-10": {
                    nota: 7.1
                },
                "player:por-por-11": {
                    nota: 6.3
                },
                "player:por-avi-1": {
                    nota: 7.5
                },
                "player:por-avi-2": {
                    nota: 6.9
                },
                "player:por-avi-3": {
                    nota: 6.8
                },
                "player:por-avi-4": {
                    nota: 6.4
                },
                "player:por-avi-5": {
                    nota: 6.9
                },
                "player:por-avi-6": {
                    nota: 7
                },
                "player:por-avi-7": {
                    nota: 7.6
                },
                "player:por-avi-8": {
                    nota: 7.1
                },
                "player:por-avi-9": {
                    nota: 8.1
                },
                "player:por-avi-10": {
                    nota: 7.6
                },
                "player:por-avi-11": {
                    nota: 8.7
                }
            }
        }
    },
    {
        id: "match:por-2026-08-08-mtm-spo",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:por-mtm",
        away: "team:por-spo",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-ben-eda",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:por-ben",
        away: "team:por-eda",
        score: {
            home: 3,
            away: 0
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-alv-brg",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:por-alv",
        away: "team:por-brg",
        score: {
            home: 2,
            away: 1
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
                        playerId: "player:por-alv-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:por-alv-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:por-alv-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:por-alv-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:por-alv-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:por-alv-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:por-alv-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:por-alv-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:por-alv-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:por-alv-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:por-alv-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:por-brg-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:por-brg-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:por-brg-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:por-brg-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:por-brg-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:por-brg-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:por-brg-7",
                        number: 7,
                        x: 50,
                        y: 38
                    },
                    {
                        playerId: "player:por-brg-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:por-brg-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:por-brg-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:por-brg-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 54,
                    remates: 16,
                    rematesAlArco: 7,
                    corners: 5,
                    faltas: 14,
                    amarillas: 3,
                    rojas: 0,
                    pases: 478,
                    precisionPases: 90,
                    offsides: 2,
                    atajadas: 1,
                    xg: 2.76
                },
                away: {
                    posesion: 46,
                    remates: 8,
                    rematesAlArco: 2,
                    corners: 5,
                    faltas: 10,
                    amarillas: 3,
                    rojas: 1,
                    pases: 441,
                    precisionPases: 88,
                    offsides: 2,
                    atajadas: 5,
                    xg: 1.44
                }
            },
            events: [
                {
                    minuto: 12,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:por-alv-9"
                },
                {
                    minuto: 34,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:por-brg-1"
                },
                {
                    minuto: 47,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:por-brg-7"
                },
                {
                    minuto: 49,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:por-brg-9"
                },
                {
                    minuto: 59,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:por-brg-3"
                },
                {
                    minuto: 65,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:por-brg-4"
                },
                {
                    minuto: 69,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:por-alv-6"
                },
                {
                    minuto: 70,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:por-alv-8"
                },
                {
                    minuto: 70,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:por-brg-1"
                },
                {
                    minuto: 73,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:por-alv-9"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:por-alv-2"
                }
            ],
            ratings: {
                "player:por-alv-1": {
                    nota: 7.5
                },
                "player:por-alv-2": {
                    nota: 5.9
                },
                "player:por-alv-3": {
                    nota: 7.9
                },
                "player:por-alv-4": {
                    nota: 8
                },
                "player:por-alv-5": {
                    nota: 7.2
                },
                "player:por-alv-6": {
                    nota: 6.5
                },
                "player:por-alv-7": {
                    nota: 7.9
                },
                "player:por-alv-8": {
                    nota: 7.6
                },
                "player:por-alv-9": {
                    nota: 6.8
                },
                "player:por-alv-10": {
                    nota: 6.9
                },
                "player:por-alv-11": {
                    nota: 6.6
                },
                "player:por-brg-1": {
                    nota: 7.5
                },
                "player:por-brg-2": {
                    nota: 8.1
                },
                "player:por-brg-3": {
                    nota: 7.7
                },
                "player:por-brg-4": {
                    nota: 7.1
                },
                "player:por-brg-5": {
                    nota: 7
                },
                "player:por-brg-6": {
                    nota: 7.8
                },
                "player:por-brg-7": {
                    nota: 7.4
                },
                "player:por-brg-8": {
                    nota: 6
                },
                "player:por-brg-9": {
                    nota: 6
                },
                "player:por-brg-10": {
                    nota: 6.2
                },
                "player:por-brg-11": {
                    nota: 6.3
                }
            }
        }
    },
    {
        id: "match:por-2026-08-08-vit-arc",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:por-vit",
        away: "team:por-arc",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-nac-fam",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:por-nac",
        away: "team:por-fam",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-gil-stc",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:por-gil",
        away: "team:por-stc",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-rio-mor",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:por-rio",
        away: "team:por-mor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-08-cap-est",
        leagueId: "league:por-primeira",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:por-cap",
        away: "team:por-est",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-mtm-por",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:por-mtm",
        away: "team:por-por",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-avi-eda",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:por-avi",
        away: "team:por-eda",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-alv-spo",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:por-alv",
        away: "team:por-spo",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-ben-arc",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:por-ben",
        away: "team:por-arc",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-nac-brg",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:por-nac",
        away: "team:por-brg",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-vit-stc",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:por-vit",
        away: "team:por-stc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-rio-fam",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:por-rio",
        away: "team:por-fam",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-gil-est",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:por-gil",
        away: "team:por-est",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-13-cap-mor",
        leagueId: "league:por-primeira",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:por-cap",
        away: "team:por-mor",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-por-eda",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:por-por",
        away: "team:por-eda",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-alv-mtm",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:por-alv",
        away: "team:por-mtm",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-avi-arc",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:por-avi",
        away: "team:por-arc",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-nac-spo",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:por-nac",
        away: "team:por-spo",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-ben-stc",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:por-ben",
        away: "team:por-stc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-rio-brg",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:por-rio",
        away: "team:por-brg",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-vit-est",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:por-vit",
        away: "team:por-est",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-cap-fam",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:por-cap",
        away: "team:por-fam",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-18-gil-mor",
        leagueId: "league:por-primeira",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:por-gil",
        away: "team:por-mor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-alv-por",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:por-alv",
        away: "team:por-por",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-eda-arc",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:por-eda",
        away: "team:por-arc",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-nac-mtm",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:por-nac",
        away: "team:por-mtm",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-avi-stc",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:por-avi",
        away: "team:por-stc",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-rio-spo",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:por-rio",
        away: "team:por-spo",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-ben-est",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:por-ben",
        away: "team:por-est",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-cap-brg",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:por-cap",
        away: "team:por-brg",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-vit-mor",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:por-vit",
        away: "team:por-mor",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-23-gil-fam",
        leagueId: "league:por-primeira",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:por-gil",
        away: "team:por-fam",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-por-arc",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:por-por",
        away: "team:por-arc",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-nac-alv",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:por-nac",
        away: "team:por-alv",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-eda-stc",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:por-eda",
        away: "team:por-stc",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-rio-mtm",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:por-rio",
        away: "team:por-mtm",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-avi-est",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:por-avi",
        away: "team:por-est",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-cap-spo",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:por-cap",
        away: "team:por-spo",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-ben-mor",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:por-ben",
        away: "team:por-mor",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-gil-brg",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:por-gil",
        away: "team:por-brg",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-08-28-vit-fam",
        leagueId: "league:por-primeira",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:por-vit",
        away: "team:por-fam",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:por-2026-09-01-nac-por",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:por-nac",
        away: "team:por-por",
        score: {
            home: 1,
            away: 2
        },
        minute: 63
    },
    {
        id: "match:por-2026-09-01-arc-stc",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:por-arc",
        away: "team:por-stc",
        score: {
            home: 1,
            away: 0
        },
        minute: 71
    },
    {
        id: "match:por-2026-09-01-rio-alv",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:por-rio",
        away: "team:por-alv",
        score: {
            home: 2,
            away: 0
        },
        minute: 38
    },
    {
        id: "match:por-2026-09-01-eda-est",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:por-eda",
        away: "team:por-est",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-01-cap-mtm",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:por-cap",
        away: "team:por-mtm",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-01-avi-mor",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:por-avi",
        away: "team:por-mor",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-01-gil-spo",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:por-gil",
        away: "team:por-spo",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-01-ben-fam",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:por-ben",
        away: "team:por-fam",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-01-vit-brg",
        leagueId: "league:por-primeira",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:por-vit",
        away: "team:por-brg",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-por-stc",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:por-por",
        away: "team:por-stc",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-rio-nac",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:por-rio",
        away: "team:por-nac",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-arc-est",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:por-arc",
        away: "team:por-est",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-cap-alv",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:por-cap",
        away: "team:por-alv",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-eda-mor",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:por-eda",
        away: "team:por-mor",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-gil-mtm",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:por-gil",
        away: "team:por-mtm",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-avi-fam",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:por-avi",
        away: "team:por-fam",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-vit-spo",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:por-vit",
        away: "team:por-spo",
        score: null,
        minute: null
    },
    {
        id: "match:por-2026-09-06-ben-brg",
        leagueId: "league:por-primeira",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:por-ben",
        away: "team:por-brg",
        score: null,
        minute: null
    }
];
