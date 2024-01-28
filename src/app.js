if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js')
        .then(() => console.log('registered'))
        .catch(() => console.log('error'))
}