const versionMatch = self.serviceWorker.scriptURL.match(/\/([0-9.]+)\//)
const version = versionMatch ? versionMatch[1] : undefined

if (!version) {
    console.error('Version is not set. Service worker is not registered!')
} else {
    const PRECACHE = 'common-cache-' + version
    const RUNTIME = 'common-cache-runtime-' + +version
    const PRE_CACHE_URLS = [
        '/',
        `/${version}/main.js`,
        `/${version}/runtime.js`,
        `/${version}/vendors.js`,
        `/${version}/main.css`,
    ]

    self.addEventListener('install', (event) => {
        event.waitUntil(
            caches
                .open(PRECACHE)
                .then((cache) => cache.addAll(PRE_CACHE_URLS))
                .then(() => self.skipWaiting()),
        )
    })

    self.addEventListener('activate', (e) => {
        const currentCaches = [PRECACHE, RUNTIME]
        e.waitUntil(
            caches
                .keys()
                .then((cacheNames) => {
                    return cacheNames.filter(
                        (cacheName) => !currentCaches.includes(cacheName),
                    )
                })
                .then((cachesToDelete) => {
                    return Promise.all(
                        cachesToDelete.map((cacheToDelete) => {
                            return caches.delete(cacheToDelete)
                        }),
                    )
                })
                .then(() => self.clients.claim()),
        )
    })

    self.addEventListener('fetch', (event) => {
        if (event.request.url.startsWith(self.location.origin)) {
            event.respondWith(
                (async () => {
                    const cachedResponse = await caches.match(event.request)
                    if (cachedResponse) {
                        return cachedResponse
                    }

                    const request = event.request.clone()

                    if (
                        request.method !== 'GET' ||
                        request.url.indexOf('http') !== 0
                    ) {
                        return await fetch(request)
                    }

                    return await caches.open(RUNTIME).then(async (cache) => {
                        return await fetch(request).then(async (response) => {
                            if (!response || response.status !== 200) {
                                return response
                            }

                            return await cache
                                .put(event.request, response.clone())
                                .then(() => response)
                        })
                    })
                })(),
            )
        }
    })
}
