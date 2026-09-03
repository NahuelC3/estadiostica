// ============================================================
//  escudo.js — escudo real (imagen) con fallback a monograma
// ------------------------------------------------------------
//  Si el equipo tiene entrada en la tabla js/data/escudos.js, se pinta
//  su escudo real (un <img> de assets/escudos/). Si no la tiene (30
//  equipos: los 18 saudíes + West Ham, Wolves, Leicester, Southampton,
//  Málaga, Schalke, y 6 con colisión de nombre de archivo), se sigue
//  usando el círculo con las iniciales sobre su brandColor.
//
//  Los dos casos ocupan la MISMA caja (20/28/40/64 px) → no hay salto
//  de layout al mezclarlos en una lista.
// ============================================================

import { ESCUDOS } from "../data/escudos.js";

// Ruta base de los escudos. El proyecto usa rutas relativas: desde las
// páginas de pages/ hay que subir un nivel.
const PREFIJO = location.pathname.includes("/pages/") ? "../" : "";
const BASE_ESCUDOS = `${PREFIJO}assets/escudos/`;

// Lado en px de cada tamaño (para fijar width/height del <img> y evitar reflow).
const TAM_PX = { sm: 20, md: 28, lg: 40, xl: 64 };

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
 * tieneEscudoReal — ¿este equipo tiene escudo (imagen) o va con monograma?
 * @param {string} teamId
 * @returns {boolean}
 */
export function tieneEscudoReal(teamId) {
    return Object.prototype.hasOwnProperty.call(ESCUDOS, teamId);
}

/**
 * pintarEscudo — devuelve el elemento del escudo del equipo.
 *  · con escudo real → <img class="escudo escudo--<tam> escudo--img">
 *  · sin escudo      → <span class="escudo escudo--<tam>"> con las iniciales
 *  Ambos tienen la misma caja, así que las páginas no distinguen entre uno y otro.
 * @param {{id?: string, nombre: string, brandColor: string}} equipo
 * @param {"sm"|"md"|"lg"|"xl"} [tam="md"]
 * @returns {HTMLImageElement|HTMLSpanElement}
 */
export function pintarEscudo(equipo, tam = "md") {
    const archivo = equipo.id ? ESCUDOS[equipo.id] : undefined;

    if (archivo) {
        const img = document.createElement("img");
        img.className = `escudo escudo--${tam} escudo--img`;
        img.src = BASE_ESCUDOS + archivo;
        img.alt = "";                       // decorativo: el nombre del equipo va al lado
        img.loading = "lazy";
        img.decoding = "async";
        img.width = TAM_PX[tam] ?? 28;      // evita reflow mientras carga
        img.height = TAM_PX[tam] ?? 28;
        img.setAttribute("aria-hidden", "true");
        return img;
    }

    // -- Fallback: monograma (círculo con iniciales sobre el color de marca) --
    const span = document.createElement("span");
    span.className = `escudo escudo--${tam}`;
    span.textContent = iniciales(equipo.nombre);
    span.style.background = equipo.brandColor;
    span.style.color = colorTextoPara(equipo.brandColor);
    span.setAttribute("aria-hidden", "true");
    return span;
}
