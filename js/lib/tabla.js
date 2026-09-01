// ============================================================
//  tabla.js — cálculo de la TABLA DE POSICIONES (derivada)
// ------------------------------------------------------------
//  La tabla NO se guarda en ningún lado: se calcula siempre a partir de
//  los partidos finalizados. Así nunca queda "desincronizada" con los
//  resultados, y `prevPos` se obtiene recalculando hasta la jornada
//  anterior (sin snapshots).
// ============================================================

import { compararIso } from "./fecha.js";

/**
 * @typedef {Object} FilaTabla
 * @property {string} teamId
 * @property {number} pos      posición final (1..N)
 * @property {number} pj       partidos jugados
 * @property {number} pg       ganados
 * @property {number} pe       empatados
 * @property {number} pp       perdidos
 * @property {number} gf       goles a favor
 * @property {number} gc       goles en contra
 * @property {number} dif      diferencia de gol (gf - gc)
 * @property {number} pts      puntos (incluye ajustes)
 * @property {number} ajuste   quita/bonificación aplicada (0 si no hay)
 * @property {('V'|'E'|'D')[]} forma  últimos 5 resultados, del más viejo al más nuevo
 * @property {{key:string,label:string,color:string}|null} zona
 */

/** Crea la fila vacía de un equipo. */
function filaVacia(teamId) {
    return {
        teamId,
        pos: 0,
        pj: 0, pg: 0, pe: 0, pp: 0,
        gf: 0, gc: 0, dif: 0, pts: 0,
        ajuste: 0,
        forma: [],
        zona: null,
    };
}

/** Resultado de un partido desde el punto de vista de `teamId`. */
function resultadoPara(partido, teamId) {
    const esLocal = partido.home === teamId;
    const propios = esLocal ? partido.score.home : partido.score.away;
    const rivales = esLocal ? partido.score.away : partido.score.home;
    if (propios > rivales) return "V";
    if (propios < rivales) return "D";
    return "E";
}

/**
 * computeTable — calcula la tabla completa.
 *
 * @param {import("../data/db.js").Partido[]} partidos  todos los partidos de la liga
 * @param {Object} ligaCfg  config de la liga (zones, tiebreakers, adjustments)
 * @param {Object} [opciones]
 * @param {number} [opciones.hastaJornada]  si se pasa, sólo cuenta partidos con matchday <= ese valor
 * @returns {FilaTabla[]}  ordenada de la posición 1 a la N
 */
export function computeTable(partidos, ligaCfg, opciones = {}) {
    const { hastaJornada = Infinity } = opciones;

    // 1. Sólo partidos finalizados y dentro del corte de jornada.
    const jugados = partidos
        .filter((p) => p.status === "finished" && p.matchday <= hastaJornada)
        .sort((a, b) => compararIso(a.date, b.date));

    // 2. Fila por equipo (aparecen todos porque el fixture es todos contra todos).
    /** @type {Map<string, FilaTabla>} */
    const filas = new Map();
    const asegurar = (id) => {
        if (!filas.has(id)) filas.set(id, filaVacia(id));
        return filas.get(id);
    };

    // 3. Recorre cada partido y suma a los dos equipos.
    for (const p of jugados) {
        const local = asegurar(p.home);
        const visita = asegurar(p.away);

        local.pj++; visita.pj++;
        local.gf += p.score.home; local.gc += p.score.away;
        visita.gf += p.score.away; visita.gc += p.score.home;

        if (p.score.home > p.score.away) {
            local.pg++; local.pts += 3; visita.pp++;
        } else if (p.score.home < p.score.away) {
            visita.pg++; visita.pts += 3; local.pp++;
        } else {
            local.pe++; visita.pe++;
            local.pts += 1; visita.pts += 1;
        }
    }

    // 4. Ajustes de puntos (quitas estilo Everton).
    for (const aj of ligaCfg.adjustments || []) {
        const fila = filas.get(aj.team);
        if (fila) {
            fila.pts += aj.points;      // aj.points suele ser negativo
            fila.ajuste += aj.points;
        }
    }

    // 5. Diferencia de gol + forma (últimos 5).
    for (const fila of filas.values()) {
        fila.dif = fila.gf - fila.gc;
        fila.forma = jugados
            .filter((p) => p.home === fila.teamId || p.away === fila.teamId)
            .slice(-5)
            .map((p) => resultadoPara(p, fila.teamId));
    }

    // 6. Ordena aplicando los criterios de desempate de la liga.
    const orden = Array.from(filas.values());
    orden.sort((a, b) => desempatar(a, b, ligaCfg, jugados));

    // 7. Asigna posición y zona.
    orden.forEach((fila, i) => {
        fila.pos = i + 1;
        fila.zona = zonaDe(fila.pos, ligaCfg) || null;
    });

    return orden;
}

/**
 * desempatar — comparador según ligaCfg.tiebreakers.
 *  Tokens soportados: "PTS", "DIF", "GF", "H2H", "nombre".
 */
function desempatar(a, b, ligaCfg, jugados) {
    for (const criterio of ligaCfg.tiebreakers) {
        let d = 0;
        if (criterio === "PTS") d = b.pts - a.pts;
        else if (criterio === "DIF") d = b.dif - a.dif;
        else if (criterio === "GF") d = b.gf - a.gf;
        else if (criterio === "H2H") d = h2h(b, a, jugados);
        else if (criterio === "nombre") d = a.teamId.localeCompare(b.teamId);
        if (d !== 0) return d;
    }
    return a.teamId.localeCompare(b.teamId);
}

/**
 * h2h — mini-comparación "entre ellos": diferencia de puntos que sacó
 *  el equipo X respecto del equipo Y en los partidos que jugaron entre sí.
 *  (Simplificación del head-to-head real, suficiente para la demo.)
 */
function h2h(x, y, jugados) {
    let px = 0, py = 0;
    for (const p of jugados) {
        const entreEllos =
            (p.home === x.teamId && p.away === y.teamId) ||
            (p.home === y.teamId && p.away === x.teamId);
        if (!entreEllos) continue;
        const rx = resultadoPara(p, x.teamId);
        if (rx === "V") px += 3;
        else if (rx === "E") { px += 1; py += 1; }
        else py += 3;
    }
    return px - py;
}

/** zonaDe — encuentra la zona (Libertadores, descenso...) para una posición. */
function zonaDe(pos, ligaCfg) {
    return (ligaCfg.zones || []).find((z) => pos >= z.from && pos <= z.to);
}

/**
 * jornadaActual — la jornada más alta con al menos un partido finalizado.
 * @param {import("../data/db.js").Partido[]} partidos
 * @returns {number}
 */
export function jornadaActual(partidos) {
    return partidos
        .filter((p) => p.status === "finished")
        .reduce((max, p) => Math.max(max, p.matchday), 0);
}

/**
 * mapaPosiciones — de una tabla a un objeto { teamId: pos }.
 *  Útil para comparar la posición actual con la de la jornada anterior.
 * @param {FilaTabla[]} tabla
 * @returns {Record<string, number>}
 */
export function mapaPosiciones(tabla) {
    const m = {};
    for (const fila of tabla) m[fila.teamId] = fila.pos;
    return m;
}
