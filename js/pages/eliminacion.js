// ============================================================
//  pages/eliminacion.js — controlador de pages/eliminacion.html
//  URL: eliminacion.html?liga=arg-copa[&fase=eliminacion]
// ------------------------------------------------------------
//  Bracket de eliminación directa (Copa Argentina, Champions League),
//  un solo componente para los 2 modos que aparecen por RONDA (no por
//  liga: Champions mezcla ida-vuelta con una final a partido único):
//   · ida-vuelta → parciales de las 2 idas + marcador global agregado.
//   · único      → el número grande ES el resultado del partido.
//
//  Desktop: columnas lado a lado + conectores dibujados en un <svg>
//  superpuesto, medido con getBoundingClientRect (no hay forma de
//  calcular esas líneas sólo con CSS: Playoff→Octavos de Champions no
//  es un cruce 2:1 limpio, así que los conectores se arman por
//  coincidencia de teamId contra el `avanza` de la ronda anterior, no
//  por posición en la lista).
//  Mobile: pestañas por ronda + panel (mismo patrón que equipo.html/
//  jugador.html vía js/ui/pestanas.js) — en desktop ese mismo panel se
//  fuerza visible para TODAS las rondas a la vez (ver _eliminacion.scss)
//  y se oculta el selector, porque ahí ya se ven todas juntas.
// ============================================================

import * as repo from "../repo.js";
import { el, qs, qsa, limpiar, paramUrl, guardFileProtocol, mostrarError } from "../lib/dom.js";
import { pintarEscudo } from "../lib/escudo.js";
import { initPestañas } from "../ui/pestanas.js";
import { construirAcordeonLigas } from "../ui/acordeon-ligas.js";

// Debe coincidir con $bp-desktop de scss/utilities/_variables.scss: por
// debajo de este ancho el bracket es de a una ronda (pestañas), así que
// no tiene sentido medir/dibujar conectores entre columnas que no se ven.
const MQ_DESKTOP = "(min-width: 960px)";

const NS_SVG = "http://www.w3.org/2000/svg";

// -- goles de UN lado de la llave, partido a partido -------
function golesDeLado(llave, teamId) {
    return llave.partidos.map((p) => {
        if (!p.score) return null;
        return p.local.id === teamId ? p.score.home : p.score.away;
    });
}

// -- un lado de la tarjeta (equipo + marcador) --------------
function ladoNormal(llave, cual, formato) {
    const lado = llave[cual];
    const equipo = lado?.equipo ?? null;
    const teamId = equipo?.id ?? null;
    const esGanador = teamId && llave.avanza?.id === teamId;

    const equipoNode = equipo
        ? el("a", { class: "llave-card__equipo", href: `equipo.html?id=${encodeURIComponent(equipo.id)}` },
            pintarEscudo(equipo, "sm"), el("span", {}, equipo.nombre))
        : el("span", { class: "llave-card__equipo" }, lado?.placeholder || "A definir");

    let marcadorNode;
    if (!teamId) {
        marcadorNode = el("span", { class: "llave-card__marcador llave-card__marcador--pendiente" }, "—");
    } else if (formato === "unico") {
        const [goles] = golesDeLado(llave, teamId);
        marcadorNode = el("div", { class: "llave-card__marcador" }, goles == null ? "—" : String(goles));
    } else {
        const parciales = golesDeLado(llave, teamId).map((v) => (v == null ? "–" : v)).join(" · ");
        const cualGlobal = llave.local?.equipo?.id === teamId ? "local" : "visitante";
        const global = llave.marcadorGlobal ? llave.marcadorGlobal[cualGlobal] : null;
        marcadorNode = el("div", { class: "llave-card__marcador" },
            el("span", { class: "llave-card__parciales" }, parciales),
            global == null ? "—" : String(global));
    }

    return el("div", { class: `llave-card__lado${esGanador ? " llave-card__lado--avanza" : ""}` }, equipoNode, marcadorNode);
}

// -- tarjeta de bye: media altura, un solo lado -------------
function tarjetaBye(llave) {
    const lado = llave.local ?? llave.visitante;
    const equipo = lado?.equipo ?? null;
    const equipoNode = equipo
        ? el("a", { class: "llave-card__equipo", href: `equipo.html?id=${encodeURIComponent(equipo.id)}` },
            pintarEscudo(equipo, "sm"), el("span", {}, equipo.nombre))
        : el("span", { class: "llave-card__equipo" }, lado?.placeholder || "A definir");

    return el("article", { class: "llave-card llave-card--bye", dataset: { llaveId: llave.id } },
        el("div", { class: "llave-card__lado" }, equipoNode),
        el("div", { class: "llave-card__separador-bye" }),
        el("div", { class: "llave-card__etiqueta-bye" }, "Pasa sin jugar"));
}

