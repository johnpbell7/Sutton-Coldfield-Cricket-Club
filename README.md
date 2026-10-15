# Sutton Coldfield Cricket Club — History Website

A full-history website for Sutton Coldfield Cricket Club, celebrating over 180 years of cricket excellence (1837–present).

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Radix UI** (accessible primitives)
- **Lucide React** (icons)
- Custom hash-based client-side router (no React Router dependency)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Root router + full timeline data (1837–2026)
│   ├── components/
│   │   ├── MenuBar.tsx            # Fixed nav with slide-out menu + decades dropdown
│   │   ├── Footer.tsx             # Green footer with designer credit
│   │   ├── TimelineItem.tsx       # Individual timeline entry + full-screen popup sheet
│   │   ├── CustomLink.tsx         # Client-side navigation (pushState)
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   └── pages/
│       ├── HomePage.tsx           # Hero + Bowl-to-Scroll + decade cards
│       ├── DecadesOverview.tsx    # All 15 eras grid
│       ├── DecadePage_new.tsx     # Individual decade detail pages
│       ├── MeetTheTeams.tsx       # Historic team photos + player lists
│       ├── Obituaries.tsx         # WWI fallen members
│       ├── FirstFiftyYears.tsx    # Long-form 1847–1896 history
│       └── AboutPage.tsx          # Club about page
├── assets/                        # All images (club photos, cricket ball, logo etc.)
├── imports/                       # SVG path data files
└── styles/
    ├── index.css                  # Entry — imports fonts, tailwind, theme
    ├── fonts.css                  # Google Fonts + Fontshare imports
    ├── tailwind.css               # Tailwind v4 setup
    └── theme.css                  # CSS custom properties / dark mode
```

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home — hero, bowl-to-scroll, decade cards |
| `/journey` | Full interactive timeline 1837–2026 with decade slider |
| `/decades` | All decades overview grid |
| `/decades/1880s` | Individual decade page (1837–1847) |
| `/decades/1890s` | Individual decade page (1847–1899) |
| `/decades/1900s` | …and so on for all 15 eras |
| `/teams` | Meet the Teams — historic photos |
| `/obituaries` | WWI Obituaries |
| `/first-fifty-years` | Dedicated 1847–1896 history |
| `/about` | Club about page |

## Key Interactive Features

### Bowl to Scroll (Home page)
- Bouncing cricket ball at bottom of hero
- Click → ball animates bowling away → page smooth-scrolls to content
- Ball reappears when you scroll back to top

### Decade Slider (Timeline page)
- Sticky footer bar with cricket ball as the draggable thumb
- Moves automatically as you scroll through the timeline
- Drag/click to jump to any decade (1830s–2020s)
- Hides when at top of page, lifts above footer when reached

### Year Popup Sheets (Timeline page)
- Click any timeline item → full-screen sheet slides up from bottom
- Contains: hero image, year overview, key events list, closing summary
- Previous / Next navigation between years
- Link through to the relevant decade overview page

### Lazy Loading & Animations
- All sections use `IntersectionObserver` for fade-in-up animations
- Timeline items load in batches of 3 as you scroll
- Decade cards animate in on scroll on the overview page

## Content Status

Content is fully written through the **1960s**. Decade pages from the **1970s onwards** use placeholder/partial content and are ready to be filled in via `DecadePage_new.tsx` — the `decadeData` object at the top of that file.

## Deployment

The site is a standard Vite SPA. For GitHub Pages, Netlify, or Vercel:

```bash
npm run build
# Outputs to dist/
```

For Netlify/Vercel with client-side routing, add a redirect rule:
- **Netlify**: create `public/_redirects` with `/* /index.html 200`
- **Vercel**: create `vercel.json` with rewrites to `/index.html`

## Search engines: pages, prerender, sitemap

GitHub Pages serves static files and `.github/workflows/deploy.yml` builds on every push to `main`. Three things make
each page readable to Google:

- `scripts/pages.mjs` lists every real page with its title, description and main address (all end in a slash, which is
  what GitHub Pages serves). Edit page text for search engines there. Old or duplicate addresses (`/timeline`,
  `/clubhouse`, `/view-all-decades`, `/decades/1880s`, `/decades/1880`...) still work, and their canonical link points at the main one.
- `vite.config.ts` uses that list at build time to write each route's `index.html` (own title, description, canonical,
  og tags), `404.html` (noindex), `sitemap.xml`, `llms.txt` and `robots.txt`.
- `scripts/prerender.mjs` runs after the build (`npm run prerender`): it opens each route in a hidden Chrome and writes the finished
  page into that route's `index.html`, so the raw HTML has the real heading and words. React then replaces it with the
  same page. It needs Chrome (the `CHROME` environment variable, the macOS app, or `google-chrome` on Linux). If Chrome is missing or a
  page fails, that page keeps the plain shell and the deploy carries on.

Share pictures (1200 x 630) are made from the studio's `Branding/Share images/build.mjs` and saved in `public/share/`.

## Fonts Used

- `Archivo Black` — Headlines (Google Fonts)
- `Georgia` — Body serif (system font)
- `Helvetica` — UI / buttons (system font)
- `Merriweather` — Secondary serif (Google Fonts)

## Colours

| Name | Hex |
|------|-----|
| Crimson (primary) | `#8B1538` |
| Dark green | `#1a472a` |
| Deep green (footer) | `#0d1f14` |
| Cream background | `#f8f6f3` |
| Navy blue (timeline dots) | `#2c5aa0` |

## Credits

Website Design & Development: **John Bell**
Graphic Design · Branding, Print & Web
