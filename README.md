# karthikab7.github.io

Personal academic website of **Karthik Balasubramaniam** — X-ray astrophysicist
(black-hole accretion, AGN, jet–accretion coupling; Chandra / XMM-Newton / NuSTAR).

Static, dependency-free, no build step. Plain HTML + modern CSS + one small vanilla-JS file.

## Pages

| File | Purpose |
|---|---|
| `index.html` | The site. Hero, research areas, featured projects, current work, publications, toolkit, career timeline, about, CV/collaboration, contact. |
| `data.html` | Secondary page: the computational side, applied roles held between research posts, granted patents. Deliberately subordinate to the research. |
| `astro.html` | **Redirect stub.** Its content moved into `index.html`; the URL is kept so existing inbound links and citations do not break. |
| `404.html` | Custom not-found page. |
| `AUDIT.md` | Pre-redesign audit: what was kept, what was corrected, and why. |

## Local preview

```bash
cd karthikab7.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

No build, no install, no dependencies. What you see locally is what GitHub Pages serves.

## Deploy

GitHub Pages serves the default branch at the repository root. Push to `main`:

```bash
git add -A && git commit -m "..." && git push
```

## Structure

```
index.html  data.html  astro.html  404.html
README.md  AUDIT.md  CREDITS.md  robots.txt  sitemap.xml
assets/
  css/styles.css              design system (tokens, components)
  js/main.js                  nav, scroll progress, reveal, scrollspy
  Karthik_Balasubramaniam_CV.pdf
  img/astro/                  original SVG art (Cen A-inspired hero, disc, jet)
  img/icons/                  favicon.svg, og.svg, og.png
  img/solar/                  light-guide diagram + one public patent figure
```

## Content rules for future edits

* **Never invent** publications, dates, affiliations, metrics or results.
* Publication author strings must reflect the real author position — the canonical list is
  [ORCID 0000-0003-0095-9302](https://orcid.org/0000-0003-0095-9302).
* Unpublished work is labelled *In preparation*, *Proposal* or *Collaboration*, never as a result.
* No third-party imagery unless it is public domain or properly licensed, recorded in `CREDITS.md`.
* Do not link the `xray-astronomy-rebuild` repository publicly — it is private and 404s for visitors.

## Accessibility & performance

Semantic HTML, skip link, visible focus states, ARIA on the nav toggle, alt text on every
meaningful image, `prefers-reduced-motion` honoured throughout, lazy-loaded below-the-fold
raster image. No frameworks, no trackers, no cookies. The only external request is Google Fonts.
