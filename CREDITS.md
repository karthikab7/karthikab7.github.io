# Credits & Attribution

## Original visuals (created in this repository — fully owned)

All astronomy and diagram graphics on this site are **original SVG/CSS**, drawn for this site:

- `assets/img/astro/cena-lobes.svg` — hero art. A stylised radio galaxy: an elliptical host
  crossed by a dust lane, a bipolar jet inflating two diffuse giant lobes, and scattered compact
  sources with a few detection apertures. It is **inspired by** the geometry of Centaurus A and by
  the point-source census this site describes. It is a schematic illustration, **not** an image of
  real data, and implies no observatory imagery or result produced by the author.
  (The earlier `accretion-disc.svg`, `galaxy-jet.svg` and `lightguide-diagram.svg` were also
  original art; they were superseded by the hero and removed in the 2026-08 redesign. They remain
  recoverable from git history if ever wanted.)
- `assets/img/icons/favicon.svg`, `assets/img/icons/og.svg`, `assets/img/icons/og.png` — original
  marks. `og.png` is a raster of `og.svg` (most social platforms do not render SVG preview cards).
- Inline SVG icons and the data-flow diagram in `data.html`.

The SVG hero was replaced by a real Chandra image in August 2026 (below); `cena-lobes.svg` is
still used on the 404 page.

## Observatory imagery (public record)

- `assets/img/astro/cena-chandra-{440,640,864}.{jpg,webp}` — the homepage hero.
  - **Source:** NASA/Chandra X-ray Observatory Photo Album, *Centaurus A*, 6 February 2014 —
    https://chandra.si.edu/photo/2014/cena/ (downloaded from `cena.jpg`, 864×864, 551 KB;
    re-encoded to three widths in JPEG and WebP, EXIF stripped).
  - **Credit line, as published:** *X-ray: NASA/CXC/U.Birmingham/M.Burke et al.*
  - **Status:** NASA/SAO material. The Chandra image-use policy states that "no claim to copyright
    is being asserted and the material may be used in accordance with NASA guidelines", and
    requests appropriate acknowledgement. This is an **X-ray-only** image — it carries no
    third-party optical or radio layer, so no additional rights-holder is involved.
  - **Attribution shown on page:** a visible credit under the hero copy, linking to the Chandra
    page, and stating explicitly that it is *"not the author's own data"*.
  - **Alt text** describes the astrophysical content (nucleus, jet, inner lobes, point sources).

⚠️ If this image is ever swapped for a Centaurus A *composite*, the credit becomes compound
(e.g. X-ray: NASA/CXC; optical: ESO; submillimetre: MPIfR/ESO/APEX) and every rights-holder must
be named. Do not shorten a compound credit line.

## Patent figure (public record)

- `assets/img/solar/patent-us11668926-fig1.png`
  - **Source:** U.S. Patent **US 11,668,926 B2**, "Light Guide Mirror Assembly and Applications
    Thereof" (granted 2023), FIG. 1, Sheet 1 of 13.
  - **Status:** U.S. Government publication / public record. Figures in granted U.S. patents are
    not subject to copyright and may be reproduced.
  - **Attribution shown on page:** "U.S. Patent US 11,668,926 B2 (granted 2023). Public record."
  - Karthik Balasubramaniam is a named co-inventor.

## If observatory imagery is ever added

Any future astronomy photograph must be **public domain or properly licensed**, with attribution
recorded here and in the page's `figcaption`. Legitimate sources:

- NASA Image and Video Library — https://images.nasa.gov (most NASA imagery is public domain)
- Chandra X-ray Observatory gallery — https://chandra.si.edu/photo/ (credit line typically
  "NASA/CXC/…"; check each image)
- ESA/Hubble — https://esahubble.org/images/ (CC BY 4.0 unless noted)

**Attribution template:**
`assets/img/astro/<file> — Credit: NASA/CXC/<institution>; Source: <URL>; License: <PD or CC BY 4.0>`

Note that Centaurus A composites are frequently multi-observatory and carry compound credit lines
(e.g. X-ray: NASA/CXC; optical: ESO; submillimetre: MPIfR/ESO/APEX). Reproduce the full line.

## Fonts

- **Inter** and **Sora** — SIL Open Font License 1.1, served via Google Fonts.
  This is the only third-party request the site makes.

## Code

Hand-written HTML, CSS and vanilla JavaScript. No frameworks, no analytics, no trackers,
no cookies, no build step.
