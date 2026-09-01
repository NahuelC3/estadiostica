// ============================================================
//  pages/posiciones.js — controlador de pages/posiciones.html
//  URL: posiciones.html?liga=arg-lpf
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";

const COLUMNAS = ["PJ", "PG", "PE", "PP", "GF", "GC", "DIF", "PTS"];

// -- fila de forma (V/E/D) --------------------------------
function formaReciente(forma) {
    return el("ul", { class: "forma-reciente", "aria-label": "Últimos 5" },
        ...forma.map((r) => el("li", { class: "forma-reciente__item", dataset: { r } }, r)));
}

// -- una fila de equipo ---------------------------------
function filaEquipo(fila, color) {
    const dif = `${fila.dif > 0 ? "+" : ""}${fila.dif}`;
    const celdaDif = el("td", { class: fila.dif < 0 ? "col-dif col-dif--neg" : "col-dif" }, dif);

    const numeroPts = el("span", {
        class: `barra-puntos${fila.pos === 1 ? " barra-puntos--lider" : ""}`,
    }, String(fila.pts));

    const celdaPts = el("td", { class: "col-pts" },
        numeroPts,
        fila.ajuste !== 0 ? el("sup", { class: "ajuste-pts" }, `(${fila.ajuste})`) : null);

    const equipoCell = el("td", { class: "col-equipo" },
        el("a", { href: `equipo.html?id=${encodeURIComponent(fila.equipo.id)}` },
            pintarEscudo(fila.equipo, "sm"),
            el("span", {}, fila.equipo.nombre)));

    const tr = el("tr", { dataset: { zona: "1" } },
        el("td", { class: "col-pos" }, String(fila.pos)),
        equipoCell,
        el("td", {}, String(fila.pj)),
        el("td", {}, String(fila.pg)),
        el("td", {}, String(fila.pe)),
        el("td", {}, String(fila.pp)),
        el("td", {}, String(fila.gf)),
        el("td", {}, String(fila.gc)),
        celdaDif,
        celdaPts,
        el("td", { class: "col-forma" }, formaReciente(fila.forma)));

    // Guía de color de zona en la 1ª celda (propiedad CSS real, sin custom props).
    tr.firstChild.style.boxShadow = `inset 3px 0 0 ${color}`;
    return tr;
}

// -- fila separadora de zona ---------------------------
function filaZona(zona, totalColumnas) {
    const tick = el("span", { class: "zona-encabezado__tick" });
    tick.style.background = zona.color;

    const inner = el("div", { class: "zona-encabezado__inner" }, tick, zona.label);
    inner.style.borderBottomColor = zona.color;

    return el("tr", { class: "zona-encabezado" },
        el("td", { colspan: String(totalColumnas) }, inner));
}

// -- tabla completa -----------------------------------
function tabla(data) {
    const totalCols = 3 + COLUMNAS.length;   // pos + equipo + métricas + forma

    const thead = el("thead", {},
        el("tr", {},
            el("th", { class: "col-pos" }, "#"),
            el("th", { class: "col-equipo" }, "Equipo"),
            ...COLUMNAS.map((c) => el("th", {}, c)),
            el("th", { class: "col-forma" }, "Forma")));

    const tbody = el("tbody", {});
    for (const zona of data.zonas) {
        tbody.append(filaZona(zona, totalCols));
        for (const fila of zona.filas) tbody.append(filaEquipo(fila, zona.color));
    }

    return el("div", { class: "tabla-scroll" },
        el("table", { class: "tabla-posiciones" }, thead, tbody));
}

// -- panel lateral: movimientos + líderes --------------
function lateral(data) {
    const movs = el("div", { class: "movimientos" },
        ...data.movimientos.map((m) => {
            const sube = m.delta > 0;
            return el("div", { class: "movimientos__fila" },
                el("span", {}, m.equipo.nombre),
                el("span", {
                    class: `movimientos__delta movimientos__delta--${sube ? "sube" : "baja"}`,
                }, `${sube ? "+" : ""}${m.delta}`));
        }));

    const lideresItems = [
        ["Goleador", data.lideres.goleador],
        ["Asistencias", data.lideres.asistencias],
        ["Mejor nota", data.lideres.figura],
    ].map(([label, d]) => el("div", { class: "lideres__item" },
        el("span", { class: "lideres__label" }, label),
        el("span", { class: "lideres__nombre" }, `${d.jugador} · ${d.equipo}`),
        el("span", { class: "lideres__valor" }, String(d.valor))));

    return el("div", { class: "dos-columnas__lateral" },
        el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Movimientos de la fecha"),
            data.movimientos.length ? movs : el("p", { class: "apagado" }, "Sin cambios de posición.")),
        el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Líderes del torneo"),
            el("div", { class: "lideres" }, ...lideresItems)));
}

// -- selector rápido de liga --------------------------
async function selectorLigas(slugActual) {
    const ligas = await repo.getLeagues();
    return el("div", { class: "pestanas", role: "tablist", "aria-label": "Elegir liga" },
        ...ligas.map((L) => el("a", {
            class: "pestanas__tab",
            role: "tab",
            href: `posiciones.html?liga=${L.slug}`,
            "aria-selected": String(L.slug === slugActual),
        }, L.nombre)));
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const slug = paramUrl("liga") || "arg-lpf";

    const data = await repo.getStandings(`league:${slug}`);
    if (!data) {
        mostrarError(cont, "Liga no encontrada", `No existe la liga “${slug}”.`);
        return;
    }

    limpiar(cont);
    cont.append(el("div", { class: "encabezado-seccion" },
        el("span", { class: `fi fi-${data.liga.bandera}`, "aria-hidden": "true" }),
        el("span", {}, `${data.liga.nombre} · Tabla de posiciones`)));

    cont.append(await selectorLigas(slug));

    cont.append(el("div", { class: "dos-columnas" },
        tabla(data),
        lateral(data)));
}

init();
