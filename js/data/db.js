// ============================================================
//  data/db.js — la "base de datos" en memoria
// ------------------------------------------------------------
//  Toma los datos crudos (data/index.js), los INDEXA para búsquedas
//  rápidas y DERIVA todo lo que no está almacenado:
//   · la tabla de posiciones (nunca se guarda: se calcula)
//   · los planteles de los equipos sin squad manual (generarPlantel)
//   · las estadísticas de temporada de cada jugador y equipo
//
//  Es una API SINCRÓNICA de uso interno. Arriba de esto, js/repo.js
//  agrega el `await` y las copias defensivas (structuredClone).
// ============================================================

import { DATOS_CRUDOS } from "./index.js";
import { crearRng, rngEntero, rngMezclar, hashString } from "../lib/prng.js";
import { compararIso } from "../lib/fecha.js";
import { computeTable, jornadaActual, mapaPosiciones } from "../lib/tabla.js";

/**
 * @typedef {Object} Equipo
 * @property {string} id
 * @property {string} abbr
 * @property {string} nombre
 * @property {string} ciudad
 * @property {string} brandColor
 * @property {number} fundado
 * @property {string} leagueId
 * @property {number} fuerzaRank  0 = el más fuerte de su liga (orden de teams.js)
 */

/**
 * @typedef {import("./arg-lpf/squads.js").JugadorCrudo & { teamId: string, leagueId: string, generado?: boolean }} Jugador
 */

/**
 * @typedef {import("./arg-lpf/matches.js").PartidoCrudo} Partido
 */

// ------------------------------------------------------------
//  1. ÍNDICES BÁSICOS
// ------------------------------------------------------------

/** @type {Map<string, import("./leagues.js").LigaConfig>} */
const ligasPorId = new Map();
/** @type {Map<string, import("./leagues.js").LigaConfig>} */
const ligasPorSlug = new Map();
/** @type {Map<string, Equipo>} */
const equipos = new Map();
/** @type {Map<string, Jugador>} */
const jugadores = new Map();
/** @type {Map<string, Jugador[]>} planteles manuales, por teamId */
const plantelesManuales = new Map();
/** @type {Map<string, Partido>} */
const partidos = new Map();

/** índices de partidos */
const byDate = new Map();   // "YYYY-MM-DD" -> matchId[]
const byLeague = new Map(); // leagueId     -> matchId[]
const byTeam = new Map();   // teamId       -> matchId[]

function empujar(mapa, clave, valor) {
    if (!mapa.has(clave)) mapa.set(clave, []);
    mapa.get(clave).push(valor);
}

for (const liga of DATOS_CRUDOS.ligas) {
    ligasPorId.set(liga.id, liga);
    ligasPorSlug.set(liga.slug, liga);
}

for (const bloque of DATOS_CRUDOS.porLiga) {
    // equipos (el índice del array = ranking de fuerza aproximado)
    bloque.equipos.forEach((eq, i) => {
        equipos.set(eq.id, { ...eq, fuerzaRank: i });
    });

    // planteles manuales
    for (const [teamId, lista] of Object.entries(bloque.planteles)) {
        const conMeta = lista.map((j) => ({
            ...j,
            teamId,
            leagueId: bloque.cfg.id,
            generado: false,
        }));
        plantelesManuales.set(teamId, conMeta);
        for (const j of conMeta) jugadores.set(j.id, j);
    }

    // partidos + índices
    for (const p of bloque.partidos) {
        partidos.set(p.id, p);
        empujar(byDate, p.date, p.id);
        empujar(byLeague, p.leagueId, p.id);
        empujar(byTeam, p.home, p.id);
        empujar(byTeam, p.away, p.id);
    }
}

// ------------------------------------------------------------
//  2. PLANTELES AUTOGENERADOS (deterministas)
// ------------------------------------------------------------
//  Un equipo sin squad manual recibe 23 jugadores fabricados con un PRNG
//  sembrado por hashString(teamId). Agregar equipos NO reordena los
//  planteles ya existentes (cada uno depende sólo de su propio id).

