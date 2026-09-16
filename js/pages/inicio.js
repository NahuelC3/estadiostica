// ============================================================
//  pages/inicio.js — controlador de index.html (Fixture)
// ------------------------------------------------------------
//  Arma: la sidebar (destacados + acordeón de países) y el panel
//  principal (selector de fecha + filtro + partidos agrupados por torneo).
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, guardFileProtocol } from "../lib/dom.js";
import { etiquetaLarga } from "../lib/fecha.js";
import { initAcordeon } from "../ui/acordeon.js";
import { initPestañas } from "../ui/pestanas.js";
import { initSelectorFecha } from "../ui/selector-fecha.js";
import { filaPartido } from "../ui/partido-fila.js";

// -- Estado de la pantalla ---------------------------------
let fecha = repo.FECHA_DEMO;
let estado = "all";   // all | live | finished

// ------------------------------------------------------------
//  Render de los grupos por torneo
// ------------------------------------------------------------
function renderFixture(fixture) {
    const cont = qs("#fixture");
    limpiar(cont);

    if (!fixture.grupos.length) {
        cont.append(el("div", { class: "partido-lista__vacio" },
            "No hay partidos para esta fecha con el filtro elegido."));
        return;
    }

    for (const grupo of fixture.grupos) {
        // <h2>: cada torneo del fixture. El <h1> de la página lo agrega init().
        const encabezado = el("h2", { class: "partido-grupo__encabezado" },
            el("span", { class: `fi fi-${grupo.liga.bandera}`, "aria-hidden": "true" }),
            el("span", {}, grupo.liga.nombre));

        const filas = el("div", { class: "partido-grupo__filas" },
            ...grupo.partidos.map((p) => filaPartido(p, { prefijo: "pages/" })));

        cont.append(el("div", { class: "partido-grupo" }, encabezado, filas));
    }
}

// ------------------------------------------------------------
//  Sidebar: destacados + acordeón de países
// ------------------------------------------------------------
async function construirSidebar() {
    const ligas = await repo.getLeagues();

    // -- Destacados: goleador de cada liga --
    // Una liga sólo de eliminación directa (Copa Argentina) no tiene tabla:
    // getStandings devuelve null, y esa liga no aporta destacado acá.
    const destacados = qs("#destacados");
    for (const liga of ligas) {
        const st = await repo.getStandings(liga.id);
        const g = st?.lideres?.goleador;
        if (!g) continue;
        destacados.append(
            el("div", { class: "destacados__item" },
                el("span", { class: `fi fi-${liga.bandera}`, "aria-hidden": "true" }),
                el("span", {}, `${g.jugador} · ${g.equipo}`),
                el("span", { class: "destacados__dato" }, `${g.valor}`)),
        );
    }

    // -- Acordeón: un ítem por país --
    const acc = qs("#acordeon-ligas");
    const porPais = new Map();
    for (const liga of ligas) {
        if (!porPais.has(liga.pais)) porPais.set(liga.pais, []);
        porPais.get(liga.pais).push(liga);
    }

    let n = 0;
    for (const [pais, lasLigas] of porPais) {
        n++;
        const idCuerpo = `pais-${lasLigas[0].bandera}`;
        const cabecera = el("button", {
            class: "acordeon__cabecera",
            "aria-expanded": n === 1 ? "true" : "false",   // el primero abierto
            "aria-controls": idCuerpo,
        },
            el("span", { class: `fi fi-${lasLigas[0].bandera}`, "aria-hidden": "true" }),
            el("span", {}, pais));

        const cuerpo = el("div", { class: "acordeon__cuerpo", id: idCuerpo },
            ...lasLigas.map((liga) =>
                el("a", { class: "acordeon__enlace", href: `pages/posiciones.html?liga=${liga.slug}` },
                    liga.nombre)));

        acc.append(el("div", { class: "acordeon__item" }, cabecera, cuerpo));
    }

    initAcordeon(acc);
}

// ------------------------------------------------------------
//  Recarga del panel principal
// ------------------------------------------------------------
async function recargar() {
    qs("#fixture-fecha").textContent = etiquetaLarga(fecha);
    const fixture = await repo.getFixture({ date: fecha, status: estado });
    renderFixture(fixture);
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;

    // <h1> de la página (sólo para lectores de pantalla: el título visible
    // de la sección es la barra "Fixture"). Jerarquía: h1 → h2 por torneo.
    qs("main")?.prepend(el("h1", { class: "sr-only" }, "Estadióstica — Fixture de fútbol en vivo"));

    initSelectorFecha(qs("#selector-fecha"), {
        fecha,
        onCambio: (iso) => { fecha = iso; recargar(); },
    });

    initPestañas(qs("#filtro-estado"), {
        onCambio: (valor) => { estado = valor; recargar(); },
    });

    await construirSidebar();
    await recargar();
}

init();
