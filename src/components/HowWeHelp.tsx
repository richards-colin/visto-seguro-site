'use client'

import { useTranslation } from 'react-i18next'

export default function HowWeHelp() {
  const { t } = useTranslation()

  return (
    <section id="services" className="bg-[#fbf7f4] text-gray-800 py-16 px-6 border-b border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('how.title')}
        </h2>
        <p className="text-md md:text-lg mb-8">
          {t('how.subtitle')}
        </p>

        <ul className="text-left max-w-2xl mx-auto space-y-4 list-disc list-inside text-base md:text-lg">
          <li>{t('how.item1')}</li>
          <li>{t('how.item2')}</li>
          <li>{t('how.item3')}</li>
          <li>{t('how.item4')}</li>
        </ul>
      </div>
    </section>
  )
}