const NOMBRES = [
    "Lucas", "Mateo", "Santiago", "Thiago", "Bruno", "Nicolás", "Franco", "Julián",
    "Agustín", "Tomás", "Iván", "Gonzalo", "Diego", "Emiliano", "Facundo", "Joaquín",
    "Ramiro", "Nahuel", "Máximo", "Benjamín", "Alan", "Ezequiel", "Marco", "Luca",
];
const APELLIDOS = [
    "Gómez", "Fernández", "López", "Díaz", "Martínez", "Romero", "Sosa", "Torres",
    "Ruiz", "Álvarez", "Benítez", "Acosta", "Medina", "Herrera", "Aguirre", "Cabrera",
    "Rojas", "Molina", "Silva", "Castro", "Ortiz", "Núñez", "Vega", "Ríos",
    "Ferreyra", "Cardozo", "Vera", "Ledesma", "Ibáñez", "Peralta",
];

// Bloques de posición para un plantel de 23: 3 GK, 8 DEF, 7 MID, 5 FWD.
const BLOQUES = [
    { pos: "GK", n: 3, dorsales: [1, 12, 25] },
    { pos: "DEF", n: 8, dorsales: [2, 3, 4, 6, 15, 22, 26, 33] },
    { pos: "MID", n: 7, dorsales: [5, 8, 14, 16, 20, 23, 30] },
    { pos: "FWD", n: 5, dorsales: [7, 9, 10, 11, 19] },
];
const PIES = ["derecho", "derecho", "derecho", "izquierdo", "ambidiestro"];

// Nacionalidad de los jugadores autogenerados, por liga: [predominante, secundaria].
// Códigos flag-icons. Sin esto, todos saldrían con la misma bandera.
const NAC_LIGA = {
    "arg-lpf":        ["ar", "uy"],
    "eng-premier":    ["gb-eng", "fr"],
    "esp-laliga":     ["es", "ar"],
    "ita-seriea":     ["it", "br"],
    "ale-bundesliga": ["de", "at"],
    "fra-ligue1":     ["fr", "be"],
    "por-primeira":   ["pt", "br"],
    "ksa-proleague":  ["sa", "eg"],
    "bra-serieA":     ["br", "ar"],
    "chi-primera":    ["cl", "ar"],
    "uru-primera":    ["uy", "ar"],
};

/**
 * generarPlantel — 23 jugadores deterministas para un equipo sin squad manual.
 * @param {string} teamId
 * @returns {Jugador[]}
 */
export function generarPlantel(teamId) {
    const eq = equipos.get(teamId);
    const leagueId = eq ? eq.leagueId : "league:desconocida";
    const rng = crearRng(hashString(teamId));

    const nombres = rngMezclar(rng, NOMBRES);
    const apellidos = rngMezclar(rng, APELLIDOS);
    const [nacPredom, nacSecundaria] = NAC_LIGA[leagueId.replace("league:", "")] ?? ["ar", "uy"];

    /** @type {Jugador[]} */
    const plantel = [];
    let n = 0;
    for (const bloque of BLOQUES) {
        const dorsales = rngMezclar(rng, bloque.dorsales);
        for (let k = 0; k < bloque.n; k++) {
            n++;
            plantel.push({
                id: `${teamId.replace("team:", "player:")}-${n}`,
                nombre: `${nombres[n % nombres.length]} ${apellidos[(n * 3) % apellidos.length]}`,
                numero: dorsales[k],
                posicion: bloque.pos,
                pieHabil: PIES[rngEntero(rng, 0, PIES.length - 1)],
                edad: rngEntero(rng, 18, 35),
                nacionalidad: rng() < 0.75 ? nacPredom : nacSecundaria,
                altura: rngEntero(rng, 168, 195),
                teamId,
                leagueId,
                generado: true,
            });
        }
    }
    return plantel;
}

/**
 * plantelDe — devuelve el plantel de un equipo (manual o generado), cacheado.
 * @param {string} teamId
 * @returns {Jugador[]}
 */
