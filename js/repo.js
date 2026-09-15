// ============================================================
//  repo.js — FACADE de datos que consumen las páginas
// ------------------------------------------------------------
//  Es la única puerta de entrada a los datos. Hoy lee de la "base" en
//  memoria (js/data/db.js); mañana puede leer de una API real y las
//  páginas NO cambian, porque:
//   · todos los métodos son async (devuelven Promise)
//   · todos devuelven structuredClone(...) → las páginas nunca pueden
//     mutar la base por accidente
//
//  Cada método lleva un @typedef con la forma EXACTA que promete devolver:
//  ese es el contrato.
// ============================================================

import * as db from "./data/db.js";
import { resolverLlave } from "./lib/llave.js";

/** Fecha "de hoy" del sitio de ejemplo (hay partidos en vivo/programados). */
export const FECHA_DEMO = db.fechaDemo;

// ------------------------------------------------------------
//  Helpers internos
// ------------------------------------------------------------

/** Versión mínima de un equipo para tarjetas y tablas. */
function mini(teamId) {
    const e = db.equipo(teamId);
    if (!e) return { id: teamId, nombre: "¿?", abbr: "??", brandColor: "#566270" };
    return { id: e.id, nombre: e.nombre, abbr: e.abbr, brandColor: e.brandColor };
}

/** Versión pública (sin campos internos) de una liga. */
function ligaPublica(cfg) {
    return {
        id: cfg.id,
        slug: cfg.slug,
        nombre: cfg.nombre,
        pais: cfg.pais,
        bandera: cfg.bandera,
        temporada: cfg.temporada,
    };
}

/** Convierte un partido crudo en una TarjetaPartido. */
function tarjeta(p) {
    return {
        id: p.id,
        leagueId: p.leagueId,
        matchday: p.matchday,
        date: p.date,
        time: p.time,
        status: p.status,
        minute: p.minute ?? null,
        score: p.score ? { ...p.score } : null,
        local: mini(p.home),
        visitante: mini(p.away),
    };
}

/** Espera artificial mínima, para parecerse a una llamada de red real. */
const tick = () => new Promise((r) => setTimeout(r, 0));

// ------------------------------------------------------------
//  getLeagues
// ------------------------------------------------------------
/**
 * @typedef {Object} Liga
 * @property {string} id
 * @property {string} slug
 * @property {string} nombre
 * @property {string} pais
 * @property {string} bandera
 * @property {string} temporada
 */

/**
 * Lista de ligas disponibles.
 * @returns {Promise<Liga[]>}
 */
export async function getLeagues() {
    await tick();
    return structuredClone(db.ligas().map(ligaPublica));
}

// ------------------------------------------------------------
//  getFixture
// ------------------------------------------------------------
/**
 * @typedef {Object} TarjetaPartido
 * @property {string} id
 * @property {string} leagueId
 * @property {number} matchday
 * @property {string} date
 * @property {string} time
 * @property {'finished'|'live'|'scheduled'} status
 * @property {number|null} minute
 * @property {{home:number,away:number}|null} score
 * @property {{id:string,nombre:string,abbr:string,brandColor:string}} local
 * @property {{id:string,nombre:string,abbr:string,brandColor:string}} visitante
 */

/**
 * Partidos de una fecha, agrupados por torneo.
 * @param {{date: string, leagueId?: string, status?: 'all'|'live'|'finished'|'scheduled'}} opciones
 * @returns {Promise<{date: string, grupos: {liga: Liga, partidos: TarjetaPartido[]}[]}>}
 */
export async function getFixture({ date, leagueId, status = "all" }) {
    await tick();
    let partidos = db.fixtureDe(date);
    if (leagueId) partidos = partidos.filter((p) => p.leagueId === leagueId);
    if (status !== "all") partidos = partidos.filter((p) => p.status === status);

    const grupos = [];
    for (const cfg of db.ligas()) {
        const dela = partidos
            .filter((p) => p.leagueId === cfg.id)
            .sort((a, b) => a.time.localeCompare(b.time))
            .map(tarjeta);
        if (dela.length) grupos.push({ liga: ligaPublica(cfg), partidos: dela });
    }
    return structuredClone({ date, grupos });
}

