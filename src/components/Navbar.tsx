'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="bg-[#f8f4f1] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Visto Seguro Logo"
            width={160}
            height={160}
            priority
            className="h-auto w-auto"
          />
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.why')}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.contact')}
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/18014309184"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
