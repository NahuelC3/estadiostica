// ============================================================
//  data/index.js — ENSAMBLA los módulos crudos de todas las ligas
// ------------------------------------------------------------
//  Único lugar que "conoce" qué ligas existen. Para sumar una liga:
//  importar sus 3 módulos y agregar una entrada a `porLiga`.
// ============================================================

import { LIGAS, FECHA_DEMO } from "./leagues.js";

import { EQUIPOS as EQ_ARG } from "./arg-lpf/teams.js";
import { PARTIDOS as PA_ARG } from "./arg-lpf/matches.js";
import { PLANTELES as PL_ARG } from "./arg-lpf/squads.js";

import { EQUIPOS as EQ_ENG } from "./eng-premier/teams.js";
import { PARTIDOS as PA_ENG } from "./eng-premier/matches.js";
import { PLANTELES as PL_ENG } from "./eng-premier/squads.js";

import { EQUIPOS as EQ_ESP } from "./esp-laliga/teams.js";
import { PARTIDOS as PA_ESP } from "./esp-laliga/matches.js";
import { PLANTELES as PL_ESP } from "./esp-laliga/squads.js";

import { EQUIPOS as EQ_ITA } from "./ita-seriea/teams.js";
import { PARTIDOS as PA_ITA } from "./ita-seriea/matches.js";
import { PLANTELES as PL_ITA } from "./ita-seriea/squads.js";

import { EQUIPOS as EQ_ALE } from "./ale-bundesliga/teams.js";
import { PARTIDOS as PA_ALE } from "./ale-bundesliga/matches.js";
import { PLANTELES as PL_ALE } from "./ale-bundesliga/squads.js";

import { EQUIPOS as EQ_FRA } from "./fra-ligue1/teams.js";
import { PARTIDOS as PA_FRA } from "./fra-ligue1/matches.js";
import { PLANTELES as PL_FRA } from "./fra-ligue1/squads.js";

import { EQUIPOS as EQ_POR } from "./por-primeira/teams.js";
import { PARTIDOS as PA_POR } from "./por-primeira/matches.js";
import { PLANTELES as PL_POR } from "./por-primeira/squads.js";

import { EQUIPOS as EQ_KSA } from "./ksa-proleague/teams.js";
import { PARTIDOS as PA_KSA } from "./ksa-proleague/matches.js";
import { PLANTELES as PL_KSA } from "./ksa-proleague/squads.js";

import { EQUIPOS as EQ_BRA } from "./bra-serieA/teams.js";
import { PARTIDOS as PA_BRA } from "./bra-serieA/matches.js";
import { PLANTELES as PL_BRA } from "./bra-serieA/squads.js";

import { EQUIPOS as EQ_CHI } from "./chi-primera/teams.js";
import { PARTIDOS as PA_CHI } from "./chi-primera/matches.js";
import { PLANTELES as PL_CHI } from "./chi-primera/squads.js";

import { EQUIPOS as EQ_URU } from "./uru-primera/teams.js";
import { PARTIDOS as PA_URU } from "./uru-primera/matches.js";
import { PLANTELES as PL_URU } from "./uru-primera/squads.js";

/**
 * @typedef {Object} BloqueLiga
 * @property {import("./leagues.js").LigaConfig} cfg
 * @property {import("./arg-lpf/teams.js").EquipoCrudo[]} equipos
 * @property {import("./arg-lpf/matches.js").PartidoCrudo[]} partidos
 * @property {Record<string, import("./arg-lpf/squads.js").JugadorCrudo[]>} planteles
 */

/** @type {{ ligas: import("./leagues.js").LigaConfig[], fechaDemo: string, porLiga: BloqueLiga[] }} */
export const DATOS_CRUDOS = {
    ligas: LIGAS,
    fechaDemo: FECHA_DEMO,
    porLiga: [
        { cfg: LIGAS[0], equipos: EQ_ARG, partidos: PA_ARG, planteles: PL_ARG },
        { cfg: LIGAS[1], equipos: EQ_ENG, partidos: PA_ENG, planteles: PL_ENG },
        { cfg: LIGAS[2], equipos: EQ_ESP, partidos: PA_ESP, planteles: PL_ESP },
        { cfg: LIGAS[3], equipos: EQ_ITA, partidos: PA_ITA, planteles: PL_ITA },
        { cfg: LIGAS[4], equipos: EQ_ALE, partidos: PA_ALE, planteles: PL_ALE },
        { cfg: LIGAS[5], equipos: EQ_FRA, partidos: PA_FRA, planteles: PL_FRA },
        { cfg: LIGAS[6], equipos: EQ_POR, partidos: PA_POR, planteles: PL_POR },
        { cfg: LIGAS[7], equipos: EQ_KSA, partidos: PA_KSA, planteles: PL_KSA },
        { cfg: LIGAS[8], equipos: EQ_BRA, partidos: PA_BRA, planteles: PL_BRA },
        { cfg: LIGAS[9], equipos: EQ_CHI, partidos: PA_CHI, planteles: PL_CHI },
        { cfg: LIGAS[10], equipos: EQ_URU, partidos: PA_URU, planteles: PL_URU },
    ],
};
