# CLAUDE.md

Guía de trabajo para Claude Code en **Estadióstica**. Léela antes de tocar código.

## Qué es este proyecto

Sitio estático de estadísticas de fútbol (fixture, partido, posiciones, equipo, jugador)
para 11 ligas. Sin API ni datos en vivo: usa datos de ejemplo estáticos y deterministas
detrás de una capa (`js/repo.js`) que en el futuro se puede reemplazar por una API real
sin tocar el código de las páginas.

Stack: HTML5 semántico (`lang="es"`) + SCSS (Dart Sass, sin frameworks) + JS con
módulos ES nativos (sin bundler). Todo el layout es CSS Grid/Flexbox propio.

## Comandos

```bash
npm install          # una vez
npm run build         # compila scss/main.scss -> styles/styles.css
npm run watch          # recompila en cada cambio, mientras se trabaja el SCSS
```

Para ver el sitio: abrir la carpeta con **Live Server** (VS Code) y entrar a
`index.html`. Los módulos JS son ES modules — **no funcionan con doble clic**
(protocolo `file://`); hace falta un server real (Live Server, o el server de
scratchpad para pruebas puntuales).

No hay test runner ni linter configurado.

## Estructura

```
estadiostica/
├── index.html            Inicio / Fixture
├── pages/                  partido.html · posiciones.html · equipo.html · jugador.html
├── scss/                   utilities → base → layout → components (ese orden, ver main.scss)
├── styles/styles.css       compilado, NO se edita a mano
├── js/
│   ├── repo.js              facade async de datos — única puerta de entrada para las páginas
│   ├── data/                 datos por liga + db.js (índices y derivaciones) + leagues.js (config)
│   ├── lib/                   helpers puros: fecha.js, tabla.js, prng.js, escudo.js, dom.js
│   ├── ui/                    comportamientos genéricos: acordeón, pestañas, selector de fecha, navbar
│   └── pages/                  un controlador por pantalla (inicio, partido, posiciones, equipo, jugador)
└── assets/                  favicon.svg, escudos/ (crests reales)
```

## Arquitectura de datos — no romper este contrato

- **`js/data/<liga>/{teams.js,matches.js,squads.js}`** → datos crudos por liga.
  `squads.js` sólo trae los planteles escritos a mano (2 equipos "destacados" por
  liga); el resto de los equipos no tiene squad propio.
- **`js/data/index.js`** → arma `DATOS_CRUDOS` juntando las 11 ligas.
- **`js/data/db.js`** → "base de datos" en memoria: indexa (`equipos`, `jugadores`,
  `partidos`, `byDate`/`byLeague`/`byTeam`) y DERIVA lo que no se guarda: la tabla de
  posiciones (`computeTable()` de `js/lib/tabla.js`, nunca se guarda como dato) y los
  planteles de los equipos sin squad manual (`generarPlantel()`, determinista vía PRNG).
  Es una API sincrónica de uso interno — sólo la consume `repo.js`.
- **`js/repo.js`** → único facade que consumen los controladores de página. Reglas
  duras: todo método es `async` (para poder cambiarse por una API real sin tocar
  páginas) y todo lo que devuelve pasa por `structuredClone(...)` (las páginas nunca
  pueden mutar la "base" por accidente). Cada método lleva un `@typedef` con la forma
  exacta que promete — ese typedef es el contrato, no lo rompas sin avisar.
- **PRNG determinista** (`js/lib/prng.js`: `mulberry32` + `hashString` FNV-1a) — misma
  semilla, misma secuencia siempre. Se usa para todo dato "de ejemplo" (planteles
  autogenerados, stats, mapas de tiros). Si tocás el generador de datos, verificá con
  `git diff` que las ligas que no cambiaste siguen dando el mismo output byte a byte.
- **`js/data/leagues.js`** → config por liga (`zones`, `tiebreakers`, `adjustments`,
  `positionAverages`, `teamAverages`). Para sumar una liga nueva: un objeto acá +
  su carpeta en `js/data/`. Nada más.
- IDs: equipo `team:<pais3letra>-<abbr3letra>` (p. ej. `team:arg-riv`), jugador
  `player:<pais>-<abbr>-<n>`, liga `league:<slug>`.

## SCSS — reglas de arquitectura (no negociables)

- **`@extend`** sólo para reglas byte-idénticas entre ≥2 consumidores, y NUNCA dentro
  de `@media` ni desde selectores contextuales/descendientes.
- **`@mixin`** para todo lo que varía (tamaño, color, origen, contexto). Los mixins
  viven en `scss/utilities/_mixins.scss` con argumentos nombrados y defaults a los
  tokens de `_variables.scss`.
