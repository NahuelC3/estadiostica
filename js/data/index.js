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
    ],
};
