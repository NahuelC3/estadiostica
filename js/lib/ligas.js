// ============================================================
//  lib/ligas.js — helpers puros sobre la lista de ligas
// ------------------------------------------------------------
//  Sin dependencia de repo.js: reciben datos ya resueltos (ligas, fases)
//  y sólo los agrupan/clasifican. La resolución async vive en el módulo
//  que arma el acordeón (js/ui/acordeon-ligas.js).
// ============================================================

/**
 * agruparPorPais — agrupa ligas por país, preservando el orden de llegada
 * dentro de cada país, con "Europa" (torneos continentales) siempre primero.
 * @param {import("../repo.js").Liga[]} ligas
 * @returns {[string, import("../repo.js").Liga[]][]}
 */
export function agruparPorPais(ligas) {
    const porPais = new Map();
    for (const liga of ligas) {
        if (!porPais.has(liga.pais)) porPais.set(liga.pais, []);
        porPais.get(liga.pais).push(liga);
    }
    return [...porPais].sort(([a], [b]) => {
        if (a === "Europa") return -1;
        if (b === "Europa") return 1;
        return 0;
    });
}

/**
 * esSoloEliminacion — ¿esta liga es 100% de eliminación directa (no tiene
 * ninguna fase de tabla)? Genérico: mira los TIPOS de fase, no un id
 * puntual — hoy da true para Copa Argentina, pero también daría true para
 * cualquier otra liga futura con el mismo esquema (todas sus fases 'eliminacion').
 * @param {import("../repo.js").FasePublica[]} fases
 * @returns {boolean}
 */
export function esSoloEliminacion(fases) {
    return fases.length > 0 && fases.every((f) => f.tipo === "eliminacion");
}
