(function () {
  const ALL_DATA = window.LANDING_DATA;
  if (!ALL_DATA || !ALL_DATA.es) return;

  const LANGS = ["es", "en", "fr"];

  function detectLang() {
    const saved = localStorage.getItem("indef-lang");
    if (saved && LANGS.includes(saved)) return saved;
    const navLangs = Array.from(navigator.languages || [navigator.language || "es"]);
    const match = navLangs.map(l => l.split("-")[0].toLowerCase()).find(l => LANGS.includes(l));
    return match || "es";
  }

  let activeLang = detectLang();
  let data = ALL_DATA[activeLang];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const escapeHTML = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const escapeAttr = escapeHTML;

  const money = (value) =>
    new Intl.NumberFormat(data.siteConfig.locale, {
      style: "currency",
      currency: data.siteConfig.currency,
      maximumFractionDigits: 0
    }).format(value);

  const number = (value) =>
    new Intl.NumberFormat(data.siteConfig.locale, {
      maximumFractionDigits: 0
    }).format(value);

  const section = (id) => document.getElementById(id);

  const button = (cta, extraClass = "") => {
    const style = cta.style === "secondary" ? "btn-secondary" : cta.style === "ghost" ? "btn-ghost" : "btn-primary";
    return `<a class="btn ${style} ${extraClass}" href="${escapeAttr(cta.url)}">${escapeHTML(cta.label)}</a>`;
  };

  const sectionHeader = ({ eyebrow, title, subtitle }, alignLeft = false) => `
    <div class="section-header ${alignLeft ? "align-left" : ""}">
      ${eyebrow ? `<div class="eyebrow">${escapeHTML(eyebrow)}</div>` : ""}
      <h2 class="section-title">${escapeHTML(title).replace(/\n/g, "<br>")}</h2>
      ${subtitle ? `<p class="section-subtitle">${escapeHTML(subtitle)}</p>` : ""}
    </div>
  `;

  /* Overlay neutral para imágenes — sin color de cafetería */
  const bgStyle = (src) => {
    if (!src) return "";
    /* Encodifica solo los espacios en el nombre de archivo para que url() los acepte.
       No usar encodeURIComponent completo — codifica puntos y rompe extensiones. */
    const safe = src.replace(/ /g, "%20");
    return ` style="background-image: linear-gradient(160deg, rgba(8,8,8,0.18), rgba(10,15,30,0.08)), url('${escapeAttr(safe)}'); background-size: cover; background-position: center;"`;
  };

  const videoFrame = (media, className = "media-frame video-frame has-fallback") => `
    <div class="${className}">
      <video autoplay muted loop playsinline preload="metadata">
        ${media.src ? `<source src="${escapeAttr(media.src)}" type="${media.src.endsWith(".webm") ? "video/webm" : "video/mp4"}">` : ""}
        ${media.fallback ? `<source src="${escapeAttr(media.fallback)}" type="${media.fallback.endsWith(".webm") ? "video/webm" : "video/mp4"}">` : ""}
      </video>
      <div class="branch-video-fallback">
        <div class="placeholder-content">
          <span class="placeholder-kicker">INDEF — Portafolio activo</span>
          <div class="placeholder-title">${escapeHTML(media.fallbackTitle || "Unidad en operación")}</div>
          <p class="muted">${escapeHTML(media.fallbackText || "Video operativo de unidad activa.")}</p>
        </div>
      </div>
    </div>
  `;

  /* Stagger delay para grids de cards */
  const staggerDelay = (index) => index > 0 ? ` style="transition-delay: ${index * 0.06}s"` : "";

  function renderHeader() {
    const { siteConfig, navData } = data;
    const brandMark = $("[data-brand-mark]");
    const brandName = $("[data-brand-name]");
    const desktopNav = $("[data-desktop-nav]");
    const mobileNav = $("[data-mobile-nav]");
    const switcher = $("[data-lang-switcher]");
    const storeButtons = $("[data-store-buttons]");
    const headerCta = $("[data-header-cta]");

    brandName.textContent = siteConfig.brandName;
    brandMark.classList.add("is-placeholder");
    brandMark.innerHTML = siteConfig.logo
      ? `<img src="${escapeAttr(siteConfig.logo)}" alt="${escapeAttr(siteConfig.brandName)}" loading="eager">`
      : `<span>${escapeHTML(siteConfig.fallbackLogoText)}</span>`;

    const logoImg = $("img", brandMark);
    if (logoImg) {
      logoImg.addEventListener("load", () => brandMark.classList.remove("is-placeholder"));
      logoImg.addEventListener("error", () => {
        brandMark.classList.add("is-placeholder");
        brandMark.innerHTML = `<span>${escapeHTML(siteConfig.fallbackLogoText)}</span>`;
      });
    }

    desktopNav.innerHTML = navData
      .map((item) => `<a class="nav-button" href="${escapeAttr(item.target)}" data-nav-target="${escapeAttr(item.target)}">${escapeHTML(item.label)}</a>`)
      .join("");

    mobileNav.innerHTML = `
      ${navData.map((item) => `<a class="mobile-nav-link" href="${escapeAttr(item.target)}">${escapeHTML(item.label)}</a>`).join("")}
      ${button(siteConfig.primaryCta, "mobile-menu-cta")}
    `;

    if (switcher) {
      const LANG_META = {
        es: { flag: "🇲🇽", label: "Español", code: "ES" },
        en: { flag: "🇺🇸", label: "English", code: "EN" },
        fr: { flag: "🇫🇷", label: "Français", code: "FR" }
      };
      switcher.innerHTML = `
        <button class="lang-trigger" data-lang-trigger
                aria-haspopup="listbox" aria-expanded="false"
                aria-label="${escapeAttr(data.siteConfig.ui.langLabel)}">
          <span class="lang-current">${escapeHTML(LANG_META[activeLang].code)}</span>
          <svg class="lang-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="2,3.5 5,6.5 8,3.5"/>
          </svg>
        </button>
        <div class="lang-dropdown" role="listbox" aria-label="${escapeAttr(data.siteConfig.ui.langLabel)}">
          ${LANGS.map(code => `
            <button class="lang-option${code === activeLang ? " is-active" : ""}"
                    data-lang-option="${code}"
                    role="option"
                    aria-selected="${code === activeLang}">
              <span class="lang-flag" aria-hidden="true">${LANG_META[code].flag}</span>
              <span>${LANG_META[code].label}</span>
            </button>
          `).join("")}
        </div>
      `;
    }

    if (storeButtons) storeButtons.innerHTML = "";

    headerCta.textContent = siteConfig.primaryCta.label;
    headerCta.href = siteConfig.primaryCta.url;

    $("[data-mobile-sticky-kicker]").textContent = siteConfig.mobileSticky.kicker;
    $("[data-mobile-sticky-text]").textContent = siteConfig.mobileSticky.text;
    const stickySub = $("[data-mobile-sticky-sub]");
    if (stickySub) stickySub.textContent = siteConfig.mobileSticky.sub || "";
    const stickyLink = $("[data-mobile-sticky-link]");
    stickyLink.textContent = siteConfig.mobileSticky.label;
    stickyLink.href = siteConfig.mobileSticky.url;
  }

  function renderHero() {
    const hero = data.heroData;
    section("hero").innerHTML = `
      <div class="container hero-shell">
        <div class="hero-image-col reveal-item">
          <img class="hero-image" src="${escapeAttr(hero.image)}" alt="INDEF" draggable="false">
        </div>
        <div class="hero-copy reveal-item" style="transition-delay: 0.1s">
          <div class="eyebrow">${escapeHTML(hero.badge)}</div>
          <h1 class="hero-title">${escapeHTML(hero.title.before)}<br><span class="gradient-text">${escapeHTML(hero.title.highlight)}</span></h1>
          <p class="hero-subtitle">${escapeHTML(hero.subtitle)}</p>
          <p class="hero-description">${escapeHTML(hero.description)}</p>
          <div class="hero-actions">
            ${hero.ctas.map((cta) => button(cta, "hero-button")).join("")}
          </div>
          <p class="hero-disclaimer">${escapeHTML(hero.disclaimer)}</p>
        </div>
      </div>
    `;
  }

  function renderBonus() {
    const bonus = data.bonusData;
    section("bonus").innerHTML = `
      <div class="container promo-grid">
        <article class="promo-copy-card promo-copy-card--stretch reveal-item">
          <div class="promo-copy-top">
            <div class="eyebrow">${escapeHTML(bonus.eyebrow)}</div>
            <h2 class="section-title">${escapeHTML(bonus.title)}</h2>
            <p class="section-subtitle">${escapeHTML(bonus.subtitle)}</p>
          </div>
          <div class="promo-copy-mid">
            <p class="muted">${escapeHTML(bonus.description)}</p>
          </div>
          <div class="promo-copy-bot">
            <ul class="bullet-list">${bonus.bullets.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
            <div class="section-actions">${button(bonus.cta)}</div>
          </div>
        </article>
        <div class="promo-visual-video reveal-item">
          <div class="promo-video-frame" data-promo-open role="button" tabindex="0" aria-label="${escapeAttr(data.siteConfig.ui.openVideo)}">
            <video class="promo-video-el" autoplay muted loop playsinline preload="auto">
              <source src="assets/videos/VIDEO-BETY-02-5.mp4" type="video/mp4">
            </video>
            <button class="promo-mute-btn" data-promo-mute aria-label="${escapeAttr(data.siteConfig.ui.enableSound)}">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-muted>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-unmuted style="display:none">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </button>
            <span class="promo-expand-hint" aria-hidden="true">⤢</span>
          </div>
          <div class="promo-video-caption">
            <strong>${escapeHTML(bonus.visual.captionTitle)}</strong>
            <p>${escapeHTML(bonus.visual.captionText)}</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderInvestors() {
    const { eyebrow, title, subtitle, items } = data.investorsData;
    section("investors").innerHTML = `
      <div class="container">
        ${sectionHeader({ eyebrow, title, subtitle })}
        <div class="investor-carousel" data-carousel>
          <div class="carousel-track" data-carousel-track>
            ${items
              .map(
                (item) => `
                  <article class="investor-card card-hover">
                    <span class="avatar">${escapeHTML(item.initials)}</span>
                    <h3>${escapeHTML(item.name)}</h3>
                    <p class="investor-meta">${escapeHTML(data.siteConfig.ui.participatingIn)} ${escapeHTML(item.branch)}</p>
                    <strong class="investor-amount">${escapeHTML(item.amount)}</strong>
                    <p class="investor-meta">${escapeHTML(item.time)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="carousel-dots" data-carousel-dots></div>
        </div>
      </div>
    `;
  }

  function renderSocialProof() {
    const social = data.metricsData.social;
    const VIDEO_SRC = "assets/videos/ANIMACION INDEF OPPO 28 NOV-3.mp4".replace(/ /g, "%20");
    section("social-proof").innerHTML = `
      <div class="container">
        ${sectionHeader(social)}
        <div class="data-grid">
          ${social.cards.map((card, i) => `
            <article class="benefit-card selection-card reveal-item"${staggerDelay(i)}>
              <h3>${escapeHTML(card.title)}</h3>
              <p class="muted">${escapeHTML(card.text)}</p>
            </article>
          `).join("")}
        </div>
        <div class="selection-bottom-grid">
          <div class="selection-manifesto reveal-item">
            <h3 class="selection-manifesto-title">${escapeHTML(social.manifestoTitle)}</h3>
            <ol class="selection-manifesto-list">
              ${social.manifesto.map(item => `
                <li class="selection-manifesto-item">
                  <span class="selection-manifesto-num">${escapeHTML(item.num)}</span>
                  <span class="selection-manifesto-text">${escapeHTML(item.text)}</span>
                </li>
              `).join("")}
            </ol>
            <p class="selection-manifesto-close">${escapeHTML(social.manifestoClose)}</p>
          </div>
          <div class="selection-video-col reveal-item">
            <div class="selection-video-frame"
                 data-selection-video-open
                 role="button"
                 tabindex="0"
                 aria-label="${escapeAttr(data.siteConfig.ui.openVideo)}">
              <video class="selection-video-el"
                     autoplay muted loop playsinline preload="auto"
                     data-selection-bg>
                <source src="${VIDEO_SRC}" type="video/mp4">
              </video>
              <button class="promo-mute-btn" data-selection-mute aria-label="${escapeAttr(data.siteConfig.ui.enableSound)}">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-muted>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-unmuted style="display:none">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              </button>
              <span class="selection-expand-hint" aria-hidden="true">⤢</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderInvestmentMetrics() {
    const investment = data.metricsData.investment;
    section("investment-metrics").innerHTML = `
      <div class="container">
        ${sectionHeader(investment)}
        <div class="principles-grid">
          ${investment.cards.map((card, i) => `
            <article class="benefit-card selection-card reveal-item"${staggerDelay(i)}>
              <h3>${escapeHTML(card.title)}</h3>
              <p class="muted">${escapeHTML(card.text)}</p>
            </article>
          `).join("")}
        </div>
        <div class="split-grid" style="margin-top: 64px;">
          <div>
            <h3>${escapeHTML(investment.ecosystemTitle)}</h3>
            <p class="muted">${escapeHTML(investment.ecosystemText)}</p>
            <ul class="simple-list">${investment.assets.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
          </div>
          <div class="timeline">
            ${investment.timeline.map((item) => `<div class="timeline-item"><span class="timeline-year">${escapeHTML(item.year)}</span><p>${escapeHTML(item.text)}</p></div>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderLocations() {
    const { upcoming, newLocation } = data.locationsData;
    section("upcoming-location").innerHTML = `
      <div class="container split-grid">
        <div class="reveal-item">
          ${sectionHeader({ eyebrow: upcoming.eyebrow, title: upcoming.title, subtitle: upcoming.description }, true)}
          <div class="location-tags">
            ${upcoming.steps.map(s => `
              <div class="number-tag">
                <span>${escapeHTML(s.num)}</span>
                ${escapeHTML(s.text)}
              </div>
            `).join("")}
          </div>
          <div class="section-actions">${button(upcoming.cta)}</div>
        </div>
        <article class="upcoming-img-card light-card reveal-item" style="transition-delay: 0.1s">
          <div class="upcoming-img-frame">
            <img src="${escapeAttr(upcoming.card.image)}" alt="${escapeAttr(upcoming.card.captionTitle)}" loading="lazy">
          </div>
          <div class="founder-video-caption">
            <h3>${escapeHTML(upcoming.card.captionTitle)}</h3>
            <p class="muted">${escapeHTML(upcoming.card.captionText)}</p>
          </div>
        </article>
      </div>
    `;

    section("new-location").innerHTML = `
      <div class="container new-location-split">
        <div class="new-location-body">
          ${sectionHeader({ eyebrow: newLocation.eyebrow, title: newLocation.title, subtitle: newLocation.description }, true)}
          <div class="new-location-cards">
            ${newLocation.cards.map((card, i) => `
              <article class="new-location-card reveal-item"${staggerDelay(i)}>
                <h3>${escapeHTML(card.title)}</h3>
                <p>${escapeHTML(card.text)}</p>
              </article>
            `).join("")}
          </div>
          <div class="section-actions">${button(newLocation.cta)}</div>
        </div>
        <div class="new-location-logo reveal-item">
          <img src="${escapeAttr(newLocation.logoMark)}" alt="INDEF" draggable="false">
        </div>
      </div>
    `;
  }

  function renderVision() {
    const vision = data.visionData;
    section("about").innerHTML = `
      <div class="container vision-grid">
        <div>
          ${sectionHeader({ eyebrow: vision.eyebrow, title: vision.title, subtitle: vision.description }, true)}
          <div class="metrics-grid">
            ${vision.stats.map((stat, i) => `<div class="stat-card reveal-item"${staggerDelay(i)}><strong>${escapeHTML(stat.value)}</strong><span>${escapeHTML(stat.label)}</span></div>`).join("")}
          </div>
          <div class="vision-phases">
            ${vision.phases
              .map(
                (phase) => `
                  <div class="phase-item">
                    <span class="phase-range">${escapeHTML(phase.range)}</span>
                    <div><strong>${escapeHTML(phase.title)}</strong><p class="muted">${escapeHTML(phase.text)}</p></div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <article class="founder-card light-card reveal-item" style="transition-delay: 0.1s">
          <div class="founder-video-frame"
               data-vision-video-open
               role="button"
               tabindex="0"
               aria-label="${escapeAttr(data.siteConfig.ui.openVideo)}">
            <video class="founder-video-el"
                   autoplay muted loop playsinline preload="auto"
                   data-vision-bg>
              <source src="${"assets/videos/QUE ES INDEF.mp4".replace(/ /g, "%20")}" type="video/mp4">
            </video>
            <button class="promo-mute-btn" data-vision-mute aria-label="${escapeAttr(data.siteConfig.ui.enableSound)}">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-muted>
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon-unmuted style="display:none">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </button>
            <span class="selection-expand-hint" aria-hidden="true">⤢</span>
          </div>
          <div class="founder-video-caption">
            <h3>${escapeHTML(vision.founder.captionTitle)}</h3>
            <p class="muted">${escapeHTML(vision.founder.captionText)}</p>
            <button class="founder-video-link" data-vision-video-open type="button">${escapeHTML(vision.founder.captionLink)} →</button>
          </div>
        </article>
      </div>
    `;
  }

  function renderBenefits() {
    const benefits = data.benefitsData;
    section("benefits").innerHTML = `
      <div class="container">
        ${sectionHeader(benefits)}
        <div class="benefits-grid">
          ${benefits.items
            .map(
              (item, i) => `
                <article class="benefit-card reveal-item"${staggerDelay(i)}>
                  <span class="icon-chip">${escapeHTML(item.icon)}</span>
                  <h3>${escapeHTML(item.title)}</h3>
                  <p class="muted">${escapeHTML(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderCalculator() {
    const calc = data.calculatorData;
    section("calculator").innerHTML = `
      <div class="container">
        ${sectionHeader(calc)}
        <div class="calculator-shell">
          <div class="calculator-control">
            <div class="range-top">
              <span>${escapeHTML(calc.labels.amount)}</span>
              <strong class="range-value" data-calc-amount></strong>
            </div>
            <input class="range-input" data-calc-range type="range" min="${calc.minAmount}" max="${calc.maxAmount}" step="${calc.step}" value="${calc.initialAmount}" aria-label="${escapeAttr(calc.labels.amount)}">
            <div class="range-limits">
              <span>${money(calc.minAmount)}</span>
              <span>${money(calc.maxAmount)}</span>
            </div>
          </div>
          <div class="calculator-results">
            <div class="result-grid">
              <div class="result-box"><span>${escapeHTML(calc.labels.units)}</span><strong data-calc-units></strong></div>
              <div class="result-box"><span>${escapeHTML(calc.labels.ownership)}</span><strong data-calc-ownership></strong></div>
            </div>
            <div class="scenario-grid" data-scenario-grid></div>
          </div>
        </div>
      </div>
    `;
  }

  function renderDecision() {
    const decision = data.decisionData;
    section("decision").innerHTML = `
      <div class="container">
        ${sectionHeader(decision)}
        <div class="comparison-grid">
          ${decision.columns
            .map(
              (col, i) => `
                <article class="comparison-card reveal-item"${staggerDelay(i)}>
                  <h3>${escapeHTML(col.title)}</h3>
                  <ul class="simple-list">${col.items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderDataRoom() {
    const room = data.dataRoomData;
    section("data-room").innerHTML = `
      <div class="container">
        ${sectionHeader(room)}
        <p class="eyebrow" style="margin-bottom: 16px">${escapeHTML(room.indicatorsTitle)}</p>
        <div class="metrics-grid">
          ${room.indicators.map((item, i) => `<div class="stat-card reveal-item"${staggerDelay(i)}><strong>${escapeHTML(item.value)}</strong><span>${escapeHTML(item.label)}</span></div>`).join("")}
        </div>
        <div class="data-grid" style="margin-top: 32px;">
          ${room.cards.map((card, i) => `<article class="data-card reveal-item"${staggerDelay(i)}><h3>${escapeHTML(card.title)}</h3><p class="muted">${escapeHTML(card.text)}</p></article>`).join("")}
        </div>
        <div class="triple-carousel reveal-item" data-triple-carousel>
          ${[0, 1, 2].map(col => {
            const imgs = room.carouselImages.filter((_, i) => i % 3 === col);
            return `
              <div class="triple-col" data-triple-col="${col}">
                ${imgs.map((src, i) => `
                  <div class="triple-slide${i === 0 ? " is-active" : ""}">
                    <img src="${escapeAttr(src)}" alt="" loading="${col === 0 && i < 2 ? "eager" : "lazy"}" draggable="false">
                  </div>
                `).join("")}
              </div>
            `;
          }).join("")}
        </div>
        <div class="section-actions">${button(room.cta)}</div>
      </div>
    `;
  }

  function renderScarcity() {
    const sticky = data.siteConfig.mobileSticky;
    section("scarcity").innerHTML = `
      <div class="container scarcity-inner">
        <div class="scarcity-copy">
          <span class="scarcity-kicker">${escapeHTML(sticky.kicker)}</span>
          <strong class="scarcity-amount">${escapeHTML(sticky.text)}</strong>
          <span class="scarcity-sub">${escapeHTML(sticky.sub)}</span>
        </div>
        <a class="btn btn-primary scarcity-btn" href="${escapeAttr(sticky.url)}">${escapeHTML(sticky.label)}</a>
      </div>
    `;
  }

  function renderModel() {
    const model = data.modelData;
    section("model").innerHTML = `
      <div class="container">
        ${sectionHeader(model)}
        <div class="model-grid portfolio-grid">
          ${model.pillars
            .map(
              (pillar, i) => `
                <article class="model-card portfolio-card ${pillar.status === "upcoming" ? "is-upcoming" : ""} reveal-item"${staggerDelay(i)}>
                  <div class="portfolio-card-image image-placeholder"${bgStyle(pillar.image)}>
                    <span class="portfolio-status-badge ${pillar.status === "upcoming" ? "badge-upcoming" : "badge-active"}">${escapeHTML(pillar.statusLabel)}</span>
                  </div>
                  <div class="portfolio-card-body">
                    <div class="portfolio-card-meta">
                      <span class="portfolio-category">${escapeHTML(pillar.category)}</span>
                      ${pillar.totalUnits > 0 ? `<span class="portfolio-unit-count">${pillar.totalUnits} ${escapeHTML(data.siteConfig.ui.units)}</span>` : ""}
                    </div>
                    <h3>${escapeHTML(pillar.title)}</h3>
                    <p class="muted">${escapeHTML(pillar.text)}</p>
                    <div class="portfolio-markets">
                      ${pillar.markets.map(m => `<span class="portfolio-market">${escapeHTML(m)}</span>`).join("")}
                    </div>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="roi-panel" style="margin-top: 48px;">
          <div class="roi-panel-header">
            <span>${escapeHTML(model.roiTitle)}</span>
            <span class="eyebrow-inline">${escapeHTML(data.siteConfig.ui.annualProjection)}</span>
          </div>
          <div class="metrics-grid" style="padding: 24px;">
            ${model.roi.map((item, i) => `<div class="metric-card reveal-item"${staggerDelay(i)}><strong>${escapeHTML(item.value)}</strong><span>${escapeHTML(item.label)}</span></div>`).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderHowTo() {
    const how = data.howToData || {
      eyebrow: "Cómo participar",
      title: "Cinco pasos. Sin complicaciones.",
      subtitle: "El proceso está diseñado para comenzar con claridad y confianza.",
      steps: [
        { title: "Conoce el portafolio", text: "Revisa marcas, ubicaciones y evidencia operativa." },
        { title: "Agenda una sesión", text: "Habla con un asesor INDEF para resolver dudas." },
        { title: "Define tu participación", text: "Elige el monto compatible con tu perfil." },
        { title: "Formaliza el contrato", text: "Contrato notariado y estructura legal clara." },
        { title: "Accede a tus reportes", text: "Seguimiento trimestral desde tu portal de socio." }
      ],
      image: "assets/images/img_2895.webp"
    };

    section("how-to").innerHTML = `
      <div class="container how-to-grid">
        <div>
          ${sectionHeader(how, true)}
          <div class="steps-list">
            ${how.steps
              .map(
                (step, index) => `
                  <div class="step-item reveal-item"${staggerDelay(index)}>
                    <span class="step-number">${index + 1}</span>
                    <div><h3>${escapeHTML(step.title)}</h3><p class="muted">${escapeHTML(step.text)}</p></div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <article class="how-to-card light-card reveal-item" style="transition-delay: 0.1s">
          <div class="how-to-card-image">
            <img src="${escapeAttr(how.card.image)}" alt="${escapeAttr(how.card.title)}" loading="lazy">
          </div>
          <div class="founder-video-caption">
            <h3>${escapeHTML(how.card.title)}</h3>
            <p class="muted">${escapeHTML(how.card.text)}</p>
            <a class="founder-video-link" href="${escapeAttr(how.card.linkUrl)}">${escapeHTML(how.card.link)} →</a>
          </div>
        </article>
      </div>
    `;
  }

  function renderBranches() {
    const branches = data.branchesData;
    section("branches").innerHTML = `
      <div class="container">
        ${sectionHeader(branches)}

        <div class="branch-video-gallery reveal-item">
          ${branches.videoGallery.map((v, i) => `
            <div class="bvg-item" data-bvg="${i}">
              <video class="bvg-video" src="${escapeAttr(v.src)}" preload="metadata" playsinline></video>
              <button class="bvg-play" aria-label="${escapeAttr(data.siteConfig.ui.playVideo)} ${escapeAttr(v.label)}" data-bvg-play="${i}">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </button>
              <div class="bvg-caption">${escapeHTML(v.label)}</div>
            </div>
          `).join("")}
        </div>

        <div class="branches-summary-bar">
          <span class="branches-stat"><strong>${branches.totalActive}</strong> ${escapeHTML(data.siteConfig.ui.activeUnits)}</span>
          <span class="branches-stat-div">·</span>
          <span class="branches-stat">${branches.countries.length} ${escapeHTML(data.siteConfig.ui.countries)}</span>
          <span class="branches-stat-div">·</span>
          <span class="branches-stat">${escapeHTML(data.siteConfig.ui.verifyOnMaps)}</span>
        </div>

        <div class="countries-wrapper">
          ${branches.countries.map(country => `
            <div class="country-group reveal-item">
              <div class="country-header">
                <span class="country-flag">${escapeHTML(country.flag)}</span>
                <h3 class="country-name">${escapeHTML(country.name)}</h3>
                <span class="country-unit-count">${country.totalUnits} ${escapeHTML(data.siteConfig.ui.units)}</span>
              </div>
              <div class="cities-grid">
                ${country.cities.map(city => `
                  <div class="city-card">
                    <div class="city-card-header image-placeholder"${bgStyle(city.image)}>
                      <div class="city-card-overlay">
                        <span class="city-card-name">${escapeHTML(city.name)}</span>
                        <span class="city-card-count">${city.units} ${city.units === 1 ? escapeHTML(data.siteConfig.ui.unit) : escapeHTML(data.siteConfig.ui.units)}</span>
                      </div>
                    </div>
                    <div class="branch-list-elegant">
                      ${city.branches.map(branch => `
                        <a class="branch-item-elegant" href="${escapeAttr(branch.mapsUrl)}" target="_blank" rel="noreferrer">
                          <div class="branch-item-info">
                            <span class="branch-brand-pill">${escapeHTML(branch.brand)}</span>
                            <span class="branch-item-name">${escapeHTML(branch.name)}</span>
                          </div>
                          <span class="branch-maps-arrow" aria-label="Ver en Google Maps">↗</span>
                        </a>
                      `).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        ${branches.upcoming ? `
          <div class="upcoming-expansion reveal-item">
            <div class="upcoming-expansion-inner">
              <span class="eyebrow">${escapeHTML(branches.upcoming.eyebrow)}</span>
              <strong class="upcoming-expansion-city">${escapeHTML(branches.upcoming.title)}</strong>
              <p class="muted">${escapeHTML(branches.upcoming.description)}</p>
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  function renderParticipation() {
    const part = data.participationData;
    section("participation-model").innerHTML = `
      <div class="container participation-grid">
        <div>
          ${sectionHeader(part, true)}
          <h3>${escapeHTML(part.introTitle)}</h3>
          <p class="muted">${escapeHTML(part.intro)}</p>
        </div>
        <div class="data-grid">
          ${part.cards.map((card, i) => `<article class="benefit-card reveal-item"${staggerDelay(i)}><h3>${escapeHTML(card.title)}</h3><p class="muted">${escapeHTML(card.text)}</p></article>`).join("")}
        </div>
      </div>
    `;
  }

  function renderFAQ() {
    const faq = data.faqData;
    section("faq").innerHTML = `
      <div class="container">
        ${sectionHeader(faq)}
        <div class="faq-layout">
          <div class="faq-list" data-faq-list>
            ${faq.items
              .map(
                (item, index) => `
                  <article class="faq-item ${index === 0 ? "is-open" : ""} reveal-item"${staggerDelay(index)}>
                    <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">${escapeHTML(item.question)}</button>
                    <div class="faq-answer">${escapeHTML(item.answer)}</div>
                  </article>
                `
              )
              .join("")}
          </div>
          <div class="more-info-grid">
            ${faq.moreInfo
              .map(
                (item) => `
                  <a class="more-info-card card-hover" href="${escapeAttr(item.url)}">
                    <h3>${escapeHTML(item.title)}</h3>
                    <p class="muted">${escapeHTML(item.text)}</p>
                    <strong class="more-info-link">${escapeHTML(item.label)} →</strong>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderBlog() {
    const blog = data.blogData;
    section("blog").innerHTML = `
      <div class="container">
        ${sectionHeader(blog)}
        <div class="blog-grid">
          ${blog.posts
            .map(
              (post, i) => `
                <article class="blog-card reveal-item"${staggerDelay(i)}>
                  <div class="blog-image blog-coming-soon">
                    <span class="blog-cs-num">${escapeHTML(data.siteConfig.ui.articleLabel)} ${escapeHTML(post.num)}</span>
                    <span class="blog-cs-label">${escapeHTML(data.siteConfig.ui.comingSoon)}</span>
                  </div>
                  <div class="blog-body">
                    <div class="blog-meta">${escapeHTML(post.author)} · ${escapeHTML(post.date)}</div>
                    <h3>${escapeHTML(post.title)}</h3>
                    <span class="blog-pending">· ${escapeHTML(data.siteConfig.ui.comingSoon)}</span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderCTA() {
    const cta = data.ctaData;
    section("final-cta").innerHTML = `
      <div class="container">
        <div class="final-cta-card reveal-item">
          <h2 class="section-title">${escapeHTML(cta.title)}</h2>
          <p class="section-subtitle">${escapeHTML(cta.subtitle)}</p>
          <p class="muted" style="margin-top: 12px">${escapeHTML(cta.note)}</p>
          <div class="section-actions" style="justify-content: center; margin-top: 36px;">
            ${cta.ctas.map((item) => button(item)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderFounderMessage() {
    const founder = data.founderMessageData;
    section("founder-message").innerHTML = `
      <div class="container">
        <div class="institutional-top reveal-item">
          <div class="institutional-mv-card">
            <span class="eyebrow">${escapeHTML(founder.mission.eyebrow)}</span>
            <p>${escapeHTML(founder.mission.text)}</p>
          </div>
          <div class="institutional-mv-card">
            <span class="eyebrow">${escapeHTML(founder.vision.eyebrow)}</span>
            <p>${escapeHTML(founder.vision.text)}</p>
          </div>
        </div>
        <div class="institutional-bottom">
          <div class="institutional-what reveal-item">
            <h2 class="section-title">${escapeHTML(founder.what.title)}</h2>
            <p class="institutional-what-text">${escapeHTML(founder.what.text)}</p>
            <ul class="institutional-bullets">
              ${founder.what.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join("")}
            </ul>
          </div>
          <div class="institutional-photo reveal-item" style="transition-delay: 0.1s">
            <img src="${escapeAttr(founder.image)}" alt="INDEF — Dirección General" loading="lazy">
          </div>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const { siteConfig, footerData, legalData } = data;
    $("[data-footer]").innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <div class="footer-logo">
              ${siteConfig.logo ? `<img src="${escapeAttr(siteConfig.logo)}" alt="${escapeAttr(siteConfig.brandName)}" loading="lazy" onerror="this.remove();">` : ""}
            </div>
            <p>${escapeHTML(footerData.description)}</p>
          </div>
          ${footerData.columns
            .map(
              (col) => `
                <div class="footer-column">
                  <h3>${escapeHTML(col.title)}</h3>
                  <div class="footer-links">
                    ${col.links.map((link) => `<a href="${escapeAttr(link.url)}">${escapeHTML(link.label)}</a>`).join("")}
                  </div>
                </div>
              `
            )
            .join("")}
          <div class="footer-column footer-contact">
            <h3>${escapeHTML(footerData.contact.title)}</h3>
            ${footerData.contact.email ? `<p>${escapeHTML(footerData.contact.email)}</p>` : ""}
            <p>${escapeHTML(footerData.contact.website)}</p>
          </div>
          <div class="footer-column">
            <h3>${escapeHTML(footerData.social.title)}</h3>
            <div class="social-icons">
              ${footerData.social.links.map((link) => {
                const icons = {
                  Instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>`,
                  LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
                  Facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
                };
                const svg = icons[link.label] || "";
                return `<a class="social-icon-link" href="${escapeAttr(link.url)}" target="_blank" rel="noreferrer" aria-label="${escapeAttr(link.label)}">${svg}</a>`;
              }).join("")}
            </div>
          </div>
        </div>
        <div class="footer-bottom" id="${escapeAttr(legalData.id)}">
          <p><strong>${escapeHTML(legalData.disclaimerLabel)}</strong> ${escapeHTML(legalData.disclaimer)}</p>
          <p>${escapeHTML(legalData.privacy)}</p>
          <p>${escapeHTML(footerData.rights)}</p>
        </div>
      </div>
    `;
  }

  function renderAll() {
    renderHeader();
    renderHero();
    renderBonus();
    renderInvestors();
    renderSocialProof();
    renderInvestmentMetrics();
    renderLocations();
    renderVision();
    renderBenefits();
    renderCalculator();
    renderDecision();
    renderDataRoom();
    renderScarcity();
    renderModel();
    renderHowTo();
    renderBranches();
    renderParticipation();
    renderFAQ();
    renderBlog();
    renderCTA();
    renderFounderMessage();
    renderFooter();
  }

  function setupStickyHeader() {
    const header = $("[data-header]");
    const coffee = $("[data-floating-coffee]");
    const sticky = $("[data-mobile-sticky]");

    const update = () => {
      const scrolled = window.scrollY > 20;
      header.classList.toggle("is-scrolled", scrolled);
      if (coffee) coffee.classList.toggle("is-visible", data.siteConfig.floatingCoffee && window.scrollY > 600);
      sticky.classList.toggle("is-visible", window.innerWidth <= 820 && window.scrollY > 520);
      sticky.setAttribute("aria-hidden", sticky.classList.contains("is-visible") ? "false" : "true");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function setupMobileMenu() {
    const hamburger = $("[data-menu-toggle]");  // botón del header
    const menu = $("[data-mobile-menu]");
    const header = $("[data-header]");
    let savedScrollY = 0;
    let isOpen = false;

    const lockScroll = () => {
      savedScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    };

    const unlockScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, savedScrollY);
    };

    const close = () => {
      if (!isOpen) return;
      isOpen = false;
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", data.siteConfig.ui.openMenu);
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      header.classList.remove("menu-active");
      document.body.classList.remove("menu-open");
      unlockScroll();
    };

    const open = () => {
      if (isOpen) return;
      isOpen = true;
      hamburger.classList.add("is-open");
      hamburger.setAttribute("aria-expanded", "true");
      hamburger.setAttribute("aria-label", data.siteConfig.ui.closeMenu);
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      header.classList.add("menu-active");
      document.body.classList.add("menu-open");
      lockScroll();
    };

    // Botón hamburguesa del header
    hamburger.addEventListener("click", () => { isOpen ? close() : open(); });

    // Todos los botones con data-menu-toggle dentro del menú (botón X)
    $$("[data-menu-toggle]", menu).forEach(btn => btn.addEventListener("click", close));

    // Links de navegación cierran el menú
    $$("a", menu).forEach(link => link.addEventListener("click", close));

    // Tecla Escape
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen) close(); });

    // Resize
    window.addEventListener("resize", () => { if (window.innerWidth > 1180) close(); });
  }

  function setupSmoothScroll() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) || 80;
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset + 1;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", targetId);
    });
  }

  function setupReveal() {
    const items = $$(".reveal-section, .reveal-item");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function setupActiveNav() {
    const navLinks = $$("[data-nav-target]");
    const targets = navLinks.map((link) => document.querySelector(link.dataset.navTarget)).filter(Boolean);

    if (!("IntersectionObserver" in window) || !targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.navTarget === id));
        });
      },
      { threshold: 0.28 }
    );

    targets.forEach((target) => observer.observe(target));
  }

  function setupCarousel() {
    const root = $("[data-carousel]");
    if (!root) return;

    const track = $("[data-carousel-track]", root);
    const dotsRoot = $("[data-carousel-dots]", root);
    const cards = $$(".investor-card", root);
    let index = 0;
    let timer = null;

    const perView = () => (window.innerWidth > 1180 ? 4 : window.innerWidth > 820 ? 2 : 1);
    const maxIndex = () => Math.max(0, cards.length - perView());

    dotsRoot.innerHTML = cards
      .map((_, i) => `<button class="dot-button" type="button" aria-label="Ir a slide ${i + 1}" data-carousel-dot="${i}"></button>`)
      .join("");

    const dots = $$("[data-carousel-dot]", dotsRoot);

    const goTo = (nextIndex) => {
      index = Math.min(Math.max(nextIndex, 0), maxIndex());
      const offset = cards[index] ? cards[index].offsetLeft : 0;
      track.style.transform = `translateX(-${offset}px)`;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
    };

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goTo(Number(dot.dataset.carouselDot));
        restart();
      });
    });

    const start = () => {
      timer = window.setInterval(() => {
        goTo(index >= maxIndex() ? 0 : index + 1);
      }, 4500);
    };

    const restart = () => {
      window.clearInterval(timer);
      start();
    };

    window.addEventListener("resize", () => goTo(index));
    goTo(0);
    start();
  }

  function setupFAQ() {
    $$("[data-faq-list] .faq-question").forEach((buttonEl) => {
      buttonEl.addEventListener("click", () => {
        const item = buttonEl.closest(".faq-item");
        const isOpen = item.classList.toggle("is-open");
        buttonEl.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function setupCalculator() {
    const calc = data.calculatorData;
    const range = $("[data-calc-range]");
    if (!range) return;

    const amountEl = $("[data-calc-amount]");
    const unitsEl = $("[data-calc-units]");
    const ownershipEl = $("[data-calc-ownership]");
    const scenarios = $("[data-scenario-grid]");

    const update = () => {
      const amount = Number(range.value);
      const units = Math.floor(amount / calc.unitPrice);
      const ownership = (units / calc.totalNetworkUnits) * 100;

      amountEl.textContent = money(amount);
      unitsEl.textContent = number(units);
      ownershipEl.textContent = `${ownership.toFixed(4)}%`;

      scenarios.innerHTML = calc.scenarios
        .map((scenario) => {
          const projected = amount * (1 + scenario.annualRoi / 100);
          const gain = projected - amount;
          return `
            <div class="scenario-card">
              <span>${escapeHTML(scenario.name)}</span>
              <strong>${money(projected)}</strong>
              <span>${scenario.annualRoi}% ${escapeHTML(data.siteConfig.ui.roiSuffix)} · +${money(gain)}</span>
            </div>
          `;
        })
        .join("");
    };

    range.addEventListener("input", update);
    update();
  }

  function setupVideoFallbacks() {
    $$("video").forEach((video) => {
      const shell = video.closest(".video-frame, .branch-video-shell");
      if (!shell) return;

      const markReady = () => shell.classList.remove("has-fallback");
      const markFallback = () => shell.classList.add("has-fallback");

      video.addEventListener("loadeddata", markReady);
      video.addEventListener("error", markFallback);
      $$("source", video).forEach((source) => source.addEventListener("error", markFallback));

      window.setTimeout(() => {
        if (video.readyState < 2) markFallback();
      }, 1400);
    });
  }

  /* Lazy load: imágenes fuera de pantalla se cargan con IntersectionObserver */
  function setupLazyImages() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const bg = el.dataset.lazybg;
          if (bg) {
            el.style.backgroundImage = bg;
            el.removeAttribute("data-lazybg");
          }
          observer.unobserve(el);
        });
      },
      { rootMargin: "200px 0px" }
    );

    $$(".image-placeholder").forEach((el) => {
      const current = el.getAttribute("style") || "";
      const match = current.match(/background-image:\s*([^;]+);/);
      if (match && el.getBoundingClientRect().top > window.innerHeight) {
        el.dataset.lazybg = match[1].trim();
        el.style.backgroundImage = "none";
        observer.observe(el);
      }
    });
  }

  function updateSEO() {
    const seo = data.seoData;
    document.documentElement.lang = activeLang;
    document.title = seo.title;
    const setMeta = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.ogTitle);
    setMeta('meta[property="og:description"]', "content", seo.ogDescription);
    setMeta('meta[name="twitter:title"]', "content", seo.ogTitle);
    setMeta('meta[name="twitter:description"]', "content", seo.ogDescription);
  }

  function setupLangSwitcher() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lang-trigger]");
      const option = e.target.closest("[data-lang-option]");
      const switcher = e.target.closest("[data-lang-switcher]");

      if (trigger) {
        const sw = trigger.closest("[data-lang-switcher]");
        const isOpen = sw.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(isOpen));
        return;
      }

      if (option) {
        const lang = option.dataset.langOption;
        const sw = option.closest("[data-lang-switcher]");
        if (sw) {
          sw.classList.remove("is-open");
          const t = $("[data-lang-trigger]", sw);
          if (t) t.setAttribute("aria-expanded", "false");
        }
        if (lang && LANGS.includes(lang) && lang !== activeLang) {
          activeLang = lang;
          data = ALL_DATA[lang];
          localStorage.setItem("indef-lang", lang);
          updateSEO();
          renderAll();
          setupAfterRender();
        }
        return;
      }

      if (!switcher) {
        $$("[data-lang-switcher].is-open").forEach((sw) => {
          sw.classList.remove("is-open");
          const t = $("[data-lang-trigger]", sw);
          if (t) t.setAttribute("aria-expanded", "false");
        });
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        $$("[data-lang-switcher].is-open").forEach((sw) => {
          sw.classList.remove("is-open");
          const t = $("[data-lang-trigger]", sw);
          if (t) t.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  function setupAfterRender() {
    $$(".promo-lightbox").forEach((m) => m.remove());
    setupReveal();
    setupActiveNav();
    setupCarousel();
    setupFAQ();
    setupCalculator();
    setupVideoFallbacks();
    setupLazyImages();
    setupBranchVideoGallery();
    setupPromoMute();
    setupPromoLightbox();
    setupSelectionLightbox();
    setupVisionLightbox();
    setupVisionMute();
    setupSelectionMute();
    setupTripleCarousel();
  }

  function init() {
    renderAll();
    updateSEO();
    setupStickyHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupLangSwitcher();
    setupAfterRender();
  }

  function setupPromoLightbox() {
    const trigger = $("[data-promo-open]");
    if (!trigger) return;

    /* Inyecta el modal una sola vez */
    const modal = document.createElement("div");
    modal.className = "promo-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", data.siteConfig.ui.openVideo);
    modal.innerHTML = `
      <div class="promo-lightbox-backdrop" data-lightbox-close></div>
      <div class="promo-lightbox-shell">
        <button class="promo-lightbox-close" data-lightbox-close aria-label="${escapeAttr(data.siteConfig.ui.close)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <video class="promo-lightbox-video" controls playsinline preload="metadata">
          <source src="assets/videos/VIDEO-BETY-02-5.mp4" type="video/mp4">
        </video>
      </div>
    `;
    document.body.appendChild(modal);

    const bgVideo = $(".promo-video-el");
    const lightboxVideo = $(".promo-lightbox-video", modal);

    const open = () => {
      if (bgVideo) bgVideo.pause();
      modal.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      lightboxVideo.currentTime = 0;
      lightboxVideo.muted = false;
      lightboxVideo.play().catch(() => {});
    };

    const close = () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      lightboxVideo.pause();
      if (bgVideo) { bgVideo.muted = true; bgVideo.play().catch(() => {}); }
      const muteBtn = $("[data-promo-mute]");
      if (muteBtn) {
        $("[data-icon-muted]", muteBtn).style.display = "";
        $("[data-icon-unmuted]", muteBtn).style.display = "none";
        muteBtn.setAttribute("aria-label", data.siteConfig.ui.enableSound);
      }
    };

    /* Abrir al hacer clic en el frame, pero no en los botones internos */
    trigger.addEventListener("click", (e) => {
      if (e.target.closest("[data-promo-mute]")) return;
      open();
    });

    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });

    /* Cerrar con backdrop, botón X o Escape */
    $$("[data-lightbox-close]", modal).forEach((el) =>
      el.addEventListener("click", close)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) close();
    });
  }

  function setupPromoMute() {
    const btn = $("[data-promo-mute]");
    if (!btn) return;
    const video = $(".promo-video-el");
    if (!video) return;
    const iconMuted = $("[data-icon-muted]", btn);
    const iconUnmuted = $("[data-icon-unmuted]", btn);

    btn.addEventListener("click", () => {
      video.muted = !video.muted;
      const muted = video.muted;
      iconMuted.style.display = muted ? "" : "none";
      iconUnmuted.style.display = muted ? "none" : "";
      btn.setAttribute("aria-label", muted ? data.siteConfig.ui.enableSound : data.siteConfig.ui.mute);
    });
  }

  function setupTripleCarousel() {
    const wrapper = $("[data-triple-carousel]");
    if (!wrapper) return;

    const INTERVALS = [2000, 2300, 2500];
    const FADE = 600;

    $$("[data-triple-col]", wrapper).forEach((col, colIdx) => {
      const slides = $$(".triple-slide", col);
      if (slides.length < 2) return;

      let current = 0;
      let transitioning = false;

      const advance = () => {
        if (transitioning) return;
        transitioning = true;
        slides[current].classList.remove("is-active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("is-active");
        setTimeout(() => { transitioning = false; }, FADE);
      };

      setInterval(advance, INTERVALS[colIdx]);
    });
  }

  function setupVisionLightbox() {
    const triggers = $$("[data-vision-video-open]");
    if (!triggers.length) return;
    const bgVideo = $("[data-vision-bg]");
    const VIDEO_SRC = "assets/videos/QUE ES INDEF.mp4".replace(/ /g, "%20");

    const modal = document.createElement("div");
    modal.className = "promo-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Qué es INDEF");
    modal.innerHTML = `
      <div class="promo-lightbox-backdrop" data-vlb-close></div>
      <div class="promo-lightbox-shell">
        <button class="promo-lightbox-close" data-vlb-close aria-label="${escapeAttr(data.siteConfig.ui.close)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <video class="promo-lightbox-video" controls playsinline preload="metadata">
          <source src="${VIDEO_SRC}" type="video/mp4">
        </video>
      </div>
    `;
    document.body.appendChild(modal);
    const lbVideo = $(".promo-lightbox-video", modal);

    const open = () => {
      if (bgVideo) bgVideo.pause();
      modal.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      lbVideo.currentTime = 0;
      lbVideo.muted = false;
      lbVideo.play().catch(() => {});
    };

    const close = () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      lbVideo.pause();
      if (bgVideo) { bgVideo.muted = true; bgVideo.play().catch(() => {}); }
      const muteBtn = $("[data-vision-mute]");
      if (muteBtn) {
        $("[data-icon-muted]", muteBtn).style.display = "";
        $("[data-icon-unmuted]", muteBtn).style.display = "none";
        muteBtn.setAttribute("aria-label", data.siteConfig.ui.enableSound);
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target.closest("[data-vision-mute]")) return;
        open();
      });
      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });

    $$("[data-vlb-close]", modal).forEach((el) => el.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) close();
    });
  }

  function setupVisionMute() {
    const btn = $("[data-vision-mute]");
    if (!btn) return;
    const video = $("[data-vision-bg]");
    if (!video) return;
    const iconMuted = $("[data-icon-muted]", btn);
    const iconUnmuted = $("[data-icon-unmuted]", btn);
    btn.addEventListener("click", () => {
      video.muted = !video.muted;
      const muted = video.muted;
      iconMuted.style.display = muted ? "" : "none";
      iconUnmuted.style.display = muted ? "none" : "";
      btn.setAttribute("aria-label", muted ? data.siteConfig.ui.enableSound : data.siteConfig.ui.mute);
    });
  }

  function setupSelectionMute() {
    const btn = $("[data-selection-mute]");
    if (!btn) return;
    const video = $("[data-selection-bg]");
    if (!video) return;
    const iconMuted = $("[data-icon-muted]", btn);
    const iconUnmuted = $("[data-icon-unmuted]", btn);
    btn.addEventListener("click", () => {
      video.muted = !video.muted;
      const muted = video.muted;
      iconMuted.style.display = muted ? "" : "none";
      iconUnmuted.style.display = muted ? "none" : "";
      btn.setAttribute("aria-label", muted ? data.siteConfig.ui.enableSound : data.siteConfig.ui.mute);
    });
  }

  function setupSelectionLightbox() {
    const trigger = $("[data-selection-video-open]");
    if (!trigger) return;
    const bgVideo = $("[data-selection-bg]");
    const VIDEO_SRC = "assets/videos/ANIMACION INDEF OPPO 28 NOV-3.mp4".replace(/ /g, "%20");

    const modal = document.createElement("div");
    modal.className = "promo-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Video institucional INDEF");
    modal.innerHTML = `
      <div class="promo-lightbox-backdrop" data-slb-close></div>
      <div class="promo-lightbox-shell">
        <button class="promo-lightbox-close" data-slb-close aria-label="${escapeAttr(data.siteConfig.ui.close)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <video class="promo-lightbox-video" controls playsinline preload="metadata">
          <source src="${VIDEO_SRC}" type="video/mp4">
        </video>
      </div>
    `;
    document.body.appendChild(modal);
    const lbVideo = $(".promo-lightbox-video", modal);

    const open = () => {
      if (bgVideo) bgVideo.pause();
      modal.classList.add("is-open");
      document.body.classList.add("lightbox-open");
      lbVideo.currentTime = 0;
      lbVideo.muted = false;
      lbVideo.play().catch(() => {});
    };

    const close = () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      lbVideo.pause();
      if (bgVideo) { bgVideo.muted = true; bgVideo.play().catch(() => {}); }
      const muteBtn = $("[data-selection-mute]");
      if (muteBtn) {
        $("[data-icon-muted]", muteBtn).style.display = "";
        $("[data-icon-unmuted]", muteBtn).style.display = "none";
        muteBtn.setAttribute("aria-label", data.siteConfig.ui.enableSound);
      }
    };

    trigger.addEventListener("click", (e) => {
      if (e.target.closest("[data-selection-mute]")) return;
      open();
    });
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });

    $$("[data-slb-close]", modal).forEach((el) => el.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) close();
    });
  }

  function setupBranchVideoGallery() {
    $$("[data-bvg-play]").forEach((btn) => {
      const item = btn.closest("[data-bvg]");
      if (!item) return;
      const video = $(".bvg-video", item);
      if (!video) return;

      /* Captura un frame representativo del propio video:
         avanza silenciosamente hasta el segundo 1.5, pausa,
         y deja ese frame visible como miniatura. */
      const captureFrame = () => {
        video.muted = true;
        video.currentTime = 1.5;
      };

      const onSeeked = () => {
        video.pause();
        /* Elimina los listeners de setup para que no interfieran
           con la reproducción posterior. */
        video.removeEventListener("seeked", onSeeked);
      };

      video.addEventListener("seeked", onSeeked);

      /* Inicia la carga solo cuando el video tiene suficientes metadatos
         (duración conocida). Si ya están cargados, actúa de inmediato. */
      if (video.readyState >= 1) {
        captureFrame();
      } else {
        video.addEventListener("loadedmetadata", captureFrame, { once: true });
      }

      /* Play al hacer clic: rebobina al inicio y reproduce. */
      btn.addEventListener("click", () => {
        video.muted = false;
        video.currentTime = 0;
        video.controls = true;
        video.play();
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
      });

      /* Restaura el botón si el usuario pausa o termina. */
      video.addEventListener("pause", () => {
        if (video.ended) return;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "";
      });

      video.addEventListener("ended", () => {
        video.controls = false;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "";
      });
    });
  }

  init();
})();
