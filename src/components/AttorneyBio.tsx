'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function AttorneyBio() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-[#fbf7f4] py-16 px-6 text-gray-800 border-b border-gray-200">
        <SectionTitle
          headingParts={[t('bio.headingPart1'), t('bio.headingPart2')]}
        />
      <div className="max-w-7xl mx-auto">

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
  {t('bio.link')}
</a>
          </div>
        </div>
      </div>
    </section>
  )
}
