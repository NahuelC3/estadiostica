// ============================================================
//  data/ita-seriea/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Juventus y Atalanta). El resto de la
//  liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:ita-juv": [
        { id: "player:ita-juv-1",  nombre: "Michele Di Gregorio",  numero: 29, posicion: "GK",  pieHabil: "derecho",   edad: 28, nacionalidad: "it",     altura: 191 },
        { id: "player:ita-juv-2",  nombre: "Pierre Kalulu",        numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "fr",     altura: 179 },
        { id: "player:ita-juv-3",  nombre: "Gleison Bremer",       numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "br",     altura: 188 },
        { id: "player:ita-juv-4",  nombre: "Federico Gatti",       numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "it",     altura: 190 },
        { id: "player:ita-juv-5",  nombre: "Andrea Cambiaso",      numero: 27, posicion: "DEF", pieHabil: "izquierdo", edad: 26, nacionalidad: "it",     altura: 182 },
        { id: "player:ita-juv-6",  nombre: "Manuel Locatelli",     numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "it",     altura: 185 },
        { id: "player:ita-juv-7",  nombre: "Khéphren Thuram",      numero: 19, posicion: "MID", pieHabil: "derecho",   edad: 25, nacionalidad: "fr",     altura: 192 },
        { id: "player:ita-juv-8",  nombre: "Teun Koopmeiners",     numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "nl",     altura: 183 },
        { id: "player:ita-juv-9",  nombre: "Francisco Conceição",  numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 23, nacionalidad: "pt",     altura: 172 },
        {
            id: "player:ita-juv-10", nombre: "Kenan Yıldız",       numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "tr",     altura: 185,
            trayectoria: [
                { año: "2019", club: "Bayern München (juveniles)", pj: 36, goles: 14, asistencias: 9 },
                { año: "2022", club: "Juventus Next Gen",          pj: 20, goles: 5,  asistencias: 3 },
                { año: "2023", club: "Juventus",                   pj: 71, goles: 15, asistencias: 10 },
                { año: "2026", club: "Juventus",                   pj: 5,  goles: 3,  asistencias: 2 },
            ],
        },
        { id: "player:ita-juv-11", nombre: "Dušan Vlahović",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "rs",     altura: 190 },
        { id: "player:ita-juv-12", nombre: "Mattia Perin",         numero: 36, posicion: "GK",  pieHabil: "derecho",   edad: 33, nacionalidad: "it",     altura: 188 },
        { id: "player:ita-juv-13", nombre: "Lloyd Kelly",          numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "gb-eng", altura: 188 },
        { id: "player:ita-juv-14", nombre: "Juan Cabal",           numero: 32, posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "co",     altura: 184 },
        { id: "player:ita-juv-15", nombre: "Nicolò Savona",        numero: 37, posicion: "DEF", pieHabil: "derecho",   edad: 23, nacionalidad: "it",     altura: 184 },
        { id: "player:ita-juv-16", nombre: "Weston McKennie",      numero: 16, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "us",     altura: 185 },
        { id: "player:ita-juv-17", nombre: "Douglas Luiz",         numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "br",     altura: 178 },
        { id: "player:ita-juv-18", nombre: "Nicolò Fagioli",       numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 25, nacionalidad: "it",     altura: 178 },
        { id: "player:ita-juv-19", nombre: "Timothy Weah",         numero: 22, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "us",     altura: 185 },
        { id: "player:ita-juv-20", nombre: "Randal Kolo Muani",    numero: 20, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "fr",     altura: 187 },
        { id: "player:ita-juv-21", nombre: "Danilo",               numero: 13, posicion: "DEF", pieHabil: "derecho",   edad: 35, nacionalidad: "br",     altura: 184 },
        { id: "player:ita-juv-22", nombre: "Fabio Miretti",        numero: 14, posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "it",     altura: 178 },
        { id: "player:ita-juv-23", nombre: "Carlo Pinsoglio",      numero: 23, posicion: "GK",  pieHabil: "derecho",   edad: 36, nacionalidad: "it",     altura: 192 },
    ],

    "team:ita-ata": [
        { id: "player:ita-ata-1",  nombre: "Marco Carnesecchi",    numero: 29, posicion: "GK",  pieHabil: "derecho",   edad: 26, nacionalidad: "it", altura: 191 },
        { id: "player:ita-ata-2",  nombre: "Berat Djimsiti",       numero: 19, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "al", altura: 191 },
        { id: "player:ita-ata-3",  nombre: "Isak Hien",            numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "se", altura: 192 },
        { id: "player:ita-ata-4",  nombre: "Sead Kolašinac",       numero: 23, posicion: "DEF", pieHabil: "izquierdo", edad: 33, nacionalidad: "ba", altura: 183 },
        { id: "player:ita-ata-5",  nombre: "Davide Zappacosta",    numero: 77, posicion: "MID", pieHabil: "derecho",   edad: 34, nacionalidad: "it", altura: 180 },
        { id: "player:ita-ata-6",  nombre: "Marten de Roon",       numero: 15, posicion: "MID", pieHabil: "derecho",   edad: 35, nacionalidad: "nl", altura: 184 },
        { id: "player:ita-ata-7",  nombre: "Éderson",              numero: 13, posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "br", altura: 183 },
        { id: "player:ita-ata-8",  nombre: "Raoul Bellanova",      numero: 16, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "it", altura: 183 },
        { id: "player:ita-ata-9",  nombre: "Ademola Lookman",      numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "ng", altura: 174 },
        { id: "player:ita-ata-10", nombre: "Charles De Ketelaere", numero: 17, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "be", altura: 192 },
        { id: "player:ita-ata-11", nombre: "Mateo Retegui",        numero: 32, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "it", altura: 186 },
        { id: "player:ita-ata-12", nombre: "Juan Musso",           numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 191 },
        { id: "player:ita-ata-13", nombre: "Odilon Kossounou",     numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "ci", altura: 191 },
        { id: "player:ita-ata-14", nombre: "Ben Godfrey",          numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "gb-eng", altura: 185 },
        { id: "player:ita-ata-15", nombre: "Giorgio Scalvini",     numero: 42, posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "it", altura: 194 },
        { id: "player:ita-ata-16", nombre: "Mario Pašalić",        numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "hr", altura: 188 },
        { id: "player:ita-ata-17", nombre: "Marco Brescianini",    numero: 44, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "it", altura: 183 },
        { id: "player:ita-ata-18", nombre: "Lazar Samardžić",      numero: 24, posicion: "MID", pieHabil: "izquierdo", edad: 24, nacionalidad: "rs", altura: 184 },
        { id: "player:ita-ata-19", nombre: "Gianluca Scamacca",    numero: 90, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "it", altura: 195 },
        { id: "player:ita-ata-20", nombre: "Daniel Maldini",       numero: 70, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "it", altura: 180 },
        { id: "player:ita-ata-21", nombre: "Matteo Ruggeri",       numero: 22, posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "it", altura: 185 },
        { id: "player:ita-ata-22", nombre: "Nicolò Zaniolo",       numero: 91, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "it", altura: 190 },
        { id: "player:ita-ata-23", nombre: "Francesco Rossi",      numero: 31, posicion: "GK",  pieHabil: "derecho",   edad: 34, nacionalidad: "it", altura: 190 },
    ],
};