const cachePlantel = new Map();
export function plantelDe(teamId) {
    if (plantelesManuales.has(teamId)) return plantelesManuales.get(teamId);
    if (!cachePlantel.has(teamId)) {
        const plantel = generarPlantel(teamId);
        cachePlantel.set(teamId, plantel);
        for (const j of plantel) {
            if (!jugadores.has(j.id)) jugadores.set(j.id, j);
        }
    }
    return cachePlantel.get(teamId);
}

// ------------------------------------------------------------
//  3. ACCESOS BÁSICOS
// ------------------------------------------------------------

export const fechaDemo = DATOS_CRUDOS.fechaDemo;

export function ligas() {
    return DATOS_CRUDOS.ligas;
}
export function liga(idOrSlug) {
    return ligasPorId.get(idOrSlug) || ligasPorSlug.get(idOrSlug);
}
export function equipo(teamId) {
    return equipos.get(teamId);
}
export function equiposDeLiga(leagueId) {
    return Array.from(equipos.values()).filter((e) => e.leagueId === leagueId);
}
export function jugador(playerId) {
    if (jugadores.has(playerId)) return jugadores.get(playerId);
    // Puede ser de un plantel generado que todavía no se materializó:
    // reconstruimos el teamId desde el id (player:arg-xxx-7 -> team:arg-xxx).
    const m = /^player:(.+)-\d+$/.exec(playerId);
    if (m) {
        plantelDe(`team:${m[1]}`);
        return jugadores.get(playerId) || null;
    }
    return null;
}

/**
 * partido — un partido por id. Si tiene detail, "rellena" cada jugador de
 * la alineación con su dorsal y nombre reales (los datos crudos traían
 * number provisorio).
 * @param {string} matchId
 * @returns {Partido|null}
 */
export function partido(matchId) {
    const p = partidos.get(matchId);
    if (!p) return null;
    if (!p.detail) return p;

    const enriquecerXI = (xi) =>
        xi.map((slot) => {
            const j = jugador(slot.playerId);
            return {
                ...slot,
                number: j ? j.numero : slot.number,
                nombre: j ? j.nombre : "—",
                posicion: j ? j.posicion : "MID",
            };
        });

    return {
        ...p,
        detail: {
            ...p.detail,
            lineups: {
                home: enriquecerXI(p.detail.lineups.home),
                away: enriquecerXI(p.detail.lineups.away),
            },
        },
    };
}

export function partidosDeLiga(leagueId) {
    return (byLeague.get(leagueId) || [])
        .map((id) => partidos.get(id))
        .sort((a, b) => compararIso(a.date, b.date) || a.time.localeCompare(b.time));
}

export function partidosDeEquipo(teamId) {
    return (byTeam.get(teamId) || [])
        .map((id) => partidos.get(id))
        .sort((a, b) => compararIso(a.date, b.date) || a.time.localeCompare(b.time));
}

export function fixtureDe(fecha) {
    return (byDate.get(fecha) || []).map((id) => partidos.get(id));
}

/** Fechas (ISO) que tienen al menos un partido, ordenadas. */
export function fechasConPartidos() {
    return Array.from(byDate.keys()).sort(compararIso);
}

// ------------------------------------------------------------
//  4. TABLA DE POSICIONES (derivada, cacheada)
// ------------------------------------------------------------

const cacheTabla = new Map();
export function tabla(leagueId) {
    if (!cacheTabla.has(leagueId)) {
        const cfg = ligasPorId.get(leagueId);
        cacheTabla.set(leagueId, computeTable(partidosDeLiga(leagueId), cfg));
    }
    return cacheTabla.get(leagueId);
}
export function tablaHasta(leagueId, jornada) {
    const cfg = ligasPorId.get(leagueId);
    return computeTable(partidosDeLiga(leagueId), cfg, { hastaJornada: jornada });
}
export function jornadaActualDe(leagueId) {
    return jornadaActual(partidosDeLiga(leagueId));
}

/**
 * movimientosDeLiga — diferencia de posición entre la jornada actual y la
 * anterior, por equipo (delta > 0 = subió).
 * @param {string} leagueId
 * @returns {{team:string, delta:number, pos:number, prev:number}[]}
 */
