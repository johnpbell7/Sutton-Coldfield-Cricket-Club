import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * The site's routes.
 *
 * Aliases are included deliberately: several paths render the same page
 * (/journey and /timeline, /decades and /view-all-decades, /showreel and
 * /clubhouse), and the decade pages accept both a decade key ("1970s") and
 * the bare year used by older links ("1970"). Every path the app answers
 * needs a file, or Pages replies 404 to it.
 */
const DECADE_KEYS = [
  '1880s', '1890s', '1900s', '1910s', '1920s', '1930s', '1940s', '1950s',
  '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s',
]

const DECADE_ALIASES = [
  '1837', '1847', '1880', '1890', '1900', '1910', '1920', '1930', '1940',
  '1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020',
]

const PAGE_ROUTES = [
  '/journey', '/timeline', '/decades', '/view-all-decades', '/teams',
  '/obituaries', '/showreel', '/clubhouse', '/rectory-park',
]

/** The canonical URL for each page, for the sitemap. Aliases are left out. */
const SITEMAP_ROUTES = [
  '/', '/journey', '/decades', '/teams', '/obituaries', '/showreel',
  '/rectory-park',
  ...DECADE_KEYS.map((k) => `/decades/${k}`),
]

const SITE_URL = 'https://sccc-heritage.co.uk'

/**
 * GitHub Pages serves static files, so a request for /decades — typed in,
 * shared, bookmarked, or just reloaded — finds no file of its own.
 *
 * Pages answers those with 404.html, and shipping a copy of index.html under
 * that name means the app still loads and routes on the path, so a visitor
 * sees the right page. But the response carries HTTP 404, and search engines
 * believe the status line rather than the pixels: every page except the home
 * page would be dropped from the index.
 *
 * So write a real index.html at each route as well. Pages then finds a file
 * and replies 200, and the same app boots and routes exactly as before.
 * 404.html stays as the catch-all for anything genuinely unknown.
 */
function githubPagesRoutes() {
  return {
    name: 'github-pages-routes',
    closeBundle() {
      const dir = path.resolve(__dirname, 'dist')
      const index = path.join(dir, 'index.html')
      if (!fs.existsSync(index)) return

      fs.copyFileSync(index, path.join(dir, '404.html'))

      const routes = [
        ...PAGE_ROUTES,
        ...DECADE_KEYS.map((k) => `/decades/${k}`),
        ...DECADE_ALIASES.map((y) => `/decades/${y}`),
      ]

      for (const route of routes) {
        const target = path.join(dir, route)
        fs.mkdirSync(target, { recursive: true })
        fs.copyFileSync(index, path.join(target, 'index.html'))
      }

      const today = new Date().toISOString().slice(0, 10)
      const urls = SITEMAP_ROUTES.map(
        (r) =>
          `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
      ).join('\n')

      fs.writeFileSync(
        path.join(dir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )

      fs.writeFileSync(
        path.join(dir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      )
    },
  }
}

export default defineConfig({
  // Served from the root of the custom domain (sccc-heritage.co.uk); the
  // CNAME file in public/ keeps that domain set on every deploy.
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    githubPagesRoutes(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
