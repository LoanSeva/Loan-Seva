// Simple service worker: kuch cache nahi karta, taaki hamesha naya version dikhe.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => new Response("Offline. Please check your internet connection.", { headers: { "Content-Type": "text/plain" } })));
  }
});