// -- tarjeta normal: 2 lados + nota de penales --------------
function tarjetaNormal(llave, formato) {
    return el("article", {
        class: `llave-card${llave.avanza ? " llave-card--definida" : ""}`,
        dataset: { llaveId: llave.id },
    },
        ladoNormal(llave, "local", formato),
        ladoNormal(llave, "visitante", formato),
        llave.definidoPorPenales ? el("div", { class: "llave-card__penales" }, "Definido por penales") : null);
}

function tarjetaLlave(llave, formato) {
    return (!llave.local || !llave.visitante) ? tarjetaBye(llave) : tarjetaNormal(llave, formato);
}

// -- columna/panel de una ronda ------------------------------
function columnaRonda(ronda, i, total) {
    const esFinal = total > 1 && i === total - 1;
    const clases = ["pestanas-panel", "eliminacion-columna"];
    if (esFinal) clases.push("eliminacion-columna--final");
    return el("div", {
        class: clases.join(" "),
        id: `ronda-${ronda.key}`,
        role: "tabpanel",
        hidden: i === 0 ? null : "",
        dataset: { formato: ronda.formato },
    },
        el("h2", { class: "eliminacion-columna__titulo" }, ronda.nombre),
        ...ronda.llaves.map((ll) => tarjetaLlave(ll, ronda.formato)));
}

// -- texto de la regla de formato, debajo del bracket -------
function reglaTexto(rondas) {
    const formatos = new Set(rondas.map((r) => r.formato));
    if (formatos.size === 1) {
        return formatos.has("unico") ? "Todas las rondas a partido único" : "Todas las rondas a ida y vuelta";
    }
    const ultima = rondas.at(-1);
    if (ultima.formato === "unico" && rondas.slice(0, -1).every((r) => r.formato === "ida-vuelta")) {
        return "Ida y vuelta · Final a partido único";
    }
    return "Formato de eliminación mixto por ronda";
}

// -- pares {desde,hacia,definida} para los conectores --------
// No se puede asumir emparejamiento 2:1 por posición: el Playoff de
// Champions (8 llaves) alimenta los Octavos (8 llaves) junto a los
// clasificados directos, no es una ronda que "dobla". Se arma buscando,
// para cada equipo de una llave, en qué llave de la ronda anterior
// avanzó ese mismo teamId.
function construirConectores(rondas) {
    const pares = [];
    for (let r = 1; r < rondas.length; r++) {
        const anterior = rondas[r - 1];
        for (const llave of rondas[r].llaves) {
            for (const lado of [llave.local, llave.visitante]) {
                const teamId = lado?.equipo?.id;
                if (!teamId) continue;
                const origen = anterior.llaves.find((ll) => ll.avanza?.id === teamId);
                if (origen) pares.push({ desde: origen.id, hacia: llave.id, definida: !!origen.avanza });
            }
        }
    }
    return pares;
}

function dibujarConectores(svg, contenedor, pares, mapaEls) {
    if (!window.matchMedia(MQ_DESKTOP).matches) {
        limpiar(svg);
        return;
    }
    const rc = contenedor.getBoundingClientRect();
    if (!rc.width || !rc.height) return;
    svg.setAttribute("viewBox", `0 0 ${rc.width} ${rc.height}`);
    limpiar(svg);
    for (const { desde, hacia, definida } of pares) {
        const elA = mapaEls.get(desde);
        const elB = mapaEls.get(hacia);
        if (!elA || !elB) continue;
        const a = elA.getBoundingClientRect();
        const b = elB.getBoundingClientRect();
        const x1 = a.right - rc.left;
        const y1 = a.top + a.height / 2 - rc.top;
        const x2 = b.left - rc.left;
        const y2 = b.top + b.height / 2 - rc.top;
        const xm = x1 + (x2 - x1) / 2;
        const path = document.createElementNS(NS_SVG, "path");
        path.setAttribute("d", `M ${x1} ${y1} H ${xm} V ${y2} H ${x2}`);
        path.setAttribute("class", `eliminacion-conector${definida ? " eliminacion-conector--definida" : ""}`);
        svg.append(path);
    }
}

