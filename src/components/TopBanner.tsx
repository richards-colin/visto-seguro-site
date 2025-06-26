'use client'

import { useTranslation } from 'react-i18next'

export default function TopBanner() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="bg-blue-950 text-white text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        {/* <span className="font-semibold text-green-400">
          {t('topBanner.financing')}
        </span>

        <span className="hidden md:inline">|</span>
        <span>{t('topBanner.address')}</span>
        <span className="hidden md:inline">|</span>
        <span>
          {t('topBanner.call')}{' '}
          <a href="tel:8014309184" className="underline hover:text-yellow-400">
            {t('topBanner.phone')}
          </a>
        </span> */}
      </div>

      <div className="flex items-center gap-3 justify-end">
        <span className="text-yellow-400 font-medium">
          {t('topBanner.spanish')}
        </span>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-white underline hover:text-yellow-400"
        >
          {i18n.language === 'en' ? '🇧🇷' : '🇺🇸'} {t('topBanner.toggle')}
        </button>
      </div>
    </div>
  )
}
