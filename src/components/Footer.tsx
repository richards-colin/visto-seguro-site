'use client'

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronUp } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer id="contact" className="bg-[#f8f4f1] text-sm text-gray-700 px-6 py-6 border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="mb-1 font-medium">{t('footer.copyright', { year })}</p>
            <p>{t('footer.tagline')}</p>
            <p>{t('footer.location')}</p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a
              href="https://www.rbrlawgroup.com/legal-services/immigration/visto-seguro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              {t('footer.lawSite')}
            </a>
          </div>
        </div>
      </footer>
<a
  href="https://wa.me/18016240221"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition p-1 md:p-2"
>
  <Image
    src="/whatsIcon.png"
    alt="WhatsApp"
    width={40}
    height={40}
    className="md:w-[64px] md:h-[64px] w-[40px] h-[40px]"
  />
</a>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition md:hidden"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  )
}
