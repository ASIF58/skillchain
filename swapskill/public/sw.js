self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('swapskill-store').then((cache) => cache.addAll([
      '/index.html',
      '/dashboard.html',
      '/chat.html',
      '/logo.png',
      // Add other essential files here
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
