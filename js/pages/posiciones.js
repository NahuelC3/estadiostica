// ============================================================
//  pages/posiciones.js — controlador de pages/posiciones.html
//  URL: posiciones.html?liga=arg-lpf
// ============================================================

import * as repo from "../repo.js";
import { el, qs, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";
import { centrarPestañaActiva } from "../ui/pestanas.js";
import { initAcordeon } from "../ui/acordeon.js";
import { filaPartido } from "../ui/partido-fila.js";

const COLUMNAS = ["PJ", "PG", "PE", "PP", "GF", "GC", "DIF", "PTS"];

// -- sello "clasificó por título, no por posición" ---------
// Sólo lo trae `fila.tituloVia` en la Tabla Anual de Argentina (la única
// vista con cascada de cupos — ver js/lib/clasificacionArgentina.js).
const SELLO_TITULO = {
    apertura: { texto: "AP", clase: "" },
    clausura: { texto: "CL", clase: "" },
    copa: { texto: "COPA", clase: " sello-titulo--copa" },
};

function selloTitulo(via) {
    const cfg = SELLO_TITULO[via];
    if (!cfg) return null;
    return el("span", {
        class: `sello-titulo${cfg.clase}`,
        title: "Clasificó por título, no por posición",
    }, cfg.texto);
}

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
            el("span", {}, fila.equipo.nombre),
            selloTitulo(fila.tituloVia)));

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

    const inner = el("h2", { class: "zona-encabezado__inner" }, tick, zona.label);
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

// -- leyenda del sello de título, al pie de la tabla ----
function leyendaSello(zonas) {
    const vias = new Set();
    for (const zona of zonas) for (const fila of zona.filas) if (fila.tituloVia) vias.add(fila.tituloVia);
    if (!vias.size) return null;

    // Apertura y Clausura comparten estilo (morado): alcanza con 1 ejemplo.
    const ejemplos = [];
    if (vias.has("apertura") || vias.has("clausura")) ejemplos.push(vias.has("apertura") ? "apertura" : "clausura");
    if (vias.has("copa")) ejemplos.push("copa");

    return el("p", { class: "leyenda-sello" },
        ...ejemplos.map(selloTitulo),
        "Clasificó por título, no por posición");
}

// -- panel lateral: movimientos + líderes + fixture de la liga --
function lateral(data, partidosLiga) {
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

    const filasFixture = el("div", { class: "partido-grupo__filas" },
        ...partidosLiga.map((p) => filaPartido(p)));

    return el("div", { class: "dos-columnas__lateral" },
        el("div", { class: "panel" },
            el("h2", { class: "panel__titulo" }, "Movimientos de la fecha"),
            data.movimientos.length ? movs : el("p", { class: "apagado" }, "Sin cambios de posición.")),
        el("div", { class: "panel" },
            el("h2", { class: "panel__titulo" }, "Líderes del torneo"),
            el("div", { class: "lideres" }, ...lideresItems)),
        el("div", { class: "panel" },
            el("h2", { class: "panel__titulo" }, "Fixture de la liga"),
            partidosLiga.length ? filasFixture : el("p", { class: "apagado" }, "Sin partidos programados para hoy en esta liga.")));
}

// -- acordeón de países/torneos (sidebar) — reemplaza el selector horizontal --
async function construirAcordeon(slugActual) {
    const acc = qs("#acordeon-ligas");
    if (!acc) return;
    limpiar(acc);

    const ligas = await repo.getLeagues();
    const porPais = new Map();
    for (const liga of ligas) {
        if (!porPais.has(liga.pais)) porPais.set(liga.pais, []);
        porPais.get(liga.pais).push(liga);
    }

    for (const [pais, lasLigas] of porPais) {
        const abierto = lasLigas.some((l) => l.slug === slugActual);
        const idCuerpo = `pais-${lasLigas[0].bandera}`;

        const cabecera = el("button", {
            class: "acordeon__cabecera",
            "aria-expanded": String(abierto),
            "aria-controls": idCuerpo,
        },
            el("span", { class: `fi fi-${lasLigas[0].bandera}`, "aria-hidden": "true" }),
            el("span", {}, pais));

        const cuerpo = el("div", { class: "acordeon__cuerpo", id: idCuerpo },
            ...lasLigas.map((liga) => el("a", {
                class: "acordeon__enlace",
                href: `posiciones.html?liga=${liga.slug}`,
                "aria-current": liga.slug === slugActual ? "page" : null,
            }, liga.nombre)));

        acc.append(el("div", { class: "acordeon__item" }, cabecera, cuerpo));
    }

    initAcordeon(acc);
}

