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
];

/** FECHA_DEMO — la "jornada actual" del sitio (hay partidos en vivo/programados).
 *  No usamos new Date(): la fecha real de hoy no tiene partidos de ejemplo. */
export const FECHA_DEMO = "2026-09-01";
