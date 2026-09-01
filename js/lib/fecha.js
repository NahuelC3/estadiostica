// ============================================================
//  fecha.js — utilidades de fecha SIN dependencias
// ------------------------------------------------------------
//  Trabajamos siempre con strings ISO "YYYY-MM-DD" para las fechas de
//  calendario (sin hora), porque son fáciles de comparar y ordenar.
//  Para construir un Date usamos el mediodía local y así evitamos que un
//  huso horario "corra" la fecha un día.
// ============================================================

const DIAS = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];
const DIAS_LARGO = [
    "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
];
const MESES = [
    "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
    "JUL", "AGO", "SEP", "OCT", "NOV", "DIC",
];
const MESES_LARGO = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/**
 * isoADate — "YYYY-MM-DD" → objeto Date (al mediodía local).
 * @param {string} iso
 * @returns {Date}
 */
export function isoADate(iso) {
    const [a, m, d] = iso.split("-").map(Number);
    return new Date(a, m - 1, d, 12, 0, 0);
}

/**
 * dateAIso — objeto Date → "YYYY-MM-DD".
 * @param {Date} fecha
 * @returns {string}
 */
export function dateAIso(fecha) {
    const a = fecha.getFullYear();
    const m = String(fecha.getMonth() + 1).padStart(2, "0");
    const d = String(fecha.getDate()).padStart(2, "0");
    return `${a}-${m}-${d}`;
}

/**
 * sumarDias — corre una fecha ISO n días (n puede ser negativo).
 * @param {string} iso
 * @param {number} n
 * @returns {string}
 */
export function sumarDias(iso, n) {
    const f = isoADate(iso);
    f.setDate(f.getDate() + n);
    return dateAIso(f);
}

/**
 * etiquetaCorta — para el selector de fecha: { dia:"SÁB", fecha:"16 AGO" }.
 * @param {string} iso
 * @returns {{dia: string, fecha: string}}
 */
export function etiquetaCorta(iso) {
    const f = isoADate(iso);
    return {
        dia: DIAS[f.getDay()],
        fecha: `${f.getDate()} ${MESES[f.getMonth()]}`,
    };
}

/**
 * etiquetaLarga — "sábado 16 de agosto de 2026".
 * @param {string} iso
 * @returns {string}
 */
export function etiquetaLarga(iso) {
    const f = isoADate(iso);
    return `${DIAS_LARGO[f.getDay()]} ${f.getDate()} de ${MESES_LARGO[f.getMonth()]} de ${f.getFullYear()}`;
}

/**
 * etiquetaDiaMes — "16 AGO" (sin día de semana), para calendarios.
 * @param {string} iso
 * @returns {string}
 */
export function etiquetaDiaMes(iso) {
    const f = isoADate(iso);
    return `${f.getDate()} ${MESES[f.getMonth()]}`;
}

/**
 * compararIso — comparador para Array.sort sobre fechas ISO.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
export function compararIso(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
