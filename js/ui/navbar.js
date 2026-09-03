// ============================================================
//  ui/navbar.js — estado del navbar compartido
// ------------------------------------------------------------
//  Hace 2 cosas, sin tocar el controlador de cada página:
//   1. Marca como activo (aria-current="page") el link de la sección
//      en la que estás, según el archivo de la URL.
//   2. Rellena el contador de "En vivo" con la cantidad real de partidos
//      en curso (sumando todas las competiciones).
//
//  Se auto-invoca: la página sólo necesita
//      <script type="module" src="…/js/ui/navbar.js"></script>
// ============================================================

import { qsa } from "../lib/dom.js";
import * as repo from "../repo.js";

// Archivo de la URL  →  valor de data-nav del link que hay que marcar activo.
// Las páginas de detalle (partido / equipo / jugador) no marcan ninguno:
// no estás "en" Fixture ni en Posiciones cuando mirás un partido.
const RUTA_A_NAV = {
    "": "fixture",
    "index.html": "fixture",
    "posiciones.html": "posiciones",
};

async function initNavbar() {
    // -- 1. Link activo --
    const archivo = location.pathname.split("/").pop();
    const activo = RUTA_A_NAV[archivo];
    if (activo) {
        for (const link of qsa(`.navbar__nav-link[data-nav="${activo}"]`)) {
            link.setAttribute("aria-current", "page");
        }
    }

    // -- 2. Contador de partidos en vivo --
    const contador = document.querySelector(".navbar__nav-count");
    if (!contador) return;

    try {
        const fixture = await repo.getFixture({ date: repo.FECHA_DEMO, status: "live" });
        const enVivo = fixture.grupos.reduce((total, g) => total + g.partidos.length, 0);

        contador.textContent = String(enVivo);
        // Si no hay ninguno, atenúa la píldora "En vivo" (data-cero en el <a>).
        contador.closest(".navbar__nav-link--vivo")?.toggleAttribute("data-cero", enVivo === 0);
    } catch {
        // Si los datos no cargan (p. ej. abierto por file://), queda el "0" del HTML.
    }
}

initNavbar();
