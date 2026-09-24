---
name: Michael Santos — Sistema de Portafolio
description: A one-page developer portfolio read as a Vignelli-style transit map, where each required content layer is a colored line and every project or skill a named station.
colors:
  map-paper: "#faf9f6"
  system-ink: "#14161c"
  ink-soft: "#4a4d57"
  ink-faint: "#5c5f68"
  signal-red: "#e3392e"
  signal-red-ink: "#b7291f"
  transit-blue: "#1e5fd9"
  transit-blue-ink: "#1a4fb8"
  transit-green: "#1e8e4f"
  transit-green-ink: "#157a42"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.7rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "'tnum' 1, 'lnum' 1"
  label:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  tag: "3px"
  circle: "50%"
spacing:
  rail-column: "68px"
  rail-column-mobile: "48px"
  station-min-height: "108px"
  container-max-width: "1180px"
  station-gutter: "28px"
components:
  button-ticket:
    backgroundColor: "{colors.system-ink}"
    textColor: "{colors.map-paper}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  button-ticket-hover:
    backgroundColor: "{colors.transit-green-ink}"
    textColor: "{colors.map-paper}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.system-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 10px"
  facility-link:
    backgroundColor: "transparent"
    textColor: "{colors.system-ink}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  facility-link-hover:
    backgroundColor: "{colors.system-ink}"
    textColor: "{colors.map-paper}"
---

# Design System: Michael Santos — Sistema de Portafolio

## Overview

**Creative North Star: "The Transit Diagram"**

The portfolio is read as one continuous Vignelli-style subway map, not a scrolled feed of feature cards. Each required content layer (Identidad / Servicios / Evidencia) is a solid-color line; every project or skill is a named station on that line; a skill or theme that serves more than one layer is an interchange, drawn as a real angled rail jog where two lines physically meet. The system commits to a near-white "map paper" ground with true-black system ink — never dark-mode-as-default — and reserves each saturated line color strictly for its own rail, dot, and current-state marking. Color is never decorative filler; it always means "this line" or "you are here."

This world explicitly rejects the AI-portfolio default it replaces: icon-tile-stacked feature cards, gradient hero text, drop-shadow card grids, and any code-editor/terminal skin. Depth and hierarchy come from ruled borders, rail geometry, and typographic weight, not from shadows or gradients. Confirmed visual rejections carried from the direction contract: no rounded icon-tile-above-heading cards, no gradient text, no monospace/code face anywhere on the page.

**Key Characteristics:**
- Flat map-paper ground with a faint true-black grid, never a gradient or photographic background.
- Three reserved line colors (signal red, transit blue, transit green), used only on their own line's rail, dots, headings, and active state — never as generic decoration.
- Condensed signage grotesk (Big Shoulders Display) for anything that names or numbers a place; a civic/wayfinding sans (Public Sans) for everything read as prose.
- Full-border ruled boxes (plaques, facilities, the soft-skills grid, tags) stand in for cards; nothing gets a drop shadow or a rounded icon tile.
- One authored motion system: scroll position drives which station is "passed" or "active" and what the ticker announces; there are no per-element fade-ins.

## Colors

Ground is near-white map paper with true-black ink; the three line colors are the only saturated hues in the system and each is scoped to one required content layer.

### Primary
- **System Ink** (`#14161c`): the map's structural color — headings, rails at rest, borders on every ruled box (plaque, facility, notice, ticket button), focus outlines, and the ticker's background.

### Secondary
- **Signal Red** (`#e3392e`) / text-safe **Signal Red Ink** (`#b7291f`): the Identidad line only — its rail, station dots, line heading, and legend swatch. Never used outside that line's own elements.
- **Transit Blue** (`#1e5fd9`) / text-safe **Transit Blue Ink** (`#1a4fb8`): the Servicios y Habilidades line only, same scoping.
- **Transit Green** (`#1e8e4f`) / text-safe **Transit Green Ink** (`#157a42`): the Evidencia y Contacto line only, and the terminus/contact section's accent (`.terminus-title`, `.ticket-btn:hover`).

Each line color ships two forms: the saturated form (`--red` / `--blue` / `--green`) for graphic use (rails, dots, swatches, backgrounds) and a darkened `-ink` form for any text use, because the saturated forms alone fail AA on map paper. Don't use the saturated form for text; don't use the `-ink` form for a rail or dot.

### Neutral
- **Map Paper** (`#faf9f6`): the page ground and the fill behind every station dot before it's reached.
- **Ink Soft** (`#4a4d57`): default body-copy color (station descriptions, pitch text) — a tint of ink, never pure gray.
- **Ink Faint** (`#5c5f68`): secondary/meta text (interchange labels, notes, colophon). This value was darkened from an earlier `#7a7d87` that measured 3.9:1 on map paper and failed AA for body-sized text; `#5c5f68` measures 6.0:1.

### Named Rules
**The One Line, One Color Rule.** A line color (red/blue/green, saturated or `-ink`) only ever appears inside that line's own section, its legend entry, or the interchange stitching it to its neighbor. It never appears as a generic accent, button color, or decoration elsewhere on the page.

