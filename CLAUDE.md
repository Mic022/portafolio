# Portafolio — contexto del proyecto

## Qué es esto
Portafolio de servicios personal, en formato sitio web de una sola página
(one-pager). Es el proyecto final de un módulo de entrenamiento llamado
**"All-star Work Training Prep"** (ver `PORTAFOLIO VIRTUAL.pptx` en esta
carpeta, que contiene la consigna original de 15 diapositivas).

**Importante:** la consigna del módulo pide explícitamente *limitar* el uso
de IA en la construcción del portafolio, porque es un ejercicio evaluado
para demostrar habilidades propias (creatividad, gestión del tiempo,
comunicación). El sitio actual se generó completo como punto de partida a
pedido explícito del usuario, con contenido de ejemplo — antes de entregarlo
como tarea, el usuario reemplaza el contenido por el suyo propio. Tenelo en
cuenta: este repo es una base/plantilla, no el entregable final tal cual.

## Quién soy (persona del portafolio)
Persona de ejemplo actual: **"Michael Santos"**, desarrollador/a Full-Stack.
Todo el contenido (bio, proyectos, stack, contacto) es placeholder a
reemplazar por los datos reales del usuario.

## Público objetivo
Empresas/equipos que buscan contratar un/a desarrollador/a full-stack, o
clientes con una idea de producto web. En el contexto del ejercicio: un
panel de jueces que evalúa el reto final (pitch de 3 min).

## Estructura obligatoria (según la consigna, 3 "capas")
1. **Capa 1 · Identidad** — portada (nombre, foto opcional, rol), perfil
   profesional, Misión/Visión/Valores, a quién va dirigido.
2. **Capa 2 · Servicios y habilidades** — qué servicios ofrece, stack
   técnico (lenguajes/frameworks/herramientas), habilidades blandas,
   certificaciones que respaldan.
3. **Capa 3 · Evidencia y contacto** — proyectos curados (contexto / rol /
   resultado, no todos los proyectos, solo los mejores), datos de contacto,
   botón de descarga de CV.

Regla de oro del documento: **curación sobre cantidad**, lenguaje de acción
en los logros (verbos: "Diseñé", "Implementé", "Logré"...).

## Stack técnico
HTML + CSS + JS vanilla, sin build tools ni frameworks. Un solo one-pager:
- `index.html` — estructura y contenido
- `styles.css` — estilos
- `script.js` — interactividad (sin dependencias externas más allá de
  Google Fonts vía `<link>`)

No hay `package.json`, no hay proceso de build: se abre `index.html`
directo en el navegador o con Live Server.

## Sistema de diseño / estilo visual
**Fuente de verdad: `DESIGN.md`** (generado por el flujo de rediseño de
`/impeccable`, con su sidecar `.impeccable/design.json`). Leelo ahí en
detalle — acá va solo el resumen para no repetirlo todo.

**Dirección actual (reemplazó al look pastel anterior):** "Mapa de Metro /
Wayfinding" — un mapa de sistema de transporte estilo Vignelli (subte de
NYC). Cada capa obligatoria del documento es una **línea de color sólido**
que atraviesa la página como un riel real, y cada proyecto/skill es una
**estación** con su código de referencia (R1, S2, E4...). El contrato de
dirección completo está en `.impeccable/surfaces/index-html.md`.

**Paleta:** papel casi blanco `#faf9f6` + tinta `#14161c`, y tres colores
de línea reservados — rojo `#e3392e` (Identidad), azul `#1e5fd9`
(Servicios), verde `#1e8e4f` (Evidencia) — cada uno con su variante `-ink`
oscura para texto legible (AA). Sin modo oscuro (fue una decisión
deliberada del contrato, no un olvido).

**Tipografía:** `Big Shoulders Display` (títulos, nombres de estación,
numerales) + `Public Sans` (cuerpo). Sin fuente monoespaciada en ningún
lado — es a propósito, para que NO se lea como una terminal (eso era el
mundo visual anterior).

**Reglas de la dirección actual — no reintroducir lo viejo:**
- Nada de tarjeta de terminal, partículas conectadas, toggle claro/oscuro,
  ni la paleta pastel/violeta anterior — ese mundo fue descartado a
  propósito tras una ronda de rediseño completa.
- Nada de cards con ícono-arriba-de-título apiladas (patrón "genérico de
  IA" que el detector de `impeccable` marca), ni gradient text, ni
  `border-left` de color en callouts.
- Componentes: bordes completos de 1.5-3px (no sombras difusas), círculos
  para estaciones, rombos para "interchanges", placas ruladas para specs.
- Movimiento autorado, todo coherente con la metáfora del mapa (no
  efectos genéricos de entrada por tarjeta). En `script.js`:
  - **Riel + tablero "PRÓXIMA PARADA"**: sincronizado a scroll.
  - **Tren en vivo** (`.rail-train`): un punto viaja suave por el riel
    activo mientras se scrollea, en vez de saltar entre estaciones.
  - **Rastrear conexiones**: cualquier `.tech-btn` (tags de proyecto,
    chips del stack, nombres de skill en "Nivel de dominio") tiene
    `data-tech`; al clickear, resalta todas las estaciones que comparten
    esa tecnología y traza una línea punteada de transferencia entre
    ellas (`#traceOverlay`, SVG absoluto sobre todo el documento). Agregar
    una tecnología nueva = agregarle `class="tech-btn" data-tech="clave"`
    al elemento — se conecta solo.
  - **Planificador de ruta**: el diagrama del origen (`.schema-route`,
    dentro del SVG `.origin-schema`) son enlaces `<a href="#linea-...">`
    reales — llevan a esa línea y el scroll suave ilumina el camino.
  - **Andén** (`#stationPlatform`): al clickear "Ver detalle completo →"
    en un proyecto, un overlay a pantalla completa se abre con "llegada a
    estación" — el color de la línea barre la pantalla desde el punto
    donde se clickeó (`clip-path: circle()`), después aparece el detalle.
    La URL cambia de verdad (`#proyecto-e1`) vía History API — anda el
    botón atrás y los links directos — pero sigue siendo un solo HTML
    (no hay páginas nuevas). El contenido de cada proyecto vive en un
    `<template id="panel-eX">` dentro de `index.html`, cerca del final de
    la Línea Evidencia — para editar el detalle de un proyecto (agregar
    capturas reales, reescribir el desafío técnico), se edita ese
    `<template>` directamente, no hace falta tocar `script.js`.

## Al seguir trabajando en esto
- **Corré `impeccable detect --json index.html styles.css script.js`**
  después de tocar HTML/CSS — debe seguir en `[]` (limpio). Hay 3
  excepciones ya documentadas y permitidas en `.impeccable/config.json`
  (glow del ticker, grilla de fondo tipo mapa, bordes rulados de
  habilidades blandas) — no las repitas en otro contexto sin la misma
  justificación.
- Para cambios de diseño no triviales, preferí pasar por la skill
  `impeccable` (ya configurada en este proyecto: `PRODUCT.md`, `DESIGN.md`
  y el contrato de dirección existen) en vez de improvisar CSS suelto.
- Respetá la estructura de 3 capas del documento original.
- El contenido de ejemplo (nombre, proyectos, stack, bio) está para ser
  reemplazado por el usuario — señalá claramente qué es placeholder si
  agregás contenido nuevo.
- No hay backend ni base de datos: todo es estático, del lado del cliente.
