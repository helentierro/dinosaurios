# PLAN: Web de Dinosaurios (8 páginas conectadas)

Trabajo de planificación con `tasteskill` (framework anti-slop v2 completo, instalado 2026-10-11)
y el estándar de `visual-design` (voz española, orden de secciones, stack Dani).

## 0. Estado verificado (2026-10-11)

- `D:\1 MIS PROYECTOS DANNII\Web Mamíferos y Peces\Dinosaurios` existe y está vacía (verificado con `ls`).
- Convención de la familia (verificado):
  - `wen-mamiferos`: HTML estático + `estilos.css` propio + Google Fonts + imágenes de Wikimedia
    Commons con `credits.json` (autor, licencia, URL por imagen). 7 páginas (index + 6 temáticas).
  - `web-peces`: HTML estático, 4 páginas.
  - `web-mamiferos-react`: la variante React + Firebase.
- Stack elegido por Dani: Bun + React + Tailwind v4 + shadcn.
  - Coste real: hay build, los `.html` no se abren a doble clic.
  - Beneficio real: un solo `Layout`/`Nav`/`Footer` para las 8 páginas. En `wen-mamiferos` la
    cabecera está duplicada en cada archivo; con React se escribe una vez.

## 1. Design Read (tasteskill §0.B)

> Reading this as: microsite editorial-educativo para público familiar (adulto curioso +
> niños acompañados), con lenguaje de museo de historia natural, apoyado en React + Tailwind +
> shadcn con display serif.

Diales: `DESIGN_VARIANCE 6-7 / MOTION_INTENSITY 5 / VISUAL_DENSITY 3`.
Justificación: museo, no agencia (no 9/8/3) y no público-regulado (no 3/2/5).
Tono: fascinante sin ser infantil. Sin copy de "próxima generación".

## 2. Tokens (una paleta, un acento, un radio)

- Tema: light por defecto. Única sección oscura en "Extinción", registrada como excepción
  deliberada al Page Theme Lock (§4.11 del skill).
- Papel `#FAF9F6`, papel-alt `#F1EFE9`, tinta `#1C2321`, tinta-suave `#3D4845`, regla `#D8D4CA`
  (mismos tokens que mamíferos: coherencia de familia).
- Acento (elegir UNO y bloquearlo en toda la web):
  - A) Óxido fósil `#9C4221`: identidad propia de dinosaurios.
  - B) Verde profundo `#1F5C4A`: coherencia total con `wen-mamiferos`.
- Radios: 12-16px en toda la web (Shape Consistency Lock). Nada de pill + 4px mezclados.
- Tipografía: display `Source Serif 4` (serif justificado: editorial, museo, patrimonio,
  §4.1) + cuerpo `Inter` (override documentado: neutro + coherencia familiar).
  Self-hosted con `@fontsource-variable`. Prohibido `<link>` a Google Fonts en producción.
- Iconos: `@phosphor-icons/react` (primer orden del skill), un `strokeWidth` global.

## 3. Las 8 páginas (familia de layout distinta por página)

| # | Página | Familia de layout | Contenido |
|---|--------|-------------------|-----------|
| 1 | Inicio | Hero asimétrico + bento de 3 eras | Bienvenida, qué es un dinosaurio, 3 eras, CTA a Épocas |
| 2 | Épocas | Timeline con scroll-reveal (`whileInView`) | Triásico, Jurásico, Cretácico: qué apareció en cada una |
| 3 | Terópodos | Spec grid 2-col (dato grande + "por qué importa") | T. rex, Velociraptor, Spinosaurus, Allosaurus |
| 4 | Saurópodos | Zigzag imagen+texto (máx 2 seguidos) + 1 full-bleed | Argentinosaurus, Brachiosaurus, Diplodocus |
| 5 | Ornitisquios | Bento con diversidad visual (2-3 celdas con imagen) | Triceratops, Stegosaurus, Ankylosaurus, Parasaurolophus |
| 6 | Reptiles marinos | Pills scroll-snap + tiles destacados | Mosasaurus, Ictiosaurios, Plesiosaurios + nota honesta: NO son dinosaurios |
| 7 | Pterosaurios | Comparativa de escala (número + silueta, sin barras con track) | Quetzalcoatlus, Pteranodon + misma nota taxonómica |
| 8 | Extinción | Narrativa oscura full-bleed (única excepción al theme lock) | Chicxulub, qué pasó, qué sobrevivió |