// ------------------------------------------------------------
//  getMatch
// ------------------------------------------------------------
/**
 * @typedef {Object} PartidoDetalle
 * @property {string} id
 * @property {Liga} liga
 * @property {number} matchday
 * @property {string} date
 * @property {string} time
 * @property {'finished'|'live'|'scheduled'} status
 * @property {number|null} minute
 * @property {{home:number,away:number}|null} score
 * @property {{id:string,nombre:string,abbr:string,brandColor:string}} local
 * @property {{id:string,nombre:string,abbr:string,brandColor:string}} visitante
 * @property {Object|null} detail  alineaciones (x/y), formación, stats, eventos, ratings
 * @property {RankingJugador[]} rankingJugadores  jugadores ordenados por nota del partido
 */

/**
 * @typedef {Object} RankingJugador
 * @property {string} playerId
 * @property {string} nombre
 * @property {string} equipo     abreviatura
 * @property {number} valor      nota del partido
 * @property {number[]} spark    últimas notas de temporada, normalizadas 0..1
 */

/**
 * Un partido por id, con .detail si lo tiene.
 * @param {string} id
 * @returns {Promise<PartidoDetalle|null>}
 */
export async function getMatch(id) {
    await tick();
    const p = db.partido(id);
    if (!p) return null;
    const cfg = db.liga(p.leagueId);

    // Ranking de jugadores por nota del partido (sólo si hay detail).
    let rankingJugadores = [];
    if (p.detail) {
        const abbr = (teamId) => db.equipo(teamId)?.abbr ?? "";
        const todos = [
            ...p.detail.lineups.home.map((s) => ({ ...s, equipo: abbr(p.home) })),
            ...p.detail.lineups.away.map((s) => ({ ...s, equipo: abbr(p.away) })),
        ];
        rankingJugadores = todos
            .map((s) => {
                const nota = p.detail.ratings[s.playerId]?.nota ?? 0;
                const spark = db.lineasJugador(s.playerId)
                    .filter((l) => l.jugo)
                    .slice(-5)
                    .map((l) => Math.max(0.1, Math.min(1, l.nota / 10)));
                return { playerId: s.playerId, nombre: s.nombre, equipo: s.equipo, valor: nota, spark };
            })
            .sort((a, b) => b.valor - a.valor)
            .slice(0, 8);
    }

    const dto = {
        id: p.id,
        liga: ligaPublica(cfg),
        matchday: p.matchday,
        date: p.date,
        time: p.time,
        status: p.status,
        minute: p.minute ?? null,
        score: p.score ? { ...p.score } : null,
        local: mini(p.home),
        visitante: mini(p.away),
        detail: p.detail || null,
        rankingJugadores,
    };
    return structuredClone(dto);
}

// ------------------------------------------------------------
//  getStandings
// ------------------------------------------------------------
/**
 * @typedef {Object} FilaTabla
 * @property {number} pos
 * @property {{id:string,nombre:string,abbr:string,brandColor:string}} equipo
 * @property {number} pj @property {number} pg @property {number} pe @property {number} pp
 * @property {number} gf @property {number} gc @property {number} dif @property {number} pts
 * @property {number} ajuste
 * @property {('V'|'E'|'D')[]} forma
 * @property {number} prevPos
 * @property {number} delta   prevPos - pos (positivo = subió)
 */

/** Agrupa filas ya calculadas en zonas por rango de posición, en el orden de la config. */
function agruparPorZonas(filas, zones) {
    return (zones || [])
        .map((z) => ({
            key: z.key,
            label: z.label,
            color: z.color,
            filas: filas.filter((f) => f.pos >= z.from && f.pos <= z.to),
        }))
        .filter((z) => z.filas.length);
}

