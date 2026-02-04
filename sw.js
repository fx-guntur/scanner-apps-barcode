const CACHE_NAME = 'pos-v1';
const ASSETS = [
    './',
    './index.html',
    './cart.html',
    './products.html',
    './assets/css/style.css',
    './assets/js/app.js',
    './assets/js/scanner.js',
    './assets/js/pdf.js',
    './assets/json/products.json',
    'https://unpkg.com/html5-qrcode',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
