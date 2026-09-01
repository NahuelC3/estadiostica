// ============================================================
//  pages/partido.js — controlador de pages/partido.html
//  URL: partido.html?id=match:...
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";
import { etiquetaLarga } from "../lib/fecha.js";

// Métricas comparadas (las 10 pedidas + xG y atajadas de yapa).
const METRICAS = [
    { key: "posesion", label: "Posesión", sufijo: "%" },
    { key: "remates", label: "Remates" },
    { key: "rematesAlArco", label: "Remates al arco" },
    { key: "corners", label: "Córners" },
    { key: "faltas", label: "Faltas" },
    { key: "amarillas", label: "Amarillas" },
    { key: "rojas", label: "Rojas" },
    { key: "pases", label: "Pases" },
    { key: "precisionPases", label: "Precisión pases", sufijo: "%" },
    { key: "offsides", label: "Offsides" },
    { key: "xg", label: "xG" },
    { key: "atajadas", label: "Atajadas" },
];

// ------------------------------------------------------------
//  Piezas
// ------------------------------------------------------------
function escudoLink(equipo, tam) {
    return el("a", {
        href: `equipo.html?id=${encodeURIComponent(equipo.id)}`,
        "aria-label": equipo.nombre,
    }, pintarEscudo(equipo, tam));
}

function marcador(m) {
    const vivo = m.status === "live";
    const prog = m.status === "scheduled";

    const numeros = el("div", { class: "marcador__numeros" },
        el("span", {}, prog ? "–" : String(m.score.home)),
        el("span", { class: "marcador__sep" }, "/"),
        el("span", {}, prog ? "–" : String(m.score.away)));

    const estadoTxt = vivo ? `${m.minute}'` : prog ? `${m.time} · programado` : "Finalizado";
    const estado = el("span", {
        class: `marcador__estado${vivo ? " marcador__estado--vivo" : ""}`,
    }, estadoTxt);

    const cifras = el("div", { class: "marcador__cifras" },
        vivo ? el("span", { class: "badge-vivo" }, el("span", {}, "EN VIVO")) : null,
        numeros,
        estado);

    return el("div", { class: "marcador panel" },
        el("div", { class: "marcador__equipo" },
            escudoLink(m.local, "lg"),
            el("span", { class: "marcador__nombre" }, m.local.nombre)),
        cifras,
        el("div", { class: "marcador__equipo" },
            escudoLink(m.visitante, "lg"),
            el("span", { class: "marcador__nombre" }, m.visitante.nombre)));
}

function cancha(m) {
    const d = m.detail;

    const campo = el("div", { class: "cancha" },
        el("div", { class: "cancha__area cancha__area--arriba" }),
        el("div", { class: "cancha__area cancha__area--abajo" }));

    const ficha = (slot, esVisita) => {
        const f = el("div", {
            class: `cancha__jugador${esVisita ? " cancha__jugador--visita" : ""}`,
        },
            el("span", { class: "cancha__dorsal" }, String(slot.number)),
            el("span", { class: "cancha__nombre" }, slot.nombre.split(" ").at(-1)));
        // El JS posiciona la ficha con propiedades CSS reales (left/top en %).
        f.style.left = `${slot.x}%`;
        f.style.top = `${slot.y}%`;
        return f;
    };

    d.lineups.home.forEach((s) => campo.append(ficha(s, false)));
    d.lineups.away.forEach((s) => campo.append(ficha(s, true)));

    const formaciones = el("div", { class: "cancha-formaciones" },
        el("span", {}, el("strong", {}, m.local.abbr), ` ${d.formations.home}`),
        el("span", {}, `${d.formations.away} `, el("strong", {}, m.visitante.abbr)));

    return el("div", { class: "panel" },
        el("h3", { class: "panel__titulo" }, "Alineaciones"),
        formaciones,
        campo);
}

