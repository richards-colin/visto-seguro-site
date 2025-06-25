import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 text-sm underline text-blue-700"
    >
      {i18n.language === 'en' ? 'Português' : 'English'}
    </button>
  )
}
