import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

import { routes, applyHead, notFoundHtml, sitemapXml, llmsTxt, SITE_URL } from './scripts/pages.mjs'

/**
 * The site's routes and what search engines see of them live in scripts/pages.mjs.
 *
 * Aliases are included deliberately: several paths render the same page
 * (/journey and /timeline, /decades and /view-all-decades, /showreel and
 * /clubhouse), and the decade pages accept both a decade key ("1970s") and
 * the bare year the site links to ("1970"). Every path the app answers needs a
 * file, or Pages replies 404 to it.
 */

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
 * and replies 200, and the same app boots and routes exactly as before. Each
 * copy gets its own title, description and canonical link; scripts/prerender.mjs
 * (run after the build) then writes the finished page into each one.
 * 404.html stays as the catch-all for anything genuinely unknown, marked noindex.
 */
function githubPagesRoutes() {
  return {
    name: 'github-pages-routes',
    closeBundle() {
      const dir = path.resolve(__dirname, 'dist')
      const index = path.join(dir, 'index.html')
      if (!fs.existsSync(index)) return
      const shell = fs.readFileSync(index, 'utf8')

      fs.writeFileSync(path.join(dir, '404.html'), notFoundHtml(shell))

      // Preloads: the two font files the first screen uses (Archivo for the menu, Archivo Black for headings), and on
      // the home page the hero picture, which is a CSS background and so would be found late.
      const font = (f: string) => `<link rel="preload" href="/fonts/${f}" as="font" type="font/woff2" crossorigin />`
      const heroFile = fs.readdirSync(path.join(dir, 'assets')).find((f) => /^home-hero-.*\.jpg$/.test(f))
      const heroPreload = heroFile
        ? `<link rel="preload" href="/assets/${heroFile}" as="image" fetchpriority="high" />`
        : ''

      for (const { route, page, canonical } of routes()) {
        const showreel = page.path === '/showreel/' // draws no headings, so no need for the heading font
        const preload = [
          font('archivo-latin.woff2'),
          showreel ? '' : font('archivo-black-latin.woff2'),
          route === '/' ? heroPreload : '',
        ].filter(Boolean).join('\n    ')
        const html = applyHead(shell, {
          preload,
          title: page.title,
          description: page.description,
          canonical,
          image: page.image,
          imageAlt: page.imageAlt,
        })
        if (route === '/') {
          fs.writeFileSync(index, html)
          continue
        }
        const target = path.join(dir, route)
        fs.mkdirSync(target, { recursive: true })
        fs.writeFileSync(path.join(target, 'index.html'), html)
      }

      fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapXml())
      fs.writeFileSync(path.join(dir, 'llms.txt'), llmsTxt())
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