/** Arma el panel de "líderes" (goleador/asistencias/figura) a partir de una lista statsLiga/statsDeFase. */
function lideresDe(stats) {
    const lider = (metrica) => {
        const top = stats.slice().sort((a, b) => b.stats[metrica] - a.stats[metrica])[0];
        if (!top) return null;
        return {
            jugador: top.jugador.nombre,
            equipo: db.equipo(top.jugador.teamId)?.abbr ?? "",
            valor: +top.stats[metrica].toFixed(metrica === "notaMedia" ? 2 : 0),
        };
    };
    return { goleador: lider("goles"), asistencias: lider("asistencias"), figura: lider("notaMedia") };
}

/**
 * Tabla de posiciones completa, segmentada por zonas, + panel lateral.
 * @param {string} leagueId
 * @param {{fase?: string, grupo?: string}} [opciones]
 *   Sólo aplica a ligas con `fases` (ver getFasesDeLiga). Sin `fase`, usa la
 *   "principal" (la combinada/Anual si existe, si no la primera de tabla).
 *   Sin `grupo` en una fase de tipo 'grupos', usa el primer grupo declarado.
 * @returns {Promise<{
 *   liga: Liga,
 *   zonas: {key:string,label:string,color:string,filas:FilaTabla[]}[],
 *   movimientos: {team:{id,nombre,abbr,brandColor},delta:number}[],
 *   lideres: Record<string,{jugador:string,equipo:string,valor:number}|null>
 * }|null>}
 */
export async function getStandings(leagueId, { fase = null, grupo = null } = {}) {
    await tick();
    const cfg = db.liga(leagueId);
    if (!cfg) return null;

    if (cfg.fases) {
        const faseObj = fase
            ? cfg.fases.find((f) => f.key === fase)
            : cfg.fases.find((f) => f.tipo === "combinada") ?? cfg.fases.find((f) => f.tipo === "liga" || f.tipo === "grupos");
        if (!faseObj || faseObj.tipo === "eliminacion") return null;

        const grupoKey = faseObj.tipo === "grupos" ? (grupo ?? faseObj.grupos[0].key) : null;
        const tabla = db.tablaDeFase(cfg.id, faseObj.key, grupoKey);

        // Sin jornada anterior por fase: no hay tracking de movimientos acá
        // (ver `movimientos: []` más abajo, misma simplificación).
        const filas = tabla.map((f) => ({
            pos: f.pos,
            equipo: mini(f.teamId),
            pj: f.pj, pg: f.pg, pe: f.pe, pp: f.pp,
            gf: f.gf, gc: f.gc, dif: f.dif, pts: f.pts,
            ajuste: f.ajuste,
            forma: f.forma,
            prevPos: f.pos,
            delta: 0,
        }));

        const zonas = faseObj.resolverCupos
            ? faseObj.resolverCupos(filas, { campeonCopaArgentina: db.campeonDe("league:arg-copa") })
            : agruparPorZonas(filas, faseObj.zones);

        const stats = db.statsDeFase(cfg.id, faseObj.key, grupoKey);

        return structuredClone({
            liga: ligaPublica(cfg),
            zonas,
            movimientos: [],
            lideres: lideresDe(stats),
        });
    }

    // ---- liga sin fases: comportamiento de siempre, sin cambios ----
    const tabla = db.tabla(cfg.id);
    const prev = new Map(
        db.tablaHasta(cfg.id, Math.max(1, db.jornadaActualDe(cfg.id) - 1))
            .map((f) => [f.teamId, f.pos]),
    );

    const filas = tabla.map((f) => ({
        pos: f.pos,
        equipo: mini(f.teamId),
        pj: f.pj, pg: f.pg, pe: f.pe, pp: f.pp,
        gf: f.gf, gc: f.gc, dif: f.dif, pts: f.pts,
        ajuste: f.ajuste,
        forma: f.forma,
        prevPos: prev.get(f.teamId) ?? f.pos,
        delta: (prev.get(f.teamId) ?? f.pos) - f.pos,
    }));

    const zonas = agruparPorZonas(filas, cfg.zones);

    // Movimientos de la fecha: los 6 mayores saltos, suban o bajen.
    const movimientos = db.movimientosDeLiga(cfg.id)
        .filter((m) => m.delta !== 0)
        .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
        .slice(0, 6)
        .map((m) => ({ equipo: mini(m.team), delta: m.delta }));

    const stats = db.statsLiga(cfg.id);

    return structuredClone({
        liga: ligaPublica(cfg),
        zonas,
        movimientos,
        lideres: lideresDe(stats),
    });
}

