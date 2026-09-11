// ============================================================
//  pages/jugador.js — controlador de pages/jugador.html
//  URL: jugador.html?id=player:...
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { initPestañas } from "../ui/pestanas.js";

const PIE = { derecho: "Pie derecho", izquierdo: "Pie izquierdo", ambidiestro: "Ambidiestro" };
const POS = { GK: "Arquero", DEF: "Defensor", MID: "Mediocampista", FWD: "Delantero" };

// ------------------------------------------------------------
//  Cabecera
// ------------------------------------------------------------
function cabecera(data) {
    const j = data.jugador;

    const retrato = el("div", { class: "jugador-retrato" },
        el("span", { class: "jugador-retrato__numero" }, String(j.numero)));

    const bio = el("div", { class: "jugador-header__bio" },
        el("span", {}, POS[j.posicion] || j.posicion),
        el("span", {}, PIE[j.pieHabil] || j.pieHabil),
        el("span", {}, `${j.edad} años`),
        el("span", {},
            el("span", { class: `fi fi-${j.nacionalidad}`, "aria-hidden": "true" }),
            j.nacionalidad.toUpperCase()),
        el("span", {}, `${j.altura} cm`),
        data.equipo
            ? el("a", { class: "enlace", href: `equipo.html?id=${encodeURIComponent(data.equipo.id)}` }, data.equipo.nombre)
            : null);

    const stats = el("div", { class: "jugador-header__stats" },
        ...data.temporada.destacados.map((d) => el("div", { class: "jugador-header__stat" },
            el("span", { class: "valor" }, String(d.valor)),
            el("span", { class: "label" }, d.label),
            el("span", { class: "rank" }, `${d.ranking}º de la liga`))));

    return el("div", { class: "jugador-header panel" },
        retrato,
        el("div", {},
            el("h1", { class: "jugador-header__nombre" }, j.nombre),
            bio,
            stats));
}

// ------------------------------------------------------------
//  Gráfico de desvío (compartido: temporada del jugador)
// ------------------------------------------------------------
function graficoDesvio(items, unidadLabel) {
    const filas = items.map((d) => {
        const prom = d.promedioPosicion ?? d.promedio ?? 0;
        const ratio = prom ? d.valor / prom : 1;
        const sobre = d.valor >= prom;
        const magnitud = Math.min(1, Math.abs(ratio - 1) / 0.6);

        const barra = el("span", { class: `barra-desvio barra-desvio--${sobre ? "sobre" : "bajo"}` });
        barra.style.setProperty("--est-val", magnitud.toFixed(3));

        return el("div", { class: "desvio-fila" },
            el("span", { class: "desvio-fila__label" }, d.metrica),
            el("div", { class: "desvio-fila__pista" }, barra),
            el("span", { class: "desvio-fila__valor" }, String(d.valor)));
    });

    return el("div", { class: "grafico-desvio" },
        ...filas,
        el("div", { class: "grafico-desvio__leyenda" },
            el("span", { class: "ley-sobre" }, `Sobre el promedio ${unidadLabel}`),
            el("span", { class: "ley-bajo" }, "Bajo el promedio")));
}

// ------------------------------------------------------------
//  Pestaña "Temporada"
// ------------------------------------------------------------
function panelTemporada(data) {
    const destacadas = el("div", { class: "stats-destacadas" },
        ...data.temporada.destacados.map((d) => el("div", { class: "stat-destacada" },
            el("span", { class: "stat-destacada__valor" }, String(d.valor)),
            el("span", { class: "stat-destacada__label" }, d.label),
            el("span", { class: "stat-destacada__ranking" }, `${d.ranking}º de la liga`))));

    return el("div", { class: "pila" },
        destacadas,
        el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Desvío vs promedio de su posición (por partido)"),
            graficoDesvio(data.temporada.desglose, "de su puesto")));
}

