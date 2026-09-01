// ============================================================
//  prng.js — números pseudoaleatorios DETERMINISTAS
// ------------------------------------------------------------
//  "Determinista" = con la misma semilla, siempre sale la misma secuencia.
//  Lo usamos para generar planteles y datos de ejemplo que no cambian
//  entre recargas ni entre pantallas.
// ============================================================

/**
 * hashString — convierte un texto en un entero de 32 bits (algoritmo FNV-1a).
 * Sirve para derivar una semilla numérica a partir de un id de texto,
 * p. ej. hashString("team:arg-riv").
 *
 * @param {string} str
 * @returns {number} entero sin signo de 32 bits
 */
export function hashString(str) {
    let h = 2166136261 >>> 0;            // offset basis de FNV
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);         // XOR con el byte
        h = Math.imul(h, 16777619);    // multiplica por el primo de FNV
    }
    return h >>> 0;                      // fuerza a entero sin signo
}

/**
 * mulberry32 — generador PRNG chico y rápido.
 * Devuelve una FUNCIÓN: cada llamada da un número flotante en [0, 1).
 *
 * @param {number} seed  entero de 32 bits (usar hashString para obtenerlo)
 * @returns {() => number}
 */
export function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/**
 * crearRng — atajo: de un texto (o número) a una función random determinista.
 * @param {string|number} semilla
 * @returns {() => number}
 */
export function crearRng(semilla) {
    const n = typeof semilla === "number" ? semilla : hashString(String(semilla));
    return mulberry32(n);
}

/**
 * rngEntero — entero al azar entre min y max, ambos incluidos.
 * @param {() => number} rng
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function rngEntero(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
}

/**
 * rngElegir — elige un elemento al azar de un array.
 * @template T
 * @param {() => number} rng
 * @param {T[]} arr
 * @returns {T}
 */
export function rngElegir(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
}

/**
 * rngMezclar — devuelve una COPIA barajada del array (Fisher–Yates).
 * No muta el original.
 * @template T
 * @param {() => number} rng
 * @param {T[]} arr
 * @returns {T[]}
 */
export function rngMezclar(rng, arr) {
    const copia = arr.slice();
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