// ------------------------------------------------------------
//  getFasesDeLiga / getEliminacion
// ------------------------------------------------------------
/**
 * @typedef {Object} FasePublica
 * @property {string} key
 * @property {string} nombre
 * @property {'liga'|'grupos'|'combinada'|'eliminacion'} tipo
 * @property {{key:string,nombre:string}[]} [grupos]  sólo tipo 'grupos'
 */

/**
 * Fases de una liga (vacío si no tiene `fases` — liga de tabla única de siempre).
 * @param {string} leagueId
 * @returns {Promise<FasePublica[]>}
 */
export async function getFasesDeLiga(leagueId) {
    await tick();
    const cfg = db.liga(leagueId);
    if (!cfg?.fases) return [];
    return structuredClone(cfg.fases.map((f) => ({
        key: f.key,
        nombre: f.nombre,
        tipo: f.tipo,
        ...(f.tipo === "grupos" ? { grupos: f.grupos.map((g) => ({ key: g.key, nombre: g.nombre })) } : {}),
    })));
}

/** Versión pública de un lado de una llave: el equipo, o null + placeholder si todavía no está definido. */
function ladoPublico(lado) {
    if (!lado) return null;
    if (!lado.equipo) return { equipo: null, placeholder: lado.placeholder ?? null };
    return { equipo: mini(lado.equipo), placeholder: null };
}

/**
 * @typedef {Object} LlavePublica
 * @property {string} id
 * @property {string} ronda
 * @property {'unico'|'ida-vuelta'} formato
 * @property {{equipo:{id,nombre,abbr,brandColor},placeholder:null}|{equipo:null,placeholder:string|null}|null} local
 * @property {{equipo:{id,nombre,abbr,brandColor},placeholder:null}|{equipo:null,placeholder:string|null}|null} visitante
 * @property {TarjetaPartido[]} partidos
 * @property {{local:number,visitante:number}|null} marcadorGlobal
 * @property {{id,nombre,abbr,brandColor}|null} avanza
 * @property {boolean} definidoPorPenales
 */

/**
 * Bracket de una fase de eliminación directa, ronda por ronda.
 * @param {string} leagueId
 * @param {string} faseKey
 * @returns {Promise<{liga:Liga, fase:{key:string,nombre:string}, rondas:{key:string,nombre:string,formato:string,llaves:LlavePublica[]}[]}|null>}
 */
export async function getEliminacion(leagueId, faseKey) {
    await tick();
    const cfg = db.liga(leagueId);
    const fase = cfg?.fases?.find((f) => f.key === faseKey && f.tipo === "eliminacion");
    if (!fase) return null;

    const rondas = fase.rondas.map((r) => ({
        key: r.key,
        nombre: r.nombre,
        formato: r.formato,
        llaves: fase.llaves
            .filter((ll) => ll.ronda === r.key)
            .map((ll) => {
                const partidosLlave = ll.partidos.map((id) => db.partido(id)).filter(Boolean);
                const { marcadorGlobal, avanza, definidoPorPenales } = resolverLlave(ll, partidosLlave);
                return {
                    id: ll.id,
                    ronda: ll.ronda,
                    formato: ll.formato,
                    local: ladoPublico(ll.local),
                    visitante: ladoPublico(ll.visitante),
                    partidos: partidosLlave.map(tarjeta),
                    marcadorGlobal,
                    avanza: avanza ? mini(avanza) : null,
                    definidoPorPenales,
                };
            }),
    }));

    return structuredClone({ liga: ligaPublica(cfg), fase: { key: fase.key, nombre: fase.nombre }, rondas });
}

