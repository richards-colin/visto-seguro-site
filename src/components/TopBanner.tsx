'use client'

import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
]

export default function TopBanner() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="bg-blue-950 text-white text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <span className="text-yellow-400 font-medium">
          {t('topBanner.spanish')}
        </span>
      </div>
      <div className="flex items-center gap-3 justify-end">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`underline hover:text-yellow-400 ${
              i18n.language === code ? 'font-semibold text-yellow-400' : 'text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
