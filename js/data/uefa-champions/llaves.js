// ============================================================
//  data/uefa-champions/llaves.js — Playoff + eliminación directa (GENERADO)
//  Playoff (9º-24º de la fase de liga, ida y vuelta) alimenta, junto a los
//  8 directos, los Octavos de Final. Semis ida/vuelta, Final a partido único.
// ============================================================

/** @type {import("../../lib/llave.js").LlaveEliminacion[]} */
export const LLAVES = [
    { id: "eliminacion-playoff-1", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:esp-atm" }, visitante: { equipo: "team:fra-len" }, partidos: ["match:eliminacion-playoff-298", "match:eliminacion-playoff-299"] },
    { id: "eliminacion-playoff-2", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:esp-bet" }, visitante: { equipo: "team:ucl-shk" }, partidos: ["match:eliminacion-playoff-300", "match:eliminacion-playoff-301"] },
    { id: "eliminacion-playoff-3", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:ale-bvb" }, visitante: { equipo: "team:ucl-gal" }, partidos: ["match:eliminacion-playoff-302", "match:eliminacion-playoff-303"] },
    { id: "eliminacion-playoff-4", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:por-spo" }, visitante: { equipo: "team:ucl-vik" }, partidos: ["match:eliminacion-playoff-304", "match:eliminacion-playoff-305"] },
    { id: "eliminacion-playoff-5", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:ita-int" }, visitante: { equipo: "team:ucl-psv" }, partidos: ["match:eliminacion-playoff-306", "match:eliminacion-playoff-307"] },
    { id: "eliminacion-playoff-6", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:eng-mun" }, visitante: { equipo: "team:eng-avl" }, partidos: ["match:eliminacion-playoff-308", "match:eliminacion-playoff-309"] },
    { id: "eliminacion-playoff-7", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:fra-psg" }, visitante: { equipo: "team:por-por" }, partidos: ["match:eliminacion-playoff-310", "match:eliminacion-playoff-311"], penales: { home: 4, away: 5 } },
    { id: "eliminacion-playoff-8", ronda: "playoff", formato: "ida-vuelta", local: { equipo: "team:ale-rbl" }, visitante: { equipo: "team:eng-ars" }, partidos: ["match:eliminacion-playoff-312", "match:eliminacion-playoff-313"], penales: { home: 5, away: 4 } },
    { id: "eliminacion-octavos-1", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:esp-rma" }, visitante: { equipo: "team:ita-rom" }, partidos: ["match:eliminacion-octavos-314", "match:eliminacion-octavos-315"] },
    { id: "eliminacion-octavos-2", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:eng-mci" }, visitante: { equipo: "team:esp-bet" }, partidos: ["match:eliminacion-octavos-316", "match:eliminacion-octavos-317"] },
    { id: "eliminacion-octavos-3", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:ale-fcb" }, visitante: { equipo: "team:por-spo" }, partidos: ["match:eliminacion-octavos-318", "match:eliminacion-octavos-319"] },
    { id: "eliminacion-octavos-4", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:esp-bar" }, visitante: { equipo: "team:por-por" }, partidos: ["match:eliminacion-octavos-320", "match:eliminacion-octavos-321"] },
    { id: "eliminacion-octavos-5", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:eng-liv" }, visitante: { equipo: "team:esp-vil" }, partidos: ["match:eliminacion-octavos-322", "match:eliminacion-octavos-323"] },
    { id: "eliminacion-octavos-6", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:ita-int" }, visitante: { equipo: "team:ale-rbl" }, partidos: ["match:eliminacion-octavos-324", "match:eliminacion-octavos-325"], penales: { home: 4, away: 5 } },
    { id: "eliminacion-octavos-7", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:esp-atm" }, visitante: { equipo: "team:eng-mun" }, partidos: ["match:eliminacion-octavos-326", "match:eliminacion-octavos-327"] },
    { id: "eliminacion-octavos-8", ronda: "octavos", formato: "ida-vuelta", local: { equipo: "team:ale-bvb" }, visitante: { equipo: "team:ita-nap" }, partidos: ["match:eliminacion-octavos-328", "match:eliminacion-octavos-329"] },
    { id: "eliminacion-cuartos-1", ronda: "cuartos", formato: "ida-vuelta", local: { equipo: "team:esp-rma" }, visitante: { equipo: "team:eng-mci" }, partidos: ["match:eliminacion-cuartos-330", "match:eliminacion-cuartos-331"] },
    { id: "eliminacion-cuartos-2", ronda: "cuartos", formato: "ida-vuelta", local: { equipo: "team:ale-fcb" }, visitante: { equipo: "team:esp-bar" }, partidos: ["match:eliminacion-cuartos-332", "match:eliminacion-cuartos-333"] },
    { id: "eliminacion-cuartos-3", ronda: "cuartos", formato: "ida-vuelta", local: { equipo: "team:eng-liv" }, visitante: { equipo: "team:ale-rbl" }, partidos: ["match:eliminacion-cuartos-334", "match:eliminacion-cuartos-335"] },
    { id: "eliminacion-cuartos-4", ronda: "cuartos", formato: "ida-vuelta", local: { equipo: "team:eng-mun" }, visitante: { equipo: "team:ita-nap" }, partidos: ["match:eliminacion-cuartos-336", "match:eliminacion-cuartos-337"] },
    { id: "eliminacion-semifinal-1", ronda: "semifinal", formato: "ida-vuelta", local: { equipo: "team:esp-rma" }, visitante: { equipo: "team:esp-bar" }, partidos: ["match:eliminacion-semifinal-338", "match:eliminacion-semifinal-339"] },
    { id: "eliminacion-semifinal-2", ronda: "semifinal", formato: "ida-vuelta", local: { equipo: "team:eng-liv" }, visitante: { equipo: "team:eng-mun" }, partidos: ["match:eliminacion-semifinal-340", "match:eliminacion-semifinal-341"], penales: { home: 4, away: 5 } },
    { id: "eliminacion-final-1", ronda: "final", formato: "unico", local: { equipo: "team:esp-rma" }, visitante: { equipo: "team:eng-mun" }, partidos: ["match:eliminacion-final-342"] }
];
