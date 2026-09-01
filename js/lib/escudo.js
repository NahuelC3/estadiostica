// ============================================================
//  escudo.js — badge monograma (placeholder de escudo real)
// ------------------------------------------------------------
//  Mientras no haya escudos reales, cada equipo se representa con un
//  círculo de su color de marca y sus iniciales. El color del texto
//  (claro u oscuro) se decide por la LUMINANCIA del fondo para que
//  siempre haya contraste.
//
//  El día que existan escudos reales, se cambia SÓLO este archivo
//  (p. ej. `pintarEscudo` devuelve un <img>) y las páginas no se tocan.
// ============================================================

/**
 * iniciales — 2 letras a partir del nombre del equipo.
 *   "River Plate"   → "RP"
 *   "Boca"          → "BO"
 *   "Racing Club"   → "RC"
 * @param {string} nombre
 * @returns {string}
 */
export function iniciales(nombre) {
    const palabras = nombre
        .replace(/[^\p{L}\s]/gu, "")     // saca puntuación
        .split(/\s+/)
        .filter(Boolean);
    if (palabras.length === 0) return "??";
    if (palabras.length === 1) return palabras[0].slice(0, 2).toUpperCase();
    return (palabras[0][0] + palabras[1][0]).toUpperCase();
}

/**
 * luminancia — brillo relativo de un color hex (#RRGGBB), en [0, 1].
 *  Fórmula estándar sRGB (WCAG). ~0 = negro, ~1 = blanco.
 * @param {string} hex
 * @returns {number}
 */
export function luminancia(hex) {
    const limpio = hex.replace("#", "");
    const r = parseInt(limpio.slice(0, 2), 16) / 255;
    const g = parseInt(limpio.slice(2, 4), 16) / 255;
    const b = parseInt(limpio.slice(4, 6), 16) / 255;
    const canal = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b);
}

/**
 * colorTextoPara — dado un color de fondo, devuelve el color de texto
 *  del sistema que mejor contrasta: oscuro sobre fondos claros, claro
 *  sobre fondos oscuros.
 * @param {string} hexFondo
 * @returns {string} "#0D1117" | "#E6EBF0"
 */
export function colorTextoPara(hexFondo) {
    return luminancia(hexFondo) > 0.45 ? "#0D1117" : "#E6EBF0";
}

/**
 * pintarEscudo — crea el elemento del badge monograma ya coloreado.
 *  Escribe SÓLO propiedades CSS reales inline (background y color), nada
 *  de custom properties.
 * @param {{nombre: string, brandColor: string}} equipo
 * @param {"sm"|"md"|"lg"|"xl"} [tam="md"]
 * @returns {HTMLSpanElement}
 */
export function pintarEscudo(equipo, tam = "md") {
    const span = document.createElement("span");
    span.className = `escudo escudo--${tam}`;
    span.textContent = iniciales(equipo.nombre);
    span.style.background = equipo.brandColor;
    span.style.color = colorTextoPara(equipo.brandColor);
    span.setAttribute("aria-hidden", "true");
    return span;
}
