// ============================================================
//  dom.js — helpers mínimos de DOM (sin librerías)
// ============================================================

/**
 * el — crea un elemento con atributos e hijos en una sola llamada.
 *   el("div", { class: "panel" }, "Hola", el("span", {}, "!"))
 *
 * Atributos especiales:
 *   - class / className  → className
 *   - dataset: {k: v}    → data-*
 *   - style: {k: v}      → propiedades inline
 *   - on: {evento: fn}   → addEventListener
 *   - html               → innerHTML (usar con cuidado, sólo con texto propio)
 *
 * @param {string} tag
 * @param {Object} [attrs]
 * @param {...(Node|string|null|undefined|false)} hijos
 * @returns {HTMLElement}
 */
export function el(tag, attrs = {}, ...hijos) {
    const nodo = document.createElement(tag);

    for (const [clave, valor] of Object.entries(attrs || {})) {
        if (valor == null || valor === false) continue;

        if (clave === "class" || clave === "className") {
            nodo.className = valor;
        } else if (clave === "dataset") {
            for (const [k, v] of Object.entries(valor)) nodo.dataset[k] = v;
        } else if (clave === "style") {
            for (const [k, v] of Object.entries(valor)) nodo.style[k] = v;
        } else if (clave === "on") {
            for (const [ev, fn] of Object.entries(valor)) nodo.addEventListener(ev, fn);
        } else if (clave === "html") {
            nodo.innerHTML = valor;
        } else {
            nodo.setAttribute(clave, valor);
        }
    }

    for (const hijo of hijos.flat()) {
        if (hijo == null || hijo === false) continue;
        nodo.append(hijo.nodeType ? hijo : document.createTextNode(String(hijo)));
    }
    return nodo;
}

/** qs — querySelector corto. */
export const qs = (sel, ctx = document) => ctx.querySelector(sel);

/** qsa — querySelectorAll como array de verdad. */
export const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/** limpiar — vacía un nodo de todos sus hijos. */
export function limpiar(nodo) {
    while (nodo.firstChild) nodo.removeChild(nodo.firstChild);
}

/**
 * paramUrl — lee un parámetro de la query string de la página actual.
 *   paramUrl("id")  →  "match:arg-2026-..."   (o null si no está)
 * @param {string} nombre
 * @returns {string|null}
 */
export function paramUrl(nombre) {
    return new URLSearchParams(location.search).get(nombre);
}

/**
 * guardFileProtocol — si la página se abrió con doble clic (protocolo file:),
 *  los ES modules no cargan. En ese caso reemplazamos el <main> por un aviso
 *  y devolvemos true para que el controlador corte su ejecución.
 * @returns {boolean} true si estamos en file:// (hay que abortar)
 */
export function guardFileProtocol() {
    if (location.protocol !== "file:") return false;

    const main = document.querySelector("main") || document.body;
    main.innerHTML = `
        <div class="aviso-servidor">
            <h2>Serví el sitio con Live Server</h2>
            <p>
                Esta página usa módulos de JavaScript (<code>type="module"</code>),
                que el navegador no carga cuando el archivo se abre con doble clic
                (<code>file://</code>).
            </p>
            <p>
                En VS Code: instalá la extensión <strong>Live Server</strong>,
                hacé clic derecho sobre <code>index.html</code> y elegí
                <em>“Open with Live Server”</em>.
            </p>
        </div>`;
    return true;
}

/**
 * mostrarError — reemplaza el contenido de un contenedor por un panel
 *  de "no encontrado / dato inválido", sin ensuciar la consola.
 * @param {HTMLElement} contenedor
 * @param {string} titulo
 * @param {string} [detalle]
 */
export function mostrarError(contenedor, titulo, detalle = "") {
    limpiar(contenedor);
    contenedor.append(
        el("div", { class: "aviso-servidor" },
            el("h2", {}, titulo),
            detalle && el("p", {}, detalle),
        ),
    );
}
