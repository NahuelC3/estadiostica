// ============================================================
//  ui/selector-fecha.js — el control  ‹  fecha  ›
// ------------------------------------------------------------
//  Los botones con data-paso="-1" / "1" mueven la fecha un día para
//  atrás / adelante. El componente actualiza su propio texto y avisa a
//  la página con onCambio(nuevaFechaIso).
// ============================================================

import { qs, qsa } from "../lib/dom.js";
import { etiquetaCorta, sumarDias } from "../lib/fecha.js";

/**
 * initSelectorFecha
 * @param {HTMLElement} root  contenedor .selector-fecha
 * @param {{ fecha: string, onCambio: (isoNueva: string) => void }} opciones
 * @returns {{ set: (iso: string) => void, get: () => string }}
 */
export function initSelectorFecha(root, { fecha, onCambio }) {
    if (!root) return { set() {}, get: () => fecha };

    let actual = fecha;
    const elDia = qs(".selector-fecha__dia", root);
    const elFecha = qs(".selector-fecha__fecha", root);

    function pintar() {
        const { dia, fecha: txt } = etiquetaCorta(actual);
        if (elDia) elDia.textContent = dia;
        if (elFecha) elFecha.textContent = txt;
    }

    function mover(paso) {
        actual = sumarDias(actual, paso);
        pintar();
        onCambio(actual);
    }

    for (const boton of qsa(".selector-fecha__nav", root)) {
        boton.addEventListener("click", () => mover(Number(boton.dataset.paso)));
    }

    pintar();

    return {
        set(iso) { actual = iso; pintar(); },
        get: () => actual,
    };
}
