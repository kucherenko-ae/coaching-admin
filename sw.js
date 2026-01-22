// Версия автоматически обновляется из package.json при сборке
const VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0'
const CACHE_NAME = `ft-desk-v${VERSION}`
const BASE_PATH = '/coaching-admin'

// Кешируем только entrypoint SPA
const PRECACHE_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`
]

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

// Стратегия кеширования: Network First, падаем на Cache
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Пропускаем не-GET запросы
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // Только наш origin
  if (url.origin !== self.location.origin) return

  // SPA навигация
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(`${BASE_PATH}/index.html`)
      )
    )
    return
  }

  // Не кешируем API
  if (url.pathname.startsWith('/api')) return

  // Кешируем только статические ассеты
  const isAsset =
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2')

  if (!isAsset) return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Не кешируем ошибки
        if (!response || response.status !== 200 || response.type === 'error') {
          return response
        }

        // Клонируем ответ, так как response можно использовать только один раз
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
      .catch(() => {
        // Если сеть недоступна, пробуем вернуть из кеша
        return caches.match(event.request).then((response) => {
          return response || caches.match(`${BASE_PATH}/index.html`)
        })
      })
  )
})
