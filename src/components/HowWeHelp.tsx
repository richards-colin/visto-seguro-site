'use client'

import { useTranslation } from 'react-i18next'
        import SectionTitle from './SectionTitle'


export default function HowWeHelp() {
  const { t } = useTranslation()

  return (
 <section id="services" className="bg-[#fbf7f4] text-gray-800 py-16 px-6 border-b border-gray-200">
      <SectionTitle
        headingParts={[t('how.headingPart1'), t('how.headingPart2')]}
      />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('how.title')}
        </h2>
        <p className="text-md md:text-lg mb-8">
          {t('how.subtitle')}
        </p>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-8">
          {[1, 2, 3, 4, 5].map((n) => (
            <article
              key={n}
              className="bg-blue-900 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <h3 className="text-lg font-medium">
                {t(`how.item${n}`)}
              </h3>
            </article>
          ))}
        </div>
        <p className="text-md md:text-lg mt-10 font-semibold">
          {t('how.closing')}
        </p>
      </div>
    </section>
  )
}
