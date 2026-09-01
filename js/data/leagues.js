// ============================================================
//  data/leagues.js — CONFIGURACIÓN de cada liga
// ------------------------------------------------------------
//  Acá vive todo lo que NO es "un equipo" ni "un partido": nombre de la
//  liga, país/bandera, cantidad de jornadas, criterios de desempate,
//  zonas de la tabla (que alimentan los separadores sesgados), quitas de
//  puntos y los PROMEDIOS usados por los gráficos de "desvío".
//
//  Para sumar una liga nueva: agregar acá su objeto y crear su carpeta
//  en js/data/ con teams.js / squads.js / matches.js. Nada más.
// ============================================================

/**
 * @typedef {Object} Zona
 * @property {number} from   posición inicial (incluida)
 * @property {number} to     posición final (incluida)
 * @property {string} key    identificador corto ("libertadores", "descenso"...)
 * @property {string} label  texto visible
 * @property {string} color  color de la zona (barras y separadores sesgados)
 */

/**
 * @typedef {Object} PromediosPosicion
 *  Valores PROMEDIO POR PARTIDO de un jugador de esa posición en la liga.
 *  Se comparan directamente contra el "por partido" del jugador en el
 *  gráfico de desvío.
 * @property {number} goles
 * @property {number} asistencias
 * @property {number} pasesClave
 * @property {number} entradas
 * @property {number} despejes
 * @property {number} duelosGanados
 */

/**
 * @typedef {Object} LigaConfig
 * @property {string} id           "league:arg-lpf"
 * @property {string} slug         "arg-lpf" (va en la URL: ?liga=arg-lpf)
 * @property {string} nombre
 * @property {string} pais
 * @property {string} bandera      código flag-icons ("ar", "gb-eng")
 * @property {string} temporada
 * @property {number} matchdays    jornadas totales de la muestra
 * @property {string[]} tiebreakers  orden de criterios de desempate
 * @property {Zona[]} zones
 * @property {{team:string,points:number,reason:string}[]} adjustments
 * @property {Record<'GK'|'DEF'|'MID'|'FWD', PromediosPosicion>} positionAverages
 * @property {Object} teamAverages  promedios de equipo para el desvío
 */

