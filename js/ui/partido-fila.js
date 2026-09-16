// ============================================================
//  ui/partido-fila.js — fila de partido reusable (.partido-fila)
// ------------------------------------------------------------
//  La usa el fixture de inicio.js (todas las ligas del día) y el bloque
//  "Fixture de la liga" de posiciones.js (una sola liga). El único dato
//  que varía entre esos dos contextos es a qué nivel de carpeta está la
//  página que la llama, por eso el `prefijo` del link a partido.html.
// ============================================================

import { el } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";

/**
 * filaPartido — una fila de fixture (hora/estado, equipos, resultado).
 * @param {import("../repo.js").TarjetaPartido} p
 * @param {{ prefijo?: string }} [opciones]  "pages/" desde index.html, "" desde pages/*.html
 * @returns {HTMLAnchorElement}
 */
export function filaPartido(p, { prefijo = "" } = {}) {
    const href = `${prefijo}partido.html?id=${encodeURIComponent(p.id)}`;
    const esVivo = p.status === "live";
    const esProg = p.status === "scheduled";

    // Columna 1: hora (programado), "FT" (finalizado) o minuto en rojo (en vivo).
    const hora = esVivo
        ? el("span", { class: "partido-fila__min" }, `${p.minute}'`)
        : el("span", { class: "partido-fila__hora" }, esProg ? p.time : "FT");

    const local = el("span", { class: "partido-fila__equipo" },
        pintarEscudo(p.local, "sm"),
        el("span", {}, p.local.nombre));

    const visita = el("span", { class: "partido-fila__equipo partido-fila__equipo--visita" },
        pintarEscudo(p.visitante, "sm"),
        el("span", {}, p.visitante.nombre));

    // Columna 3: resultado. En vivo → chip con fondo sesgado verde.
    let resultado;
    if (esProg) {
        resultado = el("span", { class: "partido-fila__resultado partido-fila__resultado--pendiente" }, "vs");
    } else {
        const txt = `${p.score.home} - ${p.score.away}`;
        resultado = esVivo
            ? el("span", { class: "chip-vivo" }, el("span", {}, txt))
            : el("span", { class: "partido-fila__resultado" }, txt);
    }

    return el("a", { class: "partido-fila", href }, hora, local, resultado, visita);
}