**The Text-Safe Variant Rule.** Any text set in a line color uses the `-ink` variant, never the saturated graphic value. The saturated value is reserved for rails, dots, swatches, and fills.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif fallback)
**Body Font:** Public Sans (with system-ui, sans-serif fallback)

**Character:** A condensed, signage-grade grotesk paired with a civic/wayfinding sans — the pairing reads as public infrastructure signage, not as a marketing site or a code editor. Tabular figures (`font-feature-settings: "tnum" 1, "lnum" 1`) are set globally so any stat or numeral aligns like a real schedule board.

### Hierarchy
- **Display** (800 weight, `clamp(1.7rem, 6vw, 4rem)`, line-height 0.98): the origin name (`h1`), line headings, and the terminus title — always uppercase or near-uppercase, always Big Shoulders Display.
- **Headline** (800 weight, `clamp(1.7rem, 3.4vw, 2.5rem)`, uppercase): `.line-head-title`, one per line section.
- **Title** (800 weight, 1.3–1.55rem): station names (`.station-name`), larger on terminal/project stations (1.55rem) than ordinary stations (1.3rem).
- **Body** (400 weight, ~1rem, line-height 1.6, max 70ch): station descriptions and the origin pitch, set in Public Sans, color `ink-soft`.
- **Label** (700 weight, 0.72–0.85rem, letter-spacing 0.02–0.08em, uppercase where used): the ticker's "PRÓXIMA PARADA" label, station codes (`R1`, `S6`, `E1`…), tags, and plaque-group headers.

### Named Rules
**The No-Terminal-Face Rule.** No monospace or code-editor typeface appears anywhere in the system, including for stats, tags, or code-like labels — the entire point of this world is to not read as a code editor, which is what this exact project shipped last round.

**The Inline Code Rule.** The small station-code badge (`R1`, `S6`, `E1`…) sits inline beside the station name at baseline, matching real transit signage (e.g. "42 ST"). It is not a decorative kicker/eyebrow stacked above the heading; don't promote it into one.

## Layout

The page is a single vertical scroll track (`#scrollTrack`) built from stacked line sections, each capped at `max-width: 1180px` and centered. Every station, line head, interchange, and terminus row shares a two-column grid — a fixed rail column (`--rail-col: 68px`, `48px` under 560px) on the left carrying the rail/dot graphic, and a flexible content column on the right. Station rows have a `min-height: 108px` rhythm so the rail reads as continuous. A sticky top ticker (`52px` min-height) stays pinned above the scroll track at all times.

Responsive collapse happens in two steps: at 780px the 3-column legend and skill-chip groups become 1 column and the soft-skills ruled grid drops from 3 to 2 columns; at 560px the rail column and station-dot radius shrink, the origin header stacks vertically instead of side-by-side, and side margins tighten from 24px to 16px. The ticker's nav links and "próxima parada" label hide entirely under 720px, leaving only the brand mark and the cycling station name.

## Elevation & Depth

The system is flat by default: no ambient drop shadows, no card elevation, no blur. Every "container" (plaque, facility, notice, ticket button, soft-skill cell) is a flat ruled box defined by a solid `system-ink` border, not a shadow. The two exceptions are both state-driven, not ambient, and both are recorded direction-contract exceptions rather than a general shadow vocabulary:

### Shadow Vocabulary
- **Active-station glow** (`box-shadow: 0 6px 16px -2px currentColor`, on `.station.is-active .station-dot`): fires only on the currently active station dot, in that station's own line color, as the scroll-driven system marks "you are here."
- **Ticker glow** (`text-shadow: 0 6px 18px rgba(line-color, 0.55)`, on `.ticker-station[data-line]`): a single glowing accent on the sticky ticker's current-stop text, donated as a restrained raise from a declined neon-circuit challenger direction. Sanctioned via `impeccable hooks ignore-value` for the `dark-glow` rule, scoped to this one element — not a general glow/neon vocabulary for the rest of the system.

