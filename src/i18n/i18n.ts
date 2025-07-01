import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import pt from './pt.json'
import es from './es.json' // ✅ Add Spanish

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'es'], // ✅ Optional but good for clarity
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      es: { translation: es }, // ✅ Register Spanish here
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