// ------------------------------------------------------------
//  Pestaña "Partidos" (partido a partido)
// ------------------------------------------------------------
function panelPartidos(porPartido) {
    const grafico = el("div", { class: "pap__grafico" });

    for (const p of porPartido) {
        const altura = Math.min(100, 15 + p.goles * 35 + p.asistencias * 22 + p.rematesAlArco * 6);
        let tipo = "";
        if (p.goles && p.asistencias) tipo = "gol-asis";
        else if (p.goles) tipo = "gol";
        else if (p.asistencias) tipo = "asis";

        const barra = el("span", {
            class: "pap__barra",
            dataset: tipo ? { tipo } : {},
            title: `${p.condicion} vs ${p.rival} · ${p.goles}G ${p.asistencias}A`,
        });
        barra.style.height = `${altura}%`;
        grafico.append(barra);
    }

    return el("div", { class: "pap" },
        grafico,
        el("div", { class: "pap__leyenda" },
            el("span", { class: "ley-gol" }, "Gol"),
            el("span", { class: "ley-asis" }, "Asistencia"),
            el("span", { class: "ley-nada" }, "Sin aporte")));
}

// ------------------------------------------------------------
//  Pestaña "Mapa de tiros"
// ------------------------------------------------------------
function panelMapaTiros(tiros) {
    const campo = el("div", { class: "mapa-tiros" });
    for (const t of tiros) {
        const punto = el("span", { class: "mapa-tiros__tiro", dataset: { res: t.resultado } });
        punto.style.left = `${t.x}%`;
        punto.style.top = `${t.y}%`;
        campo.append(punto);
    }

    return el("div", {},
        campo,
        el("div", { class: "mapa-tiros__leyenda" },
            el("span", { class: "ley-gol" }, "Gol"),
            el("span", { class: "ley-alarco" }, "Al arco"),
            el("span", { class: "ley-desviado" }, "Desviado")));
}

// ------------------------------------------------------------
//  Pestaña "Trayectoria"
// ------------------------------------------------------------
function panelTrayectoria(trayectoria) {
    const filas = trayectoria.map((t) => el("tr", {},
        el("td", {}, t.año),
        el("td", {}, t.club),
        el("td", { class: "num" }, String(t.pj)),
        el("td", { class: "num" }, String(t.goles)),
        el("td", { class: "num" }, String(t.asistencias))));

    return el("table", { class: "tabla-simple" },
        el("thead", {}, el("tr", {},
            el("th", {}, "Año"),
            el("th", {}, "Club"),
            el("th", { class: "num" }, "PJ"),
            el("th", { class: "num" }, "G"),
            el("th", { class: "num" }, "A"))),
        el("tbody", {}, ...filas));
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const id = paramUrl("id");

    if (!id) {
        mostrarError(cont, "Falta el jugador", "La URL debe incluir ?id=player:…");
        return;
    }

    const data = await repo.getPlayer(id);
    if (!data) {
        mostrarError(cont, "Jugador no encontrado", `No hay ningún jugador con id “${id}”.`);
        return;
    }

    limpiar(cont);
    cont.append(cabecera(data));

    const tabs = [
        ["temporada", "Temporada", () => panelTemporada(data)],
        ["partidos", "Partidos", () => el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Partido a partido"),
            panelPartidos(data.porPartido))],
        ["tiros", "Mapa de tiros", () => el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Mapa de tiros"),
            panelMapaTiros(data.mapaTiros))],
        ["trayectoria", "Trayectoria", () => el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Trayectoria"),
            panelTrayectoria(data.trayectoria))],
    ];

    const tablist = el("div", { class: "pestanas", role: "tablist", "aria-label": "Secciones del jugador" });
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
        // <h2> de la sección (sr-only: la pestaña ya es la etiqueta visible).
        // Evita el salto h1 → h3 hacia los .panel__titulo internos.
        }, el("h2", { class: "sr-only" }, label), render()));
    });

    cont.append(tablist, panelesWrap);
    initPestañas(tablist);
}

init();
