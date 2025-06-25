'use client'

import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#f8f4f1] text-sm text-gray-700 px-6 py-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left Section */}
        <div>
          <p className="mb-1 font-medium">{t('footer.copyright', { year })}</p>
          <p>{t('footer.tagline')}</p>
          <p>{t('footer.location')}</p>
        </div>

        {/* Right Section – Links as buttons */}
        <div className="flex flex-col md:items-end gap-2">
          <a
            href="https://www.rbrlawgroup.com/legal-services/immigration/visto-seguro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            {t('footer.lawSite')}
          </a>
          <a
            href="https://wa.me/18014309184"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
          >
            {t('footer.whatsapp')}
          </a>
        </div>
      </div>
    </footer>
  )
}
