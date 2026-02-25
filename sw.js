const CACHE_NAME = 'cardpick-v1.4';
const ASSETS = [
  '/CardPick/',
  '/CardPick/index.html',
  '/CardPick/cards.json',
  '/CardPick/manifest.json',
  '/CardPick/icons/icon-192.png',
  '/CardPick/icons/icon-512.png',
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first for JSON (get latest card data), cache first for everything else
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-first for cards.json (always try to get latest data)
  if (url.pathname.endsWith('cards.json')) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for other assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        // Cache same-origin successful responses
        if (resp.ok && url.origin === self.location.origin) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      });
    })
  );
});
