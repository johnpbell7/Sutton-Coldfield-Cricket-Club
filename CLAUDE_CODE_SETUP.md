# Setting Up in Claude Code

Follow these steps exactly to get the site running in Claude Code and push to GitHub.

## Step 1 — Extract & open
```bash
unzip SCCC_Website.zip
cd sccc_website
```

## Step 2 — Install dependencies
```bash
npm install
```

## Step 3 — Run locally
```bash
npm run dev
```
Open http://localhost:5173 — you should see the full site.

## Step 4 — Create your GitHub repo
1. Go to github.com → New repository
2. Name it e.g. `sutton-coldfield-cricket-club`
3. Set to Public or Private
4. **Do NOT** initialise with README/gitignore (we already have these)
5. Copy the repo URL e.g. `https://github.com/yourname/sutton-coldfield-cricket-club.git`

## Step 5 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — full SCCC history website"
git branch -M main
git remote add origin https://github.com/YOURNAME/YOURREPO.git
git push -u origin main
```

## Step 6 — Deploy (optional)

### Netlify (recommended — free)
1. netlify.com → New site from Git
2. Connect GitHub → select your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy — done. Client-side routing already handled by `public/_redirects`.

### Vercel (alternative)
1. vercel.com → New Project → Import from GitHub
2. Framework: Vite
3. Deploy — `vercel.json` handles routing automatically.

---

## Adding More Decade Content

To fill in the 1970s–2020s decade pages, open `src/app/pages/DecadePage_new.tsx`.

Find the `decadeData` object and add entries following this pattern:

```typescript
"1970s": {
  name: "The Seventies",
  years: "1970-1979",
  heroTitle: "The Seventies",
  heroSubtitle: "Your subtitle here",
  heroImage: "https://...",
  introLarge: "Your large opening sentence...",
  introBody: "Full paragraph...",
  sections: [
    {
      title: "Section Title",
      background: "cream", // or "white"
      content: ["Paragraph 1", "Paragraph 2"],
      image: "https://...",
      imageCaption: "Caption text"
    }
  ],
  keyMoments: [
    { year: "1973", title: "Event Title", description: "Brief description" }
  ],
  quote: { text: "Quote here", author: "Attribution" }
}
```

The route is automatically `/decades/1970` — no other files need changing.

## Adding More Timeline Events

Timeline data lives in `src/app/App.tsx` in the `timelineData` array. Add entries:

```typescript
{
  year: "1975",
  title: "Event Title",
  shortDescription: "One sentence summary",
  yearOverview: "Full paragraph overview of what happened this year...",
  keyEvents: [
    "First key event",
    "Second key event"
  ],
  closingSummary: "Closing sentence summarising significance.",
  location: "Rectory Park",
  imageCaption: "Caption for images",
  backgroundImage: "https://...",
  images: ["https://...", "https://..."],
}
```
