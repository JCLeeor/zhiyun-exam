
const CACHE = "zhiyun-v1";
const ASSETS = [
  "./支云考核.html",
  "./icons/logo.png",
  "./icons/i01.png","./icons/i02.png","./icons/i03.png",
  "./icons/i04.png","./icons/i05.png","./icons/i06.png",
  "./icons/i07.png","./icons/i08.png","./icons/i09.png",
  "./icons/i10.png",
  "./icons/lux01.jpg","./icons/lux02.jpg","./icons/lux03.jpg",
  "./icons/lux04.jpg","./icons/lux05.jpg","./icons/lux06.jpg",
  "./icons/lux07.jpg","./icons/lux08.jpg","./icons/lux09.jpg",
  "./icons/lux10.jpg"
];

self.addEventListener("install", function(e) {
  e.waitUntil(caches.open(CACHE).then(function(cache) {
    return cache.addAll(ASSETS);
  }));
});

self.addEventListener("fetch", function(e) {
  e.respondWith(caches.match(e.request).then(function(r) {
    return r || fetch(e.request);
  }));
});
