// ============================================================
//  data/por-primeira/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (FC Porto y SC Braga). El resto de la
//  liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:por-por": [
        { id: "player:por-por-1",  nombre: "Diogo Costa",         numero: 99, posicion: "GK",  pieHabil: "derecho",   edad: 26, nacionalidad: "pt", altura: 186 },
        { id: "player:por-por-2",  nombre: "João Mário",          numero: 21, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "pt", altura: 180 },
        { id: "player:por-por-3",  nombre: "Nehuén Pérez",        numero: 24, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 185 },
        { id: "player:por-por-4",  nombre: "Zé Pedro",            numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "pt", altura: 186 },
        { id: "player:por-por-5",  nombre: "Francisco Moura",     numero: 47, posicion: "DEF", pieHabil: "izquierdo", edad: 26, nacionalidad: "pt", altura: 178 },
        { id: "player:por-por-6",  nombre: "Alan Varela",         numero: 25, posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "ar", altura: 172 },
        { id: "player:por-por-7",  nombre: "Stephen Eustáquio",   numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "ca", altura: 175 },
        { id: "player:por-por-8",  nombre: "Gabri Veiga",         numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "es", altura: 180 },
        { id: "player:por-por-9",  nombre: "Samu Aghehowa",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "es", altura: 190 },
        {
            id: "player:por-por-10", nombre: "Pepê",              numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "br", altura: 175,
            trayectoria: [
                { año: "2017", club: "Grêmio",   pj: 96,  goles: 14, asistencias: 12 },
                { año: "2021", club: "FC Porto", pj: 190, goles: 45, asistencias: 38 },
                { año: "2026", club: "FC Porto", pj: 5,   goles: 3,  asistencias: 2 },
            ],
        },
        { id: "player:por-por-11", nombre: "William Gomes",       numero: 77, posicion: "FWD", pieHabil: "izquierdo", edad: 19, nacionalidad: "br", altura: 175 },
        { id: "player:por-por-12", nombre: "Cláudio Ramos",       numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 34, nacionalidad: "pt", altura: 187 },
        { id: "player:por-por-13", nombre: "Alberto Costa",       numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "pt", altura: 179 },
        { id: "player:por-por-14", nombre: "Otávio",              numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "br", altura: 185 },
        { id: "player:por-por-15", nombre: "Martim Fernandes",    numero: 13, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "pt", altura: 178 },
        { id: "player:por-por-16", nombre: "Fábio Vieira",        numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "pt", altura: 170 },
        { id: "player:por-por-17", nombre: "Rodrigo Mora",        numero: 61, posicion: "MID", pieHabil: "izquierdo", edad: 19, nacionalidad: "pt", altura: 172 },
        { id: "player:por-por-18", nombre: "Tomás Pérez",         numero: 44, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "ar", altura: 183 },
        { id: "player:por-por-19", nombre: "Deniz Gül",           numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "se", altura: 189 },
        { id: "player:por-por-20", nombre: "Ivan Jaime",          numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 25, nacionalidad: "es", altura: 176 },
        { id: "player:por-por-21", nombre: "Dominik Prpić",       numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 21, nacionalidad: "hr", altura: 190 },
        { id: "player:por-por-22", nombre: "Vasco Sousa",         numero: 62, posicion: "MID", pieHabil: "izquierdo", edad: 20, nacionalidad: "pt", altura: 172 },
        { id: "player:por-por-23", nombre: "Gonçalo Ribeiro",     numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 21, nacionalidad: "pt", altura: 188 },
    ],

    "team:por-brg": [
        { id: "player:por-brg-1",  nombre: "Matheus",             numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "br", altura: 190 },
        { id: "player:por-brg-2",  nombre: "Víctor Gómez",        numero: 34, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "es", altura: 178 },
        { id: "player:por-brg-3",  nombre: "Sikou Niakaté",       numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "ml", altura: 186 },
        { id: "player:por-brg-4",  nombre: "Paulo Oliveira",      numero: 24, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "pt", altura: 187 },
        { id: "player:por-brg-5",  nombre: "Adrián Marín",        numero: 32, posicion: "DEF", pieHabil: "izquierdo", edad: 29, nacionalidad: "es", altura: 175 },
        { id: "player:por-brg-6",  nombre: "João Moutinho",       numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 39, nacionalidad: "pt", altura: 170 },
        { id: "player:por-brg-7",  nombre: "Ricardo Horta",       numero: 10, posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "pt", altura: 173 },
        { id: "player:por-brg-8",  nombre: "Rodrigo Zalazar",     numero: 20, posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "uy", altura: 180 },
        { id: "player:por-brg-9",  nombre: "Fran Navarro",        numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "es", altura: 186 },
        { id: "player:por-brg-10", nombre: "Gabri Martínez",      numero: 17, posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "es", altura: 182 },
        { id: "player:por-brg-11", nombre: "Roger Fernandes",     numero: 47, posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "pt", altura: 178 },
        { id: "player:por-brg-12", nombre: "Lukáš Horníček",      numero: 30, posicion: "GK",  pieHabil: "derecho",   edad: 23, nacionalidad: "cz", altura: 191 },
        { id: "player:por-brg-13", nombre: "Cristián Borja",      numero: 25, posicion: "DEF", pieHabil: "izquierdo", edad: 32, nacionalidad: "co", altura: 178 },
        { id: "player:por-brg-14", nombre: "Robson Bambu",        numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "br", altura: 186 },
        { id: "player:por-brg-15", nombre: "Gabriel Noga",        numero: 27, posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "br", altura: 190 },
        { id: "player:por-brg-16", nombre: "Vítor Carvalho",      numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 182 },
        { id: "player:por-brg-17", nombre: "André Horta",         numero: 88, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "pt", altura: 180 },
        { id: "player:por-brg-18", nombre: "João Ferreira",       numero: 45, posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "pt", altura: 180 },
        { id: "player:por-brg-19", nombre: "Bruma",               numero: 77, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "pt", altura: 176 },
        { id: "player:por-brg-20", nombre: "Amine El Ouazzani",   numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "fr", altura: 185 },
        { id: "player:por-brg-21", nombre: "Arsenio Nunes",       numero: 23, posicion: "DEF", pieHabil: "izquierdo", edad: 21, nacionalidad: "pt", altura: 175 },
        { id: "player:por-brg-22", nombre: "Gorby Baptiste",      numero: 7,  posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "fr", altura: 178 },
        { id: "player:por-brg-23", nombre: "Tiago Sá",            numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 28, nacionalidad: "pt", altura: 190 },
    ],
};
