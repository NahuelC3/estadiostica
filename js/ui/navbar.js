// ============================================================
//  ui/navbar.js — estado del navbar compartido + menú mobile
// ------------------------------------------------------------
//  Se auto-invoca en las 5 páginas (sólo hace falta el <script>).
//  Hace 3 cosas, sin tocar el controlador de cada página:
//
//   1. Menú mobile (<960px): inyecta dentro del <header class="navbar">
//      un botón hamburguesa + un panel descendente (fila de ancho
//      completo, NO overlay: empuja el contenido de la página). En
//      desktop el CSS lo esconde y manda el .navbar__nav de siempre.
//
//   2. Marca como activo (aria-current="page") el link de la sección
//      actual — MISMA lógica para el nav desktop y para el panel mobile
//      (los links del panel llevan el mismo data-nav).
//
//   3. Rellena el contador de "En vivo" (desktop y panel) y la lista
//      "Partidos de hoy" del panel, con una única llamada a repo.
// ============================================================

import { qsa, el } from "../lib/dom.js";
import * as repo from "../repo.js";

// Archivo de la URL → valor de data-nav a marcar activo. Las páginas de
// detalle (partido / equipo / jugador) no marcan ninguna.
const RUTA_A_NAV = {
    "": "fixture",
    "index.html": "fixture",
    "posiciones.html": "posiciones",
};

// Rutas relativas: desde pages/ hay que subir un nivel (igual criterio
// que js/lib/escudo.js).
const EN_PAGES = location.pathname.includes("/pages/");
const HREF_INICIO = EN_PAGES ? "../index.html" : "index.html";
const HREF_POSICIONES = EN_PAGES ? "posiciones.html?liga=arg-lpf" : "pages/posiciones.html?liga=arg-lpf";

// ------------------------------------------------------------
//  1. Menú mobile
// ------------------------------------------------------------

