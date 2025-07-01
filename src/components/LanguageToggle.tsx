'use client'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <select
      onChange={changeLanguage}
      value={i18n.language}
      className="absolute top-4 right-4 text-sm border border-gray-300 rounded px-2 py-1 text-gray-800 bg-white shadow-sm"
      suppressHydrationWarning
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
      <option value="es">Español</option>
    </select>
  )
}
