# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: the site's owner — a full-stack developer/programmer building
a personal portfolio to present their skills and services to potential
employers or clients. Their real identity, specific skills, and projects
are not yet recorded (see Evidence on Hand); the current build uses a
placeholder persona ("Michael Santos") standing in for them.

Secondary audience, specific to the current delivery context: an anonymous
panel of evaluators judging the finished portfolio + a 3-minute pitch video
as the final challenge of a training module (see Operating Context).

## Product Purpose

A one-page personal portfolio site that demonstrates a full-stack
developer's skills, services, and past work clearly enough to convince an
employer, client, or evaluator to reach out. Success = the visitor
understands what the developer can do and how to contact them, backed by
curated evidence (not an exhaustive list) of real work.

## Positioning

Personal-brand portfolio, not a general product: its differentiation comes
entirely from the real individual's actual skills, projects, and voice.
With placeholder content in place, it currently makes no unique claim
beyond a generic full-stack service set — positioning becomes real only
once the owner's real information replaces the placeholders.

## Operating Context

Built as the final challenge ("El Reto Final: Crea y Vende tu Portafolio")
of a training module called **All-star Work Training Prep** — full brief in
`PORTAFOLIO VIRTUAL.pptx` (15 slides) at the project root. Per that brief:

- The deliverable is a portfolio **web page** plus a **3-minute pitch
  video** presenting it to the judging panel.
- Official timeline: 3 days to build the site, then record the pitch.
- Evaluated on four axes: Contenido, Creatividad, Presentación, Viabilidad.
- The brief explicitly asks to **limit AI use** when building the real
  submission, since the exercise evaluates the student's own skills. This
  build was generated in full as a starting template at the user's
  explicit request — the user is expected to replace the placeholder
  content with their own real material and voice before treating it as a
  submission.

Delivered as **files only** — no public hosting/deploy is currently
planned (no GitHub Pages, Vercel, Netlify, or similar).

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS, no backend, no database, no build
  tooling. Opened directly in a browser or served locally (e.g. Live
  Server).
- No public deployment target — constraints like asset paths, the CV
  download link, etc. are relative/local, not tied to a live domain.
- The "Descargar CV" button expects a local `cv.pdf` that does not exist
  yet.
- Contact links (email, GitHub, LinkedIn, WhatsApp) are placeholder
  addresses, not real.
- Required page structure is fixed by the training module's brief, not
  by product discovery: three "capas" — Identidad (Capa 1), Servicios y
  Habilidades (Capa 2), Evidencia y Contacto (Capa 3). See CLAUDE.md for
  the full structural + visual-system breakdown already in place.

## Evidence on Hand

None yet. All current content is placeholder/fictional, confirmed by the
user: the name "Michael Santos," the bio, the four example projects (task
manager, e-commerce API, automation bot, real-time dashboard), stack
proficiency percentages, certifications, and contact details. Future work
must not treat this placeholder content as real evidence, and any new
placeholder content added should be clearly flagged as such. When the
user supplies real projects/work, this section should be updated to
record what's real vs. what's still a placeholder.

## Product Principles

1. **Curation over quantity** — show only the strongest work, not every
   project (explicit rule from the module's brief).
2. **Action-driven language** for achievements ("Diseñé," "Implementé,"
   "Logré"...) over passive descriptions.
3. **User-replaceable by design** — the assignment's integrity depends on
   the real user supplying their own content and voice; the current build
   is a starting template, not a finished submission.
4. **Fixed 3-layer structure** (Identidad / Servicios y Habilidades /
   Evidencia y Contacto) comes from the training brief — don't
   restructure without a stated reason.
5. **Files-only delivery** — no hosting/deploy assumptions belong in this
   build unless the user changes that decision.

## Accessibility & Inclusion

No specific standard or user need has been established. The current build
already respects `prefers-reduced-motion` and uses semantic HTML elements
as a baseline, not as a confirmed requirement.