export function movimientosDeLiga(leagueId) {
    const jAhora = jornadaActualDe(leagueId);
    const actual = mapaPosiciones(tabla(leagueId));
    const previa = mapaPosiciones(tablaHasta(leagueId, Math.max(1, jAhora - 1)));
    return Object.keys(actual)
        .map((team) => ({
            team,
            pos: actual[team],
            prev: previa[team] ?? actual[team],
            // subir = pasar de la pos 8 a la 5 => delta positivo (+3)
            delta: (previa[team] ?? actual[team]) - actual[team],
        }))
        .sort((a, b) => b.delta - a.delta || a.pos - b.pos);
}

// ------------------------------------------------------------
//  5. ESTADÍSTICAS DE TEMPORADA DERIVADAS
// ------------------------------------------------------------
//  No hay stats por partido salvo en los 2 partidos con detail, así que
//  las fabricamos de forma determinista: cada valor depende de
//  (jugador + partido) o (equipo), nunca del azar de la sesión.

/** métricas por partido de un jugador, sembradas por (playerId | matchId) */
function lineaJugadorEnPartido(jug, p) {
    const rng = crearRng(`${jug.id}|${p.id}`);
    const eq = equipos.get(jug.teamId);
    const rank = eq ? eq.fuerzaRank : 10;
    const calidad = 1 - rank / 22;                 // 1 = crack de equipo top

    // ¿jugó? los primeros del plantel casi siempre; el resto, a veces.
    const idx = Number(jug.id.split("-").pop());
    const jugo = idx <= 11 ? true : rng() < 0.45;
    if (!jugo) {
        return { matchId: p.id, jugo: false, minutos: 0, goles: 0, asistencias: 0, rematesAlArco: 0, pasesClave: 0, entradas: 0, despejes: 0, duelosGanados: 0, nota: 0 };
    }

    const pesoPos = { GK: 0.05, DEF: 0.35, MID: 0.85, FWD: 1.6 }[jug.posicion] ?? 0.6;
    const goles = rng() < 0.12 * pesoPos * (0.6 + calidad) ? (rng() < 0.2 ? 2 : 1) : 0;
    const asis = rng() < 0.14 * (pesoPos * 0.8 + 0.3) * (0.6 + calidad) ? 1 : 0;

    // nota: influida por goles/asistencias y calidad del equipo
    let nota = 6.0 + calidad * 0.8 + goles * 0.9 + asis * 0.5 + (rng() - 0.5) * 1.2;
    nota = Math.max(4.5, Math.min(9.7, nota));

    return {
        matchId: p.id,
        jugo: true,
        minutos: idx <= 11 ? rngEntero(rng, 70, 90) : rngEntero(rng, 8, 45),
        goles,
        asistencias: asis,
        rematesAlArco: jug.posicion === "FWD" ? rngEntero(rng, 0, 4) : rngEntero(rng, 0, 2),
        pasesClave: rngEntero(rng, 0, jug.posicion === "MID" ? 4 : 2),
        entradas: jug.posicion === "DEF" ? rngEntero(rng, 1, 5) : rngEntero(rng, 0, 2),
        despejes: jug.posicion === "DEF" ? rngEntero(rng, 1, 6) : rngEntero(rng, 0, 2),
        duelosGanados: rngEntero(rng, 1, 9),
        nota: +nota.toFixed(1),
    };
}

/** Devuelve todas las líneas por partido (finalizados) de un jugador. */
export function lineasJugador(playerId) {
    const jug = jugador(playerId);
    if (!jug) return [];
    return partidosDeEquipo(jug.teamId)
        .filter((p) => p.status === "finished")
        .map((p) => lineaJugadorEnPartido(jug, p));
}

