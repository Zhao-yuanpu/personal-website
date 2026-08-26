# Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved four-section animated personal portfolio with one double-clickable `index.html` entry and GitHub Pages-compatible relative assets.

**Architecture:** Source is componentised React, while the checked-in delivery is a static classic-script bundle so `file://` loading works without a server. A global `MotionDirector` owns cross-section state and Anime.js timelines; sections own content and local entrance effects. Hash-based interest targets remain configuration-only until detail-page design is approved.

**Tech Stack:** React, Anime.js, esbuild/Vite-compatible JavaScript, CSS, Vitest, Playwright.

**Spec:** `网页/docs/specs/2026-08-26-personal-portfolio-design.md`

## Global Constraints

- All deployable and editable files live under `网页`.
- `网页/index.html` must work under `file://` and GitHub Pages.
- Only the growth timeline uses SVG draw/erase animation.
- Interest cards are independent modules and routes are centrally configured.
- Phone, email and WeChat QR path are centrally configured.
- No Build Web Apps plugin.

---

### Task 1: Static delivery shell and configuration

**Files:**
- Create: `网页/package.json`
- Create: `网页/index.html`
- Create: `网页/src/main.jsx`
- Create: `网页/src/config/siteConfig.js`
- Create: `网页/tests/config.test.js`

**Interfaces:**
- Produces: `siteConfig.contact.{phone,email,wechatQrSrc}` and `siteConfig.interests[].href`.
- Produces: root DOM node `#app` consumed by React.

- [ ] Write a config test asserting four navigation items, three distinct hash interest routes, and three contact fields.
- [ ] Run `npm test -- --run tests/config.test.js`; expect failure because config does not exist.
- [ ] Implement the minimal configuration and HTML shell with relative `./assets/app.css` and `./assets/app.js` references.
- [ ] Run the config test; expect pass.

### Task 2: Copy and sanitise approved assets

**Files:**
- Create: `网页/assets/images/avatar.jpg`
- Create: `网页/assets/images/wechat-qr.png`
- Create: `网页/assets/images/amc-certificate.jpg`
- Create: `网页/assets/images/ai-advanced-certificate.jpg`
- Create: `网页/assets/images/ximalaya-data.jpg`
- Create: `网页/assets/images/library-front-lineart.png`
- Create: `网页/tests/assets.test.js`

**Interfaces:**
- Produces: stable relative URLs under `./assets/images/`.
- Consumes: approved originals from the outer workspace only during development.

- [ ] Write an asset-manifest test asserting each required asset exists and has non-zero dimensions.
- [ ] Run the asset test; expect missing-file failures.
- [ ] Copy approved source files and generate a privacy-safe advanced-AI certificate derivative with the unique identifier area permanently masked.
- [ ] Run the asset test and visually inspect the derivative; expect pass and no visible certificate identifier.

### Task 3: Rebuild the four responsive sections

**Files:**
- Create: `网页/src/App.jsx`
- Create: `网页/src/components/Header.jsx`
- Create: `网页/src/sections/HeroSection.jsx`
- Create: `网页/src/sections/GrowthSection.jsx`
- Create: `网页/src/sections/InterestsSection.jsx`
- Create: `网页/src/sections/ContactSection.jsx`
- Create: `网页/src/interests/MusicModule.jsx`
- Create: `网页/src/interests/SportsModule.jsx`
- Create: `网页/src/interests/MoviesModule.jsx`
- Create: `网页/src/styles/site.css`
- Create: `网页/tests/sections.test.jsx`

**Interfaces:**
- Each section renders `<section id="..." data-section="...">`.
- Interest modules consume `{ title, label, href, image }` and emit semantic anchors.
- Contact consumes `siteConfig.contact` only.

- [ ] Write rendering tests for section IDs, navigation labels, selected title copy, three interest anchors, and contact config values.
- [ ] Run section tests; expect component import failures.
- [ ] Implement semantic components and responsive CSS matching the four approved screenshots.
- [ ] Run section tests; expect pass.

### Task 4: Global and local Anime.js motion

**Files:**
- Create: `网页/src/motion/MotionDirector.jsx`
- Create: `网页/src/motion/useSectionMotion.js`
- Create: `网页/src/motion/buildingSlices.js`
- Create: `网页/tests/motion.test.js`

**Interfaces:**
- `MotionDirector` consumes section refs and exposes current section through `data-current-section`.
- `createBuildingSlices(element, count)` returns removable layered elements.
- Section animation hooks return Anime.js Scope cleanup through `revert()`.

- [ ] Write tests for building-slice count, interest-module isolation, reduced-motion selection, and Scope cleanup registration.
- [ ] Run motion tests; expect missing-module failures.
- [ ] Implement the shared locator, reversible section transitions, building spatial assembly, text reveals, card entrances and contact focus sequence.
- [ ] Implement GrowthSection timeline as inline SVG paths animated with `svg.createDrawable()`; use no draw/erase animation elsewhere.
- [ ] Run motion tests; expect pass.

### Task 5: Classic-script build and double-click support

**Files:**
- Create: `网页/scripts/build.mjs`
- Create: `网页/assets/app.js`
- Create: `网页/assets/app.css`
- Modify: `网页/package.json`
- Create: `网页/tests/delivery.test.js`

**Interfaces:**
- `npm run build` bundles React and Anime.js into `assets/app.js` with IIFE/classic-script output.
- `index.html` contains no module imports and uses only relative paths.

- [ ] Write a delivery test rejecting `type="module"`, absolute filesystem paths and parent-directory asset references.
- [ ] Run delivery test; expect failure before bundle exists.
- [ ] Implement the esbuild script that produces browser-ready IIFE JavaScript and extracted CSS without rewriting `index.html`.
- [ ] Run build and delivery test; expect pass.

### Task 6: Browser verification and handoff

**Files:**
- Create: `网页/tests/e2e/portfolio.spec.js`
- Create: `网页/README.md`

**Interfaces:**
- Playwright opens `file:///.../网页/index.html` and a local static-server URL.
- README documents double-click use, configuration keys, build and GitHub Pages upload.

- [ ] Test file-protocol rendering, four navigation targets, three interest hash links, QR natural dimensions, and absence of horizontal overflow at 1586×992, 768×1024 and 390×844.
- [ ] Test scroll transitions in both directions and reduced-motion final states.
- [ ] Run the full unit and browser suite; expect all tests pass.
- [ ] Run `npm run build` from a clean checkout and reopen `index.html`; expect complete rendering with no console errors.
- [ ] Document update paths for phone, email, QR and future interest detail modules.

