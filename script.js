// ============================================================
// Un único momento de movimiento autorado: el sistema de riel.
// Mientras se hace scroll, el tren avanza —el punto de estación
// activo se enciende con el color de su línea, y el tablero de
// "próxima parada" arriba siempre dice adónde vas.
// No hay entradas genéricas de fade-in por tarjeta: todo el
// movimiento de la página vive en este único mecanismo.
// ============================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Año dinámico en el colofón
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ------------------------------------------------------------
// Copiar email al portapapeles (botón "Copiar correo" del contacto)
// ------------------------------------------------------------
const copyEmailBtn = document.getElementById("copyEmail");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.dataset.email;
    const label = copyEmailBtn.textContent;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = "¡Copiado!";
    } catch (e) {
      copyEmailBtn.textContent = email;
    }
    copyEmailBtn.classList.add("is-copied");
    setTimeout(() => {
      copyEmailBtn.classList.remove("is-copied");
      copyEmailBtn.textContent = label;
    }, 1800);
  });
}

// ------------------------------------------------------------
// El sistema de riel: qué estación está activa/pasada, y el
// texto del tablero "PRÓXIMA PARADA".
// ------------------------------------------------------------
const stations = Array.from(document.querySelectorAll("[data-station]"));
const tickerStation = document.getElementById("tickerStation");

function lineOf(stationEl) {
  const lineSection = stationEl.closest(".line");
  return lineSection ? lineSection.dataset.line : "red";
}

function updateRail() {
  const viewportMid = window.innerHeight * 0.35;

  // "Pasada" = ya recorrimos TODA la estación (su borde inferior cruzó
  // el umbral). Usar el borde superior aquí adelantaba el tablero en
  // estaciones altas como "Stack y certificaciones" (~1000px): se
  // marcaba como recorrida apenas empezabas a leerla.
  stations.forEach((st) => {
    const rect = st.getBoundingClientRect();
    const passed = rect.bottom < viewportMid;
    st.classList.toggle("is-passed", passed);
  });

  stations.forEach((st) => st.classList.remove("is-active"));

  // "Activa" = la última a la que ya llegamos (su borde superior cruzó
  // el umbral), aunque todavía no la hayamos recorrido entera.
  let active = null;
  for (const st of stations) {
    if (st.getBoundingClientRect().top < viewportMid) active = st;
  }
  if (active) active.classList.add("is-active");

  // La "próxima parada" es la primera estación que todavía no
  // recorrimos entera, o la última si ya terminamos la línea.
  let next = stations.find((st) => !st.classList.contains("is-passed"));
  if (!next) next = stations[stations.length - 1];

  if (tickerStation && next) {
    // El nombre de la estación es el texto después del badge de código
    // (el último nodo hijo del <h3>, ya que el código es un <span> inicial).
    const nameNode = next.querySelector(".station-name").lastChild;
    const name = (nameNode ? nameNode.textContent : "").trim();
    if (name && tickerStation.textContent !== name) {
      tickerStation.textContent = name;
    }
    tickerStation.dataset.line = lineOf(next);
  }
}

// ------------------------------------------------------------
// Tren en vivo: un punto viaja suave por el riel activo, en vez
// de solo saltar de estación en estación. Usa la misma referencia
// de scroll que el tablero "PRÓXIMA PARADA".
// ------------------------------------------------------------
const lines = Array.from(document.querySelectorAll(".line"));

function updateTrain() {
  const refY = window.innerHeight * 0.35;
  lines.forEach((lineEl) => {
    const train = lineEl.querySelector(".rail-train");
    const rails = lineEl.querySelectorAll(".station-rail");
    if (!train || !rails.length) return;

    const lineTop = lineEl.getBoundingClientRect().top;
    const railTop = rails[0].getBoundingClientRect().top;
    const railBottom = rails[rails.length - 1].getBoundingClientRect().bottom;

    if (refY < railTop - 60 || refY > railBottom + 60) {
      train.classList.remove("is-visible");
      return;
    }
    const clampedY = Math.min(Math.max(refY, railTop), railBottom);
    train.style.top = clampedY - lineTop + "px";
    train.classList.add("is-visible");
  });
}

if (stations.length) {
  if (reduceMotion) {
    updateRail();
    updateTrain();
  } else {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateRail();
          updateTrain();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateRail();
    updateTrain();
  }
}

// ------------------------------------------------------------
// Rastrear conexiones: click en una tecnología resalta todas las
// estaciones que la comparten y traza una línea de transferencia
// punteada entre ellas — como marcar una línea en un mapa real
// para ver por dónde más pasa.
// ------------------------------------------------------------
const techButtons = Array.from(document.querySelectorAll(".tech-btn"));
const traceOverlay = document.getElementById("traceOverlay");
let activeTech = null;

