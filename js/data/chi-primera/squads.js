// ============================================================
//  data/chi-primera/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Colo-Colo y Universidad de Chile).
//  El resto de la liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:chi-col": [
        { id: "player:chi-col-1",  nombre: "Fernando de Paul",     numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 34, nacionalidad: "cl", altura: 187 },
        { id: "player:chi-col-2",  nombre: "Mauricio Isla",        numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 38, nacionalidad: "cl", altura: 180 },
        { id: "player:chi-col-3",  nombre: "Alan Saldivia",        numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "uy", altura: 186 },
        { id: "player:chi-col-4",  nombre: "Sebastián Vegas",      numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 29, nacionalidad: "cl", altura: 185 },
        { id: "player:chi-col-5",  nombre: "Erick Wiemberg",       numero: 15, posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "cl", altura: 178 },
        { id: "player:chi-col-6",  nombre: "Esteban Pavez",        numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 35, nacionalidad: "cl", altura: 178 },
        {
            id: "player:chi-col-7", nombre: "Arturo Vidal",        numero: 23, posicion: "MID", pieHabil: "derecho",   edad: 39, nacionalidad: "cl", altura: 180,
            trayectoria: [
                { año: "2007", club: "Colo-Colo",       pj: 81,  goles: 11, asistencias: 8 },
                { año: "2011", club: "Juventus",        pj: 171, goles: 48, asistencias: 31 },
                { año: "2015", club: "Bayern München",  pj: 124, goles: 22, asistencias: 17 },
                { año: "2018", club: "FC Barcelona",    pj: 96,  goles: 11, asistencias: 8 },
                { año: "2020", club: "Inter de Milán",  pj: 72,  goles: 6,  asistencias: 8 },
                { año: "2022", club: "Flamengo",        pj: 44,  goles: 6,  asistencias: 5 },
                { año: "2024", club: "Colo-Colo",       pj: 55,  goles: 8,  asistencias: 9 },
                { año: "2026", club: "Colo-Colo",       pj: 5,   goles: 1,  asistencias: 2 },
            ],
        },
        { id: "player:chi-col-8",  nombre: "Vicente Pizarro",      numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "cl", altura: 178 },
        { id: "player:chi-col-9",  nombre: "Lucas Cepeda",         numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "cl", altura: 175 },
        { id: "player:chi-col-10", nombre: "Javier Correa",        numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "ar", altura: 186 },
        { id: "player:chi-col-11", nombre: "Salomón Rodríguez",    numero: 18, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "uy", altura: 183 },
        { id: "player:chi-col-12", nombre: "Brayan Cortés",        numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 31, nacionalidad: "cl", altura: 188 },
        { id: "player:chi-col-13", nombre: "Daniel Gutiérrez",     numero: 17, posicion: "DEF", pieHabil: "izquierdo", edad: 27, nacionalidad: "cl", altura: 180 },
        { id: "player:chi-col-14", nombre: "Emiliano Amor",        numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 183 },
        { id: "player:chi-col-15", nombre: "Óscar Opazo",          numero: 16, posicion: "DEF", pieHabil: "derecho",   edad: 35, nacionalidad: "cl", altura: 174 },
        { id: "player:chi-col-16", nombre: "Marcos Bolados",       numero: 7,  posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "cl", altura: 173 },
        { id: "player:chi-col-17", nombre: "Claudio Aquino",       numero: 10, posicion: "MID", pieHabil: "izquierdo", edad: 34, nacionalidad: "ar", altura: 172 },
        { id: "player:chi-col-18", nombre: "Víctor Felipe Méndez", numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "cl", altura: 180 },
        { id: "player:chi-col-19", nombre: "Cristián Zavala",      numero: 12, posicion: "FWD", pieHabil: "izquierdo", edad: 26, nacionalidad: "cl", altura: 172 },
        { id: "player:chi-col-20", nombre: "Francisco Marchán",    numero: 26, posicion: "FWD", pieHabil: "derecho",   edad: 21, nacionalidad: "cl", altura: 178 },
        { id: "player:chi-col-21", nombre: "Nicolás Fernández",    numero: 30, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "cl", altura: 185 },
        { id: "player:chi-col-22", nombre: "Vicente Álvarez",      numero: 14, posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "cl", altura: 174 },
        { id: "player:chi-col-23", nombre: "Eduardo Villanueva",   numero: 35, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "cl", altura: 189 },
    ],

    "team:chi-uch": [
        { id: "player:chi-uch-1",  nombre: "Gabriel Castellón",    numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 31, nacionalidad: "cl", altura: 187 },
        { id: "player:chi-uch-2",  nombre: "Fabián Hormazábal",    numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "cl", altura: 178 },
        { id: "player:chi-uch-3",  nombre: "Matías Zaldivia",      numero: 14, posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "cl", altura: 185 },
        { id: "player:chi-uch-4",  nombre: "Franco Calderón",      numero: 26, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 185 },
        { id: "player:chi-uch-5",  nombre: "Marcelo Morales",      numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 22, nacionalidad: "cl", altura: 176 },
        { id: "player:chi-uch-6",  nombre: "Marcelo Díaz",         numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 39, nacionalidad: "cl", altura: 172 },
        { id: "player:chi-uch-7",  nombre: "Israel Poblete",       numero: 24, posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "cl", altura: 176 },
        { id: "player:chi-uch-8",  nombre: "Charles Aránguiz",     numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 37, nacionalidad: "cl", altura: 173 },
        { id: "player:chi-uch-9",  nombre: "Nicolás Guerra",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "cl", altura: 180 },
        { id: "player:chi-uch-10", nombre: "Lucas Assadi",         numero: 10, posicion: "FWD", pieHabil: "izquierdo", edad: 22, nacionalidad: "cl", altura: 172 },
        { id: "player:chi-uch-11", nombre: "Leandro Fernández",    numero: 11, posicion: "FWD", pieHabil: "izquierdo", edad: 33, nacionalidad: "ar", altura: 175 },
        { id: "player:chi-uch-12", nombre: "Cristóbal Campos",     numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 24, nacionalidad: "cl", altura: 188 },
        { id: "player:chi-uch-13", nombre: "José Castro",          numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "cl", altura: 177 },
        { id: "player:chi-uch-14", nombre: "Nicolás Ramírez",      numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "cl", altura: 186 },
        { id: "player:chi-uch-15", nombre: "Ignacio Tapia",        numero: 33, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "cl", altura: 180 },
        { id: "player:chi-uch-16", nombre: "Felipe Salinas",       numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "cl", altura: 178 },
        { id: "player:chi-uch-17", nombre: "Maximiliano Guerrero", numero: 7,  posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "cl", altura: 173 },
        { id: "player:chi-uch-18", nombre: "Javier Altamirano",    numero: 15, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "cl", altura: 176 },
        { id: "player:chi-uch-19", nombre: "Rodrigo Contreras",    numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "ar", altura: 183 },
        { id: "player:chi-uch-20", nombre: "Cristián Palacios",    numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 35, nacionalidad: "uy", altura: 178 },
        { id: "player:chi-uch-21", nombre: "Franco Parra",         numero: 28, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "cl", altura: 175 },
        { id: "player:chi-uch-22", nombre: "Renato Huerta",        numero: 32, posicion: "FWD", pieHabil: "derecho",   edad: 20, nacionalidad: "cl", altura: 176 },
        { id: "player:chi-uch-23", nombre: "Martín Parra",         numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 21, nacionalidad: "cl", altura: 190 },
    ],
};
