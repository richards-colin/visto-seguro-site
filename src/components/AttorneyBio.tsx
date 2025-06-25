'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function AttorneyBio() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#fbf7f4] py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Attorney Photo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/kevin.jpeg"
            alt="Kevin G. Richards"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Bio Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('bio.name')}</h2>
          <p className="text-lg font-medium mb-2">{t('bio.title')}</p>
          <p className="text-base md:text-lg whitespace-pre-line leading-relaxed">{t('bio.body')}</p>
        </div>
      </div>
    </section>
  )
}
