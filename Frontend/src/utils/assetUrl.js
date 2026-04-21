/**
 * Resolves asset URLs (images, PDFs) from the API so they point to the backend
 * when frontend and backend are on different origins (e.g. REACT_APP_API_URL set).
 * Relative paths like /goomorproductimage/... get the API base prepended when set.
 * Replaces + with %20 in the path so paths intended as spaces match files with
 * actual spaces on disk (e.g. "FlyOver+Patio+Type+1.png" -> "FlyOver Patio Type 1.png").
 */
export function getAssetUrl(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = process.env.REACT_APP_API_URL || '';
  const path = url.startsWith('/') ? url : `/${url}`;
  const pathWithSpaces = path.replace(/\+/g, '%20');
  return base + pathWithSpaces;
}
