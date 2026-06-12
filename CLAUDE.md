# NHI Portfolio Website

Personal portfolio for **Nhi (Kiera)** — Content Creator & Social Media
Manager. A creative, interactive single-page portfolio plus 4 case study pages,
inspired by a soft pink/cream "fashion editorial" mockup.

## Stack

Plain HTML / CSS / JS — no build step, no framework. Open `index.html` directly
or serve with any static server.

## Structure

```
index.html                  Main one-page portfolio (hero, about, journey,
                             case studies grid, services, contact)
case-studies/
  tiktok-growth.html          Personal TikTok Growth
  orderbydau.html             OrderByDau (fashion e-commerce brand)
  neuro-legacy.html           Neuro Legacy (brand positioning & content strategy)
  alpha-college-prep.html     Alpha College Prep (community management)
css/style.css                Design system + all styles
js/main.js                   Custom cursor, scroll reveal, counters, nav,
                             marquee, magnetic buttons, case study tilt
assets/images/...            Photos sourced from the client's "ảnh port"
                             folder, resized for web (see below)
claude/                      Design + content reference notes
```

## Design system

- Palette: warm cream background (`--cream`), blush pink (`--pink`), deeper
  rose accent (`--rose`), near-black ink text (`--ink`). See `:root` vars in
  `css/style.css`.
- Fonts: `Cormorant Garamond` (display/serif headings) + `Jost` (body/sans),
  loaded from Google Fonts.
- Aesthetic: airy whitespace, thin uppercase letterspaced labels, soft pink
  blobs/gradients, large serif headings, rounded image cards.

## Interactivity (js/main.js)

- Custom dot+ring cursor (desktop only) that grows on hover over links/cards.
- Scroll-reveal animations via IntersectionObserver (`.reveal` class).
- Animated number counters for stats (`data-count` attribute).
- Sticky nav with active-section highlighting + mobile menu toggle.
- Infinite marquee ticker band.
- Magnetic hover effect on primary buttons.
- Case study cards tilt slightly on mouse move.

## Content source of truth

Original content/design mockups live in
`ảnh port-20260612T101252Z-3-001/ảnh port/`. Copies (resized) used on the site
live under `assets/images/`. The full content/design spec (hero, about,
journey, all 4 case studies, services, contact, components) lives in
`nhi-portfolio-content.md` — that is the current source of truth for copy.
`claude/content.md` is an earlier draft kept for reference.

## Conventions

- Keep all 5 pages visually consistent — shared `css/style.css` and
  `js/main.js`, same nav/footer markup across case study pages.
- Real handles: TikTok `@tnhitnhii`, IG `@_eut.ihn_`, email
  `nhingtue@gmail.com`. Shop IG: `@orderbydau`.
