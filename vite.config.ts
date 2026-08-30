import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages serves static files, so a request for /decades — typed in,
 * shared, bookmarked, or just reloaded — finds no file and returns the 404
 * page. Pages serves 404.html for any path it cannot find, so shipping a copy
 * of index.html under that name hands those requests to the app, which then
 * routes on the path as usual.
 */
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const dir = path.resolve(__dirname, 'dist')
      const index = path.join(dir, 'index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dir, '404.html'))
      }
    },
  }
}

export default defineConfig({
  base: '/Sutton-Coldfield-Cricket-Club/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    githubPagesSpaFallback(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
