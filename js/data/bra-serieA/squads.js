// ============================================================
//  data/bra-serieA/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  2 equipos con plantel manual (Flamengo y Grêmio). El resto de la
//  liga usa generarPlantel() de db.js.
//  Orden del array = once tipo (1..11) + suplentes (12..23); el detalle
//  de partido referencia player:<pais>-<abbr>-<n> con n = posición acá.
// ============================================================

/**
 * @typedef {import("../arg-lpf/squads.js").JugadorCrudo} JugadorCrudo
 */

/** @type {Record<string, JugadorCrudo[]>} */
export const PLANTELES = {
    "team:bra-fla": [
        { id: "player:bra-fla-1",  nombre: "Agustín Rossi",        numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "ar", altura: 195 },
        { id: "player:bra-fla-2",  nombre: "Wesley",               numero: 43, posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "br", altura: 175 },
        { id: "player:bra-fla-3",  nombre: "Léo Ortiz",            numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "br", altura: 186 },
        { id: "player:bra-fla-4",  nombre: "Léo Pereira",          numero: 4,  posicion: "DEF", pieHabil: "izquierdo", edad: 30, nacionalidad: "br", altura: 186 },
        { id: "player:bra-fla-5",  nombre: "Ayrton Lucas",         numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 29, nacionalidad: "br", altura: 178 },
        { id: "player:bra-fla-6",  nombre: "Erick Pulgar",         numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 32, nacionalidad: "cl", altura: 184 },
        {
            id: "player:bra-fla-7", nombre: "Gerson",              numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "br", altura: 178,
            trayectoria: [
                { año: "2010", club: "Fluminense",              pj: 63,  goles: 7,  asistencias: 8 },
                { año: "2016", club: "AS Roma",                 pj: 47,  goles: 2,  asistencias: 4 },
                { año: "2019", club: "Flamengo",                pj: 161, goles: 20, asistencias: 22 },
                { año: "2023", club: "Olympique de Marsella",   pj: 70,  goles: 8,  asistencias: 6 },
                { año: "2025", club: "Flamengo",                pj: 35,  goles: 4,  asistencias: 6 },
                { año: "2026", club: "Flamengo",                pj: 5,   goles: 1,  asistencias: 2 },
            ],
        },
        { id: "player:bra-fla-8",  nombre: "Jorginho",             numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 34, nacionalidad: "it", altura: 180 },
        { id: "player:bra-fla-9",  nombre: "Luiz Araújo",          numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 29, nacionalidad: "br", altura: 173 },
        { id: "player:bra-fla-10", nombre: "Giorgian de Arrascaeta", numero: 14, posicion: "FWD", pieHabil: "izquierdo", edad: 32, nacionalidad: "uy", altura: 174 },
        { id: "player:bra-fla-11", nombre: "Bruno Henrique",       numero: 27, posicion: "FWD", pieHabil: "derecho",   edad: 35, nacionalidad: "br", altura: 185 },
        { id: "player:bra-fla-12", nombre: "Matheus Cunha",        numero: 26, posicion: "GK",  pieHabil: "derecho",   edad: 25, nacionalidad: "br", altura: 190 },
        { id: "player:bra-fla-13", nombre: "Danilo",               numero: 13, posicion: "DEF", pieHabil: "derecho",   edad: 34, nacionalidad: "br", altura: 184 },
        { id: "player:bra-fla-14", nombre: "Guillermo Varela",     numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "uy", altura: 176 },
        { id: "player:bra-fla-15", nombre: "Alex Sandro",          numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 35, nacionalidad: "br", altura: 180 },
        { id: "player:bra-fla-16", nombre: "Nicolás De la Cruz",   numero: 18, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "uy", altura: 175 },
        { id: "player:bra-fla-17", nombre: "Allan",                numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "br", altura: 178 },
        { id: "player:bra-fla-18", nombre: "Evertton Araújo",      numero: 36, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "br", altura: 181 },
        { id: "player:bra-fla-19", nombre: "Everton Cebolinha",    numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 30, nacionalidad: "br", altura: 174 },
        { id: "player:bra-fla-20", nombre: "Gonzalo Plata",        numero: 19, posicion: "FWD", pieHabil: "izquierdo", edad: 25, nacionalidad: "ec", altura: 176 },
        { id: "player:bra-fla-21", nombre: "Juninho",              numero: 30, posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 183 },
        { id: "player:bra-fla-22", nombre: "Cleiton",              numero: 44, posicion: "DEF", pieHabil: "derecho",   edad: 23, nacionalidad: "br", altura: 187 },
        { id: "player:bra-fla-23", nombre: "Dyogo Alves",          numero: 40, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "br", altura: 189 },
    ],

    "team:bra-gre": [
        { id: "player:bra-gre-1",  nombre: "Tiago Volpi",          numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 35, nacionalidad: "br", altura: 185 },
        { id: "player:bra-gre-2",  nombre: "João Pedro",           numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 180 },
        { id: "player:bra-gre-3",  nombre: "Gustavo Martins",      numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 21, nacionalidad: "br", altura: 188 },
        { id: "player:bra-gre-4",  nombre: "Wagner Leonardo",      numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "br", altura: 187 },
        { id: "player:bra-gre-5",  nombre: "Marlon",               numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 30, nacionalidad: "br", altura: 176 },
        { id: "player:bra-gre-6",  nombre: "Dodi",                 numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "br", altura: 184 },
        { id: "player:bra-gre-7",  nombre: "Camilo",               numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "br", altura: 178 },
        { id: "player:bra-gre-8",  nombre: "Edenilson",            numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 36, nacionalidad: "br", altura: 178 },
        { id: "player:bra-gre-9",  nombre: "Alysson",              numero: 11, posicion: "FWD", pieHabil: "izquierdo", edad: 22, nacionalidad: "br", altura: 174 },
        { id: "player:bra-gre-10", nombre: "Martin Braithwaite",   numero: 24, posicion: "FWD", pieHabil: "derecho",   edad: 35, nacionalidad: "dk", altura: 190 },
        { id: "player:bra-gre-11", nombre: "Cristian Olivera",     numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "uy", altura: 175 },
        { id: "player:bra-gre-12", nombre: "Rafael Grando",        numero: 12, posicion: "GK",  pieHabil: "derecho",   edad: 30, nacionalidad: "br", altura: 190 },
        { id: "player:bra-gre-13", nombre: "Cuiabano",             numero: 27, posicion: "DEF", pieHabil: "izquierdo", edad: 22, nacionalidad: "br", altura: 176 },
        { id: "player:bra-gre-14", nombre: "Walter Kannemann",     numero: 44, posicion: "DEF", pieHabil: "izquierdo", edad: 35, nacionalidad: "ar", altura: 186 },
        { id: "player:bra-gre-15", nombre: "Igor Serrote",         numero: 13, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 178 },
        { id: "player:bra-gre-16", nombre: "Mathías Villasanti",   numero: 15, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "py", altura: 178 },
        { id: "player:bra-gre-17", nombre: "Ronald",               numero: 30, posicion: "MID", pieHabil: "derecho",   edad: 22, nacionalidad: "br", altura: 176 },
        { id: "player:bra-gre-18", nombre: "Riquelme",             numero: 17, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "br", altura: 175 },
        { id: "player:bra-gre-19", nombre: "Matías Arezo",         numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "uy", altura: 182 },
        { id: "player:bra-gre-20", nombre: "André Henrique",       numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 24, nacionalidad: "br", altura: 189 },
        { id: "player:bra-gre-21", nombre: "Gustavo Nunes",        numero: 40, posicion: "FWD", pieHabil: "derecho",   edad: 20, nacionalidad: "br", altura: 174 },
        { id: "player:bra-gre-22", nombre: "Wesley Costa",         numero: 34, posicion: "DEF", pieHabil: "derecho",   edad: 20, nacionalidad: "br", altura: 182 },
        { id: "player:bra-gre-23", nombre: "Adriel",               numero: 22, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "br", altura: 188 },
    ],
};
