// ============================================================
//  clasificacionArgentina.js — cascada de cupos internacionales
// ------------------------------------------------------------
//  Regla real (Liga Profesional Argentina):
//   Copa Libertadores (6 cupos) = campeón Apertura + campeón Clausura +
//     campeón Copa Argentina (directos) + los mejores de la Tabla Anual
//     hasta completar 6, SALTEANDO a quien ya haya clasificado por título
//     (si el mismo club ganó 2 títulos, o un campeón también sale alto en
//     la Anual, su lugar libera el siguiente cupo para el que sigue).
//   Copa Sudamericana (6 cupos) = los siguientes 6 mejores de la Anual que
//     todavía no hayan clasificado a Libertadores por ninguna vía.
//   Descenso = SIMPLIFICADO a los últimos 2 de la Tabla Anual. La regla
//     real usa un promedio de puntos de las últimas 3 temporadas
//     (a lo Uruguay: no lo modelamos, se documenta acá explícito).
//
//  Función pura: no toca `db.js` ni conoce partidos — recibe la tabla
//  anual ya calculada (computeTable) + los 3 campeones y devuelve la
//  asignación. Los campeones pueden venir null (título todavía no
//  definido): esa vía simplemente no ocupa cupo directo.
// ============================================================

/**
 * @typedef {Object} CupoAsignado
 * @property {string} teamId
 * @property {string} via   "Campeón Torneo Apertura" | "Campeón Torneo Clausura" |
 *                          "Campeón Copa Argentina" | "Tabla Anual (Nº)"
 */

/**
 * asignarCuposInternacionales
 * @param {{teamId:string, pos:number}[]} tablaAnual   posiciones 1..N de la Tabla Anual
 * @param {string|null} campeonApertura   teamId, o null si el torneo no terminó
 * @param {string|null} campeonClausura
 * @param {string|null} campeonCopaArgentina
 * @returns {{ libertadores: CupoAsignado[], sudamericana: CupoAsignado[], descenso: {teamId:string}[] }}
 */
export function asignarCuposInternacionales(tablaAnual, campeonApertura, campeonClausura, campeonCopaArgentina) {
    const yaClasificado = new Set();
    const libertadores = [];

    // 1-3: campeones directos, en orden. Si dos títulos los ganó el mismo
    // club (o el título no está definido: null), no se pisan cupos.
    const titulos = [
        [campeonApertura, "Campeón Torneo Apertura"],
        [campeonClausura, "Campeón Torneo Clausura"],
        [campeonCopaArgentina, "Campeón Copa Argentina"],
    ];
    for (const [teamId, via] of titulos) {
        if (!teamId || yaClasificado.has(teamId)) continue;
        libertadores.push({ teamId, via });
        yaClasificado.add(teamId);
    }

    // Orden de la Anual, defensivo por si no viene ya ordenada.
    const anual = [...tablaAnual].sort((a, b) => a.pos - b.pos);

    // 4-6: mejores de la Anual que todavía no clasificaron.
    for (const fila of anual) {
        if (libertadores.length >= 6) break;
        if (yaClasificado.has(fila.teamId)) continue;
        libertadores.push({ teamId: fila.teamId, via: `Tabla Anual (${fila.pos}º)` });
        yaClasificado.add(fila.teamId);
    }

    // Sudamericana: siguientes 6 de la Anual, saltando a quien ya clasificó.
    const sudamericana = [];
    for (const fila of anual) {
        if (sudamericana.length >= 6) break;
        if (yaClasificado.has(fila.teamId)) continue;
        sudamericana.push({ teamId: fila.teamId, via: `Tabla Anual (${fila.pos}º)` });
        yaClasificado.add(fila.teamId);
    }

    // Descenso: últimos 2 de la Anual (simplificación, ver comentario de arriba).
    const descenso = anual.slice(-2).map((f) => ({ teamId: f.teamId }));

    return { libertadores, sudamericana, descenso };
}

/**
 * agruparPorCupos — adaptador: convierte el resultado de la cascada en el
 * mismo shape `{key,label,color,filas}[]` que `repo.getStandings` arma para
 * cualquier liga (agrupando por RANGO de posición). Acá el agrupamiento es
 * por EQUIPO, no por rango, porque un campeón puede clasificar aunque su
 * posición en la Anual no esté dentro del rango habitual del cupo.
 *
 * @param {Array<{pos:number, equipo:{id:string}}>} filas   filas ya con forma de repo.js (post mini())
 * @param {ReturnType<typeof asignarCuposInternacionales>} cupos
 * @returns {{key:string, label:string, color:string, filas:Object[]}[]}
 */
export function agruparPorCupos(filas, cupos) {
    const grupos = {
        libertadores: { key: "libertadores", label: "Copa Libertadores", color: "#39FF6A", filas: [] },
        sudamericana: { key: "sudamericana", label: "Copa Sudamericana", color: "#6FA8FF", filas: [] },
        media: { key: "media", label: "Zona media", color: "#566270", filas: [] },
        descenso: { key: "descenso", label: "Descenso (simplificado a los últimos 2 de la Anual)", color: "#C4404A", filas: [] },
    };
    const claveDe = new Map();
    for (const c of cupos.libertadores) claveDe.set(c.teamId, "libertadores");
    for (const c of cupos.sudamericana) claveDe.set(c.teamId, "sudamericana");
    for (const c of cupos.descenso) claveDe.set(c.teamId, "descenso");
    for (const f of filas) grupos[claveDe.get(f.equipo.id) ?? "media"].filas.push(f);
    return Object.values(grupos).filter((g) => g.filas.length);
}
