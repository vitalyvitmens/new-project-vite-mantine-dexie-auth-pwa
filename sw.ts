/// <reference types="serviceworker" />

type Asset = string

const staticCache: string = 'static-site-NewProject-v1'
const dynamicCache: string = 'dynamic-site-NewProject-v1'
const ASSETS: Asset[] = [
  '/new-project-vite-mantine-dexie-auth-pwa/',
  '/new-project-vite-mantine-dexie-auth-pwa/index.html',
  '/new-project-vite-mantine-dexie-auth-pwa/src/index.css',
  '/new-project-vite-mantine-dexie-auth-pwa/src/main.tsx',
  '/new-project-vite-mantine-dexie-auth-pwa/src/App.tsx',
  '@mantine/core/styles.css',
  '@mantine/notifications/styles.css',
  '/new-project-vite-mantine-dexie-auth-pwa/db.ts',
]

// install event
self.addEventListener('install', async () => {
  const cache = await caches.open(staticCache)
  await cache.addAll(ASSETS)
})

// activate event
self.addEventListener('activate', async () => {
  const cacheKeysArr = await caches.keys()
  await Promise.all(
    cacheKeysArr
      .filter((key) => key !== staticCache && key !== dynamicCache)
      .map((key) => caches.delete(key))
  )
})

// fetch evenet
self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request: Request): Promise<Response> {
  const cached = await caches.match(request)
  try {
    return (
      cached ||
      (await fetch(request).then(() => {
        return networkFirst(request)
      })) ||
      new Response()
    )
  } catch (error) {
    return networkFirst(request)
  }
}

async function networkFirst(request: Request): Promise<Response> {
  const cache = await caches.open(dynamicCache)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (error) {
    const cached = await cache.match(request)
    return cached || (await caches.match('/offline')) || new Response()
  }
}
