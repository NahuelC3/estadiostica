// ============================================================
//  llave.js — resolver una llave de eliminación directa
// ------------------------------------------------------------
//  Una llave NO es un dato nuevo de partido: reusa el PartidoCrudo de
//  siempre (mismo detalle, misma página de partido, mismo escudo). Lo
//  único nuevo es el "envoltorio": quién juega, en qué ronda, con qué
//  partido(s), y quién avanza.
//
//  `avanza` y el marcador global se DERIVAN de los partidos — igual
//  criterio que la tabla de posiciones (nunca se guarda lo calculable).
//  Sirve igual para Champions League, Copa Argentina, y cuando se
//  repita para Europa League / Conference / Libertadores / Sudamericana:
//  sólo cambia la lista de rondas y las llaves, no esta función.
// ============================================================

/**
 * @typedef {Object} ParticipanteLlave
 * @property {string|null} equipo        teamId, o null si todavía no está definido
 * @property {string} [placeholder]      "Ganador Playoff 4" — sólo si equipo es null
 */

/**
 * @typedef {Object} LlaveEliminacion
 * @property {string} id
 * @property {string} ronda           key de la ronda (RondaConfig.key)
 * @property {'unico'|'ida-vuelta'} formato
 * @property {ParticipanteLlave} local
 * @property {ParticipanteLlave} visitante
 * @property {string[]} partidos      ids de PartidoCrudo: 0 (bye), 1 (único) o 2 (ida-vuelta)
 * @property {{home:number, away:number}|null} [penales]  sólo si se definió por penales
 */

/**
 * resolverLlave — arma el resultado de una llave a partir de sus partidos.
 * @param {LlaveEliminacion} llave
 * @param {import("../data/db.js").Partido[]} partidosDeLaLlave  ya resueltos (db.partido(id)), en el mismo orden que llave.partidos
 * @returns {{
 *   marcadorGlobal: {local:number, visitante:number} | null,
 *   avanza: string | null,        // teamId, o null si todavía no se puede saber
 *   definidoPorPenales: boolean,
 * }}
 */
export function resolverLlave(llave, partidosDeLaLlave) {
    // Bye real: al otro lado le falta directamente el OBJETO participante
    // (no sólo el equipo). Distinto de "pendiente de otra llave", donde el
    // objeto está pero con equipo:null + placeholder — eso no es bye, es
    // "todavía no se puede saber".
    if (!llave.local || !llave.visitante) {
        const unico = llave.local?.equipo ?? llave.visitante?.equipo ?? null;
        return { marcadorGlobal: null, avanza: unico, definidoPorPenales: false };
    }

    const local = llave.local.equipo;
    const visitante = llave.visitante.equipo;

    // Alguno de los 2 lados todavía depende de otra llave (placeholder) o
    // no hay partidos cargados: no se puede resolver nada.
    if (!local || !visitante || !llave.partidos.length) {
        return { marcadorGlobal: null, avanza: null, definidoPorPenales: false };
    }

    const jugados = partidosDeLaLlave.filter(Boolean);
    if (jugados.length < llave.partidos.length || jugados.some((p) => p.status !== "finished")) {
        return { marcadorGlobal: null, avanza: null, definidoPorPenales: false };
    }

    // Suma de goles respetando quién fue local/visitante EN CADA partido
    // (en ida y vuelta se invierte la localía).
    let golesLocal = 0;
    let golesVisitante = 0;
    for (const p of jugados) {
        const propioEsLocalDelPartido = p.home === local;
        golesLocal += propioEsLocalDelPartido ? p.score.home : p.score.away;
        golesVisitante += propioEsLocalDelPartido ? p.score.away : p.score.home;
    }

    const marcadorGlobal = { local: golesLocal, visitante: golesVisitante };

    if (golesLocal !== golesVisitante) {
        return { marcadorGlobal, avanza: golesLocal > golesVisitante ? local : visitante, definidoPorPenales: false };
    }
    if (llave.penales) {
        const avanza = llave.penales.home > llave.penales.away ? local : visitante;
        return { marcadorGlobal, avanza, definidoPorPenales: true };
    }
    // Empate global sin penales registrados: dato de muestra incompleto.
    return { marcadorGlobal, avanza: null, definidoPorPenales: false };
}
