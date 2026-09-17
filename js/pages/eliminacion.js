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

// Umbral genérico (por CANTIDAD de cruces, no por liga/id) a partir del cual
// una ronda se parte en 2 sub-columnas — hoy aplica a Dieciseisavos de Copa
// Argentina (16 cruces), pero es la cantidad la que decide, no de dónde viene.
const MAX_CRUCES_POR_COLUMNA = 8;
const GAP_SUBCOLUMNA = 16; // debe coincidir con el gap de .eliminacion-columna__subcolumnas

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

// -- ¿esta ronda necesita partirse en 2 sub-columnas? --------
// Por CANTIDAD de cruces, no por liga: cualquier ronda de cualquier
// competencia con más de MAX_CRUCES_POR_COLUMNA cae acá. > 16 no entra en
// 2 sub-columnas de a lo sumo 8 — el desfase de media fila está pensado
// para 2, no escala directo a 3/4 (ver aviso en consola más abajo).
function estadoColumna(ronda) {
    const n = ronda.llaves.length;
    if (n <= MAX_CRUCES_POR_COLUMNA) return "simple";
    if (n <= MAX_CRUCES_POR_COLUMNA * 2) return "dividida";
    return "demasiado-grande";
}

// -- columna/panel de una ronda ------------------------------
function columnaRonda(ronda, i, total) {
    const estado = estadoColumna(ronda);
    if (estado === "demasiado-grande") {
        // eslint-disable-next-line no-console
        console.warn(
            `[eliminacion] "${ronda.nombre}" tiene ${ronda.llaves.length} cruces — ` +
            `demasiados para partir en 2 sub-columnas de a lo sumo ${MAX_CRUCES_POR_COLUMNA} ` +
            `(el desfase de media fila está pensado para 2, no para 3/4). ` +
            `Se muestra en una sola columna sin partir; avisar antes de intentar generalizar la técnica.`,
        );
    }

    const esFinal = total > 1 && i === total - 1;
    const clases = ["pestanas-panel", "eliminacion-columna"];
    if (esFinal) clases.push("eliminacion-columna--final");

    let contenido;
    if (estado === "dividida") {
        clases.push("eliminacion-columna--dividida");
        // Orden en el DOM = orden NATURAL del bracket (1,2,3...N), no
        // "todas las interna y después todas las externa": en mobile esto
        // se muestra tal cual, como una lista simple — tiene que leerse en
        // el mismo orden de siempre. interna/externa quedan sólo como
        // datos (dataset.sub) para que el JS de desktop las reubique.
        contenido = el("div", { class: "eliminacion-columna__subcolumnas" },
            ...ronda.llaves.map((ll, idx) => {
                const tarjeta = tarjetaLlave(ll, ronda.formato);
                tarjeta.dataset.sub = idx % 2 === 0 ? "interna" : "externa";
                tarjeta.dataset.subIndex = String(Math.floor(idx / 2));
                return tarjeta;
            }));
    } else {
        contenido = el("div", { class: "eliminacion-columna__lista" },
            ...ronda.llaves.map((ll) => tarjetaLlave(ll, ronda.formato)));
    }

    return el("div", {
        class: clases.join(" "),
        id: `ronda-${ronda.key}`,
        role: "tabpanel",
        hidden: i === 0 ? null : "",
        dataset: { formato: ronda.formato },
    },
        el("h2", { class: "eliminacion-columna__titulo" }, ronda.nombre),
        contenido);
}

/**
 * posicionarSubcolumnas — ubica interna/externa lado a lado en desktop,
 * con externa desfasada media fila (medida de verdad, no asumida: los bye
 * miden la mitad, y "Definido por penales" agrega alto — un offset fijo
 * en CSS rompería en cuanto hubiera un bye de por medio).
 * En mobile deshace cualquier estilo inline: vuelve a fluir como lista
 * simple en orden natural (1..N), sin sub-columnas.
 * @param {HTMLElement} wrapper  .eliminacion-columna__subcolumnas
 */
