'use client'

import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-[#fbf7f4] text-gray-800 py-16 px-6 border-b border-gray-200">
      <SectionTitle headingParts={[t('nav.contact', 'Contact'), t('nav.about', '')]} />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('contact.title', 'Get in Touch')}
        </h2>
        <p className="text-md md:text-lg mb-8">
          {t('contact.subtitle', 'Questions? Need help with your visa? Reach out and our team will respond as soon as possible.')}
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t('contact.form.name', 'Your Name')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.form.email', 'Your Email')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder={t('contact.form.message', 'Your Message')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition"
            >
              {t('contact.form.submit', 'Send Message')}
            </button>
          </form>
        </div>
        <div className="text-sm text-gray-600">
          <p>{t('contact.info.address', '2562 Monroe Boulevard, Ogden, UT 84401')}</p>
          <p>{t('contact.info.phone', 'Phone: 801-430-9184')}</p>
          <p>{t('contact.info.email', 'Email: info@vistoseguro.com')}</p>
        </div>
      </div>
    </section>
  )
}