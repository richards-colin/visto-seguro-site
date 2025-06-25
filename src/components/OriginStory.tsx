import { useTranslation } from 'react-i18next'

export default function OriginStory() {
  const { t } = useTranslation()

  return (
    <section className="bg-white text-gray-800 px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{t('origin.title')}</h2>
      <p className="mb-6 whitespace-pre-line">{t('origin.body')}</p>

      <h3 className="text-2xl font-semibold mt-12 mb-4">{t('origin.whyTitle')}</h3>
      <p className="whitespace-pre-line">{t('origin.whyBody')}</p>
    </section>
  )
}