function posicionarSubcolumnas(wrapper) {
    const cards = [...wrapper.children];

    if (!window.matchMedia(MQ_DESKTOP).matches) {
        for (const card of cards) {
            card.style.position = "";
            card.style.top = "";
            card.style.left = "";
            card.style.inlineSize = "";
        }
        wrapper.style.position = "";
        wrapper.style.blockSize = "";
        return;
    }

    const internaCards = cards.filter((c) => c.dataset.sub === "interna");
    const externaCards = cards.filter((c) => c.dataset.sub === "externa");
    wrapper.style.position = "relative";

    // 0. Medir el alto REAL de cada tarjeta primero (con el ancho de
    //    sub-columna ya puesto, top provisorio en 0) — hace falta saber el
    //    alto de la externa ANTES de decidir cuánto hueco dejarle a cada
    //    interna: si la interna de arriba es un bye (media altura) y la
    //    externa que le toca es una tarjeta normal, un gap fijo se queda
    //    corto y la externa termina pisando a la interna siguiente.
    const anchoSub = "calc(50% - 8px)";
    const medir = (card, left) => {
        card.style.position = "absolute";
        card.style.left = left;
        card.style.inlineSize = anchoSub;
        card.style.top = "0px";
        return card.offsetHeight;
    };
    const altoInterna = internaCards.map((c) => medir(c, "0"));
    const altoExterna = externaCards.map((c) => medir(c, "calc(50% + 8px)"));

    // 1. Apilar interna, pero dejando después de cada una el hueco que
    //    haga falta para que SU externa entre centrada con margen a los
    //    dos lados (nunca menos que el gap normal, y nunca menos que el
    //    alto real de esa externa + un margen mínimo de cada lado).
    const internaPos = [];
    let y = 0;
    for (let k = 0; k < internaCards.length; k++) {
        internaPos.push({ top: y, height: altoInterna[k] });
        y += altoInterna[k];
        const huecoParaExterna = k < altoExterna.length ? altoExterna[k] + GAP_SUBCOLUMNA * 2 : 0;
        y += Math.max(GAP_SUBCOLUMNA, huecoParaExterna);
    }
    internaCards.forEach((card, k) => { card.style.top = `${internaPos[k].top}px`; });

    // 2. Centrar cada externa exactamente en el hueco que le reservamos
    //    (por construcción, con margen — nunca puede pisar ni la interna
    //    de arriba ni la de abajo). La última no tiene interna siguiente:
    //    el hueco se extiende su propio alto + margen por debajo.
    let alturaTotal = Math.max(0, y - GAP_SUBCOLUMNA);
    for (let k = 0; k < externaCards.length; k++) {
        const inicioHueco = internaPos[k].top + internaPos[k].height;
        const finHueco = internaPos[k + 1]
            ? internaPos[k + 1].top
            : inicioHueco + altoExterna[k] + GAP_SUBCOLUMNA * 2;
        const top = (inicioHueco + finHueco) / 2 - altoExterna[k] / 2;
        externaCards[k].style.top = `${top}px`;
        alturaTotal = Math.max(alturaTotal, top + altoExterna[k]);
    }

    wrapper.style.blockSize = `${alturaTotal}px`;
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

// -- pares {desde,hacia,definida,fusionar} para los conectores --------
// No se puede asumir emparejamiento 2:1 por posición: el Playoff de
// Champions (8 llaves) alimenta los Octavos (8 llaves) junto a los
// clasificados directos, no es una ronda que "dobla". Se arma buscando,
// para cada equipo de una llave, en qué llave de la ronda anterior
// avanzó ese mismo teamId.
// `fusionar`: sólo true cuando la ronda ORIGEN de este tramo está dividida
// en sub-columnas — ahí los 2 conectores que llegan a la misma llave de la
// ronda siguiente se dibujan como uno solo que se junta a mitad de camino
// (ver dibujarConectorFusionado). El resto del bracket (Octavos en
// adelante) no cambia: sigue con 2 elbows independientes, como ya estaba
// aprobado.
function construirConectores(rondas) {
    const pares = [];
    for (let r = 1; r < rondas.length; r++) {
        const anterior = rondas[r - 1];
        const fusionar = estadoColumna(anterior) === "dividida";
        for (const llave of rondas[r].llaves) {
            for (const lado of [llave.local, llave.visitante]) {
                const teamId = lado?.equipo?.id;
                if (!teamId) continue;
                const origen = anterior.llaves.find((ll) => ll.avanza?.id === teamId);
                if (origen) pares.push({ desde: origen.id, hacia: llave.id, definida: !!origen.avanza, fusionar });
            }
        }
    }
    return pares;
}

/** Un tramo de elbow ortogonal: horizontal → vertical → horizontal. */
function trazarElbow(x1, y1, xm, y2, x2, definida) {
    const path = document.createElementNS(NS_SVG, "path");
    path.setAttribute("d", `M ${x1} ${y1} H ${xm} V ${y2} H ${x2}`);
    path.setAttribute("class", `eliminacion-conector${definida ? " eliminacion-conector--definida" : ""}`);
    return path;
}

/**
 * dibujarConectorFusionado — 2 llaves de una ronda dividida (una de la
 * sub-columna interna, otra de la externa) que alimentan la MISMA llave de
 * la ronda siguiente: se juntan en un único punto "centrado entre ambas"
 * antes de continuar como una sola línea hacia el destino, en vez de 2
 * líneas independientes.
 */
function dibujarConectorFusionado(rc, entradas, mapaEls, x2, y2) {
    const nodos = [];
    const rects = entradas
        .map((e) => ({ ...e, el: mapaEls.get(e.desde) }))
        .filter((e) => e.el)
        .map((e) => {
            const r = e.el.getBoundingClientRect();
            return { x1: r.right - rc.left, y1: r.top + r.height / 2 - rc.top, definida: e.definida };
        });
    if (rects.length !== 2) return nodos; // defensivo: sin las 2 puntas no hay fusión posible

    // xm compartido: a mitad de camino entre la MÁS A LA DERECHA de las 2
    // (la interna, más cerca del destino) y el destino — la externa
    // extiende su tramo horizontal hasta ese mismo punto, pasando por el
    // hueco entre tarjetas de la interna (desfase de media fila) sin
    // cruzar ninguna.
    const xMasCercano = Math.max(rects[0].x1, rects[1].x1);
    const xm = xMasCercano + (x2 - xMasCercano) / 2;
    const yMerge = (rects[0].y1 + rects[1].y1) / 2;

    for (const r of rects) nodos.push(trazarElbow(r.x1, r.y1, xm, yMerge, xm, r.definida));

    // Tramo final compartido, desde el punto de fusión hacia el destino.
    const xm2 = xm + (x2 - xm) / 2;
    const definidaFinal = rects.every((r) => r.definida);
    nodos.push(trazarElbow(xm, yMerge, xm2, y2, x2, definidaFinal));
    return nodos;
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

    const porDestino = new Map();
    for (const par of pares) {
        if (!porDestino.has(par.hacia)) porDestino.set(par.hacia, []);
        porDestino.get(par.hacia).push(par);
    }

    for (const [hacia, entradas] of porDestino) {
        const elDestino = mapaEls.get(hacia);
        if (!elDestino) continue;
        const rDestino = elDestino.getBoundingClientRect();
        const x2 = rDestino.left - rc.left;
        const y2 = rDestino.top + rDestino.height / 2 - rc.top;

        if (entradas.length === 2 && entradas.every((e) => e.fusionar)) {
            for (const nodo of dibujarConectorFusionado(rc, entradas, mapaEls, x2, y2)) svg.append(nodo);
            continue;
        }

        for (const { desde, definida } of entradas) {
            const elOrigen = mapaEls.get(desde);
            if (!elOrigen) continue;
            const rOrigen = elOrigen.getBoundingClientRect();
            const x1 = rOrigen.right - rc.left;
            const y1 = rOrigen.top + rOrigen.height / 2 - rc.top;
            const xm = x1 + (x2 - x1) / 2;
            svg.append(trazarElbow(x1, y1, xm, y2, x2, definida));
        }
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

    // -- sub-columnas + conectores: medidos en pantalla, se recalculan si
    //    cambia el layout. El orden importa: las sub-columnas tienen que
    //    quedar ubicadas ANTES de medir para los conectores.
    const wrappersDivididos = qsa(".eliminacion-columna__subcolumnas", paneles);
    const pares = construirConectores(data.rondas);
    const mapaEls = new Map(qsa(".llave-card", paneles).map((elLlave) => [elLlave.dataset.llaveId, elLlave]));
    const redibujar = () => {
        for (const wrapper of wrappersDivididos) posicionarSubcolumnas(wrapper);
        dibujarConectores(svg, paneles, pares, mapaEls);
    };

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
