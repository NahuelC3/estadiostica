// ============================================================
//  data/uru-primera/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Peñarol y Nacional). El resto de la
//  liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:uru-pen": [
        { id: "player:uru-pen-1",  nombre: "Washington Aguerre",   numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 34, nacionalidad: "uy", altura: 188 },
        { id: "player:uru-pen-2",  nombre: "Pedro Milans",         numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 178 },
        { id: "player:uru-pen-3",  nombre: "Javier Méndez",        numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 184 },
        { id: "player:uru-pen-4",  nombre: "Nahuel Herrera",       numero: 22, posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "uy", altura: 186 },
        { id: "player:uru-pen-5",  nombre: "Leonardo Sequeira",    numero: 14, posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "uy", altura: 177 },
        { id: "player:uru-pen-6",  nombre: "Jaime Báez",           numero: 7,  posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-pen-7",  nombre: "Eric Remedi",          numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "ar", altura: 181 },
        { id: "player:uru-pen-8",  nombre: "Ignacio Sosa",         numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "uy", altura: 178 },
        { id: "player:uru-pen-9",  nombre: "Maximiliano Silvera",  numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "uy", altura: 183 },
        {
            id: "player:uru-pen-10", nombre: "Gastón Ramírez",     numero: 10, posicion: "MID", pieHabil: "derecho",   edad: 35, nacionalidad: "uy", altura: 183,
            trayectoria: [
                { año: "2010", club: "Bologna",     pj: 60,  goles: 12, asistencias: 9 },
                { año: "2012", club: "Southampton", pj: 59,  goles: 6,  asistencias: 8 },
                { año: "2017", club: "Sampdoria",   pj: 120, goles: 19, asistencias: 18 },
                { año: "2022", club: "Peñarol",     pj: 70,  goles: 14, asistencias: 16 },
                { año: "2026", club: "Peñarol",     pj: 5,   goles: 2,  asistencias: 2 },
            ],
        },
        { id: "player:uru-pen-11", nombre: "Leonardo Fernández",   numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "uy", altura: 174 },
        { id: "player:uru-pen-12", nombre: "Guillermo de Amores",  numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 189 },
        { id: "player:uru-pen-13", nombre: "Guzmán Rodríguez",     numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 183 },
        { id: "player:uru-pen-14", nombre: "Emanuel Gularte",      numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 29, nacionalidad: "uy", altura: 186 },
        { id: "player:uru-pen-15", nombre: "Lucas Hernández",      numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 178 },
        { id: "player:uru-pen-16", nombre: "Rodrigo Pérez",        numero: 16, posicion: "MID", pieHabil: "derecho",   edad: 23, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-pen-17", nombre: "Ignacio Laquintana",   numero: 11, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "uy", altura: 172 },
        { id: "player:uru-pen-18", nombre: "Diego García",         numero: 17, posicion: "FWD", pieHabil: "derecho",   edad: 28, nacionalidad: "uy", altura: 180 },
        { id: "player:uru-pen-19", nombre: "David Terans",         numero: 21, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-pen-20", nombre: "Matías Arezo",         numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 182 },
        { id: "player:uru-pen-21", nombre: "Javier Cabrera",       numero: 23, posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "uy", altura: 179 },
        { id: "player:uru-pen-22", nombre: "Damián García",        numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 175 },
        { id: "player:uru-pen-23", nombre: "Brandon Cáceres",      numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 187 },
    ],

    "team:uru-nac": [
        { id: "player:uru-nac-1",  nombre: "Luis Mejía",           numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 35, nacionalidad: "pa", altura: 189 },
        { id: "player:uru-nac-2",  nombre: "Nicolás Marichal",     numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "uy", altura: 187 },
        { id: "player:uru-nac-3",  nombre: "Sebastián Coates",     numero: 16, posicion: "DEF", pieHabil: "derecho",   edad: 35, nacionalidad: "uy", altura: 196 },
        { id: "player:uru-nac-4",  nombre: "Diego Romero",         numero: 23, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 183 },
        { id: "player:uru-nac-5",  nombre: "Nicolás Rodríguez",    numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-nac-6",  nombre: "Rodrigo Zabala",       numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "ar", altura: 180 },
        { id: "player:uru-nac-7",  nombre: "Christian Oliva",      numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 183 },
        { id: "player:uru-nac-8",  nombre: "Lucas Rodríguez",      numero: 7,  posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "uy", altura: 173 },
        { id: "player:uru-nac-9",  nombre: "Maximiliano Gómez",    numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 187 },
        { id: "player:uru-nac-10", nombre: "Gonzalo Carneiro",     numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "uy", altura: 182 },
        { id: "player:uru-nac-11", nombre: "Luciano Rodríguez",    numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 180 },
        { id: "player:uru-nac-12", nombre: "Sebastián Britos",     numero: 25, posicion: "GK",  pieHabil: "derecho",   edad: 37, nacionalidad: "uy", altura: 188 },
        { id: "player:uru-nac-13", nombre: "Alfonso Trezza",       numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 21, nacionalidad: "uy", altura: 184 },
        { id: "player:uru-nac-14", nombre: "Juan Cruz de los Santos", numero: 14, posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "uy", altura: 183 },
        { id: "player:uru-nac-15", nombre: "Emiliano Ancheta",     numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 178 },
        { id: "player:uru-nac-16", nombre: "Yonatan Rodríguez",    numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-nac-17", nombre: "Felipe Carballo",      numero: 10, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "uy", altura: 180 },
        { id: "player:uru-nac-18", nombre: "Diego Rodríguez",      numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 175 },
        { id: "player:uru-nac-19", nombre: "Nicolás López",        numero: 20, posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "uy", altura: 176 },
        { id: "player:uru-nac-20", nombre: "Maximiliano Cantera",  numero: 17, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "uy", altura: 182 },
        { id: "player:uru-nac-21", nombre: "Nicolás Schiappacasse", numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "uy", altura: 180 },
        { id: "player:uru-nac-22", nombre: "Bautista Barros",      numero: 26, posicion: "MID", pieHabil: "izquierdo", edad: 20, nacionalidad: "uy", altura: 174 },
        { id: "player:uru-nac-23", nombre: "Cristopher Fiermarín", numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 187 },
    ],
};
