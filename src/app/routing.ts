/**
 * Everything inside the app talks in app paths — "/", "/decades", "/teams".
 * These two functions translate at the boundary: appPath() when reading the
 * browser's location, href() when writing a URL the browser will see.
 *
 * On the custom domain the site is served from the root, so the translation is
 * a no-op; it stays because it is what lets the build be moved back under a
 * sub-path (the project's github.io URL, a preview) without touching any link.
 */

/** The path the site is served from — "/" on sccc-heritage.co.uk. */
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
