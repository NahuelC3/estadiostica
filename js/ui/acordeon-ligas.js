// ============================================================
//  ui/acordeon-ligas.js — acordeón de países/torneos del sidebar
// ------------------------------------------------------------
//  Lo usan index.html, posiciones.html y eliminacion.html: misma lista,
//  mismo agrupamiento (Europa primero, ver lib/ligas.js), mismo criterio
//  de a qué pantalla lleva cada liga (posiciones.html normalmente,
//  eliminacion.html directo cuando la liga es 100% de eliminación — así
//  no hay que pasar por el aviso intermedio de "esta liga no tiene tabla").
// ============================================================

import * as repo from "../repo.js";
import { el, limpiar } from "../lib/dom.js";
import { initAcordeon } from "./acordeon.js";
import { agruparPorPais, esSoloEliminacion } from "../lib/ligas.js";

/**
 * construirAcordeonLigas
 * @param {HTMLElement} contenedor  el <div class="acordeon">
 * @param {Object} [opciones]
 * @param {string|null} [opciones.slugActual]  liga a resaltar/abrir (null: nada resaltado)
 * @param {boolean} [opciones.marcarActual]  si false, no pone aria-current aunque
 *   coincida el slug (index.html: abre "Argentina" por defecto, pero no está
 *   parado en ninguna liga en particular)
 * @param {string} [opciones.prefijo]  "pages/" desde index.html, "" desde pages/*.html
 */
export async function construirAcordeonLigas(contenedor, {
    slugActual = null,
    marcarActual = true,
    prefijo = "",
} = {}) {
    if (!contenedor) return;
    limpiar(contenedor);

    const ligas = await repo.getLeagues();
    const fasesPorLiga = new Map(
        await Promise.all(ligas.map(async (l) => [l.id, await repo.getFasesDeLiga(l.id)])),
    );
    const gruposPais = agruparPorPais(ligas);

    let n = 0;
    for (const [pais, lasLigas] of gruposPais) {
        n++;
        const tieneActual = lasLigas.some((l) => l.slug === slugActual);
        const abierto = slugActual ? tieneActual : n === 1;
        const idCuerpo = `pais-${lasLigas[0].bandera}`;

        const cabecera = el("button", {
            class: "acordeon__cabecera",
            "aria-expanded": String(abierto),
            "aria-controls": idCuerpo,
        },
            el("span", { class: `fi fi-${lasLigas[0].bandera}`, "aria-hidden": "true" }),
            el("span", {}, pais));

        const cuerpo = el("div", { class: "acordeon__cuerpo", id: idCuerpo },
            ...lasLigas.map((liga) => {
                const fases = fasesPorLiga.get(liga.id) ?? [];
                const href = esSoloEliminacion(fases)
                    ? `${prefijo}eliminacion.html?liga=${liga.slug}&fase=${fases[0].key}`
                    : `${prefijo}posiciones.html?liga=${liga.slug}`;
                return el("a", {
                    class: "acordeon__enlace",
                    href,
                    "aria-current": (marcarActual && liga.slug === slugActual) ? "page" : null,
                }, liga.nombre);
            }));

        contenedor.append(el("div", { class: "acordeon__item" }, cabecera, cuerpo));
    }

    initAcordeon(contenedor, { unico: true });
}
