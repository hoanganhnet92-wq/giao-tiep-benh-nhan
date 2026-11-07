/* Bản cũ đã chuyển sang app/. Service worker này tự gỡ và xóa bộ nhớ đệm cũ. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => !k.startsWith("gtbn-app")).map(k => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
