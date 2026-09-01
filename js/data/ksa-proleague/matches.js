// ============================================================
//  data/ksa-proleague/matches.js — partidos de la liga (GENERADO)
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
        id: "match:ksa-2026-08-08-nas-dir",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ksa-nas",
        away: "team:ksa-dir",
        score: {
            home: 3,
            away: 0
        },
        minute: null,
        detail: {
            formations: {
                home: "4-4-2",
                away: "3-4-3"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:ksa-nas-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ksa-nas-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-nas-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-nas-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-nas-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-nas-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-nas-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-nas-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-nas-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-nas-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ksa-nas-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:ksa-dir-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ksa-dir-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-dir-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-dir-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-dir-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-dir-6",
                        number: 6,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-dir-7",
                        number: 7,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-dir-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-dir-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ksa-dir-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:ksa-dir-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 53,
                    remates: 18,
                    rematesAlArco: 6,
                    corners: 6,
                    faltas: 10,
                    amarillas: 2,
                    rojas: 0,
                    pases: 449,
                    precisionPases: 71,
                    offsides: 2,
                    atajadas: 5,
                    xg: 3.23
                },
                away: {
                    posesion: 47,
                    remates: 12,
                    rematesAlArco: 5,
                    corners: 4,
                    faltas: 11,
                    amarillas: 1,
                    rojas: 0,
                    pases: 407,
                    precisionPases: 71,
                    offsides: 2,
                    atajadas: 3,
                    xg: 1.35
                }
            },
            events: [
                {
                    minuto: 26,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-nas-11"
                },
                {
                    minuto: 53,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-nas-5"
                },
                {
                    minuto: 65,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ksa-nas-5"
                },
                {
                    minuto: 67,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ksa-nas-8"
                },
                {
                    minuto: 68,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ksa-dir-6"
                },
                {
                    minuto: 74,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ksa-dir-6"
                },
                {
                    minuto: 75,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ksa-dir-2"
                },
                {
                    minuto: 76,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ksa-nas-7"
                },
                {
                    minuto: 80,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ksa-nas-10"
                },
                {
                    minuto: 83,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ksa-nas-8"
                },
                {
                    minuto: 86,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-nas-1"
                }
            ],
            ratings: {
                "player:ksa-nas-1": {
                    nota: 7.7
                },
                "player:ksa-nas-2": {
                    nota: 7.9
                },
                "player:ksa-nas-3": {
                    nota: 7.8
                },
                "player:ksa-nas-4": {
                    nota: 6.9
                },
                "player:ksa-nas-5": {
                    nota: 7.3
                },
                "player:ksa-nas-6": {
                    nota: 6.1
                },
                "player:ksa-nas-7": {
                    nota: 7.8
                },
                "player:ksa-nas-8": {
                    nota: 7.5
                },
                "player:ksa-nas-9": {
                    nota: 7.1
                },
                "player:ksa-nas-10": {
                    nota: 8.4
                },
                "player:ksa-nas-11": {
                    nota: 6
                },
                "player:ksa-dir-1": {
                    nota: 6
                },
                "player:ksa-dir-2": {
                    nota: 7.5
                },
                "player:ksa-dir-3": {
                    nota: 6.3
                },
                "player:ksa-dir-4": {
                    nota: 6.2
                },
                "player:ksa-dir-5": {
                    nota: 6.6
                },
                "player:ksa-dir-6": {
                    nota: 6.9
                },
                "player:ksa-dir-7": {
                    nota: 7.9
                },
                "player:ksa-dir-8": {
                    nota: 6
                },
                "player:ksa-dir-9": {
                    nota: 7.8
                },
                "player:ksa-dir-10": {
                    nota: 7.2
                },
                "player:ksa-dir-11": {
                    nota: 8
                }
            }
        }
    },
    {
        id: "match:ksa-2026-08-08-fsl-hil",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ksa-fsl",
        away: "team:ksa-hil",
        score: {
            home: 2,
            away: 3
        },
        minute: null,
        detail: {
            formations: {
                home: "4-4-2",
                away: "4-4-2"
            },
            lineups: {
                home: [
                    {
                        playerId: "player:ksa-fsl-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ksa-fsl-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-fsl-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-fsl-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-fsl-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ksa-fsl-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-fsl-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-fsl-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-fsl-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ksa-fsl-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ksa-fsl-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:ksa-hil-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ksa-hil-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-hil-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-hil-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-hil-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ksa-hil-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-hil-7",
                        number: 7,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-hil-8",
                        number: 8,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-hil-9",
                        number: 9,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ksa-hil-10",
                        number: 10,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ksa-hil-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 55,
                    remates: 15,
                    rematesAlArco: 4,
                    corners: 7,
                    faltas: 11,
                    amarillas: 1,
                    rojas: 0,
                    pases: 467,
                    precisionPases: 70,
                    offsides: 3,
                    atajadas: 3,
                    xg: 2.15
                },
                away: {
                    posesion: 45,
                    remates: 17,
                    rematesAlArco: 6,
                    corners: 5,
                    faltas: 13,
                    amarillas: 1,
                    rojas: 0,
                    pases: 390,
                    precisionPases: 80,
                    offsides: 2,
                    atajadas: 2,
                    xg: 3.42
                }
            },
            events: [
                {
                    minuto: 22,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ksa-fsl-9"
                },
                {
                    minuto: 24,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ksa-hil-10"
                },
                {
                    minuto: 26,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ksa-hil-9"
                },
                {
                    minuto: 36,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ksa-hil-10"
                },
                {
                    minuto: 45,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ksa-hil-7"
                },
                {
                    minuto: 56,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ksa-hil-6"
                },
                {
                    minuto: 59,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ksa-hil-10"
                },
                {
                    minuto: 68,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ksa-fsl-2"
                },
                {
                    minuto: 71,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ksa-fsl-11"
                },
                {
                    minuto: 73,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ksa-fsl-1"
                },
                {
                    minuto: 76,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ksa-hil-2"
                },
                {
                    minuto: 80,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-fsl-2"
                },
                {
                    minuto: 81,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-fsl-10"
                },
                {
                    minuto: 83,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ksa-hil-4"
                },
                {
                    minuto: 92,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ksa-fsl-2"
                }
            ],
            ratings: {
                "player:ksa-fsl-1": {
                    nota: 6.9
                },
                "player:ksa-fsl-2": {
                    nota: 7.5
                },
                "player:ksa-fsl-3": {
                    nota: 6.4
                },
                "player:ksa-fsl-4": {
                    nota: 6.4
                },
                "player:ksa-fsl-5": {
                    nota: 6.2
                },
                "player:ksa-fsl-6": {
                    nota: 6.7
                },
                "player:ksa-fsl-7": {
                    nota: 6.7
                },
                "player:ksa-fsl-8": {
                    nota: 7.8
                },
                "player:ksa-fsl-9": {
                    nota: 8.6
                },
                "player:ksa-fsl-10": {
                    nota: 7
                },
                "player:ksa-fsl-11": {
                    nota: 8.6
                },
                "player:ksa-hil-1": {
                    nota: 6.7
                },
                "player:ksa-hil-2": {
                    nota: 6.5
                },
                "player:ksa-hil-3": {
                    nota: 7.3
                },
                "player:ksa-hil-4": {
                    nota: 6.8
                },
                "player:ksa-hil-5": {
                    nota: 8
                },
                "player:ksa-hil-6": {
                    nota: 7.2
                },
                "player:ksa-hil-7": {
                    nota: 7.8
                },
                "player:ksa-hil-8": {
                    nota: 7
                },
                "player:ksa-hil-9": {
                    nota: 7.4
                },
                "player:ksa-hil-10": {
                    nota: 7
                },
                "player:ksa-hil-11": {
                    nota: 6.1
                }
            }
        }
    },
    {
        id: "match:ksa-2026-08-08-ahl-abh",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ahl",
        away: "team:ksa-abh",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-rya-qad",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ksa-rya",
        away: "team:ksa-qad",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-ith-kho",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ith",
        away: "team:ksa-kho",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-shb-tao",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ksa-shb",
        away: "team:ksa-tao",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-ett-khl",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ett",
        away: "team:ksa-khl",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-fat-neo",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ksa-fat",
        away: "team:ksa-neo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-08-hzm-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ksa-hzm",
        away: "team:ksa-fyh",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-fsl-nas",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ksa-fsl",
        away: "team:ksa-nas",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-dir-abh",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ksa-dir",
        away: "team:ksa-abh",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-rya-hil",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ksa-rya",
        away: "team:ksa-hil",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-ahl-kho",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ahl",
        away: "team:ksa-kho",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-shb-qad",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ksa-shb",
        away: "team:ksa-qad",
        score: {
            home: 2,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-ith-khl",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ith",
        away: "team:ksa-khl",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-fat-tao",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ksa-fat",
        away: "team:ksa-tao",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-ett-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ett",
        away: "team:ksa-fyh",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-13-hzm-neo",
        leagueId: "league:ksa-proleague",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ksa-hzm",
        away: "team:ksa-neo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-nas-abh",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ksa-nas",
        away: "team:ksa-abh",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-rya-fsl",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ksa-rya",
        away: "team:ksa-fsl",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-dir-kho",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ksa-dir",
        away: "team:ksa-kho",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-shb-hil",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ksa-shb",
        away: "team:ksa-hil",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-ahl-khl",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ahl",
        away: "team:ksa-khl",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-fat-qad",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ksa-fat",
        away: "team:ksa-qad",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-ith-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ith",
        away: "team:ksa-fyh",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-hzm-tao",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ksa-hzm",
        away: "team:ksa-tao",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-18-ett-neo",
        leagueId: "league:ksa-proleague",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ett",
        away: "team:ksa-neo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-rya-nas",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ksa-rya",
        away: "team:ksa-nas",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-abh-kho",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ksa-abh",
        away: "team:ksa-kho",
        score: {
            home: 0,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-shb-fsl",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ksa-shb",
        away: "team:ksa-fsl",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-dir-khl",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ksa-dir",
        away: "team:ksa-khl",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-fat-hil",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ksa-fat",
        away: "team:ksa-hil",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-ahl-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ahl",
        away: "team:ksa-fyh",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-hzm-qad",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ksa-hzm",
        away: "team:ksa-qad",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-ith-neo",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ith",
        away: "team:ksa-neo",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-23-ett-tao",
        leagueId: "league:ksa-proleague",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ksa-ett",
        away: "team:ksa-tao",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-nas-kho",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ksa-nas",
        away: "team:ksa-kho",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-shb-rya",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ksa-shb",
        away: "team:ksa-rya",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-abh-khl",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ksa-abh",
        away: "team:ksa-khl",
        score: {
            home: 0,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-fat-fsl",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ksa-fat",
        away: "team:ksa-fsl",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-dir-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ksa-dir",
        away: "team:ksa-fyh",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-hzm-hil",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ksa-hzm",
        away: "team:ksa-hil",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-ahl-neo",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ksa-ahl",
        away: "team:ksa-neo",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-ett-qad",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ksa-ett",
        away: "team:ksa-qad",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ksa-2026-08-28-ith-tao",
        leagueId: "league:ksa-proleague",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ksa-ith",
        away: "team:ksa-tao",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-shb-nas",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:ksa-shb",
        away: "team:ksa-nas",
        score: {
            home: 1,
            away: 0
        },
        minute: 30
    },
    {
        id: "match:ksa-2026-09-01-kho-khl",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:ksa-kho",
        away: "team:ksa-khl",
        score: {
            home: 0,
            away: 2
        },
        minute: 32
    },
    {
        id: "match:ksa-2026-09-01-fat-rya",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:ksa-fat",
        away: "team:ksa-rya",
        score: {
            home: 0,
            away: 2
        },
        minute: 32
    },
    {
        id: "match:ksa-2026-09-01-abh-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ksa-abh",
        away: "team:ksa-fyh",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-hzm-fsl",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ksa-hzm",
        away: "team:ksa-fsl",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-dir-neo",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:ksa-dir",
        away: "team:ksa-neo",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-ett-hil",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:ksa-ett",
        away: "team:ksa-hil",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-ahl-tao",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ksa-ahl",
        away: "team:ksa-tao",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-01-ith-qad",
        leagueId: "league:ksa-proleague",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ksa-ith",
        away: "team:ksa-qad",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-nas-khl",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ksa-nas",
        away: "team:ksa-khl",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-fat-shb",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ksa-fat",
        away: "team:ksa-shb",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-kho-fyh",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ksa-kho",
        away: "team:ksa-fyh",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-hzm-rya",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ksa-hzm",
        away: "team:ksa-rya",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-abh-neo",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ksa-abh",
        away: "team:ksa-neo",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-ett-fsl",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ksa-ett",
        away: "team:ksa-fsl",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-dir-tao",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ksa-dir",
        away: "team:ksa-tao",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-ith-hil",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ksa-ith",
        away: "team:ksa-hil",
        score: null,
        minute: null
    },
    {
        id: "match:ksa-2026-09-06-ahl-qad",
        leagueId: "league:ksa-proleague",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ksa-ahl",
        away: "team:ksa-qad",
        score: null,
        minute: null
    }
];
