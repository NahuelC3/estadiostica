// ============================================================
//  pages/equipo.js — controlador de pages/equipo.html
//  URL: equipo.html?id=team:...
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";
import { etiquetaDiaMes } from "../lib/fecha.js";
import { initPestañas } from "../ui/pestanas.js";

const ORDINAL = (n) => `${n}º`;

// ------------------------------------------------------------
//  Helpers de resultado
// ------------------------------------------------------------
function resultadoEquipo(p, esLocal) {
    if (!p.score) return { texto: p.time, r: "" };
    const gf = esLocal ? p.score.home : p.score.away;
    const gc = esLocal ? p.score.away : p.score.home;
    const r = gf > gc ? "V" : gf < gc ? "D" : "E";
    return { texto: `${p.score.home} - ${p.score.away}`, r };
}

// ------------------------------------------------------------
//  Cabecera
// ------------------------------------------------------------
function cabecera(data) {
    const e = data.equipo;

    const meta = el("div", { class: "equipo-header__meta" },
        el("span", { class: `fi fi-${data.liga.bandera}`, "aria-hidden": "true" }),
        el("span", {}, data.liga.nombre),
        el("span", {}, "·"),
        el("span", {}, e.ciudad),
        el("span", {}, "·"),
        el("span", {}, `Fund. ${e.fundado}`));

    const identidad = el("div", { class: "equipo-header__identidad" },
        pintarEscudo(e, "xl"),
        el("div", {},
            el("h1", { class: "equipo-header__nombre" }, e.nombre),
            meta));

    const stats = el("div", { class: "equipo-header__stats" },
        el("div", { class: "equipo-header__stat" },
            el("span", { class: "valor" }, ORDINAL(data.posicion)),
            el("span", { class: "label" }, "Posición")),
        el("div", { class: "equipo-header__stat" },
            el("span", { class: "valor" }, String(data.resumen.pts)),
            el("span", { class: "label" }, "Puntos")),
        el("div", { class: "equipo-header__stat" },
            el("span", { class: "label" }, "Forma"),
            el("ul", { class: "forma-reciente forma-reciente--lg" },
                ...data.forma.map((r) => el("li", { class: "forma-reciente__item", dataset: { r } }, r)))));

    const prox = data.proximo
        ? el("a", {
            class: "equipo-header__proximo",
            href: `partido.html?id=${encodeURIComponent(data.proximo.id)}`,
        },
            el("span", { class: "etq" }, "Próximo"),
            el("span", {}, `${data.proximo.local.abbr} vs ${data.proximo.visitante.abbr} · ${etiquetaDiaMes(data.proximo.date)}`))
        : null;

    return el("div", { class: "equipo-header panel" }, identidad, stats, prox);
}

// ------------------------------------------------------------
//  Pestaña "Plantel"
// ------------------------------------------------------------
const GRUPOS = [
    ["arqueros", "Arqueros"],
    ["defensores", "Defensores"],
    ["mediocampistas", "Mediocampistas"],
    ["delanteros", "Delanteros"],
];

function panelPlantel(plantel) {
    const cont = el("div", { class: "plantel" });

    for (const [clave, titulo] of GRUPOS) {
        const jugadores = plantel[clave] || [];
        const grid = el("div", { class: "plantel__grid" },
            ...jugadores.map((j) => el("a", {
                class: "jugador-tarjeta",
                href: `jugador.html?id=${encodeURIComponent(j.id)}`,
            },
                el("span", { class: "jugador-tarjeta__dorsal" }, String(j.numero)),
                el("span", { class: "jugador-tarjeta__nombre" }, j.nombre,
                    el("span", { class: "pos" }, j.posicion)),
                el("span", { class: "jugador-tarjeta__metrica" },
                    el("span", { class: "valor" }, String(j.metrica.valor)),
                    el("span", { class: "unidad" }, `${j.metrica.label}`)))));

        cont.append(el("div", { class: "plantel__grupo" },
            el("div", { class: "plantel__grupo-titulo" }, titulo),
            grid));
    }
    return cont;
}

