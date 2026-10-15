// The site's pages, for search engines: one entry per real page, with its title, description and share picture.
// vite.config.ts reads this at build time to write each page's <head>, the sitemap and llms.txt.
//
// Addresses end in a slash because that is the final address GitHub Pages serves (/journey redirects to /journey/).
// Several addresses show the same page. Each page has ONE main address; the others ("aliases") stay working for old
// links but point their canonical link at the main one:
//   /timeline -> /journey/    /view-all-decades -> /decades/    /clubhouse -> /showreel/
//   decade pages: the site's own links use the first year (/decades/1837/), so that is the main address;
//   the app's older keys (/decades/1880s/, /decades/1880/) are aliases.
// Titles and descriptions are written from what each page shows. Keep titles to 60 characters and descriptions to
// 120-155 (checked at the end of this file when the build runs).

export const SITE_URL = 'https://sccc-heritage.co.uk';
export const SITE_NAME = 'Sutton Coldfield Cricket Club';
export const DEFAULT_IMAGE = '/og-image.jpg';
export const DEFAULT_IMAGE_ALT = 'Sutton Coldfield Cricket Club: over 180 years of cricket excellence, with team photographs from the club’s history';

// "Page name · Sutton Coldfield Cricket Club", dropping to a shorter ending when the full name would pass 60 characters.
const ENDINGS = [' · Sutton Coldfield Cricket Club', ' · Sutton Coldfield CC', ' · SCCC'];
export function titleFor(base) {
  for (const e of ENDINGS) if ((base + e).length <= 60) return base + e;
  return base;
}

const mainPages = [
  {
    path: '/',
    title: 'Sutton Coldfield Cricket Club · Over 180 Years of History',
    description: 'Explore the remarkable history of Sutton Coldfield Cricket Club, founded in 1847. Journey through 180 years of cricket excellence.',
    image: '/og-image.jpg',
    llms: 'Over 180 years of cricket excellence: the story of Sutton Coldfield Cricket Club.',
  },
  {
    path: '/journey/',
    image: '/share/journey.jpg',
    imageAlt: 'Our Journey Through Time: Sutton Coldfield Cricket Club’s story from 1837 to today, over the 1859 first XI photograph',
    aliases: ['/timeline/'],
    title: titleFor('Our Journey Through Time'),
    description: 'Follow the club from the 1761 glebe map and early cricket in 1837 to the foundation in 1847 and today, one milestone and decade at a time.',
    llms: 'The full interactive timeline, 1837 to the present day, with a slider for each decade.',
  },
  {
    path: '/decades/',
    image: '/share/decades.jpg',
    imageAlt: 'Through the Decades: fifteen eras of Sutton Coldfield Cricket Club history, over a collage of team photographs',
    aliases: ['/view-all-decades/'],
    title: titleFor('Through the Decades'),
    description: 'Fifteen eras of Sutton Coldfield Cricket Club history, from cricket taking root in 1837 to the 2020s. Pick a decade to read its story.',
    llms: 'All fifteen eras of the club’s history in one place.',
  },
  {
    path: '/teams/',
    image: '/share/teams.jpg',
    imageAlt: 'Meet the Teams: historic Sutton Coldfield Cricket Club team photographs, over a 1940s trophy presentation',
    title: titleFor('Meet the Teams'),
    description: 'Team photographs from the club’s archive, from the earliest surviving picture of 1859 to the 2022 side, with the players’ names where known.',
    llms: 'Historic team photographs and the players who built the club’s legacy.',
  },
  {
    path: '/obituaries/',
    image: '/share/obituaries.jpg',
    imageAlt: 'In Memoriam: members of Sutton Coldfield Cricket Club lost in the Great War, over a 1913 team photograph',
    title: titleFor('In Memoriam, 1914-1918'),
    description: 'Obituaries of the club’s members lost in the Great War: 39 went to war and 13 lost their lives. Their stories, remembered here.',
    llms: 'Members lost in the Great War, 1914-1918.',
  },
  {
    path: '/showreel/',
    image: '/share/showreel.jpg',
    imageAlt: 'Showreel: team photographs laid out on the clubhouse table',
    aliases: ['/clubhouse/'],
    title: titleFor('Showreel'),
    description: 'Team photographs from the club’s archive laid out on the clubhouse table, a fresh set dealt every few seconds. Select one to enlarge it and read the names.',
    llms: 'Team photographs laid out on the clubhouse table, a fresh set every few seconds.',
  },
  {
    path: '/rectory-park/',
    image: '/share/rectory-park.jpg',
    imageAlt: 'Rectory Park: the ground Sutton Coldfield Cricket Club laid out in 1847, with the pavilion across the outfield',
    title: titleFor('Rectory Park Since 1847'),
    description: 'The history of Rectory Park, the ground the club laid out on the Rectory glebe in 1847 and has never left, from the 1761 survey onwards.',
    llms: 'The history of the ground the club laid out in 1847 and has never left.',
  },
  {
    path: '/riland-bedford/',
    image: '/share/riland-bedford.jpg',
    imageAlt: 'The Riland and Bedford family of Sutton Coldfield, over an old engraving of the Rectory House',
    title: titleFor('The Riland & Bedford Family'),
    description: 'Five generations of one family held the living of Sutton Coldfield from 1689 to 1907, including the Rector who founded the club.',
    llms: 'Five generations of one family in the living of Sutton Coldfield, 1689 to 1907, including the Rector who founded the club.',
  },
];