- **Custom properties**: sólo existen `--est-pct` y `--est-val` en todo el proyecto
  (las escribe JS para las barras comparativa/desvío). No agregar otras.
- **Paleta 100% en Sass**: ningún color va suelto en un archivo puntual. Si hace
  falta un color que no existe, se agrega como variable formal en
  `scss/utilities/_variables.scss` (nombre en español, describe el ROL no el valor:
  `$color-borde-claro`, no `$c1`).
- **`scss/main.scss`** es el único punto de entrada: sólo `@use`, en orden
  utilities → base → layout → components, sin `@forward` ni `_index.scss`, cada
  partial listado explícito para que la cascada quede a la vista. Si agregás un
  partial nuevo, sumalo ahí en el bloque que corresponda.
- Un único breakpoint (`$bp-desktop: 960px`) vía el mixin `desktop` — mobile-first,
  no agregar media queries sueltas.

## Identidad y diseño

- **El sesgo (`$sesgo: -14deg`, skewX) es un elemento FUNCIONAL, no decorativo.**
  Se repite a propósito en encabezados de sección, indicadores de estado, barras
  comparativas y separadores de zona, vía los mixins existentes:
  `barra-sesgada` (rectángulo/tick inclinado), `fondo-sesgado` (fondo detrás del
  contenido, patrón "lift-the-content"), `fondo-sesgado-clip` (recorte sin pseudo),
  `encabezado-sesgado`, `barra-comparativa`, `barra-desvio`. Si agregás un
  componente nuevo y no aparece el sesgo en ningún lado, probablemente falte algo —
  antes de inventar un mecanismo de inclinación nuevo, mapealo a uno de estos mixins.
  Nunca aplicar `transform` al host completo (crea containing block/stacking
  context) — el sesgo va siempre en la barra o en el pseudo-elemento.
- **Nunca usar Bootstrap ni AOS.** Todo el layout es CSS Grid/Flexbox nativo,
  animaciones con `transition`/`@keyframes` nativos.
- **Toda decisión visual nueva o significativa pasa primero por Claude Design** (la
  app) antes de implementarse en código. Si el usuario no trae una propuesta de ahí
  para un cambio visual grande, preguntarle si quiere pasarlo por Claude Design primero.
- Paleta oscura (`#0D1117` fondo, acento `#39FF6A`), tipografía Archivo (títulos) +
  IBM Plex Mono (etiquetas/datos numéricos), cargadas por `<link>` de Google Fonts
  en cada HTML — no hay build tool para JS/fuentes.

## Datos y fidelidad de contenido

- **El conocimiento de entrenamiento sobre rosters/ascensos/descensos reales puede
  estar desactualizado.** Avisar esto explícitamente al usuario y, si es posible,
  verificarlo antes de asumir que una lista es correcta. Ya pasó varias veces (Ligue 1,
  Primeira Liga, Liga Saudí, Uruguay tuvieron rosters incorrectos que hubo que corregir
  a partir de la verificación del usuario).
- **Nunca inventar escándalos, sanciones o eventos reales inexistentes** para un club
  o jugador real (p. ej. los `adjustments` de quita de puntos por liga — Málaga CF,
  Schalke 04, Everton — se basan en precedentes reales documentados). Si no hay un
  caso real conocido, decirlo explícitamente en vez de fabricar uno.
- La capa `repo.js`/`db.js` está diseñada para poder reemplazar los datos de ejemplo
  por una API real sin tocar páginas — cualquier cambio ahí debe preservar esa
  propiedad (métodos async, misma forma de retorno).
- **Fallbacks obligatorios** cuando falta un asset real: escudo de club → monograma
  con iniciales sobre `brandColor` (ver `js/lib/escudo.js` + `js/data/escudos.js`);
  foto de jugador → silueta genérica con número en marca de agua gris (no implementado
  todavía, pero el criterio aplica cuando se agregue). Nunca dejar un espacio roto o
  vacío.

## Proceso de trabajo

- Para un pedido grande o ambiguo: mostrar el plan completo y esperar confirmación
  explícita antes de crear o modificar archivos. No asumir modo automático.
- Si algo del pedido contradice lo que ya existe en el código (nombres de campo,
  convenciones, arquitectura previa), avisar antes de aplicarlo — no sobrescribir en
  silencio.
- Commits: siempre en español, [Conventional Commits](https://www.conventionalcommits.org/)
  (`feat:`, `fix:`, `refactor:`, `docs:`, etc.), **sin trailer de Co-Authored-By**.
- No hacer `commit` ni `push` hasta que el usuario lo pida explícitamente después de
  revisar el resultado.
- No tocar el scaffold original (`package.json`, `.gitignore`, `.gitattributes`,
  `README.md`, `assets/favicon.svg`) salvo pedido explícito.
