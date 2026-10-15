# Fonts

Hosted here so the site does not call Google Fonts or Fontshare (faster first paint, no third-party requests).

| File | Family | Weights | Source | Licence |
|---|---|---|---|---|
| `archivo-latin.woff2` | Archivo (variable) | 400-800 | Google Fonts (fonts.gstatic.com, v25), latin subset | SIL Open Font License 1.1 (self-hosting allowed) |
| `archivo-black-latin.woff2` | Archivo Black | 400 | Google Fonts (fonts.gstatic.com, v23), latin subset | SIL Open Font License 1.1 (self-hosting allowed) |

The stylesheet is `src/styles/fonts.css`. Only the latin subset is included: no page uses a latin-ext character.

Removed on 15 Oct 2026 because nothing on the site used them: Inter, Merriweather (Google Fonts, OFL) and Graphik
(Fontshare; the request returned no font files and no text used it). If one is wanted again, Fontshare's ITF Free Font
Licence allows self-hosting too.
