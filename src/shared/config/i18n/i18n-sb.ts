import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // lazy loads translations from /public/locales
    .init({
        lng: 'ru',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
