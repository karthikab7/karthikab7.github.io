# Pre-redesign audit — 2026-08-28

Inspected: `index.html`, `astro.html`, `data.html`, `404.html`, `assets/css/styles.css`,
`assets/js/main.js`, all assets, `README.md`, `CREDITS.md`, `robots.txt`, `sitemap.xml`,
plus the live site structure and every external link.

## What the site was

A three-page static site with **no build step**: a "choose your path" landing page, an
astrophysics page, and a data/AI page. Hand-written HTML + CSS + vanilla JS, no frameworks,
no trackers. Accessibility basics were already in place (skip link, focus styles,
`prefers-reduced-motion`, ARIA on the nav toggle and the constellation widget). This was a
sound foundation and is **kept**.

## Positioning problem (the reason for the redesign)

The landing page led with *"From black holes to intelligent systems"* and offered two
co-equal paths — Astrophysics and Data & AI. A postdoc selection committee landing on the
root URL saw a dual-identity portfolio, not an X-ray astrophysicist. Astrophysics was one
click away and rhetorically equal to data/AI, engineering and solar optics.

## Factual corrections applied (all sourced, none invented)

| # | Was | Now | Source |
|---|-----|-----|--------|
| 1 | Both IAU proceedings dated **2020** | **2018** | ORCID record dates both Proc. IAU vol. 14 (IAU Symp. 342) entries to 2018; the DOIs themselves read `...1318...` |
| 2 | Bronzini+2024 shown as "…Balasubramaniam **et al.**" | "…, Balasubramaniam" (no trailing *et al.*) | He is **last author, 11th of 11** — the trailing "et al." implied authors after him |
| 3 | Cen A pipeline "**open on GitHub**" with a link | Link removed; described as private until publication | `github.com/karthikab7/xray-astronomy-rebuild` returns **404 to anonymous visitors** — the repo is private. `data.html` already said "(private until publication)"; `astro.html` contradicted it |
| 4 | Landing timeline "2022–2024 Postdoc · industry · solar AI" | Postdoc **Aug 2022 – Jul 2023**, NTHU | Verified employment chronology |
| 5 | RAD@home role wording | "Remote Collaborator — RAD@home Astronomy Collaboratory, Jul 2026 – Present" | Canonical agreed wording; unpaid *invited* collaboration, not staff |

## Link check (all URLs, 2026-08-28)

* 9/9 publication DOIs resolve. Two return `403` to `curl` (A&A, World Scientific) — that is
  publisher bot-blocking, not a broken link; both resolve in a browser.
* ORCID, GitHub profile: `200`. LinkedIn returns `999` (anti-bot), normal.
* **`xray-astronomy-rebuild`: 404 anonymous** — see correction 3.
* No missing local assets; no broken images.

## Kept as-is

All 9 publications and their DOIs · the Cen A / SMBH-spin / RAD@home project descriptions ·
patents US 11,668,926 B2, TW 109125878, TW 110124889 · the CV PDF · every contact link ·
the CREDITS licensing position · `robots.txt`.

## Deliberately not added

* **Google Scholar link** — no verified profile URL exists in the repo or CV, and a
  same-name solar physicist publishes as *K. Balasubramaniam*, so a guessed profile could
  point at the wrong person. Left out pending the real URL.
* **Citation counts** — the site never quoted them and now still doesn't. (Note: the public
  CV PDF says "60+ citations"; the verified figure is 48 with h-index 4. See TODOs.)
* **PyTorch** in the toolkit — not supported by the CV, which evidences scikit-learn and
  statistical modelling. Requested, but adding it would have been fabrication.
* **Research Statement** button — no such public file exists in the repository.
* **Observatory photography** — no NASA/CXC image is used, so nothing implies the author's
  own data. Hero art is original SVG, consistent with the existing CREDITS position.

## Bug found and fixed during testing

`.reveal` hid every animated element with `opacity: 0` and relied on JavaScript to reveal it.
If `main.js` failed to load — a CDN hiccup, a blocked script, an old browser without
`IntersectionObserver` — the page rendered **almost entirely blank**. This was present in the
previous design too. Fixed by progressive enhancement: an inline one-line script sets `html.js`,
and the hidden state is now scoped to `.js .reveal`, so with no JavaScript the full page renders
normally. Verified with Chrome's `--disable-javascript`.

## Verified after the rebuild

* Every page and asset returns `200` from a local server; no broken images.
* Console is clean (no page errors or warnings).
* One `<h1>` per page, no heading-level skips, `alt` on every image, all internal anchors resolve,
  no unclosed or stray tags.
* Contrast on the dark background: body text 9.0:1, muted text 5.2:1, accents 6.7–11.2:1 — all
  above the WCAG AA 4.5:1 threshold.
* Rendered and checked at 390 px, 820 px, 1280 px and 1440 px.
* Total repository under 1 MB; no frameworks, no trackers, no build step.