// ------------------------------------------------------------
//  getTeam
// ------------------------------------------------------------
const METRICA_POR_POS = {
    GK: { key: "notaMedia", label: "Nota", unidad: "media" },
    DEF: { key: "entradas", label: "Entradas", unidad: "total" },
    MID: { key: "asistencias", label: "Asist.", unidad: "total" },
    FWD: { key: "goles", label: "Goles", unidad: "total" },
};

/**
 * @typedef {Object} EquipoPagina
 * @property {{id,nombre,abbr,brandColor,ciudad,fundado}} equipo
 * @property {Liga} liga
 * @property {number} posicion
 * @property {('V'|'E'|'D')[]} forma
 * @property {TarjetaPartido|null} proximo
 * @property {{pts:number,pj:number}} resumen
 * @property {{arqueros,defensores,mediocampistas,delanteros}} plantel
 * @property {TarjetaPartido[]} calendario
 * @property {{desvio:{metrica:string,valor:number,promedio:number}[]}} stats
 */

/**
 * @param {string} id  teamId
 * @returns {Promise<EquipoPagina|null>}
 */
export async function getTeam(id) {
    await tick();
    const e = db.equipo(id);
    if (!e) return null;
    const cfg = db.liga(e.leagueId);
    // tablaPorDefecto: para una liga con `fases` es la Anual/fase-liga; para
    // una liga simple es exactamente `db.tabla(cfg.id)` de siempre.
    const tabla = db.tablaPorDefecto(cfg.id);
    const fila = tabla.find((f) => f.teamId === id);

    // Plantel agrupado por puesto, con la métrica relevante de cada uno.
    // Acotado a esta liga (`cfg.id`): un equipo que también juega otra
    // competencia (Copa Argentina, Champions) no debe mezclar esos goles acá.
    const grupos = { arqueros: [], defensores: [], mediocampistas: [], delanteros: [] };
    const destino = { GK: "arqueros", DEF: "defensores", MID: "mediocampistas", FWD: "delanteros" };
    for (const j of db.plantelDe(id)) {
        const st = db.statsTemporadaJugador(j.id, { leagueId: cfg.id });
        const m = METRICA_POR_POS[j.posicion];
        grupos[destino[j.posicion]].push({
            id: j.id,
            nombre: j.nombre,
            numero: j.numero,
            posicion: j.posicion,
            pieHabil: j.pieHabil,
            edad: j.edad,
            nacionalidad: j.nacionalidad,
            altura: j.altura,
            metrica: { label: m.label, unidad: m.unidad, valor: +(st[m.key] ?? 0).toFixed(m.key === "notaMedia" ? 2 : 0) },
        });
    }
    for (const k of Object.keys(grupos)) grupos[k].sort((a, b) => a.numero - b.numero);

    // Calendario unificado (jugados + por jugar), cronológico. Acotado a
    // esta liga por el mismo motivo que el plantel de arriba.
    const calendario = db.partidosDeEquipo(id, cfg.id).map((p) => {
        const t = tarjeta(p);
        t.condicion = p.home === id ? "L" : "V";
        return t;
    });

    // Próximo partido = primer programado del calendario.
    const proximo = calendario.find((p) => p.status === "scheduled") || null;

    return structuredClone({
        equipo: {
            id: e.id, nombre: e.nombre, abbr: e.abbr, brandColor: e.brandColor,
            ciudad: e.ciudad, fundado: e.fundado,
        },
        liga: ligaPublica(cfg),
        posicion: fila ? fila.pos : 0,
        forma: fila ? fila.forma : [],
        resumen: { pts: fila ? fila.pts : 0, pj: fila ? fila.pj : 0 },
        proximo,
        plantel: grupos,
        calendario,
        stats: db.statsTemporadaEquipo(id),
    });
}

// ------------------------------------------------------------
//  getPlayer
// ------------------------------------------------------------
//  Los promedios de posición de leagues.js ya vienen "por partido", así
//  que se comparan directo contra el "por partido" del jugador.