Navegación: nav de una línea (máx 80px alto): Inicio, Épocas, Especies (dropdown con las 4
temáticas), Extinción, Fuentes. En cada página: enlace anterior/siguiente en el pie +
3 tarjetas "sigue explorando". Así ninguna página queda huérfana.

## 4. Reglas duras del pre-flight que se cumplen en cada página

- Cero em-dashes (`—`) y cero en-dash como separador en todo el copy visible.
- Máx 1 eyebrow cada 3 secciones; prohibidos los eyebrows numerados (`00 / INDEX`).
- Hero: titular máx 2 líneas, subtexto máx 20 palabras, CTA visible sin scroll, `pt-24` tope,
  máx 4 elementos de texto.
- Zigzag: máx 2 secciones seguidas con el patrón imagen+texto.
- Sin 3 cards idénticas; sin gradientes morados; sin Fraunces/Instrument Serif por defecto;
  sin `Inter` como única voz (aquí hay display serif).
- Motion con motivo: `MOTION 5` obliga a que la página se mueva (entrada de hero, reveals).
  Prohibido `window.addEventListener('scroll')`. Todo respeta `prefers-reduced-motion`.
- Imágenes reales: montajes de museo y fósiles de Wikimedia Commons con crédito por imagen
  en `credits.json` (misma convención que mamíferos). Prohibido inventar UI falsa con divs.
- Números reales con fuente, o marcados como ejemplo. Verificados hoy:
  - Chicxulub: asteroide de 10-15 km de diámetro, 66 Ma (Britannica).
  - Quetzalcoatlus northropi: envergadura ~11 m (Natural History Museum); estimaciones
    históricas de 5,2 a 25,8 m (Wikipedia) -> publicar el rango, no un número falso-preciso.
  - Argentinosaurus: ~73 t (estimación de 2016) frente a 90-95 t cuestionadas (Wikipedia)
    -> publicar "unas 70-95 t según el estudio".
  - T. rex: mordida entre ~35 y ~57 kN (Erickson et al.) hasta 235 kN en extrapolaciones
    -> publicar el rango con la nota de que es materia de debate.
  - Spinosaurus: propulsión con la cola, Ibrahim et al. 2020 (Nature).
- Ambos modos vistos antes de dar nada por listo (light + la sección oscura de Extinción).

## 5. Fases de ejecución

- **F0 Scaffolding.** `bun init`, Vite + React, `tailwindcss@4` con `@tailwindcss/postcss`
  (OJO: en v4 NO se usa el plugin `tailwindcss` en postcss), `shadcn` init, `@fontsource`,
  `motion`, `@phosphor-icons/react`. Estructura `src/pages/` (una por página) +
  `Layout`/`Nav`/`Footer` compartidos.
- **F1 Tokens + Layout + Inicio.** Primera build y captura para revisión de Dani.
- **F2-F5 Páginas en parejas**, cada par revisado contra el pre-flight antes de seguir.
- **F6 Auditoría de enlaces.** Script que extrae todos los `href` internos y comprueba que
  existen y que las 8 páginas son alcanzables desde Inicio.
- **F7 Imágenes + `credits.json`** + build final + Lighthouse.

## 6. Verificación (nada de "listo" sin evidencia)

- `bun run build` con exit code 0.
- Script de enlaces: 0 rotos, 8 páginas alcanzables.
- Pre-flight pasado página por página.
- Cada cifra con fuente o marcada como ejemplo.

## 7. Riesgos honestos

- El copy en español de 8 páginas es la parte larga: propongo 3-5 especies por página,
  no catálogos.
- Las imágenes de Commons para montajes y fósiles existen, pero licencia y crédito se
  verifican una a una (como ya hiciste en mamíferos).
- Si más adelante quieres coherencia total con `wen-mamiferos` (HTML plano), el contenido y
  los tokens se pueden portar; los componentes React no.
