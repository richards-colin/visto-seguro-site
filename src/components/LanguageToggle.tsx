'use client'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 text-sm underline text-blue-700"
      suppressHydrationWarning
    >
      {t(`toggleTo.${i18n.language}`)}
    </button>
  )
}