/** Agrega la temporada de un jugador a totales + promedios. */
export function statsTemporadaJugador(playerId) {
    const lineas = lineasJugador(playerId).filter((l) => l.jugo);
    const suma = (k) => lineas.reduce((acc, l) => acc + l[k], 0);
    const pj = lineas.length;
    const notaMedia = pj ? +(suma("nota") / pj).toFixed(2) : 0;
    return {
        pj,
        goles: suma("goles"),
        asistencias: suma("asistencias"),
        rematesAlArco: suma("rematesAlArco"),
        pasesClave: suma("pasesClave"),
        entradas: suma("entradas"),
        despejes: suma("despejes"),
        duelosGanados: suma("duelosGanados"),
        minutos: suma("minutos"),
        notaMedia,
    };
}

/** Cache de "todas las stats de todos los jugadores de una liga" (para rankings). */
const cacheStatsLiga = new Map();
export function statsLiga(leagueId) {
    if (cacheStatsLiga.has(leagueId)) return cacheStatsLiga.get(leagueId);
    const filas = [];
    for (const eq of equiposDeLiga(leagueId)) {
        for (const j of plantelDe(eq.id)) {
            filas.push({ jugador: j, stats: statsTemporadaJugador(j.id) });
        }
    }
    cacheStatsLiga.set(leagueId, filas);
    return filas;
}

/**
 * rankingDe — posición de un jugador en su liga según una métrica.
 * @returns {number} 1 = líder
 */
export function rankingDe(playerId, metrica) {
    const jug = jugador(playerId);
    if (!jug) return 0;
    const filas = statsLiga(jug.leagueId)
        .slice()
        .sort((a, b) => (b.stats[metrica] ?? 0) - (a.stats[metrica] ?? 0));
    return filas.findIndex((f) => f.jugador.id === playerId) + 1;
}

/** Mapa de tiros determinista de un jugador (sobre el medio campo de ataque). */
export function mapaTirosJugador(playerId) {
    const jug = jugador(playerId);
    if (!jug) return [];
    const rng = crearRng(`tiros|${playerId}`);
    const st = statsTemporadaJugador(playerId);
    const total = Math.max(6, st.rematesAlArco + rngEntero(rng, 3, 10));
    let golesRestantes = st.goles;
    const tiros = [];
    for (let i = 0; i < total; i++) {
        const cercaDelArco = rng() < 0.55;
        const x = rngEntero(rng, cercaDelArco ? 30 : 8, cercaDelArco ? 70 : 92);
        const y = rngEntero(rng, cercaDelArco ? 4 : 18, cercaDelArco ? 26 : 48);
        let resultado = "desviado";
        if (golesRestantes > 0 && cercaDelArco && rng() < 0.6) {
            resultado = "gol";
            golesRestantes--;
        } else if (rng() < 0.4) {
            resultado = "al-arco";
        }
        tiros.push({ x, y, resultado });
    }
    return tiros;
}

/** Estadísticas de temporada de un EQUIPO, para el gráfico de desvío. */
export function statsTemporadaEquipo(teamId) {
    const eq = equipos.get(teamId);
    if (!eq) return null;
    const cfg = ligasPorId.get(eq.leagueId);
    const prom = cfg.teamAverages;
    const rng = crearRng(`equipo-stats|${teamId}`);
    const calidad = 1 - eq.fuerzaRank / 22;         // 0..1
    // desvío base: los equipos fuertes rinden por encima del promedio
    const sesgo = (calidad - 0.5) * 2;              // -1..1

    const val = (base, amplitud) =>
        +(base * (1 + sesgo * amplitud) + (rng() - 0.5) * base * 0.06).toFixed(1);

    return {
        desvio: [
            { metrica: "Posesión %",        valor: Math.round(val(prom.posesion, 0.18)),        promedio: prom.posesion },
            { metrica: "Remates",           valor: val(prom.remates, 0.28),                     promedio: prom.remates },
            { metrica: "Remates al arco",   valor: val(prom.rematesAlArco, 0.34),               promedio: prom.rematesAlArco },
            { metrica: "xG",                valor: val(prom.xg, 0.4),                            promedio: prom.xg },
            { metrica: "Precisión pases %", valor: Math.round(val(prom.precisionPases, 0.08)),  promedio: prom.precisionPases },
            { metrica: "Córners",           valor: val(prom.corners, 0.3),                      promedio: prom.corners },
        ],
    };
}
