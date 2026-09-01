// ============================================================
//  data/ita-seriea/matches.js — partidos de la liga (GENERADO)
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
        id: "match:ita-2026-08-08-int-sas",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ita-int",
        away: "team:ita-sas",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-pis-nap",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ita-pis",
        away: "team:ita-nap",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-juv-cre",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ita-juv",
        away: "team:ita-cre",
        score: {
            home: 3,
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
                        playerId: "player:ita-juv-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ita-juv-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ita-juv-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:ita-juv-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:ita-juv-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ita-juv-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ita-juv-7",
                        number: 7,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ita-juv-8",
                        number: 8,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ita-juv-9",
                        number: 9,
                        x: 50,
                        y: 47
                    },
                    {
                        playerId: "player:ita-juv-10",
                        number: 10,
                        x: 88,
                        y: 47
                    },
                    {
                        playerId: "player:ita-juv-11",
                        number: 11,
                        x: 50,
                        y: 34
                    }
                ],
                away: [
                    {
                        playerId: "player:ita-cre-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ita-cre-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ita-cre-3",
                        number: 3,
                        x: 50,
                        y: 22
                    },
                    {
                        playerId: "player:ita-cre-4",
                        number: 4,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ita-cre-5",
                        number: 5,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ita-cre-6",
                        number: 6,
                        x: 37,
                        y: 38
                    },
                    {
                        playerId: "player:ita-cre-7",
                        number: 7,
                        x: 63,
                        y: 38
                    },
                    {
                        playerId: "player:ita-cre-8",
                        number: 8,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ita-cre-9",
                        number: 9,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ita-cre-10",
                        number: 10,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:ita-cre-11",
                        number: 11,
                        x: 88,
                        y: 53
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 52,
                    remates: 18,
                    rematesAlArco: 5,
                    corners: 5,
                    faltas: 14,
                    amarillas: 3,
                    rojas: 0,
                    pases: 503,
                    precisionPases: 81,
                    offsides: 2,
                    atajadas: 2,
                    xg: 3.41
                },
                away: {
                    posesion: 48,
                    remates: 12,
                    rematesAlArco: 4,
                    corners: 6,
                    faltas: 16,
                    amarillas: 3,
                    rojas: 0,
                    pases: 433,
                    precisionPases: 78,
                    offsides: 3,
                    atajadas: 2,
                    xg: 2.2
                }
            },
            events: [
                {
                    minuto: 21,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ita-cre-8"
                },
                {
                    minuto: 25,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ita-juv-6"
                },
                {
                    minuto: 37,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ita-cre-11"
                },
                {
                    minuto: 50,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-juv-10"
                },
                {
                    minuto: 55,
                    tipo: "gol",
                    equipo: "away",
                    playerId: "player:ita-cre-8"
                },
                {
                    minuto: 58,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ita-cre-6"
                },
                {
                    minuto: 64,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ita-juv-8"
                },
                {
                    minuto: 68,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ita-juv-6"
                },
                {
                    minuto: 72,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ita-cre-11"
                },
                {
                    minuto: 82,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-juv-11"
                },
                {
                    minuto: 90,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-juv-11"
                }
            ],
            ratings: {
                "player:ita-juv-1": {
                    nota: 7.2
                },
                "player:ita-juv-2": {
                    nota: 6.4
                },
                "player:ita-juv-3": {
                    nota: 7.7
                },
                "player:ita-juv-4": {
                    nota: 7.9
                },
                "player:ita-juv-5": {
                    nota: 7.1
                },
                "player:ita-juv-6": {
                    nota: 7.7
                },
                "player:ita-juv-7": {
                    nota: 7.3
                },
                "player:ita-juv-8": {
                    nota: 7.3
                },
                "player:ita-juv-9": {
                    nota: 7.6
                },
                "player:ita-juv-10": {
                    nota: 8.5
                },
                "player:ita-juv-11": {
                    nota: 7.6
                },
                "player:ita-cre-1": {
                    nota: 6.9
                },
                "player:ita-cre-2": {
                    nota: 6.7
                },
                "player:ita-cre-3": {
                    nota: 7.4
                },
                "player:ita-cre-4": {
                    nota: 7.5
                },
                "player:ita-cre-5": {
                    nota: 7.4
                },
                "player:ita-cre-6": {
                    nota: 6.3
                },
                "player:ita-cre-7": {
                    nota: 7.3
                },
                "player:ita-cre-8": {
                    nota: 7.5
                },
                "player:ita-cre-9": {
                    nota: 7.7
                },
                "player:ita-cre-10": {
                    nota: 7.2
                },
                "player:ita-cre-11": {
                    nota: 6.9
                }
            }
        }
    },
    {
        id: "match:ita-2026-08-08-ver-mil",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ita-ver",
        away: "team:ita-mil",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-ata-lec",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ita-ata",
        away: "team:ita-lec",
        score: {
            home: 3,
            away: 0
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
                        playerId: "player:ita-ata-1",
                        number: 1,
                        x: 50,
                        y: 93
                    },
                    {
                        playerId: "player:ita-ata-2",
                        number: 2,
                        x: 12,
                        y: 78
                    },
                    {
                        playerId: "player:ita-ata-3",
                        number: 3,
                        x: 37,
                        y: 78
                    },
                    {
                        playerId: "player:ita-ata-4",
                        number: 4,
                        x: 63,
                        y: 78
                    },
                    {
                        playerId: "player:ita-ata-5",
                        number: 5,
                        x: 88,
                        y: 78
                    },
                    {
                        playerId: "player:ita-ata-6",
                        number: 6,
                        x: 12,
                        y: 62
                    },
                    {
                        playerId: "player:ita-ata-7",
                        number: 7,
                        x: 37,
                        y: 62
                    },
                    {
                        playerId: "player:ita-ata-8",
                        number: 8,
                        x: 63,
                        y: 62
                    },
                    {
                        playerId: "player:ita-ata-9",
                        number: 9,
                        x: 88,
                        y: 62
                    },
                    {
                        playerId: "player:ita-ata-10",
                        number: 10,
                        x: 12,
                        y: 47
                    },
                    {
                        playerId: "player:ita-ata-11",
                        number: 11,
                        x: 88,
                        y: 47
                    }
                ],
                away: [
                    {
                        playerId: "player:ita-lec-1",
                        number: 1,
                        x: 50,
                        y: 7
                    },
                    {
                        playerId: "player:ita-lec-2",
                        number: 2,
                        x: 12,
                        y: 22
                    },
                    {
                        playerId: "player:ita-lec-3",
                        number: 3,
                        x: 37,
                        y: 22
                    },
                    {
                        playerId: "player:ita-lec-4",
                        number: 4,
                        x: 63,
                        y: 22
                    },
                    {
                        playerId: "player:ita-lec-5",
                        number: 5,
                        x: 88,
                        y: 22
                    },
                    {
                        playerId: "player:ita-lec-6",
                        number: 6,
                        x: 12,
                        y: 38
                    },
                    {
                        playerId: "player:ita-lec-7",
                        number: 7,
                        x: 88,
                        y: 38
                    },
                    {
                        playerId: "player:ita-lec-8",
                        number: 8,
                        x: 12,
                        y: 53
                    },
                    {
                        playerId: "player:ita-lec-9",
                        number: 9,
                        x: 50,
                        y: 53
                    },
                    {
                        playerId: "player:ita-lec-10",
                        number: 10,
                        x: 88,
                        y: 53
                    },
                    {
                        playerId: "player:ita-lec-11",
                        number: 11,
                        x: 50,
                        y: 66
                    }
                ]
            },
            stats: {
                home: {
                    posesion: 62,
                    remates: 20,
                    rematesAlArco: 8,
                    corners: 6,
                    faltas: 14,
                    amarillas: 4,
                    rojas: 0,
                    pases: 546,
                    precisionPases: 89,
                    offsides: 2,
                    atajadas: 4,
                    xg: 3.84
                },
                away: {
                    posesion: 38,
                    remates: 10,
                    rematesAlArco: 4,
                    corners: 4,
                    faltas: 12,
                    amarillas: 4,
                    rojas: 0,
                    pases: 325,
                    precisionPases: 76,
                    offsides: 3,
                    atajadas: 5,
                    xg: 0.95
                }
            },
            events: [
                {
                    minuto: 17,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-ata-10"
                },
                {
                    minuto: 26,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-ata-11"
                },
                {
                    minuto: 40,
                    tipo: "gol",
                    equipo: "home",
                    playerId: "player:ita-ata-8"
                },
                {
                    minuto: 42,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ita-lec-11"
                },
                {
                    minuto: 45,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ita-lec-2"
                },
                {
                    minuto: 51,
                    tipo: "amarilla",
                    equipo: "home",
                    playerId: "player:ita-ata-9"
                },
                {
                    minuto: 60,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ita-ata-11"
                },
                {
                    minuto: 60,
                    tipo: "amarilla",
                    equipo: "away",
                    playerId: "player:ita-lec-8"
                },
                {
                    minuto: 77,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ita-lec-8"
                },
                {
                    minuto: 78,
                    tipo: "cambio",
                    equipo: "home",
                    playerId: "player:ita-ata-4"
                },
                {
                    minuto: 85,
                    tipo: "cambio",
                    equipo: "away",
                    playerId: "player:ita-lec-8"
                }
            ],
            ratings: {
                "player:ita-ata-1": {
                    nota: 8
                },
                "player:ita-ata-2": {
                    nota: 7.8
                },
                "player:ita-ata-3": {
                    nota: 6.4
                },
                "player:ita-ata-4": {
                    nota: 6.3
                },
                "player:ita-ata-5": {
                    nota: 6.1
                },
                "player:ita-ata-6": {
                    nota: 7.3
                },
                "player:ita-ata-7": {
                    nota: 7.8
                },
                "player:ita-ata-8": {
                    nota: 8.3
                },
                "player:ita-ata-9": {
                    nota: 7.5
                },
                "player:ita-ata-10": {
                    nota: 8.2
                },
                "player:ita-ata-11": {
                    nota: 8.8
                },
                "player:ita-lec-1": {
                    nota: 7.9
                },
                "player:ita-lec-2": {
                    nota: 7.8
                },
                "player:ita-lec-3": {
                    nota: 7.4
                },
                "player:ita-lec-4": {
                    nota: 6.6
                },
                "player:ita-lec-5": {
                    nota: 5.9
                },
                "player:ita-lec-6": {
                    nota: 7.5
                },
                "player:ita-lec-7": {
                    nota: 7.8
                },
                "player:ita-lec-8": {
                    nota: 7.4
                },
                "player:ita-lec-9": {
                    nota: 6.4
                },
                "player:ita-lec-10": {
                    nota: 6.9
                },
                "player:ita-lec-11": {
                    nota: 7.9
                }
            }
        }
    },
    {
        id: "match:ita-2026-08-08-par-rom",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ita-par",
        away: "team:ita-rom",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-laz-cag",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "20:00",
        status: "finished",
        home: "team:ita-laz",
        away: "team:ita-cag",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-com-fio",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "21:30",
        status: "finished",
        home: "team:ita-com",
        away: "team:ita-fio",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-bol-gen",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "15:00",
        status: "finished",
        home: "team:ita-bol",
        away: "team:ita-gen",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-08-udi-tor",
        leagueId: "league:ita-seriea",
        matchday: 1,
        date: "2026-08-08",
        time: "17:30",
        status: "finished",
        home: "team:ita-udi",
        away: "team:ita-tor",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-pis-int",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ita-pis",
        away: "team:ita-int",
        score: {
            home: 0,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-sas-cre",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ita-sas",
        away: "team:ita-cre",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-ver-nap",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ita-ver",
        away: "team:ita-nap",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-juv-lec",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ita-juv",
        away: "team:ita-lec",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-par-mil",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ita-par",
        away: "team:ita-mil",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-ata-cag",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ita-ata",
        away: "team:ita-cag",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-com-rom",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "21:30",
        status: "finished",
        home: "team:ita-com",
        away: "team:ita-rom",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-laz-gen",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "15:00",
        status: "finished",
        home: "team:ita-laz",
        away: "team:ita-gen",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-udi-fio",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "17:30",
        status: "finished",
        home: "team:ita-udi",
        away: "team:ita-fio",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-13-bol-tor",
        leagueId: "league:ita-seriea",
        matchday: 2,
        date: "2026-08-13",
        time: "20:00",
        status: "finished",
        home: "team:ita-bol",
        away: "team:ita-tor",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-int-cre",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ita-int",
        away: "team:ita-cre",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-ver-pis",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ita-ver",
        away: "team:ita-pis",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-sas-lec",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ita-sas",
        away: "team:ita-lec",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-par-nap",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ita-par",
        away: "team:ita-nap",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-juv-cag",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ita-juv",
        away: "team:ita-cag",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-com-mil",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ita-com",
        away: "team:ita-mil",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-ata-gen",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "15:00",
        status: "finished",
        home: "team:ita-ata",
        away: "team:ita-gen",
        score: {
            home: 1,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-udi-rom",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "17:30",
        status: "finished",
        home: "team:ita-udi",
        away: "team:ita-rom",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-laz-tor",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "20:00",
        status: "finished",
        home: "team:ita-laz",
        away: "team:ita-tor",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-18-bol-fio",
        leagueId: "league:ita-seriea",
        matchday: 3,
        date: "2026-08-18",
        time: "21:30",
        status: "finished",
        home: "team:ita-bol",
        away: "team:ita-fio",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-ver-int",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ita-ver",
        away: "team:ita-int",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-cre-lec",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ita-cre",
        away: "team:ita-lec",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-par-pis",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ita-par",
        away: "team:ita-pis",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-sas-cag",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ita-sas",
        away: "team:ita-cag",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-com-nap",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ita-com",
        away: "team:ita-nap",
        score: {
            home: 1,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-juv-gen",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ita-juv",
        away: "team:ita-gen",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-udi-mil",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "17:30",
        status: "finished",
        home: "team:ita-udi",
        away: "team:ita-mil",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-ata-tor",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "20:00",
        status: "finished",
        home: "team:ita-ata",
        away: "team:ita-tor",
        score: {
            home: 3,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-bol-rom",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "21:30",
        status: "finished",
        home: "team:ita-bol",
        away: "team:ita-rom",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-23-laz-fio",
        leagueId: "league:ita-seriea",
        matchday: 4,
        date: "2026-08-23",
        time: "15:00",
        status: "finished",
        home: "team:ita-laz",
        away: "team:ita-fio",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-int-lec",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ita-int",
        away: "team:ita-lec",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-par-ver",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ita-par",
        away: "team:ita-ver",
        score: {
            home: 2,
            away: 0
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-cre-cag",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ita-cre",
        away: "team:ita-cag",
        score: {
            home: 2,
            away: 1
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-com-pis",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ita-com",
        away: "team:ita-pis",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-sas-gen",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ita-sas",
        away: "team:ita-gen",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-udi-nap",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ita-udi",
        away: "team:ita-nap",
        score: {
            home: 1,
            away: 3
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-juv-tor",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "20:00",
        status: "finished",
        home: "team:ita-juv",
        away: "team:ita-tor",
        score: {
            home: 2,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-bol-mil",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "21:30",
        status: "finished",
        home: "team:ita-bol",
        away: "team:ita-mil",
        score: {
            home: 3,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-ata-fio",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "15:00",
        status: "finished",
        home: "team:ita-ata",
        away: "team:ita-fio",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-08-28-laz-rom",
        leagueId: "league:ita-seriea",
        matchday: 5,
        date: "2026-08-28",
        time: "17:30",
        status: "finished",
        home: "team:ita-laz",
        away: "team:ita-rom",
        score: {
            home: 1,
            away: 2
        },
        minute: null
    },
    {
        id: "match:ita-2026-09-01-par-int",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "live",
        home: "team:ita-par",
        away: "team:ita-int",
        score: {
            home: 0,
            away: 0
        },
        minute: 72
    },
    {
        id: "match:ita-2026-09-01-lec-cag",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "live",
        home: "team:ita-lec",
        away: "team:ita-cag",
        score: {
            home: 0,
            away: 0
        },
        minute: 67
    },
    {
        id: "match:ita-2026-09-01-com-ver",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "live",
        home: "team:ita-com",
        away: "team:ita-ver",
        score: {
            home: 1,
            away: 1
        },
        minute: 39
    },
    {
        id: "match:ita-2026-09-01-cre-gen",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ita-cre",
        away: "team:ita-gen",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-udi-pis",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ita-udi",
        away: "team:ita-pis",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-sas-tor",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:ita-sas",
        away: "team:ita-tor",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-bol-nap",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "21:30",
        status: "scheduled",
        home: "team:ita-bol",
        away: "team:ita-nap",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-juv-fio",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "15:00",
        status: "scheduled",
        home: "team:ita-juv",
        away: "team:ita-fio",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-laz-mil",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "17:30",
        status: "scheduled",
        home: "team:ita-laz",
        away: "team:ita-mil",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-01-ata-rom",
        leagueId: "league:ita-seriea",
        matchday: 6,
        date: "2026-09-01",
        time: "20:00",
        status: "scheduled",
        home: "team:ita-ata",
        away: "team:ita-rom",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-int-cag",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ita-int",
        away: "team:ita-cag",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-com-par",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ita-com",
        away: "team:ita-par",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-lec-gen",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ita-lec",
        away: "team:ita-gen",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-udi-ver",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ita-udi",
        away: "team:ita-ver",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-cre-tor",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ita-cre",
        away: "team:ita-tor",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-bol-pis",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ita-bol",
        away: "team:ita-pis",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-sas-fio",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "15:00",
        status: "scheduled",
        home: "team:ita-sas",
        away: "team:ita-fio",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-laz-nap",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "17:30",
        status: "scheduled",
        home: "team:ita-laz",
        away: "team:ita-nap",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-juv-rom",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "20:00",
        status: "scheduled",
        home: "team:ita-juv",
        away: "team:ita-rom",
        score: null,
        minute: null
    },
    {
        id: "match:ita-2026-09-06-ata-mil",
        leagueId: "league:ita-seriea",
        matchday: 7,
        date: "2026-09-06",
        time: "21:30",
        status: "scheduled",
        home: "team:ita-ata",
        away: "team:ita-mil",
        score: null,
        minute: null
    }
];
