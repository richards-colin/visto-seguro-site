'use client'

import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

export default function Values() {
  const { t } = useTranslation()

  const values = [
    { icon: '🤝', key: 'clientCentered' },
    { icon: '📚', key: 'clarityEducation' },
    { icon: '🕊️', key: 'integrityTransparency' },
    { icon: '🏆', key: 'excellence' },
    { icon: '💙', key: 'compassionRespect' },
    { icon: '💪', key: 'fearlessAdvocacy' },
    { icon: '🚀', key: 'innovation' },
  ]

  // Animation variants for staggered entrance
// const variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (custom: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: custom * 0.12, duration: 0.6, ease: "easeOut" }
//   }),
// }

  return (
    <section id="values" className="bg-[#fbf7f4] text-gray-800 py-16 px-6 border-b border-gray-200">
      <SectionTitle headingParts={[t('values.headingPart1', 'Our'), t('values.headingPart2', 'Values')]} />
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('values.title', 'At Visto Seguro, our values guide every step of our work.')}
        </h2>
        <p className="text-md md:text-lg mb-8 whitespace-pre-line">
          {t('values.intro', 'We don’t just help with forms — we walk with you through one of the most important decisions of your life: making your dream of traveling, studying, or living abroad a reality.')}
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-8">
          {values.map(({ icon, key }, i) => (
            <motion.article
              key={key}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border border-gray-200 flex flex-col items-center"
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            //   variants={variants}
            >
              <span className="text-3xl mb-2">{icon}</span>
              <h3 className="text-lg font-semibold mb-2">{t(`values.${key}.title`)}</h3>
              <p className="text-sm text-gray-700">{t(`values.${key}.body`)}</p>
            </motion.article>
          ))}
        </div>
        <p className="text-md md:text-lg mt-10 font-semibold">
          {t('values.closing', '✦ We’re more than visa support — we’re your trusted ally in making the American dream possible')}
        </p>
      </div>
    </section>
  )
}