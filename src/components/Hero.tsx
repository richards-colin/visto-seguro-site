import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#fbf7f4] text-gray-800 py-24 px-6 text-center border-b border-gray-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
  {t('hero.headline')}
</h1>
      
      <p className="text-lg italic text-gray-700 mb-2">
        {t('hero.support')}
      </p>
      
      <p className="text-xl font-semibold text-gray-800 mb-6">
        {t('hero.tagline')}
      </p>
      
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
        {t('hero.sub')}
      </p>
      
      <a
        href="https://wa.me/18016240221"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition-transform transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('hero.cta')}
      </a>
    </section>
  )
}
