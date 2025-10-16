// Реєстрація Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW зареєстровано', reg.scope))
      .catch(err => console.error('SW помилка реєстрації', err));
  });
}