// ------------------------------------------------------------
//  Pestaña "Partidos" (calendario)
// ------------------------------------------------------------
function panelCalendario(calendario) {
    const cont = el("div", { class: "calendario" });

    for (const p of calendario) {
        const esLocal = p.condicion === "L";
        const rival = esLocal ? p.visitante : p.local;
        const { texto, r } = resultadoEquipo(p, esLocal);
        const pendiente = p.status === "scheduled";

        cont.append(el("a", {
            class: "calendario__fila",
            href: `partido.html?id=${encodeURIComponent(p.id)}`,
        },
            el("span", { class: "calendario__fecha" }, etiquetaDiaMes(p.date)),
            el("span", { class: "calendario__rival" },
                el("span", { class: "cl" }, p.condicion),
                pintarEscudo(rival, "sm"),
                el("span", { class: "nombre" }, rival.nombre)),
            el("span", {
                class: `calendario__resultado${pendiente ? " calendario__resultado--pendiente" : ""}`,
            }, pendiente ? p.time : texto),
            el("span", { class: "calendario__chip", dataset: { r } }, r || "·")));
    }
    return cont;
}

// ------------------------------------------------------------
//  Pestaña "Estadísticas" (desvío vs promedio de la liga)
// ------------------------------------------------------------
function panelDesvio(desvio) {
    const filas = desvio.map((d) => {
        const ratio = d.promedio ? d.valor / d.promedio : 1;
        const sobre = d.valor >= d.promedio;
        const magnitud = Math.min(1, Math.abs(ratio - 1) / 0.5);   // 50% de desvío = barra llena

        const barra = el("span", {
            class: `barra-desvio barra-desvio--${sobre ? "sobre" : "bajo"}`,
        });
        barra.style.setProperty("--est-val", magnitud.toFixed(3));

        return el("div", { class: "desvio-fila" },
            el("span", { class: "desvio-fila__label" }, d.metrica),
            el("div", { class: "desvio-fila__pista" }, barra),
            el("span", { class: "desvio-fila__valor" }, String(d.valor)));
    });

    return el("div", { class: "grafico-desvio" },
        ...filas,
        el("div", { class: "grafico-desvio__leyenda" },
            el("span", { class: "ley-sobre" }, "Sobre el promedio de la liga"),
            el("span", { class: "ley-bajo" }, "Bajo el promedio")));
}

// ------------------------------------------------------------
//  Pestaña "Resumen"
// ------------------------------------------------------------
function panelResumen(data) {
    const ultimos = data.calendario
        .filter((p) => p.status === "finished")
        .slice(-5);

    return el("div", { class: "pila" },
        el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Últimos resultados"),
            panelCalendario(ultimos)),
        el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Rendimiento vs la liga"),
            panelDesvio(data.stats.desvio)));
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const id = paramUrl("id");

    if (!id) {
        mostrarError(cont, "Falta el equipo", "La URL debe incluir ?id=team:…");
        return;
    }

    const data = await repo.getTeam(id);
    if (!data) {
        mostrarError(cont, "Equipo no encontrado", `No hay ningún equipo con id “${id}”.`);
        return;
    }

    limpiar(cont);
    cont.append(cabecera(data));

    // -- Pestañas internas --
    const tabs = [
        ["resumen", "Resumen", () => panelResumen(data)],
        ["plantel", "Plantel", () => panelPlantel(data.plantel)],
        ["partidos", "Partidos", () => panelCalendario(data.calendario)],
        ["stats", "Estadísticas", () => panelDesvio(data.stats.desvio)],
    ];

    const tablist = el("div", { class: "pestanas", role: "tablist", "aria-label": "Secciones del equipo" });
    const panelesWrap = el("div", { class: "pila" });

    tabs.forEach(([clave, label, render], i) => {
        tablist.append(el("button", {
            class: "pestanas__tab",
            role: "tab",
            "aria-selected": String(i === 0),
            "aria-controls": `tab-${clave}`,
            dataset: { valor: clave },
        }, label));

        panelesWrap.append(el("div", {
            class: "pestanas-panel",
            id: `tab-${clave}`,
            role: "tabpanel",
            hidden: i === 0 ? null : "",
        }, render()));
    });

    cont.append(tablist, panelesWrap);
    initPestañas(tablist);
}

init();
