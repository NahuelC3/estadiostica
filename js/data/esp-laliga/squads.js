// ============================================================
//  data/esp-laliga/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Real Madrid y Athletic Club). El resto
//  de la liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:esp-rma": [
        { id: "player:esp-rma-1",  nombre: "Thibaut Courtois",     numero: 1,  posicion: "GK",  pieHabil: "izquierdo", edad: 34, nacionalidad: "be",     altura: 199 },
        { id: "player:esp-rma-2",  nombre: "Dani Carvajal",        numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "es",     altura: 173 },
        { id: "player:esp-rma-3",  nombre: "Éder Militão",         numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "br",     altura: 186 },
        { id: "player:esp-rma-4",  nombre: "Antonio Rüdiger",      numero: 22, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "de",     altura: 190 },
        { id: "player:esp-rma-5",  nombre: "Fran García",          numero: 20, posicion: "DEF", pieHabil: "izquierdo", edad: 27, nacionalidad: "es",     altura: 169 },
        { id: "player:esp-rma-6",  nombre: "Aurélien Tchouaméni",  numero: 14, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "fr",     altura: 187 },
        { id: "player:esp-rma-7",  nombre: "Jude Bellingham",      numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "gb-eng", altura: 186 },
        { id: "player:esp-rma-8",  nombre: "Federico Valverde",    numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "uy",     altura: 182 },
        { id: "player:esp-rma-9",  nombre: "Vinícius Júnior",      numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "br",     altura: 176 },
        {
            id: "player:esp-rma-10", nombre: "Kylian Mbappé",      numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "fr",     altura: 178,
            trayectoria: [
                { año: "2016", club: "AS Monaco",              pj: 60,  goles: 27,  asistencias: 16 },
                { año: "2017", club: "Paris Saint-Germain",    pj: 308, goles: 256, asistencias: 108 },
                { año: "2024", club: "Real Madrid",            pj: 59,  goles: 44,  asistencias: 11 },
                { año: "2026", club: "Real Madrid",            pj: 5,   goles: 5,   asistencias: 2 },
            ],
        },
        { id: "player:esp-rma-11", nombre: "Rodrygo",              numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "br",     altura: 174 },
        { id: "player:esp-rma-12", nombre: "Andriy Lunin",         numero: 13, posicion: "GK",  pieHabil: "derecho",   edad: 27, nacionalidad: "ua",     altura: 191 },
        { id: "player:esp-rma-13", nombre: "Raúl Asencio",         numero: 35, posicion: "DEF", pieHabil: "derecho",   edad: 23, nacionalidad: "es",     altura: 184 },
        { id: "player:esp-rma-14", nombre: "David Alaba",          numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 34, nacionalidad: "at",     altura: 180 },
        { id: "player:esp-rma-15", nombre: "Ferland Mendy",        numero: 23, posicion: "DEF", pieHabil: "izquierdo", edad: 31, nacionalidad: "fr",     altura: 173 },
        { id: "player:esp-rma-16", nombre: "Eduardo Camavinga",    numero: 6,  posicion: "MID", pieHabil: "izquierdo", edad: 23, nacionalidad: "fr",     altura: 182 },
        { id: "player:esp-rma-17", nombre: "Dani Ceballos",        numero: 19, posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "es",     altura: 179 },
        { id: "player:esp-rma-18", nombre: "Arda Güler",           numero: 15, posicion: "MID", pieHabil: "izquierdo", edad: 21, nacionalidad: "tr",     altura: 176 },
        { id: "player:esp-rma-19", nombre: "Brahim Díaz",          numero: 21, posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "es",     altura: 171 },
        { id: "player:esp-rma-20", nombre: "Endrick",              numero: 16, posicion: "FWD", pieHabil: "izquierdo", edad: 20, nacionalidad: "br",     altura: 173 },
        { id: "player:esp-rma-21", nombre: "Gonzalo García",       numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "es",     altura: 180 },
        { id: "player:esp-rma-22", nombre: "Lucas Vázquez",        numero: 17, posicion: "DEF", pieHabil: "derecho",   edad: 35, nacionalidad: "es",     altura: 173 },
        { id: "player:esp-rma-23", nombre: "Fran González",        numero: 26, posicion: "GK",  pieHabil: "derecho",   edad: 19, nacionalidad: "es",     altura: 189 },
    ],

    "team:esp-ath": [
        { id: "player:esp-ath-1",  nombre: "Unai Simón",           numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 29, nacionalidad: "es", altura: 190 },
        { id: "player:esp-ath-2",  nombre: "Óscar de Marcos",      numero: 18, posicion: "DEF", pieHabil: "derecho",   edad: 37, nacionalidad: "es", altura: 180 },
        { id: "player:esp-ath-3",  nombre: "Dani Vivian",          numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "es", altura: 184 },
        { id: "player:esp-ath-4",  nombre: "Aitor Paredes",        numero: 5,  posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "es", altura: 186 },
        { id: "player:esp-ath-5",  nombre: "Yuri Berchiche",       numero: 17, posicion: "DEF", pieHabil: "izquierdo", edad: 36, nacionalidad: "es", altura: 180 },
        { id: "player:esp-ath-6",  nombre: "Mikel Vesga",          numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 33, nacionalidad: "es", altura: 189 },
        { id: "player:esp-ath-7",  nombre: "Iñigo Ruiz de Galarreta", numero: 8, posicion: "MID", pieHabil: "izquierdo", edad: 32, nacionalidad: "es", altura: 178 },
        { id: "player:esp-ath-8",  nombre: "Oihan Sancet",         numero: 10, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "es", altura: 184 },
        { id: "player:esp-ath-9",  nombre: "Iñaki Williams",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 32, nacionalidad: "gh", altura: 186 },
        { id: "player:esp-ath-10", nombre: "Nico Williams",        numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "es", altura: 173 },
        { id: "player:esp-ath-11", nombre: "Gorka Guruzeta",       numero: 12, posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "es", altura: 183 },
        { id: "player:esp-ath-12", nombre: "Julen Agirrezabala",   numero: 13, posicion: "GK",  pieHabil: "derecho",   edad: 25, nacionalidad: "es", altura: 186 },
        { id: "player:esp-ath-13", nombre: "Andoni Gorosabel",     numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "es", altura: 177 },
        { id: "player:esp-ath-14", nombre: "Unai Núñez",           numero: 14, posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "es", altura: 187 },
        { id: "player:esp-ath-15", nombre: "Iñigo Lekue",          numero: 19, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "es", altura: 179 },
        { id: "player:esp-ath-16", nombre: "Beñat Prados",         numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "es", altura: 178 },
        { id: "player:esp-ath-17", nombre: "Unai Gómez",           numero: 22, posicion: "MID", pieHabil: "izquierdo", edad: 23, nacionalidad: "es", altura: 179 },
        { id: "player:esp-ath-18", nombre: "Álex Berenguer",       numero: 7,  posicion: "MID", pieHabil: "izquierdo", edad: 31, nacionalidad: "es", altura: 178 },
        { id: "player:esp-ath-19", nombre: "Maroan Sannadi",       numero: 20, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "es", altura: 187 },
        { id: "player:esp-ath-20", nombre: "Álvaro Djaló",         numero: 24, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "es", altura: 180 },
        { id: "player:esp-ath-21", nombre: "Adama Boiro",          numero: 32, posicion: "DEF", pieHabil: "izquierdo", edad: 22, nacionalidad: "es", altura: 180 },
        { id: "player:esp-ath-22", nombre: "Mikel Jauregizar",     numero: 28, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "es", altura: 182 },
        { id: "player:esp-ath-23", nombre: "Álex Padilla",         numero: 26, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "es", altura: 188 },
    ],
};
