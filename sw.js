// Dummy Service Worker để trình duyệt (Chrome/Android) nhận diện PWA và hiện nút Cài đặt ngay lập tức
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Không làm gì cả, chỉ cần bắt sự kiện để qua bài test PWA
});
