// client/public/config.js
window.CONFIG = {
  // Версия клиента
  version: 'v2.6.0',

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
