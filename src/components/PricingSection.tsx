'use client'

import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function PricingSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  // Define language-based base link
  const intakeLink =
    lang === 'pt'
      ? 'https://rrlawfirm.cliogrow.com/intake/6aa368e24e1ad98a4a0a643671e8b445'
      : 'https://rrlawfirm.cliogrow.com/intake/bc2c92c8e1796fcc9a755e405ee946c9'

  const tiers = [
    {
      id: 'tier1',
      bg: 'bg-white',
      border: 'border-gray-200',
      link: intakeLink,
    },
    {
      id: 'tier2',
      bg: 'bg-blue-900',
      border: 'border-blue-900',
      text: 'text-white',
      link: intakeLink,
    },
    {
      id: 'addOn',
      bg: 'bg-white',
      border: 'border-gray-200',
      link: intakeLink,
    },
  ]

  return (
    <section id="pricing" className="bg-[#fbf7f4] py-16 px-6 text-gray-800 border-t border-gray-200">
        <SectionTitle
          headingParts={[t('pricing.headingPart1'), t('pricing.headingPart2')]}
        />
      <div className="max-w-5xl mx-auto text-center">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('pricing.title')}</h2> */}
        <p className="text-md md:text-lg mb-10 text-gray-700 whitespace-pre-line">
          {t('pricing.description')}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map(({ id, bg, border, text, link }) => {
            const features = t(`pricing.${id}.features`, { returnObjects: true })
            const featureList = Array.isArray(features) ? features : []

            return (
              <div
                key={id}
                className={`${bg} ${border} ${text || 'text-gray-800'} p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border`}
              >
                <h3 className="text-xl font-semibold mb-2">{t(`pricing.${id}.title`)}</h3>
                <p className="text-lg font-bold mb-4">{t(`pricing.${id}.price`)}</p>
                <p className="text-sm mb-4 whitespace-pre-line">
                  {t(`pricing.${id}.ideal`) || t(`pricing.${id}.description`)}
                </p>
                <ul className="text-sm space-y-2 list-disc list-inside mb-4">
                  {featureList.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-block px-4 py-2 rounded font-semibold transition ${
                    id === 'tier2'
                      ? 'bg-white text-blue-900 hover:bg-gray-200'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  {t('pricing.cta') || 'Start Now'}
                </a>
              </div>
            )
          })}
        </div>

        <p className="text-sm text-gray-600 mt-10">{t('pricing.disclaimer')}</p>

        <div className="mt-8">
          <a
            href={intakeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {t('pricing.ctaGlobal') || 'Start Your Application'}
          </a>
        </div>
      </div>
    </section>
  )
}