// id = the first year (main address); key = the app's own decade key (alias); alt = other old addresses.
const decadeList = [
  { id: '1837', key: '1880s', alt: ['1880'], name: 'Foundations Before Formation', years: '1837-1847',
    description: 'How cricket took root in Sutton Coldfield from 1837, in Rectory Park and Sutton Park, before the club was formed in 1847 under Rev. Riland Bedford.' },
  { id: '1847', key: '1890s', alt: ['1890'], name: 'The First Fifty Years', years: '1847-1899',
    description: 'The club’s first fifty years: the Rev. Riland Bedford’s founding in 1847, the move to Rectory Park, hard times and the Golden Jubilee of 1896.' },
  { id: '1900', key: '1900s', alt: [], name: 'The Edwardian Club', years: '1900-1909',
    description: 'The Edwardian decade: a paid professional, a fourth Saturday side, a membership of 114, and the loss of the club’s founder in January 1905.' },
  { id: '1910', key: '1910s', alt: [], name: 'The Last Summers', years: '1910-1919',
    description: 'Record scores in the summer of 1914, the last fixture on 8th August, and the members who went to war and the names that followed them.' },
  { id: '1920', key: '1920s', alt: [], name: 'The Golden Resurgence', years: '1920-1929',
    description: 'Renewal after the First World War: strong leadership, a better Rectory Park, county players and some of the finest cricket in the club’s history.' },
  { id: '1930', key: '1930s', alt: [], name: 'Cricket in Changing Times', years: '1930-1939',
    description: 'The 1930s at the club: resilience, individual distinction and the defence of Rectory Park in a testing but formative decade.' },
  { id: '1940', key: '1940s', alt: [], name: 'Survival and Centenary', years: '1940-1949',
    description: 'Cricket held together by a handful of men through the Second World War, and the club’s centenary celebrated in July 1947.' },
  { id: '1950', key: '1950s', alt: [], name: 'Seven Sides on a Saturday', years: '1950-1959',
    description: 'The club’s most expansive decade: up to seven sides on a Saturday, five men past a thousand runs in a season, and a pavilion re-roofed in Norfolk reed.' },
  { id: '1960', key: '1960s', alt: [], name: 'Forty-Four Matches, Fourteen Men', years: '1960-1969',
    description: 'From 351 members in 1962 to a struggle to raise the lower elevens, and the old thatched pavilion burning down the day before it was to be demolished.' },
  { id: '1970', key: '1970s', alt: [], name: 'Dixon’s Decade', years: '1970-1979',
    description: 'A new pavilion, the club’s first league cricket, Michael Dixon passing a thousand runs in every season, and the Canadian national side at Rectory Park.' },
  { id: '1980', key: '1980s', alt: [], name: 'Trophies and Tragedy', years: '1980-1989',
    description: 'Michael Dixon’s last season, then more cups, championships and Sunday leagues than the club had ever won, with visitors from overseas at Rectory Park.' },
  { id: '1990', key: '1990s', alt: [], name: 'Champions at Last', years: '1990-1999',
    description: 'The 1993 Willis Corroon M.C.C.C. Championship, won with a single defeat, and the 150th anniversary that took the club from Rectory Park to Lord’s.' },
  { id: '2000', key: '2000s', alt: [], name: 'Club of the Year', years: '2000-2009',
    description: 'A thirty-year lease signed on Christmas Day, the first ECB Clubmark in Birmingham, promotion in 2004 and Sports Club of the Year in 2005.' },
  { id: '2010', key: '2010s', alt: [], name: 'Five Titles in Seven Years', years: '2010-2019',
    description: 'Relegation from the Birmingham League, rebuilding, the finest season the club has played, and two of its juniors playing first-class cricket.' },
  { id: '2020', key: '2020s', alt: [], name: 'Resilience and Renewal', years: '2020-Present',
    description: 'The 2020s so far: the COVID-19 pandemic bringing cricket to a standstill for the first time since the Second World War, and the club’s response.' },
];