/** Lupa como SVG real (createElementNS: <svg> por innerHTML no renderiza). */
function svgLupa() {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.setAttribute("width", "15");
    svg.setAttribute("height", "15");
    svg.setAttribute("aria-hidden", "true");
    const c = document.createElementNS(NS, "circle");
    for (const [k, v] of Object.entries({ cx: 9, cy: 9, r: 6, fill: "none", stroke: "currentColor", "stroke-width": 2 })) {
        c.setAttribute(k, v);
    }
    const l = document.createElementNS(NS, "line");
    for (const [k, v] of Object.entries({ x1: 13.5, y1: 13.5, x2: 18, y2: 18, stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round" })) {
        l.setAttribute(k, v);
    }
    svg.append(c, l);
    return svg;
}

/** Una fila compacta de "Partidos de hoy". */
function filaPartido(p) {
    const enVivo = p.status === "live";

    const tick = el("span", {
        class: "navbar__panel-partido-tick" + (enVivo ? " navbar__panel-partido-tick--vivo" : ""),
        "aria-hidden": "true",
    });

    const centro = el("span", { class: "navbar__panel-partido-centro" },
        p.status === "scheduled" ? p.time : `${p.score.home}-${p.score.away}`,
        enVivo ? el("span", { class: "navbar__panel-partido-min" }, `${p.minute}'`) : null);

    return el("li", { class: "navbar__panel-partido" },
        tick,
        el("span", { class: "navbar__panel-partido-eq" }, p.local.abbr),
        centro,
        el("span", { class: "navbar__panel-partido-eq navbar__panel-partido-eq--visita" }, p.visitante.abbr));
}

/**
 * construirMenuMobile — arma botón + panel y los cuelga del <header>.
 * @param {HTMLElement} navbar  el <header class="navbar">
 * @returns {{cuenta: HTMLElement, lista: HTMLElement}} refs para llenar luego
 */
function construirMenuMobile(navbar) {
    // -- Botón hamburguesa (misma píldora angulada que los links) --
    const boton = el("button", {
        type: "button",
        class: "navbar__hamburguesa",
        "aria-label": "Abrir menú",
        "aria-expanded": "false",
        "aria-controls": "navbar-panel",
    }, el("span", { class: "navbar__hamburguesa-inner", "aria-hidden": "true" },
        el("span", {}), el("span", {}), el("span", {})));

    // -- Píldora "En vivo": verde sólido, con punto + contador real --
    const cuenta = el("span", { class: "navbar__nav-count", "aria-hidden": "true" }, "0");
    const linkVivo = el("a", {
        class: "navbar__panel-link navbar__panel-link--vivo",
        href: HREF_INICIO,
        dataset: { nav: "vivo" },
    }, el("span", { class: "navbar__nav-inner" },
        el("span", { class: "navbar__nav-dot", "aria-hidden": "true" }),
        "En vivo",
        cuenta));

    // -- Fixture / Posiciones: píldoras oscuras con flecha --
    const pill = (label, href, nav) => el("a", {
        class: "navbar__panel-link", href, dataset: { nav },
    }, el("span", { class: "navbar__nav-inner" }, label),
        el("span", { class: "navbar__panel-flecha", "aria-hidden": "true" }, "→"));

    // -- Buscador: barra completa (placeholder, sin handler, como el de desktop) --
    const buscar = el("div", { class: "navbar__panel-buscar" },
        svgLupa(),
        el("input", {
            type: "search",
            "aria-label": "Buscar equipo o jugador",
            placeholder: "Buscar equipo o jugador",
        }));

    const lista = el("ul", { class: "navbar__panel-partidos" });

    const panel = el("div", { class: "navbar__panel", id: "navbar-panel", hidden: "" },
        el("p", { class: "navbar__panel-label" }, "Navegación"),
        linkVivo,
        pill("Fixture", HREF_INICIO, "fixture"),
        pill("Posiciones", HREF_POSICIONES, "posiciones"),
        buscar,
        el("p", { class: "navbar__panel-label navbar__panel-label--partidos" }, "Partidos de hoy"),
        lista);

    // -- Toggle --
    function abrir(v) {
        panel.hidden = !v;
        boton.setAttribute("aria-expanded", String(v));
        boton.setAttribute("aria-label", v ? "Cerrar menú" : "Abrir menú");
    }
    boton.addEventListener("click", () => abrir(panel.hidden));
    // Al tocar cualquier link del panel, se cierra.
    panel.addEventListener("click", (e) => {
        if (e.target.closest("a")) abrir(false);
    });

    navbar.append(boton, panel);
    return { cuenta, lista };
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------

async function initNavbar() {
    // -- 1. Menú mobile (una sola vez) --
    const navbar = document.querySelector(".navbar");
    const refs = navbar && !navbar.querySelector(".navbar__hamburguesa")
        ? construirMenuMobile(navbar)
        : null;

    // -- 2. Link activo: nav desktop + panel mobile, mismo selector --
    const archivo = location.pathname.split("/").pop();
    const activo = RUTA_A_NAV[archivo];
    if (activo) {
        for (const link of qsa(`.navbar [data-nav="${activo}"]`)) {
            link.setAttribute("aria-current", "page");
        }
    }

    // -- 3. Partidos del día demo: contador "en vivo" + lista del panel --
    const contadorDesktop = document.querySelector(".navbar__nav-count");

    try {
        const fixture = await repo.getFixture({ date: repo.FECHA_DEMO });
        const partidos = fixture.grupos.flatMap((g) => g.partidos);
        const enVivo = partidos.filter((p) => p.status === "live").length;

        // contador (desktop)
        if (contadorDesktop) {
            contadorDesktop.textContent = String(enVivo);
            contadorDesktop.closest(".navbar__nav-link--vivo")?.toggleAttribute("data-cero", enVivo === 0);
        }

        // contador + 3 partidos (panel mobile)
        if (refs) {
            refs.cuenta.textContent = String(enVivo);
            refs.cuenta.closest(".navbar__panel-link--vivo")?.toggleAttribute("data-cero", enVivo === 0);

            const destacados = [...partidos]
                .sort((a, b) => (b.status === "live") - (a.status === "live"))
                .slice(0, 3);
            for (const p of destacados) refs.lista.append(filaPartido(p));
        }
    } catch {
        // Si los datos no cargan (p. ej. abierto por file://), quedan los
        // "0" del HTML y el panel sin lista de partidos.
    }
}

initNavbar();
