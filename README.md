# 🗺️ Portafolio · Michael Santos

Portafolio personal de **Michael Santos**, desarrollador full-stack en formación en **Campuslands** (Colombia), con foco en **Java + Spring Boot**, bases de datos **PostgreSQL / MySQL** y frontend con **JavaScript**.

El sitio está diseñado como un **mapa de metro**: cada sección es una línea de color y cada proyecto o servicio es una estación que se puede recorrer.

**🔗 Demo en vivo:** [mic022.github.io/portafolio](https://mic022.github.io/portafolio/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

---

## Contenido

1. [Qué encontrarás en el sitio](#qué-encontrarás-en-el-sitio)
2. [Tecnologías](#tecnologías)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Cómo ejecutarlo](#cómo-ejecutarlo)
5. [Decisiones de diseño y calidad](#decisiones-de-diseño-y-calidad)
6. [Pruebas de usabilidad](#pruebas-de-usabilidad)
7. [Flujo de trabajo con Git](#flujo-de-trabajo-con-git)
8. [Despliegue](#despliegue)
9. [Contacto](#contacto)

---

## Qué encontrarás en el sitio

| Línea | Sección | Contenido |
|---|---|---|
| 🔴 Identidad | Perfil | Perfil profesional, misión, visión, valores y a quién va dirigido |
| 🔵 Servicios | Servicios y stack | Servicios que ofrezco, nivel de dominio por tecnología, habilidades blandas y formación |
| 🟢 Evidencia | Proyectos | 7 proyectos del entrenamiento con **contexto, mi rol, resultado y desafío principal**, más capturas en los que tienen interfaz |
| ⚫ Terminal | Contacto | Correo (enlace `mailto` con asunto prellenado), GitHub, LinkedIn, WhatsApp y hoja de vida descargable en PDF |

### Proyectos destacados

| # | Proyecto | Stack | Repositorio |
|---|---|---|---|
| E1 | **Campus Ops**: operación del campus con gemelo digital 3D (hackatón) | Python · FastAPI · React · TypeScript · Three.js | [campuslands-ops](https://github.com/Mic022/campuslands-ops) |
| E2 | **NEXO**: gestión hospitalaria con permisos por rol | Java · Spring Boot · Spring Security · JWT · PostgreSQL · Docker | [Spring-security_hospital](https://github.com/Mic022/Spring-security_hospital) |
| E3 | **CampusDesk**: mesa de ayuda de incidencias TI (equipo de 4) | Java · Spring Boot · PostgreSQL · JUnit | [CampusDesk_Springboot_Proyect](https://github.com/Mic022/CampusDesk_Springboot_Proyect) |
| E4 | **CampusVerse AI**: mentor educativo con IA (hackatón) | React · n8n · Gemini | [CampusVerse-AI-hackathon](https://github.com/velascodazasergio-png/CampusVerse-AI-hackathon) |
| E5 | **RapidExpress**: gestión de flotas y rutas | Java · MySQL · Maven | [RapidExpress-triada_JAVA](https://github.com/velascodazasergio-png/RapidExpress-triada_JAVA) |
| E6 | **CampusBuild**: gestión de proyectos de construcción | JavaScript · Web Components | [CampusBuild](https://github.com/Mic022/Sistema_de_gesti-n_de_proyectos_CampusBuild-grupo-Plan--A) |
| E7 | **Netflix DB**: normalización a 3FN en PostgreSQL | PostgreSQL · Docker | [PostgreSQL_netflix](https://github.com/Mic022/PostgreSQL_netflix) |

### Funciones interactivas

- **Próxima parada:** la barra superior muestra en todo momento la estación que estás leyendo.
- **Rutas por tecnología:** al hacer clic en una tecnología (por ejemplo *Java* o *PostgreSQL*), se resaltan y conectan todas las estaciones que la usan.
- **Andén de proyecto:** "Ver detalle completo" abre una vista a pantalla completa con el desafío principal y capturas. Se cierra con el botón *Volver al mapa* o con `Esc`.
- **Contacto directo:** el botón *Escríbeme un correo* abre el cliente de correo; *Copiar correo* copia la dirección al portapapeles.

---

## Tecnologías

- **HTML5 semántico:** `header`/`nav`, `main`, `section`, `footer`, jerarquía de títulos `h1 → h2 → h3` y `template` para el detalle de cada proyecto.
- **CSS3:** variables (custom properties), Grid y Flexbox, animaciones y transiciones, media queries y `prefers-reduced-motion`.
- **JavaScript (vanilla, ES6+):** cálculo de posición en scroll para el riel de estaciones y la "próxima parada", SVG dinámico para las rutas por tecnología y API del portapapeles.
- **Google Fonts:** *Big Shoulders Display* (títulos) y *Public Sans* (texto).

Sin frameworks ni proceso de build: el sitio son tres archivos estáticos y una carpeta de imágenes.

---

## Estructura del proyecto

```text
portafolio/
├── index.html      Estructura y contenido (3 líneas + terminal de contacto)
├── styles.css      Sistema visual, componentes y reglas responsive
├── script.js       Interactividad: riel, próxima parada, rutas y andenes
├── img/            Capturas de los proyectos (JPEG optimizado, ≤ 1200 px)
├── cv/             Hojas de vida en PDF (profesional y formato Campuslands ES + EN)
└── README.md
```

---

## Cómo ejecutarlo

No requiere instalación.

```bash
git clone https://github.com/Mic022/portafolio.git
cd portafolio
```

Luego abre `index.html` en el navegador, o sírvelo con un servidor estático:

```bash
python3 -m http.server 5500
# abre http://localhost:5500
```

También funciona con la extensión **Live Server** de VS Code.

---

## Decisiones de diseño y calidad

| Criterio | Cómo se resolvió |
|---|---|
| **Responsive** | Diseño fluido con breakpoints en 780, 720, 560 y 520 px. Verificado sin scroll horizontal a 360, 390, 768 px y escritorio. |
| **Contraste** | Texto oscuro sobre papel claro y colores de línea saturados (rojo, azul, verde) usados como acento, no como fondo de texto largo. |
| **Imágenes optimizadas** | Capturas redimensionadas a un máximo de 1200 px y comprimidas como JPEG progresivo (≈ 45–85 KB cada una), con `width`/`height` declarados, `loading="lazy"` y `decoding="async"`. |
| **Semántica y accesibilidad** | Etiquetas semánticas, textos alternativos descriptivos, `aria-label` en el diagrama SVG, diálogo con `role="dialog"` y `aria-modal`, foco visible y respeto por `prefers-reduced-motion`. |
| **Navegabilidad** | Menú fijo con anclas a cada sección, diagrama inicial clicable y barra de "próxima parada" que indica dónde estás. |
| **SEO y redes** | `meta description`, `theme-color` y etiquetas Open Graph para que el enlace se vea con título, resumen e imagen al compartirlo. |
| **Contacto** | Enlace `mailto:` con asunto prellenado en la barra superior, en la tarjeta de correo y en un botón principal. |

---

## Pruebas de usabilidad

Pruebas manuales realizadas antes de publicar:

| Prueba | Resultado |
|---|---|
| Navegación del menú superior a cada sección | ✅ |
| Diagrama inicial: cada línea lleva a su sección | ✅ |
| Abrir y cerrar el detalle de cada uno de los 7 proyectos (botón y tecla `Esc`) | ✅ |
| Rutas por tecnología: resaltar y desactivar al volver a hacer clic | ✅ |
| Enlaces `mailto` abren el cliente de correo con el asunto | ✅ |
| Copiar correo muestra la confirmación "¡Copiado!" | ✅ |
| Todas las imágenes cargan (0 imágenes rotas) | ✅ |
| Sin desbordamiento horizontal a 360, 390 y 768 px | ✅ (se corrigió en `fix(responsive)`) |
| Enlaces externos abren en pestaña nueva con `rel="noopener"` | ✅ |

---

## Flujo de trabajo con Git

El repositorio sigue **Git Flow**:

- `main`: versión estable, publicada en GitHub Pages. Solo recibe merges desde `develop`.
- `develop`: integración de cambios.
- `feature/*`: una rama por mejora (por ejemplo `feature/proyectos-recientes`, `feature/contacto-correo`), que se integra a `develop` con `merge --no-ff`.

Los commits siguen **Conventional Commits** con emoji:

```text
<tipo>(<alcance>): <emoji> <título>

<descripción del cambio y su motivo>
```

| Tipo | Uso |
|---|---|
| `feat` | Nueva funcionalidad o contenido |
| `fix` | Corrección de un error |
| `docs` | Documentación |
| `chore` | Mantenimiento del repositorio |
| `merge` | Integración de ramas |

Las versiones publicadas se marcan con etiquetas semánticas (`v1.0.0`, `v1.1.0`…).

---

## Despliegue

El sitio se publica con **GitHub Pages** desde la rama `main` (carpeta raíz). Cada merge a `main` actualiza automáticamente [mic022.github.io/portafolio](https://mic022.github.io/portafolio/).

---

## Contacto

**Michael Santos**: desarrollador full-stack en formación

- ✉️ [maicolsantosrondon@gmail.com](mailto:maicolsantosrondon@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/michael-santos-rondon-588494391/)
- 🐙 [GitHub](https://github.com/Mic022)
- 📄 [Hoja de vida profesional (PDF)](https://mic022.github.io/portafolio/cv/HDV-Michael-Santos-Profesional.pdf)
- 📄 [Hoja de vida formato Campuslands (PDF, español + inglés)](https://mic022.github.io/portafolio/cv/HDV-Michael-Santos-ES-EN.pdf)
