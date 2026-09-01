// ============================================================
//  data/ale-bundesliga/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Bayern München y Bayer Leverkusen).
//  El resto de la liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:ale-fcb": [
        { id: "player:ale-fcb-1",  nombre: "Manuel Neuer",         numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 40, nacionalidad: "de",     altura: 193 },
        { id: "player:ale-fcb-2",  nombre: "Konrad Laimer",        numero: 24, posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "at",     altura: 180 },
        { id: "player:ale-fcb-3",  nombre: "Dayot Upamecano",      numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "fr",     altura: 186 },
        { id: "player:ale-fcb-4",  nombre: "Kim Min-jae",          numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "kr",     altura: 190 },
        { id: "player:ale-fcb-5",  nombre: "Alphonso Davies",      numero: 19, posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "ca",     altura: 181 },
        { id: "player:ale-fcb-6",  nombre: "Joshua Kimmich",       numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "de",     altura: 177 },
        { id: "player:ale-fcb-7",  nombre: "Aleksandar Pavlović",  numero: 45, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "de",     altura: 186 },
        { id: "player:ale-fcb-8",  nombre: "Jamal Musiala",        numero: 42, posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "de",     altura: 183 },
        { id: "player:ale-fcb-9",  nombre: "Michael Olise",        numero: 17, posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "fr",     altura: 183 },
        {
            id: "player:ale-fcb-10", nombre: "Harry Kane",         numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "gb-eng", altura: 188,
            trayectoria: [
                { año: "2010", club: "Leyton Orient / Millwall / Norwich / Leicester (préstamos)", pj: 80,  goles: 20,  asistencias: 8 },
                { año: "2013", club: "Tottenham Hotspur",                                          pj: 435, goles: 280, asistencias: 64 },
                { año: "2023", club: "Bayern München",                                             pj: 97,  goles: 94,  asistencias: 27 },
                { año: "2026", club: "Bayern München",                                             pj: 5,   goles: 7,   asistencias: 2 },
            ],
        },
        { id: "player:ale-fcb-11", nombre: "Kingsley Coman",       numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "fr",     altura: 180 },
        { id: "player:ale-fcb-12", nombre: "Sven Ulreich",         numero: 26, posicion: "GK",  pieHabil: "derecho",   edad: 38, nacionalidad: "de",     altura: 192 },
        { id: "player:ale-fcb-13", nombre: "Josip Stanišić",       numero: 44, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "hr",     altura: 187 },
        { id: "player:ale-fcb-14", nombre: "Eric Dier",            numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "gb-eng", altura: 188 },
        { id: "player:ale-fcb-15", nombre: "Sacha Boey",           numero: 23, posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "fr",     altura: 179 },
        { id: "player:ale-fcb-16", nombre: "Hiroki Itō",           numero: 21, posicion: "DEF", pieHabil: "izquierdo", edad: 27, nacionalidad: "jp",     altura: 188 },
        { id: "player:ale-fcb-17", nombre: "Leon Goretzka",        numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "de",     altura: 189 },
        { id: "player:ale-fcb-18", nombre: "João Palhinha",        numero: 16, posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "pt",     altura: 190 },
        { id: "player:ale-fcb-19", nombre: "Raphaël Guerreiro",    numero: 22, posicion: "MID", pieHabil: "izquierdo", edad: 32, nacionalidad: "pt",     altura: 170 },
        { id: "player:ale-fcb-20", nombre: "Serge Gnabry",         numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "de",     altura: 176 },
        { id: "player:ale-fcb-21", nombre: "Leroy Sané",           numero: 10, posicion: "FWD", pieHabil: "izquierdo", edad: 30, nacionalidad: "de",     altura: 183 },
        { id: "player:ale-fcb-22", nombre: "Thomas Müller",        numero: 25, posicion: "FWD", pieHabil: "derecho",   edad: 36, nacionalidad: "de",     altura: 186 },
        { id: "player:ale-fcb-23", nombre: "Daniel Peretz",        numero: 30, posicion: "GK",  pieHabil: "derecho",   edad: 25, nacionalidad: "il",     altura: 191 },
    ],

    "team:ale-b04": [
        { id: "player:ale-b04-1",  nombre: "Lukáš Hrádecký",       numero: 1,  posicion: "GK",  pieHabil: "izquierdo", edad: 36, nacionalidad: "fi", altura: 192 },
        { id: "player:ale-b04-2",  nombre: "Jeremie Frimpong",     numero: 30, posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "nl", altura: 171 },
        { id: "player:ale-b04-3",  nombre: "Jonathan Tah",         numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "de", altura: 195 },
        { id: "player:ale-b04-4",  nombre: "Edmond Tapsoba",       numero: 12, posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "bf", altura: 191 },
        { id: "player:ale-b04-5",  nombre: "Alejandro Grimaldo",   numero: 20, posicion: "DEF", pieHabil: "izquierdo", edad: 31, nacionalidad: "es", altura: 171 },
        { id: "player:ale-b04-6",  nombre: "Granit Xhaka",         numero: 34, posicion: "MID", pieHabil: "izquierdo", edad: 34, nacionalidad: "ch", altura: 185 },
        { id: "player:ale-b04-7",  nombre: "Robert Andrich",       numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 32, nacionalidad: "de", altura: 184 },
        { id: "player:ale-b04-8",  nombre: "Florian Wirtz",        numero: 10, posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "de", altura: 176 },
        { id: "player:ale-b04-9",  nombre: "Amine Adli",           numero: 21, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "ma", altura: 175 },
        { id: "player:ale-b04-10", nombre: "Victor Boniface",      numero: 22, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "ng", altura: 189 },
        { id: "player:ale-b04-11", nombre: "Patrik Schick",        numero: 14, posicion: "FWD", pieHabil: "izquierdo", edad: 30, nacionalidad: "cz", altura: 191 },
        { id: "player:ale-b04-12", nombre: "Matěj Kovář",          numero: 24, posicion: "GK",  pieHabil: "derecho",   edad: 26, nacionalidad: "cz", altura: 196 },
        { id: "player:ale-b04-13", nombre: "Piero Hincapié",       numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "ec", altura: 184 },
        { id: "player:ale-b04-14", nombre: "Nordi Mukiele",        numero: 16, posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "fr", altura: 187 },
        { id: "player:ale-b04-15", nombre: "Arthur",               numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 186 },
        { id: "player:ale-b04-16", nombre: "Exequiel Palacios",    numero: 25, posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "ar", altura: 178 },
        { id: "player:ale-b04-17", nombre: "Aleix García",         numero: 19, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "es", altura: 173 },
        { id: "player:ale-b04-18", nombre: "Gustavo Puerta",       numero: 27, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "co", altura: 182 },
        { id: "player:ale-b04-19", nombre: "Nathan Tella",         numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "ng", altura: 175 },
        { id: "player:ale-b04-20", nombre: "Martin Terrier",       numero: 11, posicion: "FWD", pieHabil: "izquierdo", edad: 29, nacionalidad: "fr", altura: 181 },
        { id: "player:ale-b04-21", nombre: "Jeanuël Belocian",     numero: 42, posicion: "DEF", pieHabil: "derecho",   edad: 21, nacionalidad: "fr", altura: 183 },
        { id: "player:ale-b04-22", nombre: "Ibrahim Maza",         numero: 15, posicion: "MID", pieHabil: "izquierdo", edad: 20, nacionalidad: "de", altura: 180 },
        { id: "player:ale-b04-23", nombre: "Niklas Lomb",          numero: 36, posicion: "GK",  pieHabil: "derecho",   edad: 32, nacionalidad: "de", altura: 190 },
    ],
};
