self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function (event) {
    const data = event.data ? event.data.json() : {};

    const title = data.title || 'Notification';
    const options = {
        body: data.body || 'You have a new notification.',
        icon: '/icons/192x192.png',
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
