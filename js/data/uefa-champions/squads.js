// ============================================================
//  data/uefa-champions/squads.js — planteles escritos A MANO
// ------------------------------------------------------------
//  3 equipos con plantel manual (PSV, Galatasaray, Fenerbahçe), elegidos
//  por ser los más reconocibles entre los 13 clubes NUEVOS de esta liga
//  (los otros 23 clasificados ya tienen su plantel de siempre en su liga
//  doméstica — no se tocan acá). El resto de los equipos nuevos se genera
//  con generarPlantel() en db.js, igual que en cualquier otra liga.
//
//  Nombres en base al plantel real conocido de cada club; no verificado
//  jugador por jugador contra la lista oficial 2026-27 (mismo criterio de
//  siempre: avisar que puede haber desactualización y ofrecer corregir).
// ============================================================

/** @type {Record<string, import("../arg-lpf/squads.js").JugadorCrudo[]>} */
export const PLANTELES = {
    "team:ucl-psv": [
        { id: "player:ucl-psv-1",  nombre: "Walter Benítez",     numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 32, nacionalidad: "ar", altura: 189 },
        { id: "player:ucl-psv-2",  nombre: "Rick Karsdorp",      numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 31, nacionalidad: "nl", altura: 181 },
        { id: "player:ucl-psv-3",  nombre: "Olivier Boscagli",   numero: 5,  posicion: "DEF", pieHabil: "izquierdo", edad: 28, nacionalidad: "fr", altura: 185 },
        { id: "player:ucl-psv-4",  nombre: "Armando Obispo",     numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "nl", altura: 187 },
        { id: "player:ucl-psv-5",  nombre: "Sergiño Dest",       numero: 22, posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "us", altura: 175 },
        { id: "player:ucl-psv-6",  nombre: "Jerdy Schouten",     numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "nl", altura: 184 },
        { id: "player:ucl-psv-7",  nombre: "Ismael Saibari",     numero: 11, posicion: "MID", pieHabil: "izquierdo", edad: 25, nacionalidad: "ma", altura: 180 },
        { id: "player:ucl-psv-8",  nombre: "Guus Til",           numero: 20, posicion: "MID", pieHabil: "derecho",   edad: 28, nacionalidad: "nl", altura: 183 },
        { id: "player:ucl-psv-9",  nombre: "Johan Bakayoko",     numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 23, nacionalidad: "be", altura: 180 },
        {
            id: "player:ucl-psv-10", nombre: "Luuk de Jong",     numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 36, nacionalidad: "nl", altura: 190,
        },
        { id: "player:ucl-psv-11", nombre: "Malik Tillman",      numero: 10, posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "us", altura: 180 },
        { id: "player:ucl-psv-12", nombre: "Joel Drommel",       numero: 33, posicion: "GK",  pieHabil: "derecho",   edad: 29, nacionalidad: "nl", altura: 193 },
        { id: "player:ucl-psv-13", nombre: "Kiliann Sildillia",  numero: 23, posicion: "DEF", pieHabil: "derecho",   edad: 23, nacionalidad: "fr", altura: 183 },
        { id: "player:ucl-psv-14", nombre: "André Ramalho",      numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "br", altura: 186 },
        { id: "player:ucl-psv-15", nombre: "Ricardo Pepi",       numero: 25, posicion: "FWD", pieHabil: "derecho",   edad: 23, nacionalidad: "us", altura: 185 },
        { id: "player:ucl-psv-16", nombre: "Ivan Perišić",       numero: 44, posicion: "MID", pieHabil: "izquierdo", edad: 37, nacionalidad: "hr", altura: 187 },
        { id: "player:ucl-psv-17", nombre: "Sipke Hulshoff",     numero: 27, posicion: "MID", pieHabil: "derecho",   edad: 21, nacionalidad: "nl", altura: 178 },
        { id: "player:ucl-psv-18", nombre: "Jordan Teze",        numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 26, nacionalidad: "nl", altura: 182 },
        { id: "player:ucl-psv-19", nombre: "Yorbe Vertessen",    numero: 17, posicion: "FWD", pieHabil: "izquierdo", edad: 24, nacionalidad: "be", altura: 179 },
        { id: "player:ucl-psv-20", nombre: "Boy Waterman",       numero: 30, posicion: "GK",  pieHabil: "derecho",   edad: 40, nacionalidad: "nl", altura: 192 },
        { id: "player:ucl-psv-21", nombre: "Ryan Flamingo",      numero: 14, posicion: "DEF", pieHabil: "derecho",   edad: 23, nacionalidad: "nl", altura: 188 },
        { id: "player:ucl-psv-22", nombre: "Isaac Babadi",       numero: 34, posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "nl", altura: 175 },
        { id: "player:ucl-psv-23", nombre: "Fredrik Oppegård",   numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 22, nacionalidad: "no", altura: 188 },
    ],

    "team:ucl-gal": [
        { id: "player:ucl-gal-1",  nombre: "Fernando Muslera",   numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 39, nacionalidad: "uy", altura: 190 },
        { id: "player:ucl-gal-2",  nombre: "Davinson Sánchez",   numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 29, nacionalidad: "co", altura: 187 },
        { id: "player:ucl-gal-3",  nombre: "Abdülkerim Bardakcı",numero: 32, posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "tr", altura: 187 },
        { id: "player:ucl-gal-4",  nombre: "Eljif Elmas",        numero: 22, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "mk", altura: 182 },
        { id: "player:ucl-gal-5",  nombre: "Lucas Torreira",     numero: 30, posicion: "MID", pieHabil: "derecho",   edad: 30, nacionalidad: "uy", altura: 168 },
        { id: "player:ucl-gal-6",  nombre: "İlkay Gündoğan",     numero: 6,  posicion: "MID", pieHabil: "derecho",   edad: 36, nacionalidad: "de", altura: 180 },
        { id: "player:ucl-gal-7",  nombre: "Kerem Aktürkoğlu",   numero: 7,  posicion: "FWD", pieHabil: "izquierdo", edad: 27, nacionalidad: "tr", altura: 181 },
        { id: "player:ucl-gal-8",  nombre: "Wilfried Zaha",      numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "ci", altura: 181 },
        { id: "player:ucl-gal-9",  nombre: "Victor Osimhen",     numero: 45, posicion: "FWD", pieHabil: "derecho",   edad: 27, nacionalidad: "ng", altura: 185 },
        { id: "player:ucl-gal-10", nombre: "Barış Alper Yılmaz", numero: 19, posicion: "FWD", pieHabil: "derecho",   edad: 26, nacionalidad: "tr", altura: 181 },
        {
            id: "player:ucl-gal-11", nombre: "Mauro Icardi",     numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 33, nacionalidad: "ar", altura: 181,
            trayectoria: [
                { año: "2013", club: "Sampdoria",     pj: 33, goles: 11, asistencias: 1 },
                { año: "2018", club: "Inter",         pj: 34, goles: 29, asistencias: 1 },
                { año: "2020", club: "Paris Saint-Germain", pj: 20, goles: 8,  asistencias: 3 },
                { año: "2023", club: "Galatasaray",   pj: 26, goles: 25, asistencias: 5 },
                { año: "2026", club: "Galatasaray",   pj: 5,  goles: 4,  asistencias: 1 },
            ],
        },
        { id: "player:ucl-gal-12", nombre: "Günay Güvenç",       numero: 90, posicion: "GK",  pieHabil: "derecho",   edad: 31, nacionalidad: "tr", altura: 192 },
        { id: "player:ucl-gal-13", nombre: "Sacha Boey",         numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 25, nacionalidad: "fr", altura: 182 },
        { id: "player:ucl-gal-14", nombre: "Torreira Jr.",       numero: 24, posicion: "DEF", pieHabil: "izquierdo", edad: 24, nacionalidad: "tr", altura: 184 },
        { id: "player:ucl-gal-15", nombre: "Elias Jelert",       numero: 21, posicion: "DEF", pieHabil: "derecho",   edad: 24, nacionalidad: "dk", altura: 183 },
        { id: "player:ucl-gal-16", nombre: "Berkan Kutlu",       numero: 20, posicion: "MID", pieHabil: "izquierdo", edad: 27, nacionalidad: "tr", altura: 182 },
        { id: "player:ucl-gal-17", nombre: "Yunus Akgün",        numero: 27, posicion: "MID", pieHabil: "izquierdo", edad: 25, nacionalidad: "tr", altura: 172 },
        { id: "player:ucl-gal-18", nombre: "Baran Aksaka",       numero: 88, posicion: "GK",  pieHabil: "derecho",   edad: 21, nacionalidad: "tr", altura: 188 },
        { id: "player:ucl-gal-19", nombre: "Kazımcan Karataş",   numero: 3,  posicion: "DEF", pieHabil: "izquierdo", edad: 22, nacionalidad: "tr", altura: 185 },
        { id: "player:ucl-gal-20", nombre: "Roland Sallai",      numero: 14, posicion: "FWD", pieHabil: "izquierdo", edad: 28, nacionalidad: "hu", altura: 182 },
        { id: "player:ucl-gal-21", nombre: "Gabriel Sara",       numero: 8,  posicion: "MID", pieHabil: "derecho",   edad: 25, nacionalidad: "br", altura: 178 },
        { id: "player:ucl-gal-22", nombre: "Metehan Baltacı",    numero: 71, posicion: "MID", pieHabil: "derecho",   edad: 20, nacionalidad: "tr", altura: 180 },
        { id: "player:ucl-gal-23", nombre: "Onur Ergün",         numero: 55, posicion: "DEF", pieHabil: "derecho",   edad: 22, nacionalidad: "tr", altura: 186 },
    ],

    "team:ucl-fen": [
        { id: "player:ucl-fen-1",  nombre: "Ederson (Fenerbahçe)", numero: 1,  posicion: "GK",  pieHabil: "derecho",   edad: 32, nacionalidad: "br", altura: 188 },
        { id: "player:ucl-fen-2",  nombre: "Bright Osayi-Samuel",  numero: 20, posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "ng", altura: 178 },
        { id: "player:ucl-fen-3",  nombre: "Milan Škriniar",       numero: 37, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "sk", altura: 187 },
        { id: "player:ucl-fen-4",  nombre: "Rodrigo Becão",        numero: 4,  posicion: "DEF", pieHabil: "derecho",   edad: 28, nacionalidad: "br", altura: 191 },
        { id: "player:ucl-fen-5",  nombre: "Ferdi Kadıoğlu",       numero: 24, posicion: "DEF", pieHabil: "izquierdo", edad: 25, nacionalidad: "tr", altura: 177 },
        { id: "player:ucl-fen-6",  nombre: "Sebastian Szymański",  numero: 19, posicion: "MID", pieHabil: "derecho",   edad: 26, nacionalidad: "pl", altura: 180 },
        { id: "player:ucl-fen-7",  nombre: "İsmail Yüksek",        numero: 21, posicion: "MID", pieHabil: "derecho",   edad: 27, nacionalidad: "tr", altura: 184 },
        { id: "player:ucl-fen-8",  nombre: "Fred",                 numero: 5,  posicion: "MID", pieHabil: "derecho",   edad: 33, nacionalidad: "br", altura: 169 },
        { id: "player:ucl-fen-9",  nombre: "Dušan Tadić",          numero: 10, posicion: "FWD", pieHabil: "izquierdo", edad: 37, nacionalidad: "rs", altura: 181 },
        { id: "player:ucl-fen-10", nombre: "Edin Džeko",           numero: 9,  posicion: "FWD", pieHabil: "derecho",   edad: 40, nacionalidad: "ba", altura: 193 },
        { id: "player:ucl-fen-11", nombre: "Youssef En-Nesyri",    numero: 11, posicion: "FWD", pieHabil: "derecho",   edad: 29, nacionalidad: "ma", altura: 190 },
        { id: "player:ucl-fen-12", nombre: "İrfan Can Eğribayat",  numero: 84, posicion: "GK",  pieHabil: "derecho",   edad: 31, nacionalidad: "tr", altura: 187 },
        { id: "player:ucl-fen-13", nombre: "Çağlar Söyüncü",       numero: 3,  posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "tr", altura: 187 },
        { id: "player:ucl-fen-14", nombre: "Mert Müldür",          numero: 2,  posicion: "DEF", pieHabil: "derecho",   edad: 27, nacionalidad: "tr", altura: 183 },
        { id: "player:ucl-fen-15", nombre: "Jayden Oosterwolde",   numero: 6,  posicion: "DEF", pieHabil: "izquierdo", edad: 23, nacionalidad: "nl", altura: 187 },
        { id: "player:ucl-fen-16", nombre: "Sofyan Amrabat",       numero: 34, posicion: "MID", pieHabil: "derecho",   edad: 29, nacionalidad: "ma", altura: 187 },
        { id: "player:ucl-fen-17", nombre: "Miha Zajc",            numero: 25, posicion: "MID", pieHabil: "izquierdo", edad: 29, nacionalidad: "si", altura: 183 },
        { id: "player:ucl-fen-18", nombre: "Cengiz Ünder",         numero: 17, posicion: "FWD", pieHabil: "izquierdo", edad: 28, nacionalidad: "tr", altura: 173 },
        { id: "player:ucl-fen-19", nombre: "Diego Carlos",         numero: 15, posicion: "DEF", pieHabil: "derecho",   edad: 33, nacionalidad: "br", altura: 187 },
        { id: "player:ucl-fen-20", nombre: "Levent Mercan",        numero: 71, posicion: "GK",  pieHabil: "derecho",   edad: 22, nacionalidad: "tr", altura: 189 },
        { id: "player:ucl-fen-21", nombre: "Oğuz Aydın",           numero: 32, posicion: "MID", pieHabil: "izquierdo", edad: 23, nacionalidad: "tr", altura: 178 },
        { id: "player:ucl-fen-22", nombre: "Alexander Djiku",      numero: 14, posicion: "DEF", pieHabil: "derecho",   edad: 30, nacionalidad: "gh", altura: 187 },
        { id: "player:ucl-fen-23", nombre: "Talisca",              numero: 27, posicion: "FWD", pieHabil: "derecho",   edad: 32, nacionalidad: "br", altura: 173 },
    ],
};
