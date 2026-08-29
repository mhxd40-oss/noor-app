// Minimal service worker — enables "Add to Home Screen" / install-as-app
// behavior in supporting browsers. Deliberately does NOT cache anything or
// intercept requests, so the app continues to require an internet
// connection exactly as before; this file's only job is to satisfy PWA
// installability criteria.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network, unmodified.
  event.respondWith(fetch(event.request));
});
