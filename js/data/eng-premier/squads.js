// ============================================================
//  data/eng-premier/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Arsenal y Brighton). El resto se
//  genera de forma determinista en db.js (generarPlantel).
//  El orden del array es un once tipo (1..11) + suplentes (12..23);
//  el detalle de partido referencia player:<liga>-<abbr>-<n> con
//  n = posición en este array.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:eng-ars": [
        { id: "player:eng-ars-1",  nombre: "David Raya",           numero: 22, posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "es",     altura: 183 },
        { id: "player:eng-ars-2",  nombre: "Ben White",            numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "gb-eng", altura: 186 },
        { id: "player:eng-ars-3",  nombre: "William Saliba",       numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "fr",     altura: 192 },
        { id: "player:eng-ars-4",  nombre: "Gabriel Magalhães",    numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "br",     altura: 190 },
        { id: "player:eng-ars-5",  nombre: "Riccardo Calafiori",   numero: 33, posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "it",     altura: 188 },
        { id: "player:eng-ars-6",  nombre: "Declan Rice",          numero: 41, posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "gb-eng", altura: 185 },
        { id: "player:eng-ars-7",  nombre: "Martin Ødegaard",      numero: 8,  posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "no",     altura: 178 },
        { id: "player:eng-ars-8",  nombre: "Mikel Merino",         numero: 23, posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "es",     altura: 188 },
        {
            id: "player:eng-ars-9", nombre: "Viktor Gyökeres",     numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "se",     altura: 189,
            trayectoria: [
                { año: "2018", club: "Brommapojkarna",        pj: 20, goles: 7,  asistencias: 2 },
                { año: "2019", club: "Brighton",              pj: 3,  goles: 0,  asistencias: 0 },
                { año: "2020", club: "Swansea City (préstamo)", pj: 19, goles: 3, asistencias: 1 },
                { año: "2021", club: "Coventry City",         pj: 97, goles: 43, asistencias: 12 },
                { año: "2023", club: "Sporting CP",           pj: 66, goles: 54, asistencias: 16 },
                { año: "2025", club: "Arsenal",               pj: 34, goles: 22, asistencias: 6 },
                { año: "2026", club: "Arsenal",               pj: 5,  goles: 4,  asistencias: 1 },
            ],
        },
        { id: "player:eng-ars-10", nombre: "Bukayo Saka",          numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "gb-eng", altura: 178 },
        { id: "player:eng-ars-11", nombre: "Gabriel Martinelli",   numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "br",     altura: 178 },
        { id: "player:eng-ars-12", nombre: "Kepa Arrizabalaga",    numero: 13, posicion: "GK",  pieHabil: "derecho",   edad: 31, nacionalidad: "es",     altura: 186 },
        { id: "player:eng-ars-13", nombre: "Jurriën Timber",       numero: 12, posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "nl",     altura: 179 },
        { id: "player:eng-ars-14", nombre: "Jakub Kiwior",         numero: 15, posicion: "DEF", pieHabil: "izquierdo", edad: 26, nacionalidad: "pl",     altura: 189 },
        { id: "player:eng-ars-15", nombre: "Myles Lewis-Skelly",   numero: 49, posicion: "DEF", pieHabil: "izquierdo", edad: 19, nacionalidad: "gb-eng", altura: 180 },
        { id: "player:eng-ars-16", nombre: "Jorginho",             numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 34, nacionalidad: "it",     altura: 180 },
        { id: "player:eng-ars-17", nombre: "Ethan Nwaneri",        numero: 53, posicion: "MID", pieHabil: "izquierdo", edad: 19, nacionalidad: "gb-eng", altura: 177 },
        { id: "player:eng-ars-18", nombre: "Leandro Trossard",     numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "be",     altura: 172 },
        { id: "player:eng-ars-19", nombre: "Kai Havertz",          numero: 29, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "de",     altura: 193 },
        { id: "player:eng-ars-20", nombre: "Raheem Sterling",      numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "gb-eng", altura: 170 },
        { id: "player:eng-ars-21", nombre: "Oleksandr Zinchenko",  numero: 35, posicion: "DEF", pieHabil: "izquierdo", edad: 29, nacionalidad: "ua",     altura: 175 },
        { id: "player:eng-ars-22", nombre: "Fábio Vieira",         numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "pt",     altura: 170 },
        { id: "player:eng-ars-23", nombre: "Tommy Setford",        numero: 42, posicion: "GK",  pieHabil: "derecho",   edad: 20, nacionalidad: "gb-eng", altura: 190 },
    ],

    "team:eng-bha": [
        { id: "player:eng-bha-1",  nombre: "Bart Verbruggen",      numero: 1,  posicion: "GK",  pieHabil: "izquierdo", edad: 24, nacionalidad: "nl",     altura: 193 },
        { id: "player:eng-bha-2",  nombre: "Joël Veltman",         numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "nl",     altura: 183 },
        { id: "player:eng-bha-3",  nombre: "Lewis Dunk",           numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "gb-eng", altura: 192 },
        { id: "player:eng-bha-4",  nombre: "Jan Paul van Hecke",   numero: 29, posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "nl",     altura: 190 },
        { id: "player:eng-bha-5",  nombre: "Pervis Estupiñán",     numero: 30, posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "ec",     altura: 175 },
        { id: "player:eng-bha-6",  nombre: "Carlos Baleba",        numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "cm",     altura: 179 },
        { id: "player:eng-bha-7",  nombre: "Yasin Ayari",          numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "se",     altura: 180 },
        { id: "player:eng-bha-8",  nombre: "Kaoru Mitoma",         numero: 22, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "jp",     altura: 178 },
        { id: "player:eng-bha-9",  nombre: "João Pedro",           numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "br",     altura: 182 },
        { id: "player:eng-bha-10", nombre: "Georginio Rutter",     numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "fr",     altura: 182 },
        { id: "player:eng-bha-11", nombre: "Danny Welbeck",        numero: 18, posicion: "FWD", pieHabil: "derecho",   edad: 35, nacionalidad: "gb-eng", altura: 185 },
        { id: "player:eng-bha-12", nombre: "Jason Steele",         numero: 23, posicion: "GK",  pieHabil: "derecho",   edad: 35, nacionalidad: "gb-eng", altura: 188 },
        { id: "player:eng-bha-13", nombre: "Tariq Lamptey",        numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "gb-eng", altura: 164 },
        { id: "player:eng-bha-14", nombre: "Igor Julio",           numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "br",     altura: 185 },
        { id: "player:eng-bha-15", nombre: "Ferdi Kadıoğlu",       numero: 34, posicion: "DEF", pieHabil: "izquierdo", edad: 26, nacionalidad: "tr",     altura: 178 },
        { id: "player:eng-bha-16", nombre: "James Milner",         numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 40, nacionalidad: "gb-eng", altura: 175 },
        { id: "player:eng-bha-17", nombre: "Jack Hinshelwood",     numero: 36, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "gb-eng", altura: 180 },
        { id: "player:eng-bha-18", nombre: "Simon Adingra",        numero: 24, posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "ci",     altura: 175 },
        { id: "player:eng-bha-19", nombre: "Julio Enciso",         numero: 13, posicion: "FWD", pieHabil: "izquierdo", edad: 22, nacionalidad: "py",     altura: 173 },
        { id: "player:eng-bha-20", nombre: "Evan Ferguson",        numero: 28, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "ie",     altura: 189 },
        { id: "player:eng-bha-21", nombre: "Adam Webster",         numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 31, nacionalidad: "gb-eng", altura: 190 },
        { id: "player:eng-bha-22", nombre: "Mats Wieffer",         numero: 12, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "nl",     altura: 185 },
        { id: "player:eng-bha-23", nombre: "Killian Cahill",       numero: 40, posicion: "GK",  pieHabil: "derecho",   edad: 21, nacionalidad: "ie",     altura: 189 },
    ],
};
