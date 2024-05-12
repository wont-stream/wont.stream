const staticPaths = new Set(["/","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/browserconfig.xml","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/icons/favicon.ico","/icons/mstile-144x144.png","/icons/mstile-150x150.png","/icons/mstile-310x150.png","/icons/mstile-310x310.png","/icons/mstile-70x70.png","/icons/safari-pinned-tab.svg","/icons/site.webmanifest","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js","/sitemap.xml","/~partytown/debug/partytown-atomics.js","/~partytown/debug/partytown-media.js","/~partytown/debug/partytown-sandbox-sw.js","/~partytown/debug/partytown-sw.js","/~partytown/debug/partytown-ww-atomics.js","/~partytown/debug/partytown-ww-sw.js","/~partytown/debug/partytown.js","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };