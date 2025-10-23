'use client'

import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function Services() {
  const { t } = useTranslation()

  const visaTypes = [
    {
      key: 'tourism',
      icon: '✈️',
      bg: 'bg-white',
      border: 'border-gray-200',
      text: 'text-gray-800',
      listColor: 'text-gray-700',
    },
    {
      key: 'student',
      icon: '🎓',
      bg: 'bg-blue-100',
      border: 'border-blue-900',
      text: 'text-gray-800',
      listColor: 'text-gray-700',
    },
  ]

  const renderList = (items: unknown, textColor = "text-gray-700") => {
    if (!Array.isArray(items)) return null
    return (
      <ul className={`list-disc ml-6 ${textColor} text-left`}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <section id="services" className="bg-[#fbf7f4] text-gray-800 py-16 px-6 border-b border-gray-200">
      <SectionTitle headingParts={[t('nav.services'), ""]} />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('services.title', 'Visa Services')}
        </h2>
        <p className="text-md md:text-lg mb-8">
          {t('services.subtitle', 'Explore our main visa options for Brazilians.')}
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {visaTypes.map(({ key, icon, bg, border, text, listColor }) => (
            <article
              key={key}
              className={`${bg} ${border} ${text} p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border flex flex-col`}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center">
                <span className="mr-2 text-2xl">{icon}</span> {t(`${key}.title`)}
              </h3>
              <p className="mb-4">{t(`${key}.intro`)}</p>
              {key === 'tourism' && (
                <p className="mb-4">{t(`${key}.body`)}</p>
              )}
              <div className="mb-2 text-left">
                <span className="font-semibold text-green-700">{t(`${key}.canTitle`)}</span>
                {renderList(t(`${key}.canList`, { returnObjects: true }), listColor)}
              </div>
              <div className="mb-2 text-left">
                <span className="font-semibold text-red-700">{t(`${key}.cannotTitle`)}</span>
                {renderList(t(`${key}.cannotList`, { returnObjects: true }), listColor)}
              </div>
              <div className="text-left">
                <span className="font-semibold">{t(`${key}.docsTitle`)}</span>
                {renderList(t(`${key}.docsList`, { returnObjects: true }), listColor)}
              </div>
            </article>
          ))}
        </div>
        <p className="text-md md:text-lg mt-10 font-semibold">
          {t('services.closing', 'Contact us for more visa options and personalized support.')}
        </p>
      </div>
    </section>
      )
}