// client/public/config.js
// Рантайм-конфиг: загружается отдельно от бандла.
// Менять этот файл можно без пересборки клиента.
window.CONFIG = {
  // URL сервера Socket.IO / API.
  // Меняйте только здесь при смене хоста сервера — пересборка не нужна.
  // Локально:    'http://localhost:3001'
  // Render:      'https://myapp.onrender.com'
  // VPS/другой:  'https://myserver.example.com'
  serverUrl: 'https://messmemes.onrender.com',

  // Контакты
  emailSupport: 'support@messmemes.com',
  emailLegal: 'legal@messmemes.com',

  // Документы
  terms: '/messmemes_client/terms.html',
  privacy: '/messmemes_client/privacy.html',
  donationOffer: '/messmemes_client/donation-offer.html',

  // Реквизиты публичной оферты
  offer: {
    city: 'г. Москва',
    date: '19.08.2026',
    authorName: 'Администрация MessMemes',
    siteUrl: window.location.origin + (window.location.pathname.includes('/messmemes_client') ? '/messmemes_client/' : '/'),
    inn: '—',
    registrationAddress: 'Российская Федерация',
    email: 'support@messmemes.com',
  }
};
