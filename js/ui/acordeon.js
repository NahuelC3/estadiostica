// ============================================================
//  ui/acordeon.js — comportamiento del acordeón (abrir / cerrar)
// ------------------------------------------------------------
//  No sabe NADA de datos: sólo togglea `aria-expanded` en la cabecera y
//  el atributo `hidden` en el cuerpo que esa cabecera controla
//  (vía aria-controls). El estilo vive en components/_acordeon.scss.
// ============================================================

import { qsa } from "../lib/dom.js";

/**
 * initAcordeon — activa todos los ítems de un acordeón.
 * @param {HTMLElement} root  contenedor .acordeon
 * @param {{ unico?: boolean }} [opciones]  unico:true = sólo uno abierto a la vez
 */
export function initAcordeon(root, { unico = false } = {}) {
    if (!root) return;
    const cabeceras = qsa(".acordeon__cabecera", root);

    for (const boton of cabeceras) {
        const cuerpo = document.getElementById(boton.getAttribute("aria-controls"));
        if (!cuerpo) continue;

        // Estado inicial coherente: si el botón no dice nada, arranca cerrado.
        const abierto = boton.getAttribute("aria-expanded") === "true";
        boton.setAttribute("aria-expanded", String(abierto));
        cuerpo.hidden = !abierto;

        boton.addEventListener("click", () => {
            const yaAbierto = boton.getAttribute("aria-expanded") === "true";

            if (unico && !yaAbierto) {
                // Cierra los demás antes de abrir éste.
                for (const otro of cabeceras) {
                    if (otro === boton) continue;
                    otro.setAttribute("aria-expanded", "false");
                    const c = document.getElementById(otro.getAttribute("aria-controls"));
                    if (c) c.hidden = true;
                }
            }

            boton.setAttribute("aria-expanded", String(!yaAbierto));
            cuerpo.hidden = yaAbierto;
        });
    }
}
