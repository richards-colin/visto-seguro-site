import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'

interface HeroProps {
  imageUrl?: string
}

export default function Hero({ imageUrl = "/arches.jpg" }: HeroProps) {
  const { t } = useTranslation()
  const bgRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={bgRef}
      className="relative py-24 px-6 text-center border-b border-gray-200 overflow-visible"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-position 0.2s',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.60)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-5xl mx-auto text-white">
          {t('hero.headline')}
        </h1>
        <p className="text-lg italic mb-2 text-white">
          {t('hero.support')}
        </p>
        <p className="text-xl font-semibold mb-6 text-white">
          {t('hero.tagline')}
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
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
      </div>
    </section>
  )
}