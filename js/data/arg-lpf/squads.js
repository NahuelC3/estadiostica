// ============================================================
//  data/arg-lpf/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  Sólo 2 equipos por liga tienen plantel manual (River e Instituto).
//  El resto se genera de forma determinista en db.js (generarPlantel).
//
//  Orden del array = "lista de buena fe": los primeros 11 son un once
//  tipo, del arquero a los delanteros. El detalle de partido referencia
//  a los jugadores por su id (player:<liga>-<abbr>-<n>, con n = posición
//  en este array), así que ese orden importa.
// ============================================================

/**
 * @typedef {Object} JugadorCrudo
 * @property {string} id
 * @property {string} nombre
 * @property {number} numero        dorsal real (puede no coincidir con el n del id)
 * @property {'GK'|'DEF'|'MID'|'FWD'} posicion
 * @property {'derecho'|'izquierdo'|'ambidiestro'} pieHabil
 * @property {number} edad
 * @property {string} nacionalidad  código flag-icons ("ar", "br", "cl"...)
 * @property {number} altura        en cm
 * @property {{año:string,club:string,pj:number,goles:number,asistencias:number}[]} [trayectoria]
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:arg-riv": [
        { id: "player:arg-riv-1",  nombre: "Franco Armani",       numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 38, nacionalidad: "ar", altura: 189 },
        { id: "player:arg-riv-2",  nombre: "Gonzalo Montiel",     numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "ar", altura: 176 },
        { id: "player:arg-riv-3",  nombre: "Paulo Díaz",          numero: 17, posicion: "DEF", pieHabil: "derecho",   edad: 31, nacionalidad: "cl", altura: 180 },
        { id: "player:arg-riv-4",  nombre: "Germán Pezzella",     numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "ar", altura: 187 },
        { id: "player:arg-riv-5",  nombre: "Marcos Acuña",        numero: 8,  posicion: "DEF", pieHabil: "izquierdo", edad: 34, nacionalidad: "ar", altura: 172 },
        { id: "player:arg-riv-6",  nombre: "Enzo Pérez",          numero: 24, posicion: "MID", pieHabil: "derecho",   edad: 40, nacionalidad: "ar", altura: 178 },
        { id: "player:arg-riv-7",  nombre: "Rodrigo Aliendro",    numero: 23, posicion: "MID", pieHabil: "derecho",   edad: 34, nacionalidad: "ar", altura: 178 },
        { id: "player:arg-riv-8",  nombre: "Ignacio Fernández",   numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 35, nacionalidad: "ar", altura: 173 },
        { id: "player:arg-riv-9",  nombre: "Sebastián Driussi",   numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "ar", altura: 181 },
        {
            id: "player:arg-riv-10", nombre: "Facundo Colidio",   numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 178,
            trayectoria: [
                { año: "2019", club: "Tigre",       pj: 12, goles: 2,  asistencias: 1 },
                { año: "2020", club: "Talleres",    pj: 24, goles: 5,  asistencias: 3 },
                { año: "2022", club: "Colón",       pj: 31, goles: 9,  asistencias: 4 },
                { año: "2024", club: "River Plate", pj: 38, goles: 12, asistencias: 7 },
                { año: "2026", club: "River Plate", pj: 5,  goles: 3,  asistencias: 2 },
            ],
        },
        { id: "player:arg-riv-11", nombre: "Maximiliano Salas",   numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "ar", altura: 180 },
        { id: "player:arg-riv-12", nombre: "Jeremías Ledesma",    numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 190 },
        { id: "player:arg-riv-13", nombre: "Fabricio Bustos",     numero: 22, posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "ar", altura: 172 },
        { id: "player:arg-riv-14", nombre: "Lucas Martínez Quarta", numero: 3, posicion: "DEF", pieHabil: "derecho",  edad: 29, nacionalidad: "ar", altura: 183 },
        { id: "player:arg-riv-15", nombre: "Milton Casco",        numero: 20, posicion: "DEF", pieHabil: "izquierdo", edad: 37, nacionalidad: "ar", altura: 177 },
        { id: "player:arg-riv-16", nombre: "Kevin Castaño",       numero: 30, posicion: "MID", pieHabil: "derecho",   edad: 24, nacionalidad: "co", altura: 182 },
        { id: "player:arg-riv-17", nombre: "Giuliano Galoppo",    numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 182 },
        { id: "player:arg-riv-18", nombre: "Juan Portillo",       numero: 15, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 179 },
        { id: "player:arg-riv-19", nombre: "Miguel Borja",        numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "co", altura: 183 },
        { id: "player:arg-riv-20", nombre: "Ian Subiabre",        numero: 36, posicion: "FWD", pieHabil: "izquierdo", edad: 18, nacionalidad: "ar", altura: 174 },
        { id: "player:arg-riv-21", nombre: "Marcos Acevedo",      numero: 33, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "ar", altura: 181 },
        { id: "player:arg-riv-22", nombre: "Santiago Lencina",    numero: 42, posicion: "MID", pieHabil: "derecho",   edad: 19, nacionalidad: "ar", altura: 176 },
        { id: "player:arg-riv-23", nombre: "Santiago Beltrán",    numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "ar", altura: 188 },
    ],

    "team:arg-ins": [
        { id: "player:arg-ins-1",  nombre: "Manuel Roffo",        numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 27, nacionalidad: "ar", altura: 187 },
        { id: "player:arg-ins-2",  nombre: "Fernando Alarcón",    numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "ar", altura: 179 },
        { id: "player:arg-ins-3",  nombre: "Nicolás Watson",      numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "ar", altura: 183 },
        { id: "player:arg-ins-4",  nombre: "Yonatan Cabral",      numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 186 },
        { id: "player:arg-ins-5",  nombre: "Alex Luna",           numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "ar", altura: 175 },
        { id: "player:arg-ins-6",  nombre: "Gabriel Graciani",    numero: 10, posicion: "MID", pieHabil: "izquierdo", edad: 29, nacionalidad: "ar", altura: 174 },
        { id: "player:arg-ins-7",  nombre: "Franco Watson",       numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "ar", altura: 177 },
        { id: "player:arg-ins-8",  nombre: "Santiago Rodríguez",  numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 180 },
        { id: "player:arg-ins-9",  nombre: "Damián Puebla",       numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "ar", altura: 176 },
        { id: "player:arg-ins-10", nombre: "Santiago Fernández",  numero: 11, posicion: "FWD", pieHabil: "izquierdo", edad: 25, nacionalidad: "ar", altura: 178 },
        { id: "player:arg-ins-11", nombre: "Jonás Aguirre",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "ar", altura: 184 },
        { id: "player:arg-ins-12", nombre: "Federico Cámara",     numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 24, nacionalidad: "ar", altura: 185 },
        { id: "player:arg-ins-13", nombre: "Bruno Sepúlveda",     numero: 23, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "ar", altura: 182 },
        { id: "player:arg-ins-14", nombre: "Ezequiel Parnisari",  numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "ar", altura: 180 },
        { id: "player:arg-ins-15", nombre: "Robertino Seratto",   numero: 30, posicion: "MID", pieHabil: "derecho",   edad: 25, nacionalidad: "ar", altura: 178 },
        { id: "player:arg-ins-16", nombre: "Tomás Almada",        numero: 18, posicion: "MID", pieHabil: "izquierdo", edad: 24, nacionalidad: "ar", altura: 176 },
        { id: "player:arg-ins-17", nombre: "Luca Sosa",           numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "ar", altura: 179 },
        { id: "player:arg-ins-18", nombre: "Adrián Martínez",     numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 181 },
        { id: "player:arg-ins-19", nombre: "Facundo Suárez",      numero: 22, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "ar", altura: 177 },
        { id: "player:arg-ins-20", nombre: "Gastón Aguirre",      numero: 33, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "ar", altura: 183 },
        { id: "player:arg-ins-21", nombre: "Lucas Barrios",       numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "ar", altura: 175 },
        { id: "player:arg-ins-22", nombre: "Matías Bustos",       numero: 27, posicion: "FWD", pieHabil: "izquierdo", edad: 19, nacionalidad: "ar", altura: 173 },
        { id: "player:arg-ins-23", nombre: "Joaquín Papaleo",     numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 20, nacionalidad: "ar", altura: 186 },
    ],
};
