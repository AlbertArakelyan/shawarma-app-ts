import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationHY from './locales/hy/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  hy: {
    translation: translationHY,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  }).then((t) => t('key'));