function drawTraceLines(tech) {
  if (!traceOverlay) return;
  traceOverlay.innerHTML = "";
  if (!tech) return;

  const matched = stations.filter((st) =>
    st.querySelector('.tech-btn[data-tech="' + tech + '"]')
  );
  if (matched.length < 2) return;

  traceOverlay.setAttribute("width", document.documentElement.scrollWidth);
  traceOverlay.setAttribute("height", document.documentElement.scrollHeight);

  const points = matched
    .map((st) => {
      const dot = st.querySelector(".station-dot");
      if (!dot) return null;
      const r = dot.getBoundingClientRect();
      return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
    })
    .filter(Boolean)
    .sort((a, b) => a.y - b.y);

  const bow = 22;
  const svgNS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const dy = b.y - a.y;
    const d =
      "M " + a.x + "," + a.y +
      " C " + (a.x + bow) + "," + (a.y + dy * 0.33) +
      " " + (b.x + bow) + "," + (a.y + dy * 0.67) +
      " " + b.x + "," + b.y;
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "trace-line");
    traceOverlay.appendChild(path);
  }
  // Un frame después, para que la transición de opacity/CSS corra.
  requestAnimationFrame(() => {
    traceOverlay.querySelectorAll(".trace-line").forEach((p) => p.classList.add("is-visible"));
  });
}

function applyTrace(tech) {
  activeTech = tech;
  techButtons.forEach((btn) => {
    const match = btn.dataset.tech === tech;
    btn.classList.toggle("is-traced", match);
    btn.classList.toggle("is-dimmed", Boolean(tech) && !match);
  });
  stations.forEach((st) => {
    const hasMatch = tech && st.querySelector('.tech-btn[data-tech="' + tech + '"]');
    st.classList.toggle("is-traced", Boolean(hasMatch));
  });
  drawTraceLines(tech);
}

techButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tech = btn.dataset.tech;
    applyTrace(activeTech === tech ? null : tech);
  });
});

window.addEventListener("resize", () => {
  if (activeTech) drawTraceLines(activeTech);
});

// ------------------------------------------------------------
// Andén: al hacer click en "Ver detalle completo" en un proyecto,
// la pantalla se cubre con el color de esa línea desde el punto
// donde clickeaste ("llegada a estación") y aparece el detalle a
// pantalla completa. La URL cambia de verdad (#proyecto-e1), así
// que el botón atrás del navegador y los links directos funcionan,
// aunque el sitio sigue siendo un solo HTML (one-pager real).
// ------------------------------------------------------------
const platform = document.getElementById("stationPlatform");
const platformContent = document.getElementById("platformContent");
const platformClose = document.getElementById("platformClose");
let platformTrigger = null; // para devolver el foco al cerrar
let platformCloseTimer = null;

function openPlatform(panelId, originEvent, pushHistory) {
  const template = document.getElementById("panel-" + panelId);
  if (!template || !platform) return;
  clearTimeout(platformCloseTimer);

  const lineSection = originEvent && originEvent.target ? originEvent.target.closest(".line") : null;
  const line = lineSection ? lineSection.dataset.line : "green";
  platform.style.setProperty("--platform-line", "var(--" + line + ")");
  platform.style.setProperty("--platform-line-ink", "var(--" + line + "-ink)");

  // El "wipe" nace en el punto donde clickeaste (o el centro, si se
  // abrió por URL directa sin click real).
  const x = originEvent && typeof originEvent.clientX === "number" ? originEvent.clientX : window.innerWidth / 2;
  const y = originEvent && typeof originEvent.clientY === "number" ? originEvent.clientY : window.innerHeight / 2;
  platform.style.setProperty("--wipe-x", x + "px");
  platform.style.setProperty("--wipe-y", y + "px");

  platformContent.innerHTML = "";
  platformContent.appendChild(template.content.cloneNode(true));
  const titleEl = platformContent.querySelector(".platform-title");
  if (titleEl) titleEl.id = "platformTitle";

  platform.hidden = false;
  document.body.classList.add("platform-open");

  if (reduceMotion) {
    platform.classList.add("is-open");
  } else {
    // Dos frames: el primero deja pintar el estado cerrado (clip-path en
    // 0) antes de agregar la clase que anima al estado abierto.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => platform.classList.add("is-open"));
    });
  }

  if (platformClose) platformClose.focus();

  if (pushHistory !== false) {
    history.pushState({ platform: panelId }, "", "#proyecto-" + panelId);
  }
}

function closePlatform(fromPopstate) {
  if (!platform || platform.hidden) return;
  platform.classList.remove("is-open");
  platform.classList.add("is-closing");
  document.body.classList.remove("platform-open");

  const finish = () => {
    platform.hidden = true;
    platform.classList.remove("is-closing");
    platformContent.innerHTML = "";
    if (platformTrigger) {
      platformTrigger.focus();
      platformTrigger = null;
    }
  };
  if (reduceMotion) {
    finish();
  } else {
    platformCloseTimer = setTimeout(finish, 450);
  }

  if (!fromPopstate) {
    history.pushState({ platform: null }, "", location.pathname + location.search);
  }
}

document.querySelectorAll(".station-open").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    platformTrigger = btn;
    openPlatform(btn.dataset.panel, e);
  });
});

if (platformClose) {
  platformClose.addEventListener("click", () => closePlatform());
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && platform && !platform.hidden) closePlatform();
});

// El estado real de la URL manda: al navegar con atrás/adelante,
// sincronizamos el andén con lo que diga el hash en ese momento.
window.addEventListener("popstate", () => {
  const match = location.hash.match(/^#proyecto-(e\d)$/);
  if (match) {
    openPlatform(match[1], null, false);
  } else if (platform && !platform.hidden) {
    closePlatform(true);
  }
});

// Carga directa con un link tipo index.html#proyecto-e2
(function initPlatformFromHash() {
  const match = location.hash.match(/^#proyecto-(e\d)$/);
  if (match) openPlatform(match[1], null, false);
})();
