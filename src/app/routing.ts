/**
 * The site is served from a sub-path on GitHub Pages
 * (/Sutton-Coldfield-Cricket-Club/) but from the root in development, so the
 * browser's pathname and the paths used in the app are not the same string.
 *
 * Everything inside the app talks in app paths — "/", "/decades", "/teams".
 * These two functions translate at the boundary: appPath() when reading the
 * browser's location, href() when writing a URL the browser will see.
 */

/** "/Sutton-Coldfield-Cricket-Club/" in production, "/" in development. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Browser pathname -> app path. */
export function appPath(pathname: string): string {
  let path = pathname;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) {
    path = path.slice(BASE.length);
  }
  if (!path.startsWith("/")) path = `/${path}`;
  // Trailing slashes would stop "/decades/" matching "/decades".
  if (path.length > 1) path = path.replace(/\/+$/, "") || "/";
  return path;
}

/** App path -> the URL to put in an href or push onto the history. */
export function href(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** The app path currently shown. */
export function currentAppPath(): string {
  return appPath(window.location.pathname);
}
