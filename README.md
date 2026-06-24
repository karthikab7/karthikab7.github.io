# karthikab7.github.io

Personal website of **Dr. Karthik Balasubramaniam** — a static, dependency-free site with two career paths:

- `index.html` — landing page (choose a direction)
- `astro.html` — astrophysics / research (postdocs, observatories, collaborations)
- `data.html` — data science / AI / scientific software / technical R&D
- `404.html` — custom not-found page

## Tech
Plain HTML + modern CSS + a small vanilla-JS file. No frameworks, no trackers, no build step.
Visuals are CSS/Canvas/SVG generated. Accessible (skip links, focus styles, reduced-motion support),
responsive, SEO-friendly (Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`).

## Local preview
```bash
cd karthikab7.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure
```
index.html  astro.html  data.html  404.html
README.md  CREDITS.md  robots.txt  sitemap.xml
assets/
  css/styles.css
  js/main.js
  img/{astro,data,solar,icons}/   (original SVG art + one public patent figure)
  docs/   (CV PDF — only a public, contact-redacted version)
```

## Visual design
Layered cosmic background, glass panels, glowing accents, scroll-progress bar, section reveals, an
accessible interactive "research constellation" (astro), and a data-to-insight flow (data). All motion
respects `prefers-reduced-motion`. Imagery is original SVG/CSS plus one public-record patent figure —
see `CREDITS.md`.

## Content provenance
All factual content (education, research, publications, experience, patents, skills) is drawn from the
author's own CV and an INSPIRE publication export. Publication DOIs marked `[Add DOI]` in the source are
pending verification against ORCID. See `CREDITS.md` for imagery/licensing.

## Notes
- The "Download CV" button is intentionally disabled until a public, phone/contact-redacted CV PDF is added
  to `assets/docs/`.
- Canonical publication list: https://orcid.org/0000-0003-0095-9302