const decadePages = decadeList.map((d) => ({
  path: `/decades/${d.id}/`,
  aliases: [`/decades/${d.key}/`, ...d.alt.map((a) => `/decades/${a}/`)],
  title: titleFor(`${d.name}, ${d.years}`),
  description: d.description,
  image: '/share/decades.jpg',
  imageAlt: 'Sutton Coldfield Cricket Club history, decade by decade, over a collage of team photographs',
  llms: d.description,
  decade: d,
}));

export const PAGES = [...mainPages, ...decadePages];

/** Every address the app answers: [{ route, page, canonical, alias }]. */
export function routes() {
  const out = [];
  for (const page of PAGES) {
    out.push({ route: page.path, page, canonical: SITE_URL + page.path, alias: false });
    for (const a of page.aliases || []) out.push({ route: a, page, canonical: SITE_URL + page.path, alias: true });
  }
  return out;
}

// ---- writing a page's <head> ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function swap(html, re, replacement, what) {
  if (!re.test(html)) throw new Error(`index.html has no ${what} to replace`);
  return html.replace(re, () => replacement);
}

/** The shell's <head> rewritten for one page. */
export function applyHead(shell, { title, description, canonical, image, imageAlt }) {
  let h = shell;
  h = swap(h, /<title>[\s\S]*?<\/title>/, `<title>${escText(title)}</title>`, '<title>');
  h = swap(h, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />${canonical ? `\n    <link rel="canonical" href="${esc(canonical)}" />` : ''}`, 'description');
  h = swap(h, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />${canonical ? `\n    <meta property="og:url" content="${esc(canonical)}" />` : ''}`, 'og:title');
  h = swap(h, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`, 'og:description');
  h = swap(h, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`, 'twitter:title');
  h = swap(h, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`, 'twitter:description');
  if (image) {
    h = swap(h, /<meta property="og:image" [^>]*>/, `<meta property="og:image" content="${esc(SITE_URL + image)}" />`, 'og:image');
    h = swap(h, /<meta name="twitter:image" [^>]*>/, `<meta name="twitter:image" content="${esc(SITE_URL + image)}" />`, 'twitter:image');
  }
  if (imageAlt) {
    h = swap(h, /<meta property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${esc(imageAlt)}" />`, 'og:image:alt');
    h = swap(h, /<meta name="twitter:image:alt"[^>]*>/, `<meta name="twitter:image:alt" content="${esc(imageAlt)}" />`, 'twitter:image:alt');
  }
  return h;
}

/** 404.html: noindex, no canonical, and a plain heading in the page for anything that reads it without scripts. */
export function notFoundHtml(shell) {
  let h = applyHead(shell, {
    title: `Page not found · ${SITE_NAME}`,
    description: 'This page does not exist. Go back to the Sutton Coldfield Cricket Club history site and start again from the home page.',
  });
  if (!/<meta name="viewport"[^>]*>/.test(h)) throw new Error('index.html has no viewport tag');
  h = h.replace(/<meta name="viewport"[^>]*>/, (m) => `${m}\n    <meta name="robots" content="noindex" />`);
  // Visually hidden, as the site's own pages draw over it: the visitor sees exactly what they saw before.
  const hidden = 'position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';
  return h.replace('<div id="root"></div>', () => `<div id="root"><h1 style="${hidden}">Page not found</h1><p style="${hidden}">This page does not exist. <a href="/">Go to the Sutton Coldfield Cricket Club home page</a>.</p></div>`);
}

// ---- sitemap.xml and llms.txt ----
export function sitemapXml() {
  const urls = PAGES.map((p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function llmsTxt() {
  const link = (p, label) => `- [${label}](${SITE_URL}${p.path}): ${p.llms}`;
  const pages = mainPages.map((p) => link(p, {
    '/': 'Home', '/journey/': 'Our Journey Through Time', '/decades/': 'Through the Decades', '/teams/': 'Meet the Teams',
    '/obituaries/': 'In Memoriam', '/showreel/': 'Showreel', '/rectory-park/': 'Rectory Park', '/riland-bedford/': 'The Riland & The Bedford Family',
  }[p.path])).join('\n');
  const decades = decadePages.map((p) => link(p, `${p.decade.name} (${p.decade.years})`)).join('\n');
  return `# Sutton Coldfield Cricket Club

> The history of Sutton Coldfield Cricket Club, founded in 1847 and playing at Rectory Park, with cricket in the town recorded from 1837. A single-page web app that tells the story year by year, decade by decade, with team photographs and records from the club's archive.

## Pages

${pages}

## The decades

${decades}
`;
}

// ---- a check, run when the build reads this file ----
for (const p of PAGES) {
  if (p.title.length > 60) console.warn(`pages.mjs: title is ${p.title.length} characters: ${p.title}`);
  if (p.description.length < 120 || p.description.length > 155) console.warn(`pages.mjs: description is ${p.description.length} characters: ${p.path}`);
}