### Named Rules
**The State-Only Glow Rule.** Glow/shadow only ever communicates "current" or "active" state (the ticker's live stop, the active station dot). It never decorates a resting element.

## Shapes

Two families of form carry the whole system, and neither is a rounded card. Circles mark points: station dots, the origin badge, legend swatches, skill-level dots — always a filled or ringed circle (`border-radius: 50%`), never a rounded-square tile. Interchanges are marked with a 45°-rotated square (a diamond), distinguishing "line meets line" from an ordinary station. Everything else is a hard-edged, fully-bordered rectangle at `border-radius: 0` (plaques, facilities, the ticket button, station-code badges, the soft-skills grid cells) — full 2–3px `system-ink` borders on all four sides, not a single colored accent edge. The only soft corners in the system are a 3px radius on small pill-like elements (station tags, ticker-nav links), intentionally distinct from the sharp-cornered ruled boxes.

Rails themselves are solid 5px-wide bars in the active line's color, running straight through ordinary stations and bending in a real 16° angled jog at each interchange — a literal transit-map kink, not a straight line that just changes color.

## Components

### Buttons
- **Shape:** hard rectangle, `border-radius: 0`, `2px` solid `system-ink` border.
- **Primary (`.ticket-btn`):** `system-ink` background, `map-paper` text, Big Shoulders Display 700, uppercase, `14px 22px` padding — used once, for "Descargar CV" at the terminus.
- **Hover:** background and border shift to `transit-green-ink`, the Evidencia/Contacto line color, since the button lives in that line's terminus.
- **Facility buttons/links (`.facility`):** same ruled-rectangle grammar with a `2px` border, transparent background at rest; hover/focus inverts to `system-ink` background with `map-paper` text (`facility:hover, facility:focus-visible`).

### Chips (tags)
- **Style:** transparent background, `1.5px` `system-ink` (or `ink-faint` for stack chips) border, `3px` radius, Public Sans 700, small size (0.76–0.78rem).
- **State:** display-only; no selected/unselected toggle. `.station-tag` marks project stack tags; `.chip` marks stack/tool groupings inside the skills plaque.

### Cards / Containers
- **Corner Style:** `border-radius: 0` — square corners throughout (plaque, notice, soft-skill cells).
- **Background:** `map-paper`, matching the page ground; containers read as ruled paper, not raised surfaces.
- **Shadow Strategy:** none; see Elevation & Depth. Depth comes entirely from the border weight (2–3px).
- **Border:** full 2–3px `system-ink` border on all sides. The soft-skills grid (`.soft-skills-list` / `.soft-skill`) builds its ruled grid by splitting the border across container (left+top) and cell (right+bottom) rather than each cell carrying its own box — same full-border grammar, distributed for a shared-edge grid.
- **Internal Padding:** 14–26px depending on box (facility 14×16, plaque 24×26, notice 14×18).

### Navigation
- **Style:** the sticky `.ticker` is the only nav surface — `system-ink` background, `map-paper` text, Big Shoulders Display brand mark, live-updating "PRÓXIMA PARADA" station name (scroll-driven, see Signature Component below).
- **Typography:** nav links are Public Sans 700, 12px, uppercase-weight letter-spacing (0.04em), in a bordered pill (`1.5px` translucent-paper border, 3px radius).
- **States:** default translucent border; hover solidifies the border to full `map-paper`.
- **Mobile:** nav links and the "PRÓXIMA PARADA" label both hide under 720px; only the brand mark and cycling station name remain, keeping the ticker legible at any width.

### Rail & Station (signature component)
The spine of the system. A `.station` is a two-column grid: a `.station-rail` column carries a continuous `currentColor` bar (`5px` wide) with a circular dot (`border: 4px solid currentColor`, filled with `map-paper` at rest); the content column carries the inline station code, station name, and description. `data-station` elements are scroll-tracked by `script.js`: a station's dot fills solid once scrolled past (`is-passed`), and the most recently passed station gets the glow treatment (`is-active`). An `.interchange` breaks the rail's straight run with a real 16°-angled two-color jog and a rotated-square (diamond) marker where one line hands off to the next. This mechanism is the system's only authored motion: no per-card fade-ins exist anywhere else in the build.

## Do's and Don'ts

### Do:
- **Do** scope every line color (red/blue/green) strictly to its own line's rail, dots, headings, and legend entry — see The One Line, One Color Rule.
- **Do** use the `-ink` text-safe variant of a line color for any text; reserve the saturated value for graphic fills (rails, dots, swatches).
- **Do** build containers as full 2–3px `system-ink`-bordered rectangles at `border-radius: 0`, not rounded cards or shadowed tiles.
- **Do** draw interchange points as a real angled rail jog (16°) with a diamond marker, not a straight rail that just changes color.
- **Do** drive state (passed/active/current) from scroll position through the one rail mechanism in `script.js`, not per-element scroll-triggered animations.
- **Do** set tabular figures (`"tnum" 1, "lnum" 1`) globally so numerals and stats align like a schedule board.

### Don't:
- **Don't** use a rounded icon-tile-above-heading card, drop-shadow card grid, or gradient text anywhere — all three are explicit direction-contract rejections of the category-default AI-portfolio look this build replaced.
- **Don't** use a monospace/code-editor face for any text, including stats or tags — the system exists specifically to not read as a terminal, which is what this project's previous look did.
- **Don't** apply glow or shadow to a resting element; it's reserved for the two sanctioned, state-driven exceptions (active station dot, ticker's current stop) and should not spread into a general shadow vocabulary.
- **Don't** stack the station-code badge above the heading as a decorative kicker/eyebrow; it stays inline at baseline, matching real signage.
- **Don't** treat the soft-skills ruled grid or the map-paper background grid as generic patterns to reuse elsewhere without the same grounding — both are sanctioned exceptions tied to specific direction-contract requirements (ruled-box grammar; literal map-paper material), not general license for accent-stripe callouts or decorative grid backgrounds.
