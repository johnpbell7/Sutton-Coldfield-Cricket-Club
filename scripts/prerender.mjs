#!/usr/bin/env node
// Prerender: after `vite build`, open every page of dist/ in a hidden Chrome, let the site draw itself, and write the
// finished page into that page's index.html (inside <div id="root">), so Google and anyone with scripts off get the
// real heading and words instead of an empty shell. React still boots on top exactly as before: main.tsx replaces
// the prerendered content with the same page.
//
//   node scripts/prerender.mjs [dist-folder]
//
// Plain Node 24 and Chrome over the DevTools connection, nothing to install. Chrome is found from the CHROME
// environment variable, the macOS app, or google-chrome / chromium on Linux (GitHub's ubuntu runners have it).
// It fails softly: if Chrome is missing or a page won't render, that page keeps the plain shell and the script exits 0,
// so a deploy never breaks because of it.
//
// What is captured is the page just as React first draws it, before the scroll fade-in has revealed anything (the
// fade-in's observer and viewport are held back while capturing), so the prerendered page and the live page match and
// nothing flashes when the scripts take over.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.resolve(process.argv[2] || path.join(root, 'dist'));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const soft = msg => { console.log(`prerender: ${msg}; keeping the plain shell pages.`); process.exit(0); };

if (!fs.existsSync(path.join(dist, 'index.html'))) soft(`no ${dist}/index.html`);
if (typeof WebSocket === 'undefined') soft('this Node has no WebSocket (use Node 22 or newer)');

// ---- find Chrome ----
function findChrome() {
  const tries = [process.env.CHROME, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].filter(Boolean);
  for (const t of tries) if (fs.existsSync(t)) return t;
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    const r = spawnSync('which', [name], { encoding: 'utf8' });
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim();
  }
  return null;
}
const CHROME = findChrome();
if (!CHROME) soft('Chrome not found (set CHROME=/path/to/chrome)');

// ---- which pages: every index.html under dist/, plus 404.html ----
function pagesIn(dir, rel = '') {
  let out = [];
  for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    if (e.name === 'assets') continue;
    const r = path.join(rel, e.name);
    if (e.isDirectory()) out = out.concat(pagesIn(dir, r));
    else if (e.name === 'index.html') out.push(r);
  }
  return out;
}
const files = pagesIn(dist).sort().map(f => ({ file: f, url: '/' + f.replace(/index\.html$/, '') }));
// (404.html is not prerendered: it keeps the shell plus its own small notice, written by the build.)

// ---- a small static server for dist/ (a missing path answers 404.html with a 404, like GitHub Pages) ----
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml', '.mp4': 'video/mp4' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  let f = path.join(dist, p), status = 200;
  if (!f.startsWith(dist) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { f = path.join(dist, '404.html'); status = 404; }
  res.writeHead(status, { 'content-type': TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

// ---- hidden Chrome ----
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'sccc-prerender-'));
const args = ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check',
  '--disable-component-update', '--disable-background-networking', '--disable-sync', '--disable-default-apps',
  `--user-data-dir=${profile}`, '--remote-debugging-port=0'];
if (process.env.CI || (process.getuid && process.getuid() === 0)) args.push('--no-sandbox', '--disable-dev-shm-usage');
const chrome = spawn(CHROME, [...args, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
const done = async code => {
  try { chrome.kill(); } catch {}
  server.close();
  await sleep(600);
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
  process.exit(code);
};
process.on('uncaughtException', e => { console.log(`prerender: ${e.message}; keeping the plain shell pages where it stopped.`); done(0); });

try {
  const browserWs = await new Promise((res, rej) => {
    let buf = ''; chrome.stderr.on('data', d => { buf += d; const m = buf.match(/DevTools listening on (ws:\/\/\S+)/); if (m) res(m[1]); });
    chrome.on('exit', () => rej(new Error('Chrome stopped')));
    setTimeout(() => rej(new Error('Chrome did not start')), 30000);
  });
  const target = await (await fetch(`http://${new URL(browserWs).host}/json/new?about:blank`, { method: 'PUT' })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.addEventListener('open', r, { once: true }); ws.addEventListener('error', j, { once: true }); });
  let seq = 0; const pending = new Map(); const consoleErrors = [];
  ws.addEventListener('message', e => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { const p = pending.get(m.id); pending.delete(m.id); m.error ? p.rej(new Error(m.error.message)) : p.res(m.result); }
    else if (m.method === 'Runtime.exceptionThrown') consoleErrors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    else if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') consoleErrors.push(m.params.args.map(a => a.value ?? a.description).join(' '));
  });
  const send = (method, params = {}) => new Promise((res, rej) => { const id = ++seq; pending.set(id, { res, rej }); ws.send(JSON.stringify({ id, method, params })); });
  const run = async expression => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };

  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  // Hold back the scroll fade-in (useReveal): no observer reports anything and the viewport reads as zero high, so
  // every section is left in the state React first draws it in.
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } };
    Object.defineProperty(window, 'innerHeight', { get() { return 0; } });
  ` });

  let ok = 0, kept = 0;
  for (const { file, url } of files) {
    const target = path.join(dist, file);
    try {
      consoleErrors.length = 0;
      await send('Page.navigate', { url: `http://127.0.0.1:${port}${url}` });
      // wait for the site to draw, then a moment for its effects to settle
      let drawn = false;
      for (let i = 0; i < 60 && !drawn; i++) { await sleep(250); drawn = await run(`!!document.querySelector('#root')?.children.length`).catch(() => false); }
      if (!drawn) throw new Error('nothing was drawn');
      await sleep(900);
      const result = await run(`(() => {
        const root = document.getElementById('root');
        // The showreel deals random photographs after it draws; React starts from an empty table, so capture that.
        if (location.pathname.startsWith('/showreel') || location.pathname.startsWith('/clubhouse')) {
          root.querySelectorAll('button[aria-label^="Enlarge "]').forEach(b => b.remove());
        }
        return { html: root.innerHTML, h1: [...root.querySelectorAll('h1')].map(h => h.textContent.trim()), words: root.innerText.split(/\\s+/).filter(Boolean).length };
      })()`);
      if (/Error loading image/.test(result.html)) throw new Error('an image failed to load');
      const shell = fs.readFileSync(target, 'utf8');
      // the root div runs from its opening tag to the last </div> before </body> (so running this twice is harmless)
      const open = shell.indexOf('<div id="root">'), close = shell.lastIndexOf('</div>', shell.indexOf('</body>'));
      if (open < 0 || close < open) throw new Error('no root div in the page');
      fs.writeFileSync(target, `${shell.slice(0, open)}<div id="root">${result.html}</div>${shell.slice(close + 6)}`);
      const errs = consoleErrors.filter(e => !/Failed to load resource/.test(e));
      console.log(`${(url === '/' ? '/' : url).padEnd(28)} h1 x${result.h1.length} "${result.h1[0] || ''}"  ${result.words} words${errs.length ? '  console: ' + errs[0].slice(0, 100) : ''}`);
      ok++;
    } catch (e) {
      kept++;
      console.log(`${url.padEnd(28)} kept the plain shell (${e.message})`);
    }
  }
  console.log(`prerender: ${ok} pages written, ${kept} kept as the plain shell.`);
  await done(0);
} catch (e) { console.log(`prerender: ${e.message}; keeping the plain shell pages.`); await done(0); }