/**
 * @typedef {Object} JugadorPagina
 * @property {Object} jugador
 * @property {{id,nombre,abbr,brandColor}} equipo
 * @property {Liga} liga
 * @property {{destacados:{label,valor,ranking}[], desglose:{metrica,valor,promedioPosicion}[]}} temporada
 * @property {{matchId,rival,condicion,goles,asistencias,rematesAlArco}[]} porPartido
 * @property {{x,y,resultado}[]} mapaTiros
 * @property {{año,club,pj,goles,asistencias}[]} trayectoria
 */

/**
 * @param {string} id  playerId
 * @returns {Promise<JugadorPagina|null>}
 */
export async function getPlayer(id) {
    await tick();
    const j = db.jugador(id);
    if (!j) return null;
    const e = db.equipo(j.teamId);
    const cfg = db.liga(j.leagueId);
    // Acotado a `j.leagueId` (su liga "de origen"): si su equipo también
    // juega otra competencia (Copa Argentina, Champions), esos partidos no
    // deben mezclarse en la temporada que se muestra acá.
    const st = db.statsTemporadaJugador(id, { leagueId: j.leagueId });
    const promPos = cfg.positionAverages[j.posicion];

    const destacados = [
        { label: "Goles", valor: st.goles, ranking: db.rankingDe(id, "goles") },
        { label: "Asistencias", valor: st.asistencias, ranking: db.rankingDe(id, "asistencias") },
        { label: "Pases clave", valor: st.pasesClave, ranking: db.rankingDe(id, "pasesClave") },
        { label: "Nota media", valor: st.notaMedia, ranking: db.rankingDe(id, "notaMedia") },
    ];

    // Desglose "vs promedio de su posición" (todo por partido).
    const pj = Math.max(1, st.pj);
    const porPartidoVal = (k) => +(st[k] / pj).toFixed(2);
    const desglose = [
        { metrica: "Goles", valor: porPartidoVal("goles"), promedioPosicion: promPos.goles },
        { metrica: "Asistencias", valor: porPartidoVal("asistencias"), promedioPosicion: promPos.asistencias },
        { metrica: "Pases clave", valor: porPartidoVal("pasesClave"), promedioPosicion: promPos.pasesClave },
        { metrica: "Entradas", valor: porPartidoVal("entradas"), promedioPosicion: promPos.entradas },
        { metrica: "Despejes", valor: porPartidoVal("despejes"), promedioPosicion: promPos.despejes },
        { metrica: "Duelos ganados", valor: porPartidoVal("duelosGanados"), promedioPosicion: promPos.duelosGanados },
    ];

    // Partido a partido. Misma acotación que arriba.
    const porPartido = db.lineasJugador(id, { leagueId: j.leagueId })
        .filter((l) => l.jugo)
        .map((l) => {
            const p = db.partido(l.matchId);
            const esLocal = p.home === j.teamId;
            return {
                matchId: l.matchId,
                fecha: p.date,
                rival: db.equipo(esLocal ? p.away : p.home)?.abbr ?? "",
                condicion: esLocal ? "L" : "V",
                goles: l.goles,
                asistencias: l.asistencias,
                rematesAlArco: l.rematesAlArco,
            };
        });

    const trayectoria = j.trayectoria || [
        { año: "2023", club: "Cantera", pj: 40, goles: 8, asistencias: 6 },
        { año: "2025", club: e ? e.nombre : "Club actual", pj: 34, goles: 10, asistencias: 5 },
        { año: cfg.temporada.slice(0, 4), club: e ? e.nombre : "Club actual", pj: st.pj, goles: st.goles, asistencias: st.asistencias },
    ];

    return structuredClone({
        jugador: {
            id: j.id, nombre: j.nombre, numero: j.numero, posicion: j.posicion,
            pieHabil: j.pieHabil, edad: j.edad, nacionalidad: j.nacionalidad, altura: j.altura,
        },
        equipo: e ? { id: e.id, nombre: e.nombre, abbr: e.abbr, brandColor: e.brandColor } : null,
        liga: ligaPublica(cfg),
        temporada: { destacados, desglose },
        porPartido,
        mapaTiros: db.mapaTirosJugador(id, { leagueId: j.leagueId }),
        trayectoria,
    });
}