function statsComparadas(m) {
    const s = m.detail.stats;
    const cont = el("div", { class: "stats-comparadas" });

    for (const met of METRICAS) {
        const a = s.home[met.key] ?? 0;
        const b = s.away[met.key] ?? 0;
        const total = a + b || 1;
        const pctA = Math.round((a / total) * 100);

        const barraA = el("span", { class: "stat-barra" });
        const barraB = el("span", { class: "stat-barra" });
        // --est-pct es una de las DOS únicas custom properties del proyecto.
        barraA.style.setProperty("--est-pct", pctA);
        barraB.style.setProperty("--est-pct", 100 - pctA);

        cont.append(el("div", { class: "stat-fila" },
            el("span", { class: "stat-fila__valor stat-fila__valor--local" }, `${a}${met.sufijo || ""}`),
            el("div", { class: "stat-fila__centro" },
                el("span", { class: "stat-fila__etiqueta" }, met.label),
                el("div", { class: "stat-fila__pista stat-fila__pista--izq" }, barraA),
                el("div", { class: "stat-fila__pista stat-fila__pista--der" }, barraB)),
            el("span", { class: "stat-fila__valor stat-fila__valor--visita" }, `${b}${met.sufijo || ""}`)));
    }

    return el("div", { class: "panel" },
        el("h3", { class: "panel__titulo" }, "Estadísticas comparadas"),
        cont);
}

function ranking(m) {
    const cont = el("div", { class: "ranking" });

    m.rankingJugadores.forEach((r, i) => {
        const spark = el("div", { class: "ranking__spark" });
        r.spark.forEach((h) => {
            const barrita = el("span", {});
            barrita.style.height = `${Math.round(h * 100)}%`;
            spark.append(barrita);
        });

        cont.append(el("div", { class: "ranking__fila" },
            el("span", { class: "ranking__pos" }, String(i + 1)),
            el("a", {
                class: "ranking__jugador",
                href: `jugador.html?id=${encodeURIComponent(r.playerId)}`,
            },
                el("span", { class: "ranking__nombre" }, r.nombre),
                el("span", { class: "ranking__equipo" }, r.equipo)),
            el("span", { class: "ranking__valor" }, r.valor.toFixed(1)),
            spark));
    });

    return el("div", { class: "panel" },
        el("h3", { class: "panel__titulo" }, "Ranking de jugadores (nota del partido)"),
        cont);
}

function goles(m) {
    // Mapa playerId -> nombre a partir de las alineaciones.
    const nombres = {};
    for (const s of [...m.detail.lineups.home, ...m.detail.lineups.away]) nombres[s.playerId] = s.nombre;

    const lista = m.detail.events
        .filter((e) => e.tipo === "gol")
        .map((e) => el("li", {},
            el("span", { class: "gol-min" }, `${e.minuto}'`),
            ` ${nombres[e.playerId] || "—"} (${e.equipo === "home" ? m.local.abbr : m.visitante.abbr})`));

    if (!lista.length) return null;
    return el("div", { class: "panel" },
        el("h3", { class: "panel__titulo" }, "Goles"),
        el("ul", { class: "lista-goles" }, ...lista));
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const id = paramUrl("id");

    if (!id) {
        mostrarError(cont, "Falta el partido", "La URL debe incluir ?id=match:…");
        return;
    }

    const m = await repo.getMatch(id);
    if (!m) {
        mostrarError(cont, "Partido no encontrado", `No hay ningún partido con id “${id}”.`);
        return;
    }

    limpiar(cont);
    cont.append(el("div", { class: "encabezado-seccion" },
        el("span", {}, `${m.liga.nombre} · Fecha ${m.matchday} · ${etiquetaLarga(m.date)}`)));
    cont.append(marcador(m));

    if (!m.detail) {
        cont.append(el("div", { class: "panel" },
            el("h3", { class: "panel__titulo" }, "Detalle no disponible"),
            el("p", { class: "apagado" },
                "Este partido todavía no tiene alineaciones ni estadísticas cargadas.")));
        return;
    }

    cont.append(cancha(m));
    cont.append(statsComparadas(m));
    const g = goles(m);
    if (g) cont.append(g);
    cont.append(ranking(m));
}

init();
