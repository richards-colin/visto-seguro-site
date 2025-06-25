'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function AttorneyBio() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  // Fallback titles if i18n hasn't loaded or keys are missing
  const defaultHeading = {
    en: ['Meet the', 'Attorney'],
    pt: ['Conheça o', 'Advogado'],
  }

  const rawHeading = t('bio.sectionTitle', { returnObjects: true })

  // Safe language key with fallback to 'en'
  const langKey = (['en', 'pt'].includes(lang) ? lang : 'en') as keyof typeof defaultHeading

  const headingParts = Array.isArray(rawHeading) ? rawHeading : defaultHeading[langKey]

  return (
    <section id="about" className="bg-[#fbf7f4] py-16 px-6 text-gray-800 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* Dual-color translatable heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-green-700">{headingParts[0]}</span>{' '}
          <span className="text-blue-900">{headingParts[1]}</span>
        </h2>
        <div className="w-16 h-1 mx-auto bg-blue-900 rounded mb-12"></div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Attorney Photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/kevin.jpeg"
              alt="Kevin G. Richards"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('bio.name')}</h3>
            <p className="text-lg font-medium mb-2">{t('bio.title')}</p>
            <p className="text-base md:text-lg whitespace-pre-line leading-relaxed">{t('bio.body')}</p>
            <a
              href="https://www.rbrlawgroup.com/legal-services/immigration/visto-seguro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-4 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
            >
              Learn more at our main immigration law office →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
