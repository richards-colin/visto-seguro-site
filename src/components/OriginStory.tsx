import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function OriginStory() {
  const { t } = useTranslation()

  return (
    <section id="why" className="bg-[#fbf7f4] text-gray-800 py-20 px-6 border-b border-gray-200 mx-auto">
        <SectionTitle
          headingParts={[t('origin.headingPart1'), t('origin.headingPart2')]}
        />
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {t('origin.title')}
      </h2>

      <p className="text-base md:text-lg mb-8 whitespace-pre-line max-w-3xl mx-auto text-center">
        {t('origin.body')}
      </p>

      {/* Family Photo at Brazil Game */}
      <div className="flex justify-center mb-12">
        <Image
          src="/soccerMatch.jpeg"
          alt="Kevin Richards and family at a Brazil football game"
          width={800}
          height={533}
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        {t('origin.whyTitle')}
      </h3>
      <p className="text-base md:text-lg whitespace-pre-line max-w-3xl mx-auto text-center">
        {t('origin.whyBody')}
      </p>
    </section>
  )
}
