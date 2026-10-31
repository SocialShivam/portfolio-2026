(() => {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = n => String(n).padStart(3, "0");
  const deckImg = (slug, page) => `assets/decks/${slug}/${pad(page)}.webp`;
  const deckThumb = (slug, page) => `assets/decks/${slug}/t/${pad(page)}.webp`;
  const deckCover = (slug, page = 1) => page > 1 ? deckImg(slug, page) : `assets/decks/${slug}/cover.webp`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const WORK = window.WORK, DECKS = window.DECKS;
  const CASES = WORK.filter(w => w.type === "case");
  const PITCHES = WORK.filter(w => w.type === "pitch");

  $("#year").textContent = new Date().getFullYear();

  /* ---------------- marquee ---------------- */
  const mq = window.MARQUEE.map(n => `<span>${esc(n)}</span>`).join("");
  $("#marquee").innerHTML = mq + mq;

  /* ---------------- hero rotator ---------------- */
  const words = ["sell out clubs.", "hit 2.4 crore views.", "fill 14,000 tickets.", "book 40+ OPDs a day.", "win 80,000 leads."];
  const rot = $(".rot-word");
  if (!reduced) {
    let wi = 0;
    setInterval(() => {
      rot.classList.remove("in");
      rot.classList.add("out");
      setTimeout(() => {
        wi = (wi + 1) % words.length;
        rot.textContent = words[wi];
        rot.classList.remove("out");
        rot.classList.add("in");
      }, 420);
    }, 2800);
  }

  /* ---------------- work grid ---------------- */
  const LAYOUT = { "central-province": "wide", "simcha-snow": "third", "simcha-winter": "third", "royal-greens": "third" };
  const media = w => w.deck
    ? `<img src="${deckCover(w.deck, w.deckPage)}" alt="${esc(w.title)} — deck cover" loading="lazy" width="1600" height="900">`
    : `<div class="typo"><b>${esc(w.hero.n)}</b><span>${esc(w.hero.l)}</span></div>`;

  $("#work-grid").innerHTML = CASES.map(w => `
    <article class="card ${LAYOUT[w.id] || ""}" data-cat="${w.cat.join(" ")}" data-size="${LAYOUT[w.id] || ""}">
      <div class="card-media">
        ${media(w)}
        <span class="card-badge">${esc(w.tag)}</span>
        ${w.deck ? `<span class="card-badge deck">Deck inside</span>` : ""}
      </div>
      <div class="card-body">
        <span class="card-tag">${esc(w.client)}</span>
        <h3>${esc(w.title)}</h3>
        <p class="card-hook">${esc(w.hook)}</p>
        <div class="card-foot">
          <div class="card-metric"><b>${esc(w.hero.n)}</b><span>${esc(w.hero.l)}</span></div>
          <span class="card-go" aria-hidden="true">→</span>
        </div>
      </div>
      <a class="card-link" href="#case/${w.id}" data-cursor="Read" aria-label="Read the ${esc(w.title)} case study"></a>
    </article>`).join("");

  $$(".filters .chip").forEach(chip => chip.addEventListener("click", () => {
    $$(".filters .chip").forEach(c => c.classList.toggle("is-on", c === chip));
    const f = chip.dataset.filter;
    $$("#work-grid .card").forEach(card => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("hidden", !show);
      card.classList.remove("wide", "third");
      if (f === "all" && card.dataset.size) card.classList.add(card.dataset.size);
      if (show && !reduced) card.animate([{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }], { duration: 500, easing: "cubic-bezier(.2,.7,.1,1)" });
    });
  }));

  /* ---------------- pitch rail ---------------- */
  const rail = $("#pitch-rail");
  rail.innerHTML = PITCHES.map(w => `
    <article class="pitch">
      <div class="pitch-media"><img src="${deckCover(w.deck)}" alt="${esc(w.title)} — pitch deck cover" loading="lazy" width="900" height="506"></div>
      <div class="pitch-body">
        <span class="card-tag">${esc(w.tag)}</span>
        <h3>${esc(w.title)}</h3>
        <p>${esc(w.hook)}</p>
        <div class="pitch-meta">
          <span class="pill hot">${DECKS[w.deck].pages} pages</span>
          <span class="pill">${esc(w.hero.n)} ${esc(w.hero.l)}</span>
        </div>
      </div>
      <a class="card-link" href="#case/${w.id}" data-cursor="Open" aria-label="Open the ${esc(w.title)} pitch"></a>
    </article>`).join("");

  const railBar = $(".rail-bar span");
  const updateRail = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    const vis = rail.clientWidth / rail.scrollWidth;
    railBar.style.width = (vis * 100) + "%";
    railBar.style.transform = `translateX(${max > 0 ? (rail.scrollLeft / max) * ((1 - vis) / vis) * 100 : 0}%)`;
  };
  rail.addEventListener("scroll", updateRail, { passive: true });
  addEventListener("resize", updateRail);
  updateRail();
  $$("[data-rail]").forEach(b => b.addEventListener("click", () => {
    const card = rail.querySelector(".pitch");
    rail.scrollBy({ left: (card.offsetWidth + 20) * +b.dataset.rail, behavior: "smooth" });
  }));
  // drag to scroll (mouse only; touch scrolls natively)
  let drag = null;
  rail.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse") return;
    drag = { x: e.clientX, left: rail.scrollLeft, moved: false };
  });
  addEventListener("pointermove", e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) { drag.moved = true; rail.classList.add("dragging"); }
    rail.scrollLeft = drag.left - dx;
  });
  addEventListener("pointerup", () => {
    if (!drag) return;
    const moved = drag.moved;
    drag = null;
    rail.classList.remove("dragging");
    if (moved) rail.addEventListener("click", ev => { ev.preventDefault(); ev.stopPropagation(); }, { capture: true, once: true });
  });
  rail.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      $(`[data-rail="${e.key === "ArrowRight" ? 1 : -1}"]`).click();
    }
  });

  /* ---------------- real estate engine ---------------- */
  $("#re-clients").innerHTML = window.REAL_ESTATE_CLIENTS.map(c => `<li>${esc(c)}</li>`).join("");
  const FUNNEL = [
    "<b>Strategic content.</b> Video, SEO-driven blogs and virtual tours that answer buyer questions early — so filtering starts at the very first touchpoint.",
    "<b>Targeted paid media.</b> Social and search campaigns aimed at intent rather than raw reach, optimised for lead quality across a ₹2 Cr+ media portfolio.",
    "<b>High-conversion WhatsApp funnels.</b> Journeys that meet buyers on the channel they already use, capturing enquiries without friction.",
    "<b>Automated nurturing &amp; filtration.</b> Qualification that separates browsers from buyers, so sales teams only spend time on sales-ready leads.",
    "<b>Seamless CRM integration.</b> Every lead gets a source, a status and an owner — and leadership gets one view of the pipeline."
  ];
  const fText = $("#funnel-text");
  const setStep = i => {
    $$(".funnel-step").forEach((b, j) => b.classList.toggle("is-on", j === i));
    fText.innerHTML = FUNNEL[i];
  };
  $$(".funnel-step").forEach((b, i) => {
    b.addEventListener("click", () => { setStep(i); funnelAuto = false; });
    b.addEventListener("mouseenter", () => { setStep(i); funnelAuto = false; });
  });
  setStep(0);
  let funnelAuto = !reduced, fi = 0;
  setInterval(() => { if (funnelAuto && isVisible($("#funnel"))) setStep(fi = (fi + 1) % FUNNEL.length); }, 3200);

  /* ---------------- instagram reels ---------------- */
  const REELS = window.REELS || [];
  const reelCard = ([label, code]) => `
    <figure class="reel">
      <figcaption>${esc(label)}</figcaption>
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/${code}/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">
        <a href="https://www.instagram.com/reel/${code}/" target="_blank" rel="noopener" class="reel-fallback">Watch “${esc(label)}” on Instagram ↗</a>
      </blockquote>
    </figure>`;
  let igLoading = null;
  // if Instagram is blocked (privacy extensions, some office networks) show a link card instead of an empty frame
  const checkReels = () => [8000, 20000].forEach(ms => setTimeout(() => $$(".reel").forEach(r => {
    const f = $("iframe", r);
    r.classList.toggle("reel--fallback", !f || (parseInt(f.style.height) || 0) < 100);
  }), ms));
  const processReels = () => {
    checkReels();
    if (window.instgrm) return window.instgrm.Embeds.process();
    if (!igLoading) {
      igLoading = document.createElement("script");
      igLoading.src = "https://www.instagram.com/embed.js";
      igLoading.async = true;
      igLoading.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(igLoading);
    }
  };

  const filmTabs = $("#film-tabs"), filmStage = $("#film-stage");
  filmTabs.innerHTML = REELS.map((g, i) => `
    <button role="tab" aria-selected="${i === 0}" data-film="${g.id}">
      <b>${esc(g.title)}</b><span>${g.items.length} ${g.items.length > 1 ? "videos" : "video"}</span>
    </button>`).join("");
  const showFilm = id => {
    const g = REELS.find(r => r.id === id);
    $$("button", filmTabs).forEach(b => b.setAttribute("aria-selected", b.dataset.film === id));
    filmStage.innerHTML = `
      <div class="film-head">
        <div><p class="card-tag">${esc(g.role)}</p><p class="film-sub">${esc(g.sub)}</p></div>
        ${g.caseId ? `<a class="btn btn-sm btn-ghost" href="#case/${g.caseId}">Read the case study →</a>` : ""}
      </div>
      <div class="reel-row">${g.items.map(reelCard).join("")}</div>`;
    processReels();
  };
  filmTabs.addEventListener("click", e => { const b = e.target.closest("[data-film]"); if (b) showFilm(b.dataset.film); });
  // load the first set (and Instagram's script) only when the section comes near the screen
  new IntersectionObserver((en, obs) => {
    if (en[0].isIntersecting) { showFilm(REELS[0].id); obs.disconnect(); }
  }, { rootMargin: "600px 0px" }).observe($("#films"));

  /* ---------------- library ---------------- */
  const libOrder = ["central-province", "credai", "dr-arpit-tiwari", "barrel", "saa", "lemount", "central-province-pitch", "rhythm-resitel", "stok", "kimirica", "dp-jewelers"];
  $("#lib-grid").innerHTML = libOrder.map(slug => {
    const d = DECKS[slug];
    const kind = WORK.find(w => w.deck === slug)?.type === "pitch" ? "Pitch deck" : "Case study";
    return `
    <article class="doc reveal">
      <div class="doc-media"><img src="${deckCover(slug)}" alt="${esc(d.title)} — cover" loading="lazy" width="900" height="506"></div>
      <div class="doc-body">
        <div><b>${esc(d.title)}</b><span>${kind} · ${d.pages} pages</span></div>
        <span class="doc-go" aria-hidden="true">↗</span>
      </div>
      <a class="card-link" href="#deck/${slug}/1" data-cursor="Read" aria-label="Read ${esc(d.title)}"></a>
    </article>`;
  }).join("");

  /* ---------------- lens switch ---------------- */
  const lensBtns = $$(".lens-switch button"), pill = $(".lens-pill"), lensGrid = $(".lens-grid");
  const placePill = () => {
    const on = lensBtns.find(b => b.getAttribute("aria-selected") === "true");
    pill.style.width = on.offsetWidth + "px";
    pill.style.transform = `translateX(${on.offsetLeft - 5}px)`;
  };
  lensBtns.forEach(b => b.addEventListener("click", () => {
    lensBtns.forEach(x => x.setAttribute("aria-selected", x === b));
    lensGrid.dataset.active = b.dataset.lens;
    placePill();
  }));
  addEventListener("resize", placePill);
  document.fonts?.ready.then(placePill);
  placePill();

  /* ---------------- reveal + counters ---------------- */
  const countUp = el => {
    const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const show = v => el.textContent = pre + Math.round(v).toLocaleString("en-US") + suf;
    if (reduced) return show(end);
    const t0 = performance.now(), dur = 1600;
    const tick = t => {
      const p = Math.min((t - t0) / dur, 1);
      show(end * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("in");
    $$("[data-count]", el).concat(el.matches("[data-count]") ? [el] : []).forEach(countUp);
    io.unobserve(el);
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  const watchReveals = () => {
    $$(".reveal:not(.in)").forEach(el => {
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains("reveal"));
      el.style.setProperty("--d", (Math.min(sibs.indexOf(el), 6) * 0.08) + "s");
      io.observe(el);
    });
    $$(".work-grid .card, .pitch, .loop").forEach(el => io.observe(el));
  };
  $$(".loop-track li").forEach((li, i) => li.style.setProperty("--i", i));
  watchReveals();
  function isVisible(el) { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }

  /* ---------------- scroll: progress, nav ---------------- */
  const nav = $(".nav"), bar = $(".progress span");
  let lastY = scrollY;
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-links a");
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (!nav.classList.contains("open")) nav.classList.toggle("hide", y > lastY && y > 300);
    lastY = y;
    let cur = "";
    sections.forEach(s => { if (s.offsetTop - 200 <= y) cur = s.id; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navToggle = $(".nav-toggle");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });
  navLinks.forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", false); }));

  /* ---------------- cursor + hero glow ---------------- */
  const cursor = $(".cursor"), cLabel = $(".cursor-label");
  if (matchMedia("(pointer: fine)").matches && !reduced) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; cursor.classList.add("on"); }, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.remove("on"));
    const loop = () => {
      cx += (mx - cx) * .2; cy += (my - cy) * .2;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("pointerover", e => {
      const t = e.target.closest("[data-cursor], a, button");
      cursor.classList.remove("big", "hover");
      if (!t || t.closest(".viewer, .drawer")) return;
      if (t.dataset.cursor) { cLabel.textContent = t.dataset.cursor; cursor.classList.add("big"); }
      else cursor.classList.add("hover");
    });
    const glow = $(".hero-glow");
    $(".hero").addEventListener("pointermove", e => {
      glow.style.setProperty("--gx", (e.clientX / innerWidth - .5) * -120 + "px");
      glow.style.setProperty("--gy", (e.clientY / innerHeight - .5) * -80 + "px");
    });
  }

  /* ---------------- copy email ---------------- */
  const toast = msg => {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2000);
  };
  $$("[data-copy]").forEach(b => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast("Email copied ✓"); }
    catch { toast(b.dataset.copy); }
  }));

  /* =========================================================
     CASE DRAWER
     ========================================================= */
  const drawer = $("#drawer"), dBody = $("#d-body");
  let current = null, lastFocus = null;

  const renderCase = w => {
    const deck = w.deck ? DECKS[w.deck] : null;
    return `
      <p class="d-tag">${esc(w.tag)}</p>
      <h2 class="d-title" id="d-title">${esc(w.title)}</h2>
      <p class="d-hook">${esc(w.hook)}</p>
      <dl class="d-meta">
        <div><dt>Client</dt><dd>${esc(w.client)}</dd></div>
        <div><dt>My role</dt><dd>${esc(w.role)}</dd></div>
      </dl>
      ${deck ? `
      <div class="d-cover">
        <button data-open-deck="${w.deck}" data-page="${w.deckPage || 1}" aria-label="Open the ${esc(deck.title)} deck">
          <img src="${deckCover(w.deck, w.deckPage)}" alt="" width="1600" height="900">
        </button>
        <span class="card-badge deck">▶ Open deck · ${deck.pages} pages</span>
      </div>` : ""}
      <section class="d-sec"><h4>${w.type === "pitch" ? "The brief" : "The challenge"}</h4><p>${esc(w.challenge)}</p></section>
      <section class="d-sec"><h4>The insight</h4><p class="d-insight">“${esc(w.insight)}”</p></section>
      <section class="d-sec"><h4>${w.type === "pitch" ? "The idea" : "What I did"}</h4><p>${w.move}</p></section>
      <section class="d-sec"><h4>${w.type === "pitch" ? "In the deck" : "The results"}</h4>
        <div>
          <div class="d-results">${w.results.map(([n, l]) => `<div class="d-res"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>
          ${w.note ? `<p class="d-note">${esc(w.note)}</p>` : ""}
        </div>
      </section>
      ${REELS.filter(r => r.caseId === w.id).map(r => `
      <section class="d-sec d-films"><h4>The films</h4>
        <div><p class="d-film-sub">${esc(r.role)} — ${esc(r.sub)}</p><div class="reel-row in-drawer">${r.items.map(reelCard).join("")}</div></div>
      </section>`).join("")}
      <div class="d-actions">
        ${deck ? `<button class="btn btn-accent" data-open-deck="${w.deck}" data-page="${w.deckPage || 1}">View the full deck →</button>
` : ""}
        <a class="btn btn-ghost" href="#contact" data-close-all>Talk about this project</a>
      </div>`;
  };

  const openCase = (id, push = true) => {
    const w = WORK.find(x => x.id === id);
    if (!w) return;
    if (!drawer.classList.contains("open")) lastFocus = document.activeElement;
    current = w;
    $("#d-kind").textContent = w.type === "pitch" ? "Pitch" : "Case study";
    dBody.innerHTML = renderCase(w);
    if ($(".instagram-media", dBody)) processReels();
    dBody.scrollTop = 0;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
    if (push) setHash(`#case/${id}`);
    setTimeout(() => $("[data-close].round-btn", drawer).focus({ preventScroll: true }), 50);
  };
  const closeCase = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    current = null;
    if (!viewer.classList.contains("open")) document.body.classList.remove("locked");
    setHash("");
    lastFocus?.focus({ preventScroll: true });
  };
  const stepCase = dir => {
    const i = WORK.indexOf(current);
    openCase(WORK[(i + dir + WORK.length) % WORK.length].id);
  };
  $("#d-prev").addEventListener("click", () => stepCase(-1));
  $("#d-next").addEventListener("click", () => stepCase(1));
  $$("[data-close]", drawer).forEach(b => b.addEventListener("click", closeCase));
  dBody.addEventListener("click", e => {
    const d = e.target.closest("[data-open-deck]");
    if (d) openDeck(d.dataset.openDeck, +d.dataset.page);
    if (e.target.closest("[data-close-all]")) closeCase();
  });

  /* =========================================================
     DECK VIEWER
     ========================================================= */
  const viewer = $("#viewer"), vImg = $("#v-img"), vFrame = $(".v-frame"), vStrip = $("#v-strip"), vGrid = $("#v-gridview");
  let vSlug = null, vPage = 1, vTotal = 1, vLastFocus = null;

  const openDeck = (slug, page = 1, push = true) => {
    const d = DECKS[slug];
    if (!d) return;
    if (!viewer.classList.contains("open")) vLastFocus = document.activeElement;
    if (vSlug !== slug) {
      vSlug = slug; vTotal = d.pages;
      $("#v-title").textContent = d.title;
      vStrip.innerHTML = Array.from({ length: vTotal }, (_, i) =>
        `<button data-p="${i + 1}" aria-label="Page ${i + 1}"><img src="${deckThumb(slug, i + 1)}" alt="" loading="lazy" width="320" height="180"></button>`).join("");
      vGrid.innerHTML = Array.from({ length: vTotal }, (_, i) =>
        `<button data-p="${i + 1}" aria-label="Page ${i + 1}"><img src="${deckThumb(slug, i + 1)}" alt="" loading="lazy" width="320" height="180"><span>${i + 1}</span></button>`).join("");
    }
    vGrid.hidden = true;
    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("locked");
    goPage(page, push);
    setTimeout(() => $("#v-close").focus({ preventScroll: true }), 50);
  };

  const goPage = (p, push = true) => {
    vPage = Math.max(1, Math.min(vTotal, p));
    $("#v-count").textContent = `Page ${vPage} of ${vTotal}`;
    $("#v-prev").disabled = vPage === 1;
    $("#v-next").disabled = vPage === vTotal;
    vFrame.classList.add("loading");
    const src = deckImg(vSlug, vPage);
    const im = new Image();
    im.onload = im.onerror = () => { if (im.src.endsWith(src)) { vImg.src = src; vFrame.classList.remove("loading"); } };
    im.src = src;
    vImg.alt = `${DECKS[vSlug].title} — page ${vPage}`;
    [vPage + 1, vPage + 2, vPage - 1].forEach(n => { if (n >= 1 && n <= vTotal) new Image().src = deckImg(vSlug, n); });
    $$("button", vStrip).forEach(b => b.classList.toggle("on", +b.dataset.p === vPage));
    const on = $(`button[data-p="${vPage}"]`, vStrip);
    if (on) vStrip.scrollTo({ left: on.offsetLeft - vStrip.clientWidth / 2 + on.offsetWidth / 2, behavior: reduced ? "auto" : "smooth" });
    if (push) setHash(`#deck/${vSlug}/${vPage}`);
  };

  const closeDeck = () => {
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    if (document.fullscreenElement) document.exitFullscreen();
    if (!drawer.classList.contains("open")) document.body.classList.remove("locked");
    setHash(current ? `#case/${current.id}` : "");
    vLastFocus?.focus({ preventScroll: true });
  };

  $("#v-prev").addEventListener("click", () => goPage(vPage - 1));
  $("#v-next").addEventListener("click", () => goPage(vPage + 1));
  $("#v-close").addEventListener("click", closeDeck);
  vStrip.addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (b) goPage(+b.dataset.p); });
  vGrid.addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (b) { vGrid.hidden = true; goPage(+b.dataset.p); } });
  $("#v-grid").addEventListener("click", () => {
    vGrid.hidden = !vGrid.hidden;
    if (!vGrid.hidden) $(`button[data-p="${vPage}"]`, vGrid)?.scrollIntoView({ block: "center" });
  });
  $("#v-full").addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else viewer.requestFullscreen?.();
  });
  // click left/right half of the slide to page
  vImg.addEventListener("click", e => {
    const r = vImg.getBoundingClientRect();
    goPage(vPage + (e.clientX - r.left < r.width / 3 ? -1 : 1));
  });
  // swipe
  let sx = null, sy = null;
  $("#v-stage").addEventListener("touchstart", e => { if (e.touches.length === 1) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; } }, { passive: true });
  $("#v-stage").addEventListener("touchend", e => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) goPage(vPage + (dx < 0 ? 1 : -1));
    sx = sy = null;
  });

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", e => {
    if (viewer.classList.contains("open")) {
      if (e.key === "Escape") { if (!vGrid.hidden) vGrid.hidden = true; else if (!document.fullscreenElement) closeDeck(); }
      else if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && vGrid.hidden)) { e.preventDefault(); goPage(vPage + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goPage(vPage - 1); }
      else if (e.key === "Home") goPage(1);
      else if (e.key === "End") goPage(vTotal);
      return;
    }
    if (drawer.classList.contains("open")) {
      if (e.key === "Escape") closeCase();
      else if (e.key === "ArrowRight") stepCase(1);
      else if (e.key === "ArrowLeft") stepCase(-1);
    }
  });

  /* ---------------- links + hash routing ---------------- */
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#case/"], a[href^="#deck/"]');
    if (!a) return;
    e.preventDefault();
    route(a.getAttribute("href"));
  });
  function setHash(h) {
    const url = location.pathname + location.search + h;
    if (location.hash !== h) history.replaceState(null, "", url);
  }
  function route(h, push = true) {
    const [kind, a, b] = h.replace(/^#/, "").split("/");
    if (kind === "case") openCase(a, push);
    else if (kind === "deck") openDeck(a, +b || 1, push);
  }
  addEventListener("hashchange", () => route(location.hash, false));
  if (/^#(case|deck)\//.test(location.hash)) route(location.hash, false);
})();
