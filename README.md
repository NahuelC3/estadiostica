# 🟢 Estadióstica

Sitio estático de estadísticas de fútbol: fixture del día, detalle de partido, tabla de
posiciones, página de equipo y página de jugador, para múltiples ligas.

Por ahora **no hay API ni datos en vivo**: el sitio se arma con datos de ejemplo estáticos,
realistas y consistentes entre pantallas, detrás de una capa (`js/repo.js`) que más adelante se
reemplaza por una fuente real sin tocar el código de las páginas.

## ⚙️ Stack

- HTML5 semántico, `lang="es"`
- SCSS (Dart Sass) con arquitectura de partials — sin frameworks (sin Bootstrap, sin AOS)
- CSS Grid + Flexbox, layout 100% propio
- JavaScript con módulos ES nativos (sin build tool para JS)

## 📁 Estructura

```
estadiostica/
├── index.html          Inicio / Fixture
├── pages/               partido.html · posiciones.html · equipo.html · jugador.html
├── scss/                utilities → base → layout → components
├── styles/styles.css    compilado desde scss/main.scss
├── js/
│   ├── repo.js           facade async de datos (contrato de API)
│   ├── data/              módulos de datos por liga
│   ├── lib/               helpers puros (fecha, tabla, prng, escudo, dom)
│   ├── ui/                comportamientos genéricos (acordeón, pestañas, selector de fecha)
│   └── pages/              controlador por pantalla
└── assets/               favicon y, más adelante, escudos/fotos reales
```

## 🚀 Cómo correrlo

1. `npm install`
2. `npm run build` (o `npm run watch` mientras se trabaja el SCSS)
3. Abrir la carpeta con **Live Server** (VS Code) y entrar a `index.html`

Los módulos JS son ES modules: **no funcionan abriendo el `index.html` con doble clic** (protocolo
`file://`). Cada página detecta esto y muestra un aviso pidiendo servirla con Live Server.

## 🎨 Marca

Paleta oscura (`#0D1117` de fondo, acento `#39FF6A`), tipografía Archivo + IBM Plex Mono, isotipo
de barras inclinadas (`$sesgo: -14deg`) inline en el navbar.
