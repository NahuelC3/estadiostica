// ============================================================
//  data/ksa-proleague/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Al-Nassr y Al-Hilal). El resto de la
//  liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:ksa-nas": [
        { id: "player:ksa-nas-1",  nombre: "Bento",               numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 27, nacionalidad: "br", altura: 200 },
        { id: "player:ksa-nas-2",  nombre: "Sultan Al-Ghannam",   numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 31, nacionalidad: "sa", altura: 178 },
        { id: "player:ksa-nas-3",  nombre: "Iñigo Martínez",      numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 35, nacionalidad: "es", altura: 182 },
        { id: "player:ksa-nas-4",  nombre: "Mohammed Al-Fatil",   numero: 6,  posicion: "DEF", pieHabil: "derecho",   edad: 31, nacionalidad: "sa", altura: 180 },
        { id: "player:ksa-nas-5",  nombre: "Nawaf Boushal",       numero: 20, posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "sa", altura: 176 },
        { id: "player:ksa-nas-6",  nombre: "Marcelo Brozović",    numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 33, nacionalidad: "hr", altura: 181 },
        { id: "player:ksa-nas-7",  nombre: "Sami Al-Najei",       numero: 26, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "sa", altura: 180 },
        { id: "player:ksa-nas-8",  nombre: "Ángelo Gabriel",      numero: 11, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "br", altura: 170 },
        { id: "player:ksa-nas-9",  nombre: "João Félix",          numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "pt", altura: 181 },
        {
            id: "player:ksa-nas-10", nombre: "Cristiano Ronaldo", numero: 7,  posicion: "FWD", pieHabil: "derecho",   edad: 41, nacionalidad: "pt", altura: 187,
            trayectoria: [
                { año: "2002", club: "Sporting CP",        pj: 31,  goles: 5,   asistencias: 6 },
                { año: "2003", club: "Manchester United",  pj: 292, goles: 118, asistencias: 69 },
                { año: "2009", club: "Real Madrid",        pj: 438, goles: 451, asistencias: 131 },
                { año: "2018", club: "Juventus",           pj: 134, goles: 101, asistencias: 22 },
                { año: "2021", club: "Manchester United",  pj: 54,  goles: 27,  asistencias: 6 },
                { año: "2023", club: "Al-Nassr",           pj: 111, goles: 99,  asistencias: 20 },
                { año: "2026", club: "Al-Nassr",           pj: 5,   goles: 6,   asistencias: 1 },
            ],
        },
        { id: "player:ksa-nas-11", nombre: "Sadio Mané",          numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 34, nacionalidad: "sn", altura: 175 },
        { id: "player:ksa-nas-12", nombre: "Nawaf Al-Aqidi",      numero: 33, posicion: "GK",  pieHabil: "derecho",   edad: 25, nacionalidad: "sa", altura: 190 },
        { id: "player:ksa-nas-13", nombre: "Abdullah Madu",       numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "sa", altura: 185 },
        { id: "player:ksa-nas-14", nombre: "Ali Lajami",          numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "sa", altura: 186 },
        { id: "player:ksa-nas-15", nombre: "Ayman Yahya",         numero: 25, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "sa", altura: 170 },
        { id: "player:ksa-nas-16", nombre: "Abdulrahman Ghareeb", numero: 18, posicion: "MID", pieHabil: "izquierdo", edad: 28, nacionalidad: "sa", altura: 173 },
        { id: "player:ksa-nas-17", nombre: "Ayman Al-Khulaif",    numero: 40, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "sa", altura: 178 },
        { id: "player:ksa-nas-18", nombre: "Jhon Durán",          numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "co", altura: 187 },
        { id: "player:ksa-nas-19", nombre: "Otávio",              numero: 27, posicion: "FWD", pieHabil: "derecho",   edad: 31, nacionalidad: "br", altura: 173 },
        { id: "player:ksa-nas-20", nombre: "Mohamed Simakan",     numero: 22, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "fr", altura: 187 },
        { id: "player:ksa-nas-21", nombre: "Musab Al-Juwayr",     numero: 28, posicion: "MID", pieHabil: "izquierdo", edad: 21, nacionalidad: "sa", altura: 175 },
        { id: "player:ksa-nas-22", nombre: "Meshari Al-Nemer",    numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "sa", altura: 178 },
        { id: "player:ksa-nas-23", nombre: "Raghed Al-Najjar",    numero: 44, posicion: "GK",  pieHabil: "derecho",   edad: 24, nacionalidad: "sa", altura: 188 },
    ],

    "team:ksa-hil": [
        { id: "player:ksa-hil-1",  nombre: "Yassine Bounou",      numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 35, nacionalidad: "ma", altura: 195 },
        { id: "player:ksa-hil-2",  nombre: "João Cancelo",        numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 32, nacionalidad: "pt", altura: 182 },
        { id: "player:ksa-hil-3",  nombre: "Kalidou Koulibaly",   numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 35, nacionalidad: "sn", altura: 186 },
        { id: "player:ksa-hil-4",  nombre: "Ali Al-Bulaihi",      numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 36, nacionalidad: "sa", altura: 180 },
        { id: "player:ksa-hil-5",  nombre: "Renan Lodi",          numero: 12, posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "br", altura: 173 },
        { id: "player:ksa-hil-6",  nombre: "Rúben Neves",         numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "pt", altura: 180 },
        { id: "player:ksa-hil-7",  nombre: "Sergej Milinković-Savić", numero: 20, posicion: "MID", pieHabil: "derecho", edad: 31, nacionalidad: "rs", altura: 192 },
        { id: "player:ksa-hil-8",  nombre: "Nasser Al-Dawsari",   numero: 29, posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "sa", altura: 175 },
        { id: "player:ksa-hil-9",  nombre: "Malcom",              numero: 77, posicion: "FWD", pieHabil: "derecho",   edad: 29, nacionalidad: "br", altura: 170 },
        { id: "player:ksa-hil-10", nombre: "Salem Al-Dawsari",    numero: 10, posicion: "FWD", pieHabil: "derecho",   edad: 34, nacionalidad: "sa", altura: 170 },
        { id: "player:ksa-hil-11", nombre: "Marcos Leonardo",     numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "br", altura: 178 },
        { id: "player:ksa-hil-12", nombre: "Habib Al-Wotayan",    numero: 21, posicion: "GK",  pieHabil: "derecho",   edad: 28, nacionalidad: "sa", altura: 187 },
        { id: "player:ksa-hil-13", nombre: "Hamad Al-Yami",       numero: 5,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "sa", altura: 182 },
        { id: "player:ksa-hil-14", nombre: "Khalifah Al-Dawsari", numero: 25, posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "sa", altura: 176 },
        { id: "player:ksa-hil-15", nombre: "Abdullah Al-Hafith",  numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "sa", altura: 181 },
        { id: "player:ksa-hil-16", nombre: "Mohamed Kanno",       numero: 28, posicion: "MID", pieHabil: "derecho",   edad: 31, nacionalidad: "sa", altura: 183 },
        { id: "player:ksa-hil-17", nombre: "Abdullah Otayf",      numero: 14, posicion: "MID", pieHabil: "derecho",   edad: 33, nacionalidad: "sa", altura: 178 },
        { id: "player:ksa-hil-18", nombre: "Mohammed Al-Qahtani", numero: 17, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "sa", altura: 175 },
        { id: "player:ksa-hil-19", nombre: "Kaio César",          numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "br", altura: 178 },
        { id: "player:ksa-hil-20", nombre: "Abdulrahman Al-Oboud", numero: 27, posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "sa", altura: 172 },
        { id: "player:ksa-hil-21", nombre: "Hassan Al-Tambakti",  numero: 24, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "sa", altura: 184 },
        { id: "player:ksa-hil-22", nombre: "Nawaf Al-Abed",       numero: 88, posicion: "MID", pieHabil: "izquierdo", edad: 36, nacionalidad: "sa", altura: 170 },
        { id: "player:ksa-hil-23", nombre: "Abdullah Al-Mayoof",  numero: 22, posicion: "GK",  pieHabil: "derecho",   edad: 38, nacionalidad: "sa", altura: 188 },
    ],
};
