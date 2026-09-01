// ============================================================
//  ui/pestanas.js — pestañas accesibles (patrón WAI-ARIA "tabs")
// ------------------------------------------------------------
//  Sirve para dos cosas:
//   1. Pestañas con panel (equipo/jugador): cada tab tiene aria-controls
//      apuntando a un .pestanas-panel; al cambiar, muestra/oculta paneles.
//   2. Filtro sin panel (fixture Todos/En vivo/Finalizados): no hay
//      aria-controls; sólo se llama onCambio(valor) y la página filtra.
// ============================================================

import { qsa } from "../lib/dom.js";

/**
 * initPestañas — activa un grupo de pestañas.
 * @param {HTMLElement} root  contenedor con role="tablist"
 * @param {{ onCambio?: (valor: string, tab: HTMLElement) => void }} [opciones]
 * @returns {{ seleccionar: (valor: string) => void }}
 */
export function initPestañas(root, { onCambio } = {}) {
    if (!root) return { seleccionar() {} };
    const tabs = qsa('[role="tab"]', root);

    function activar(tab, avisar = true) {
        for (const t of tabs) {
            const activo = t === tab;
            t.setAttribute("aria-selected", String(activo));
            t.tabIndex = activo ? 0 : -1;                 // roving tabindex

            const panel = t.getAttribute("aria-controls")
                ? document.getElementById(t.getAttribute("aria-controls"))
                : null;
            if (panel) panel.hidden = !activo;
        }
        if (avisar && onCambio) {
            onCambio(tab.dataset.valor ?? tab.id ?? "", tab);
        }
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => activar(tab));

        // Navegación con flechas ← → (recomendación WAI-ARIA).
        tab.addEventListener("keydown", (e) => {
            let objetivo = null;
            if (e.key === "ArrowRight") objetivo = tabs[(i + 1) % tabs.length];
            else if (e.key === "ArrowLeft") objetivo = tabs[(i - 1 + tabs.length) % tabs.length];
            else if (e.key === "Home") objetivo = tabs[0];
            else if (e.key === "End") objetivo = tabs[tabs.length - 1];
            if (objetivo) {
                e.preventDefault();
                objetivo.focus();
                activar(objetivo);
            }
        });
    });

    // Estado inicial: el que ya tenga aria-selected="true", o el primero.
    const inicial = tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0];
    if (inicial) activar(inicial, false);

    return {
        seleccionar(valor) {
            const t = tabs.find((x) => (x.dataset.valor ?? x.id) === valor);
            if (t) activar(t);
        },
    };
}
