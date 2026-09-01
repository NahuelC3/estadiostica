// ============================================================
//  data/fra-ligue1/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Paris Saint-Germain y Olympique de
//  Marsella). El resto de la liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:fra-psg": [
        { id: "player:fra-psg-1",  nombre: "Lucas Chevalier",      numero: 30, posicion: "GK",  pieHabil: "izquierdo", edad: 25, nacionalidad: "fr",     altura: 189 },
        { id: "player:fra-psg-2",  nombre: "Achraf Hakimi",        numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "ma",     altura: 181 },
        { id: "player:fra-psg-3",  nombre: "Marquinhos",           numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "br",     altura: 183 },
        { id: "player:fra-psg-4",  nombre: "Willian Pacho",        numero: 51, posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "ec",     altura: 187 },
        { id: "player:fra-psg-5",  nombre: "Nuno Mendes",          numero: 25, posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "pt",     altura: 179 },
        { id: "player:fra-psg-6",  nombre: "Vitinha",              numero: 17, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "pt",     altura: 172 },
        { id: "player:fra-psg-7",  nombre: "João Neves",           numero: 87, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "pt",     altura: 174 },
        { id: "player:fra-psg-8",  nombre: "Fabián Ruiz",          numero: 8,  posicion: "MID", pieHabil: "izquierdo", edad: 30, nacionalidad: "es",     altura: 189 },
        { id: "player:fra-psg-9",  nombre: "Bradley Barcola",      numero: 29, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "fr",     altura: 182 },
        {
            id: "player:fra-psg-10", nombre: "Ousmane Dembélé",    numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 29, nacionalidad: "fr",     altura: 178,
            trayectoria: [
                { año: "2015", club: "Stade Rennais",        pj: 29,  goles: 12, asistencias: 5 },
                { año: "2016", club: "Borussia Dortmund",    pj: 49,  goles: 13, asistencias: 12 },
                { año: "2017", club: "FC Barcelona",         pj: 185, goles: 40, asistencias: 44 },
                { año: "2023", club: "Paris Saint-Germain",  pj: 88,  goles: 39, asistencias: 23 },
                { año: "2026", club: "Paris Saint-Germain",  pj: 5,   goles: 4,  asistencias: 3 },
            ],
        },
        { id: "player:fra-psg-11", nombre: "Khvicha Kvaratskhelia", numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "ge",     altura: 183 },
        { id: "player:fra-psg-12", nombre: "Renato Marin",         numero: 99, posicion: "GK",  pieHabil: "derecho",   edad: 20, nacionalidad: "it",     altura: 190 },
        { id: "player:fra-psg-13", nombre: "Lucas Beraldo",        numero: 35, posicion: "DEF", pieHabil: "izquierdo", edad: 22, nacionalidad: "br",     altura: 185 },
        { id: "player:fra-psg-14", nombre: "Lucas Hernández",      numero: 21, posicion: "DEF", pieHabil: "izquierdo", edad: 30, nacionalidad: "fr",     altura: 184 },
        { id: "player:fra-psg-15", nombre: "Presnel Kimpembe",     numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 31, nacionalidad: "fr",     altura: 183 },
        { id: "player:fra-psg-16", nombre: "Warren Zaïre-Emery",   numero: 33, posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "fr",     altura: 178 },
        { id: "player:fra-psg-17", nombre: "Senny Mayulu",         numero: 24, posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "fr",     altura: 183 },
        { id: "player:fra-psg-18", nombre: "Kang-in Lee",          numero: 19, posicion: "MID", pieHabil: "izquierdo", edad: 25, nacionalidad: "kr",     altura: 173 },
        { id: "player:fra-psg-19", nombre: "Gonçalo Ramos",        numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "pt",     altura: 185 },
        { id: "player:fra-psg-20", nombre: "Désiré Doué",          numero: 14, posicion: "FWD", pieHabil: "izquierdo", edad: 21, nacionalidad: "fr",     altura: 181 },
        { id: "player:fra-psg-21", nombre: "Ibrahim Mbaye",        numero: 49, posicion: "FWD", pieHabil: "izquierdo", edad: 18, nacionalidad: "fr",     altura: 175 },
        { id: "player:fra-psg-22", nombre: "Yoram Zague",          numero: 37, posicion: "DEF", pieHabil: "derecho",   edad: 19, nacionalidad: "fr",     altura: 180 },
        { id: "player:fra-psg-23", nombre: "Arnau Tenas",          numero: 80, posicion: "GK",  pieHabil: "derecho",   edad: 25, nacionalidad: "es",     altura: 188 },
    ],

    "team:fra-mar": [
        { id: "player:fra-mar-1",  nombre: "Gerónimo Rulli",       numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 34, nacionalidad: "ar",     altura: 189 },
        { id: "player:fra-mar-2",  nombre: "Amir Murillo",         numero: 24, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "pa",     altura: 180 },
        { id: "player:fra-mar-3",  nombre: "Leonardo Balerdi",     numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "ar",     altura: 187 },
        { id: "player:fra-mar-4",  nombre: "Nayef Aguerd",         numero: 27, posicion: "DEF", pieHabil: "izquierdo", edad: 30, nacionalidad: "ma",     altura: 188 },
        { id: "player:fra-mar-5",  nombre: "Ulisses Garcia",       numero: 29, posicion: "DEF", pieHabil: "izquierdo", edad: 30, nacionalidad: "ch",     altura: 180 },
        { id: "player:fra-mar-6",  nombre: "Geoffrey Kondogbia",   numero: 12, posicion: "MID", pieHabil: "derecho",   edad: 33, nacionalidad: "cf",     altura: 188 },
        { id: "player:fra-mar-7",  nombre: "Pierre-Emile Højbjerg", numero: 23, posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "dk",     altura: 185 },
        { id: "player:fra-mar-8",  nombre: "Angel Gomes",          numero: 18, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "gb-eng", altura: 168 },
        { id: "player:fra-mar-9",  nombre: "Mason Greenwood",      numero: 10, posicion: "FWD", pieHabil: "izquierdo", edad: 25, nacionalidad: "gb-eng", altura: 181 },
        { id: "player:fra-mar-10", nombre: "Amine Gouiri",         numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "dz",     altura: 180 },
        { id: "player:fra-mar-11", nombre: "Igor Paixão",          numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 25, nacionalidad: "br",     altura: 175 },
        { id: "player:fra-mar-12", nombre: "Jeffrey de Lange",     numero: 30, posicion: "GK",  pieHabil: "derecho",   edad: 27, nacionalidad: "nl",     altura: 191 },
        { id: "player:fra-mar-13", nombre: "Facundo Medina",       numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 26, nacionalidad: "ar",     altura: 184 },
        { id: "player:fra-mar-14", nombre: "Emerson Palmieri",     numero: 33, posicion: "DEF", pieHabil: "izquierdo", edad: 32, nacionalidad: "it",     altura: 176 },
        { id: "player:fra-mar-15", nombre: "Bilal Nadir",          numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "ma",     altura: 178 },
        { id: "player:fra-mar-16", nombre: "Matt O'Riley",         numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 25, nacionalidad: "dk",     altura: 184 },
        { id: "player:fra-mar-17", nombre: "Arthur Vermeeren",     numero: 28, posicion: "MID", pieHabil: "izquierdo", edad: 21, nacionalidad: "be",     altura: 180 },
        { id: "player:fra-mar-18", nombre: "Darryl Bakola",        numero: 38, posicion: "MID", pieHabil: "derecho",   edad: 18, nacionalidad: "fr",     altura: 175 },
        { id: "player:fra-mar-19", nombre: "Neal Maupay",          numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "fr",     altura: 170 },
        { id: "player:fra-mar-20", nombre: "Robinio Vaz",          numero: 39, posicion: "FWD", pieHabil: "derecho",   edad: 18, nacionalidad: "fr",     altura: 185 },
        { id: "player:fra-mar-21", nombre: "Pol Lirola",           numero: 19, posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "es",     altura: 177 },
        { id: "player:fra-mar-22", nombre: "Faris Moumbagna",      numero: 20, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "cm",     altura: 190 },
        { id: "player:fra-mar-23", nombre: "Rémy Descamps",        numero: 16, posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "fr",     altura: 190 },
    ],
};