// -- leyenda de colores ---------------------------------------
function leyenda() {
    const items = [
        ["clasificado", "Camino del clasificado"],
        ["definida", "Llave definida"],
        ["bye", "Bye sin partido"],
        ["pendiente", "Por definir"],
    ];
    return el("div", { class: "eliminacion-leyenda" },
        ...items.map(([clave, texto]) => el("div", { class: "eliminacion-leyenda__item" },
            el("span", { class: `eliminacion-leyenda__swatch eliminacion-leyenda__swatch--${clave}` }),
            texto)));
}

async function init() {
    if (guardFileProtocol()) return;
    const cont = qs("#pagina");
    const slug = paramUrl("liga") || "arg-copa";
    const leagueId = `league:${slug}`;

    // Sidebar: siempre, incluso si algo más abajo falla (fase/liga inválida).
    await construirAcordeonLigas(qs("#acordeon-ligas"), { slugActual: slug });

    const fases = await repo.getFasesDeLiga(leagueId);
    const fasesElim = fases.filter((f) => f.tipo === "eliminacion");
    if (!fasesElim.length) {
        mostrarError(cont, "Sin cuadro de eliminación",
            `La liga "${slug}" no tiene una fase de eliminación directa.`);
        return;
    }
    const faseKey = paramUrl("fase") || fasesElim[0].key;

    const data = await repo.getEliminacion(leagueId, faseKey);
    if (!data) {
        mostrarError(cont, "Fase no encontrada", `No existe la fase "${faseKey}" en "${slug}".`);
        return;
    }

    limpiar(cont);
    const titulo = data.fase.nombre === data.liga.nombre ? data.liga.nombre : `${data.fase.nombre} — ${data.liga.nombre}`;
    cont.append(el("h1", { class: "encabezado-seccion" },
        el("span", { class: `fi fi-${data.liga.bandera}`, "aria-hidden": "true" }),
        el("span", {}, titulo)));

    if (fasesElim.length > 1) {
        cont.append(el("div", { class: "pestanas", role: "tablist", "aria-label": "Elegir fase" },
            ...fasesElim.map((f) => el("a", {
                class: "pestanas__tab",
                role: "tab",
                href: `eliminacion.html?liga=${slug}&fase=${f.key}`,
                "aria-selected": String(f.key === faseKey),
            }, f.nombre))));
    }

    cont.append(el("a", { class: "pestanas__tab", href: `posiciones.html?liga=${slug}` }, "← Ver tabla de posiciones"));

    // -- selector de ronda (mobile) + columnas/paneles (desktop: todas visibles) --
    const tablistRondas = el("div", {
        class: "pestanas eliminacion-bracket__rondas",
        role: "tablist",
        "aria-label": "Elegir ronda",
    }, ...data.rondas.map((r, i) => el("button", {
        class: "pestanas__tab",
        role: "tab",
        "aria-selected": String(i === 0),
        "aria-controls": `ronda-${r.key}`,
        dataset: { valor: r.key },
    }, r.nombre)));

    const svg = document.createElementNS(NS_SVG, "svg");
    svg.setAttribute("class", "eliminacion-bracket__conectores");
    svg.setAttribute("aria-hidden", "true");

    const paneles = el("div", { class: "eliminacion-bracket__paneles" },
        svg,
        ...data.rondas.map((r, i) => columnaRonda(r, i, data.rondas.length)));

    cont.append(tablistRondas, paneles);
    cont.append(el("p", { class: "eliminacion-bracket__regla" }, reglaTexto(data.rondas)));
    cont.append(leyenda());

    initPestañas(tablistRondas);

    // -- conectores: medidos en pantalla, se recalculan si cambia el layout --
    const pares = construirConectores(data.rondas);
    const mapaEls = new Map(qsa(".llave-card", paneles).map((elLlave) => [elLlave.dataset.llaveId, elLlave]));
    const redibujar = () => dibujarConectores(svg, paneles, pares, mapaEls);

    redibujar();
    requestAnimationFrame(redibujar);
    if (document.fonts) document.fonts.ready.then(redibujar);

    let temporizador;
    window.addEventListener("resize", () => {
        clearTimeout(temporizador);
        temporizador = setTimeout(redibujar, 150);
    });
}

init();