// -- fase "principal" por defecto, mismo criterio que repo.getStandings --
function faseDefault(fases) {
    return fases.find((f) => f.tipo === "combinada")
        ?? fases.find((f) => f.tipo === "liga" || f.tipo === "grupos")
        ?? null;
}

// -- selector de fase (Apertura/Clausura/Anual, Fase de Liga/Eliminación...) --
function selectorFases(fases, slug, faseKey) {
    return el("div", { class: "pestanas", role: "tablist", "aria-label": "Elegir fase" },
        ...fases.map((f) => {
            const href = f.tipo === "eliminacion"
                ? `eliminacion.html?liga=${slug}&fase=${f.key}`
                : `posiciones.html?liga=${slug}&fase=${f.key}`;
            return el("a", {
                class: "pestanas__tab",
                role: "tab",
                href,
                "aria-selected": String(f.key === faseKey),
            }, f.nombre);
        }));
}

// -- selector de grupo (Zona A/B) dentro de una fase tipo 'grupos' --
function selectorGrupos(grupos, slug, faseKey, grupoKey) {
    return el("div", { class: "pestanas", role: "tablist", "aria-label": "Elegir zona" },
        ...grupos.map((g) => el("a", {
            class: "pestanas__tab",
            role: "tab",
            href: `posiciones.html?liga=${slug}&fase=${faseKey}&grupo=${g.key}`,
            "aria-selected": String(g.key === grupoKey),
        }, g.nombre)));
}

// ------------------------------------------------------------
//  init
// ------------------------------------------------------------
async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const slug = paramUrl("liga") || "arg-lpf";
    const leagueId = `league:${slug}`;

    // Sidebar: siempre, incluso si la liga es "sólo eliminación" (Copa
    // Argentina) y #pagina termina mostrando el aviso corto de abajo.
    await construirAcordeon(slug);

    const fases = await repo.getFasesDeLiga(leagueId);
    const faseUrl = paramUrl("fase");
    const faseActual = faseUrl ? fases.find((f) => f.key === faseUrl) : faseDefault(fases);

    // Liga sólo de eliminación (Copa Argentina): no hay tabla que mostrar acá.
    if (fases.length && !faseActual) {
        limpiar(cont);
        cont.append(el("h1", { class: "encabezado-seccion" }, `${slug} — sólo eliminación directa`));
        const elimKey = fases.find((f) => f.tipo === "eliminacion")?.key;
        cont.append(el("a", { class: "pestanas__tab", href: `eliminacion.html?liga=${slug}&fase=${elimKey}` }, "Ver el cuadro →"));
        return;
    }

    const grupoUrl = paramUrl("grupo");
    const grupoKey = faseActual?.tipo === "grupos" ? (grupoUrl || faseActual.grupos[0].key) : null;

    const data = await repo.getStandings(leagueId, { fase: faseActual?.key ?? null, grupo: grupoKey });
    if (!data) {
        mostrarError(cont, "Liga no encontrada", `No existe la liga “${slug}”.`);
        return;
    }

    // Fixture de HOY, acotado a esta liga (columna derecha).
    const fixtureLiga = await repo.getFixture({ date: repo.FECHA_DEMO, leagueId });
    const partidosLiga = fixtureLiga.grupos[0]?.partidos ?? [];

    limpiar(cont);
    // <h1> de la página. Jerarquía: h1 → h2 (zonas + panel lateral).
    cont.append(el("h1", { class: "encabezado-seccion" },
        el("span", { class: `fi fi-${data.liga.bandera}`, "aria-hidden": "true" }),
        el("span", {}, `Tabla de posiciones — ${data.liga.nombre}`)));

    // Ligas con fases (Argentina, Champions): pestañas de fase, y de zona
    // cuando la fase actual es de tipo 'grupos'.
    let selectorFase = null;
    if (fases.length) {
        selectorFase = selectorFases(fases, slug, faseActual.key);
        cont.append(selectorFase);
        if (faseActual.tipo === "grupos") {
            cont.append(selectorGrupos(faseActual.grupos, slug, faseActual.key, grupoKey));
        }
    }

    cont.append(el("div", { class: "dos-columnas" },
        el("div", {}, tabla(data), leyendaSello(data.zonas)),
        lateral(data, partidosLiga)));

    // El selector de fase no usa initPestañas (son <a> sueltos): centrar la
    // activa a mano, una vez que ya está todo en el DOM.
    if (selectorFase) centrarPestañaActiva(selectorFase);
}

init();
