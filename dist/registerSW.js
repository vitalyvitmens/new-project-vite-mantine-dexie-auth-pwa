if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/new-project-vite-mantine-dexie-auth-pwa/sw.js', { scope: '/new-project-vite-mantine-dexie-auth-pwa/' })})}