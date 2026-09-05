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

    // 6. Ordena: primero por puntos y, dentro de cada empate, en cascada
    //    por los criterios de desempate de la liga (ver ordenarGrupo).
    const orden = ordenarGrupo(Array.from(filas.values()), ligaCfg.tiebreakers, jugados);

    // 7. Asigna posición y zona.
    orden.forEach((fila, i) => {
        fila.pos = i + 1;
        fila.zona = zonaDe(fila.pos, ligaCfg) || null;
    });

    return orden;
}

/**
 * ordenarGrupo — ordena un grupo de filas que ya está empatado en todos
 *  los criterios "anteriores", aplicando en cascada la lista `criterios`
 *  que queda por resolver.
 *
 *   · PTS / DIF / GF / nombre → basta comparar cada fila por su valor.
 *   · H2H → necesita CONTEXTO de grupo: se arma una mini-tabla con los
 *     puntos que sacó cada equipo SÓLO en los partidos contra los demás
 *     integrantes de este mismo grupo. NO es una comparación suelta de a
 *     pares (esa no es transitiva y rompía el orden con 3+ empatados que
 *     tienen resultados cruzados entre sí).
 *
 *  Si un criterio no separa del todo (subgrupo con el mismo valor, o
 *  grupo sin partidos entre sí en el caso de H2H), se sigue con el resto
 *  de los criterios SÓLO sobre ese subgrupo. Cuando se acaban los
 *  criterios de la liga, desempate final estable por id de equipo.
 *
 * @param {FilaTabla[]} filas      grupo a ordenar
 * @param {string[]} criterios     criterios que faltan aplicar, en orden
 * @param {import("../data/db.js").Partido[]} jugados  partidos finalizados
 * @returns {FilaTabla[]}          el grupo ordenado
 */
function ordenarGrupo(filas, criterios, jugados) {
    if (filas.length <= 1) return filas.slice();

    // Se acabaron los criterios de la liga: desempate final por id.
    if (criterios.length === 0) {
        return filas.slice().sort((a, b) => a.teamId.localeCompare(b.teamId));
    }

    const [criterio, ...resto] = criterios;

    // "nombre": ids únicos → ordena alfabético y nunca quedan empates.
    if (criterio === "nombre") {
        return filas.slice().sort((a, b) => a.teamId.localeCompare(b.teamId));
    }

    // Para H2H, la mini-tabla del grupo; para el resto no hace falta.
    const miniPuntos = criterio === "H2H"
        ? miniTabla(filas.map((f) => f.teamId), jugados)
        : null;

    // Valor comparable de una fila para el criterio actual (más = mejor).
    const valorDe = (fila) => {
        if (criterio === "PTS") return fila.pts;
        if (criterio === "DIF") return fila.dif;
        if (criterio === "GF") return fila.gf;
        if (criterio === "H2H") return miniPuntos.get(fila.teamId);
        return 0;
    };

    // Ordena por ese valor (descendente) y reagrupa por valor idéntico:
    // cada subgrupo que sigue empatado se resuelve con el resto de los
    // criterios.
    const ordenadas = filas.slice().sort((a, b) => valorDe(b) - valorDe(a));
    const salida = [];
    let i = 0;
    while (i < ordenadas.length) {
        let j = i + 1;
        while (j < ordenadas.length && valorDe(ordenadas[j]) === valorDe(ordenadas[i])) j++;
        const subgrupo = ordenadas.slice(i, j);
        salida.push(
            ...(subgrupo.length > 1 ? ordenarGrupo(subgrupo, resto, jugados) : subgrupo),
        );
        i = j;
    }
    return salida;
}

/**
 * miniTabla — "head-to-head" de verdad: puntos de cada equipo del grupo
 *  contando SÓLO los partidos jugados contra otros equipos del MISMO
 *  grupo (3 por victoria, 1 por empate).
 *
 *  Simplificación asumida (igual que antes, y suficiente para la demo):
 *  sólo suma PUNTOS entre ellos, no aplica diferencia de gol particular.
 *
 * @param {string[]} ids       teamIds del grupo empatado
 * @param {import("../data/db.js").Partido[]} jugados  partidos finalizados
 * @returns {Map<string, number>}  teamId -> puntos en la mini-tabla
 */
function miniTabla(ids, jugados) {
    const delGrupo = new Set(ids);
    const pts = new Map(ids.map((id) => [id, 0]));
    for (const p of jugados) {
        if (!delGrupo.has(p.home) || !delGrupo.has(p.away)) continue;
        if (p.score.home > p.score.away) {
            pts.set(p.home, pts.get(p.home) + 3);
        } else if (p.score.home < p.score.away) {
            pts.set(p.away, pts.get(p.away) + 3);
        } else {
            pts.set(p.home, pts.get(p.home) + 1);
            pts.set(p.away, pts.get(p.away) + 1);
        }
    }
    return pts;
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
