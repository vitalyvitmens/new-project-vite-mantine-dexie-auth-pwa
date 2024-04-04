if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    // .register('/new-project-vite-mantine-dexie-auth-pwa/sw.js') // для хостинга
    .register('/new-project-vite-mantine-dexie-auth-pwa/sw.ts') // для локального сервера
    .then((reg) => console.log('Service Worker registered', reg))
    .catch((err) => console.log('Service Worker not registered', err))
}