/** @type {LigaConfig[]} */
export const LIGAS = [
    {
        id: "league:arg-lpf",
        slug: "arg-lpf",
        nombre: "Liga Profesional",
        pais: "Argentina",
        bandera: "ar",
        temporada: "2026",
        matchdays: 7,
        // Argentina: tras los puntos, primero el mano a mano (H2H).
        tiebreakers: ["PTS", "H2H", "DIF", "GF"],
        zones: [
            { from: 1, to: 4, key: "libertadores", label: "Copa Libertadores", color: "#39FF6A" },
            { from: 5, to: 8, key: "sudamericana", label: "Copa Sudamericana", color: "#6FA8FF" },
            { from: 9, to: 17, key: "media", label: "Zona media", color: "#566270" },
            { from: 18, to: 20, key: "descenso", label: "Descenso", color: "#C4404A" },
        ],
        // Ejemplo de quita de puntos (estilo Everton). Se aplica en computeTable.
        adjustments: [
            { team: "team:arg-pla", points: -3, reason: "Sanción administrativa" },
        ],
        // Promedios POR PARTIDO por posición (Argentina).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.2, entradas: 0.2, despejes: 1.2, duelosGanados: 1.5 },
            DEF: { goles: 0.05, asistencias: 0.05, pasesClave: 0.5, entradas: 2.2, despejes: 3.6, duelosGanados: 5.0 },
            MID: { goles: 0.11, asistencias: 0.15, pasesClave: 1.3, entradas: 1.8, despejes: 1.1, duelosGanados: 5.4 },
            FWD: { goles: 0.34, asistencias: 0.17, pasesClave: 1.1, entradas: 0.8, despejes: 0.5, duelosGanados: 4.1 },
        },
        teamAverages: {
            posesion: 50, remates: 11.5, rematesAlArco: 4.2, corners: 4.8,
            faltas: 13.5, amarillas: 2.4, pases: 430, precisionPases: 78, offsides: 2.1,
            goles: 1.3, xg: 1.35,
        },
    },
    {
        id: "league:eng-premier",
        slug: "eng-premier",
        nombre: "Premier League",
        pais: "Inglaterra",
        bandera: "gb-eng",
        temporada: "2026-27",
        matchdays: 7,
        // Inglaterra: tras los puntos, diferencia de gol y luego goles a favor.
        tiebreakers: ["PTS", "DIF", "GF", "nombre"],
        zones: [
            { from: 1, to: 4, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 5, to: 5, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 6, to: 6, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 7, to: 17, key: "media", label: "Zona media", color: "#566270" },
            { from: 18, to: 20, key: "descenso", label: "Descenso a Championship", color: "#C4404A" },
        ],
        adjustments: [
            { team: "team:eng-eve", points: -2, reason: "Incumplimiento de normas financieras" },
        ],
        // Promedios POR PARTIDO por posición (Inglaterra).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.3, entradas: 0.2, despejes: 1.0, duelosGanados: 1.3 },
            DEF: { goles: 0.06, asistencias: 0.06, pasesClave: 0.6, entradas: 2.1, despejes: 3.9, duelosGanados: 5.3 },
            MID: { goles: 0.13, asistencias: 0.17, pasesClave: 1.5, entradas: 1.7, despejes: 1.0, duelosGanados: 5.7 },
            FWD: { goles: 0.40, asistencias: 0.20, pasesClave: 1.3, entradas: 0.7, despejes: 0.4, duelosGanados: 4.3 },
        },
        teamAverages: {
            posesion: 50, remates: 13.0, rematesAlArco: 4.7, corners: 5.4,
            faltas: 10.8, amarillas: 1.9, pases: 480, precisionPases: 81, offsides: 2.0,
            goles: 1.5, xg: 1.5,
        },
    },
    {
        id: "league:esp-laliga",
        slug: "esp-laliga",
        nombre: "LaLiga",
        pais: "España",
        bandera: "es",
        temporada: "2026-27",
        // España: tras los puntos, primero el enfrentamiento directo (H2H).
        tiebreakers: ["PTS", "H2H", "DIF", "GF"],
        matchdays: 7,
        zones: [
            { from: 1, to: 4, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 5, to: 5, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 6, to: 6, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 7, to: 17, key: "media", label: "Zona media", color: "#566270" },
            { from: 18, to: 20, key: "descenso", label: "Descenso a Segunda", color: "#C4404A" },
        ],
        adjustments: [
            { team: "team:esp-mal", points: -3, reason: "Sanción por incumplimiento del límite salarial" },
        ],
        // Promedios POR PARTIDO por posición (España: técnica, posesión, pases).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.25, entradas: 0.2, despejes: 1.1, duelosGanados: 1.4 },
            DEF: { goles: 0.05, asistencias: 0.05, pasesClave: 0.55, entradas: 2.0, despejes: 3.7, duelosGanados: 5.1 },
            MID: { goles: 0.12, asistencias: 0.16, pasesClave: 1.4,  entradas: 1.7, despejes: 1.0, duelosGanados: 5.5 },
            FWD: { goles: 0.36, asistencias: 0.18, pasesClave: 1.2,  entradas: 0.7, despejes: 0.4, duelosGanados: 4.0 },
        },
        teamAverages: {
            posesion: 50, remates: 12.4, rematesAlArco: 4.4, corners: 4.9,
            faltas: 13.0, amarillas: 2.7, pases: 465, precisionPases: 82, offsides: 2.2,
            goles: 1.4, xg: 1.38,
        },
    },
    {
        id: "league:ita-seriea",
        slug: "ita-seriea",
        nombre: "Serie A",
        pais: "Italia",
        bandera: "it",
        temporada: "2026-27",
        // Italia: tras los puntos, primero el enfrentamiento directo (H2H).
        tiebreakers: ["PTS", "H2H", "DIF", "GF"],
        matchdays: 7,
        zones: [
            { from: 1, to: 4, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 5, to: 5, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 6, to: 6, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 7, to: 17, key: "media", label: "Zona media", color: "#566270" },
            { from: 18, to: 20, key: "descenso", label: "Descenso a Serie B", color: "#C4404A" },
        ],
        adjustments: [
            { team: "team:ita-juv", points: -10, reason: "Caso de plusvalías (penalización deportiva)" },
        ],
        // Promedios POR PARTIDO por posición (Italia: táctica, más faltas y amarillas).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.2, entradas: 0.2, despejes: 1.3, duelosGanados: 1.6 },
            DEF: { goles: 0.06, asistencias: 0.05, pasesClave: 0.5, entradas: 2.3, despejes: 4.0, duelosGanados: 5.4 },
            MID: { goles: 0.11, asistencias: 0.14, pasesClave: 1.3, entradas: 1.9, despejes: 1.2, duelosGanados: 5.6 },
            FWD: { goles: 0.33, asistencias: 0.16, pasesClave: 1.1, entradas: 0.8, despejes: 0.5, duelosGanados: 4.2 },
        },
        teamAverages: {
            posesion: 50, remates: 12.9, rematesAlArco: 4.5, corners: 5.0,
            faltas: 14.2, amarillas: 2.9, pases: 455, precisionPases: 83, offsides: 2.5,
            goles: 1.42, xg: 1.4,
        },
    },
    {
        id: "league:ale-bundesliga",
        slug: "ale-bundesliga",
        nombre: "Bundesliga",
        pais: "Alemania",
        bandera: "de",
        temporada: "2026-27",
        // Alemania: tras los puntos, primero la diferencia de gol.
        tiebreakers: ["PTS", "DIF", "GF", "H2H"],
        matchdays: 7,
        // La Bundesliga tiene 18 equipos: sólo 17-18 descienden directo y el 16 juega repesca.
        zones: [
            { from: 1, to: 4, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 5, to: 5, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 6, to: 6, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 7, to: 15, key: "media", label: "Zona media", color: "#566270" },
            { from: 16, to: 16, key: "repesca", label: "Repesca de descenso", color: "#E8A13C" },
            { from: 17, to: 18, key: "descenso", label: "Descenso a 2. Bundesliga", color: "#C4404A" },
        ],
        adjustments: [
            { team: "team:ale-s04", points: -3, reason: "Sanción por licencia y control financiero" },
        ],
        // Promedios POR PARTIDO por posición (Alemania: ritmo alto, más goles y remates).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.03, pasesClave: 0.3, entradas: 0.2, despejes: 1.0, duelosGanados: 1.3 },
            DEF: { goles: 0.07, asistencias: 0.07, pasesClave: 0.7, entradas: 2.0, despejes: 3.8, duelosGanados: 5.2 },
            MID: { goles: 0.15, asistencias: 0.19, pasesClave: 1.6, entradas: 1.6, despejes: 1.0, duelosGanados: 5.8 },
            FWD: { goles: 0.45, asistencias: 0.22, pasesClave: 1.4, entradas: 0.6, despejes: 0.4, duelosGanados: 4.4 },
        },
        teamAverages: {
            posesion: 50, remates: 14.0, rematesAlArco: 5.3, corners: 5.2,
            faltas: 10.0, amarillas: 1.7, pases: 470, precisionPases: 83, offsides: 2.0,
            goles: 1.65, xg: 1.62,
        },
    },
    {
        id: "league:fra-ligue1",
        slug: "fra-ligue1",
        nombre: "Ligue 1",
        pais: "Francia",
        bandera: "fr",
        temporada: "2026-27",
        // Francia: tras los puntos, diferencia de gol general (luego el mano a mano).
        tiebreakers: ["PTS", "DIF", "H2H", "GF"],
        matchdays: 7,
        // 18 equipos: descienden 17 y 18 directo (sin repesca en esta muestra).
        zones: [
            { from: 1, to: 4, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 5, to: 5, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 6, to: 6, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 7, to: 16, key: "media", label: "Zona media", color: "#566270" },
            { from: 17, to: 18, key: "descenso", label: "Descenso a Ligue 2", color: "#C4404A" },
        ],
        adjustments: [],
        // Promedios POR PARTIDO por posición (Francia: físico, transiciones).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.25, entradas: 0.2, despejes: 1.1, duelosGanados: 1.4 },
            DEF: { goles: 0.06, asistencias: 0.06, pasesClave: 0.6,  entradas: 2.1, despejes: 3.7, duelosGanados: 5.2 },
            MID: { goles: 0.12, asistencias: 0.16, pasesClave: 1.4,  entradas: 1.7, despejes: 1.0, duelosGanados: 5.6 },
            FWD: { goles: 0.38, asistencias: 0.19, pasesClave: 1.2,  entradas: 0.7, despejes: 0.4, duelosGanados: 4.1 },
        },
        teamAverages: {
            posesion: 50, remates: 12.6, rematesAlArco: 4.5, corners: 4.9,
            faltas: 12.4, amarillas: 2.3, pases: 455, precisionPases: 81, offsides: 2.2,
            goles: 1.42, xg: 1.4,
        },
    },
    {
        id: "league:por-primeira",
        slug: "por-primeira",
        nombre: "Primeira Liga",
        pais: "Portugal",
        bandera: "pt",
        temporada: "2026-27",
        // Portugal: tras los puntos, el mano a mano (particular) y luego la diferencia general.
        tiebreakers: ["PTS", "H2H", "DIF", "GF"],
        matchdays: 7,
        zones: [
            { from: 1, to: 2, key: "champions", label: "UEFA Champions League", color: "#39FF6A" },
            { from: 3, to: 3, key: "europa", label: "UEFA Europa League", color: "#6FA8FF" },
            { from: 4, to: 4, key: "conference", label: "UEFA Conference League", color: "#2FBF9B" },
            { from: 5, to: 15, key: "media", label: "Zona media", color: "#566270" },
            { from: 16, to: 16, key: "repesca", label: "Repesca de permanencia", color: "#E8A13C" },
            { from: 17, to: 18, key: "descenso", label: "Descenso a Liga Portugal 2", color: "#C4404A" },
        ],
        adjustments: [],
        // Promedios POR PARTIDO por posición (Portugal: técnica, menos gol).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.02, pasesClave: 0.2, entradas: 0.2, despejes: 1.2, duelosGanados: 1.5 },
            DEF: { goles: 0.05, asistencias: 0.05, pasesClave: 0.5, entradas: 2.2, despejes: 3.8, duelosGanados: 5.2 },
            MID: { goles: 0.11, asistencias: 0.14, pasesClave: 1.3, entradas: 1.8, despejes: 1.1, duelosGanados: 5.4 },
            FWD: { goles: 0.32, asistencias: 0.16, pasesClave: 1.1, entradas: 0.7, despejes: 0.4, duelosGanados: 4.0 },
        },
        teamAverages: {
            posesion: 50, remates: 12.0, rematesAlArco: 4.1, corners: 4.7,
            faltas: 12.6, amarillas: 2.5, pases: 460, precisionPases: 82, offsides: 2.0,
            goles: 1.32, xg: 1.3,
        },
    },
    {
        id: "league:ksa-proleague",
        slug: "ksa-proleague",
        nombre: "Liga Profesional Saudí",
        pais: "Arabia Saudita",
        bandera: "sa",
        temporada: "2026-27",
        // Arabia: tras los puntos, diferencia de gol, goles a favor y por último el mano a mano.
        tiebreakers: ["PTS", "DIF", "GF", "H2H"],
        matchdays: 7,
        // Cupos continentales de la AFC + 3 descensos directos.
        zones: [
            { from: 1, to: 4, key: "afc-elite", label: "AFC Champions League Elite", color: "#39FF6A" },
            { from: 5, to: 5, key: "afc-two", label: "AFC Champions League Two", color: "#6FA8FF" },
            { from: 6, to: 15, key: "media", label: "Zona media", color: "#566270" },
            { from: 16, to: 18, key: "descenso", label: "Descenso a Primera División", color: "#C4404A" },
        ],
        adjustments: [],
        // Promedios POR PARTIDO por posición (Arabia: juego abierto, más gol).
        positionAverages: {
            GK:  { goles: 0.00, asistencias: 0.03, pasesClave: 0.3, entradas: 0.2, despejes: 1.1, duelosGanados: 1.3 },
            DEF: { goles: 0.07, asistencias: 0.07, pasesClave: 0.7, entradas: 2.0, despejes: 3.6, duelosGanados: 5.0 },
            MID: { goles: 0.15, asistencias: 0.18, pasesClave: 1.5, entradas: 1.6, despejes: 1.0, duelosGanados: 5.6 },
            FWD: { goles: 0.46, asistencias: 0.22, pasesClave: 1.3, entradas: 0.6, despejes: 0.4, duelosGanados: 4.3 },
        },
        teamAverages: {
            posesion: 50, remates: 13.5, rematesAlArco: 5.0, corners: 5.3,
            faltas: 11.5, amarillas: 2.2, pases: 430, precisionPases: 78, offsides: 2.4,
            goles: 1.6, xg: 1.55,
        },
    },
];

/** FECHA_DEMO — la "jornada actual" del sitio (hay partidos en vivo/programados).
 *  No usamos new Date(): la fecha real de hoy no tiene partidos de ejemplo. */
export const FECHA_DEMO = "2026-09-01";
