'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollState = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const shouldBeScrolled = y > 120

      if (shouldBeScrolled !== scrollState.current) {
        scrollState.current = shouldBeScrolled
        setIsScrolled(shouldBeScrolled)
      }
    }

    const debounceScroll = () => {
      if (timeoutId.current) clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', debounceScroll)
    return () => window.removeEventListener('scroll', debounceScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  const flagSrc = i18n.language === 'en' ? '/br-flag.svg' : '/us-flag.svg'
  const flagAlt = i18n.language === 'en' ? 'Switch to Portuguese' : 'Switch to English'

  return (
    <nav
      className={`bg-[#f8f4f1] border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center w-full md:w-auto">
          <div className="relative transition-all duration-300">
            <Image
              src={isScrolled ? '/miniLogo.PNG' : '/logo.PNG'}
              alt="Visto Seguro Logo"
              width={isScrolled ? 50 : 185}
              height={isScrolled ? 50 : 185}
              priority
              className="transition-all duration-300 object-contain"
            />
          </div>
        </a>

        {/* Mobile Hamburger & Flag */}
        <div className="md:hidden flex items-center gap-3">
          {isScrolled && (
            <button onClick={toggleLanguage} aria-label={flagAlt}>
              <Image src={flagSrc} alt={flagAlt} width={36} height={36} />
            </button>
          )}
          <button
            className="text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
                      <li>
            <a href="#services" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.why')}
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.pricing')}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
              {t('nav.contact')}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <a
              href="https://wa.me/18016240221"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
            {isScrolled && (
              <button onClick={toggleLanguage} aria-label={flagAlt}>
                <Image src={flagSrc} alt={flagAlt} width={24} height={24} />
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 text-gray-800 text-base font-medium bg-[#f8f4f1] border-t border-gray-300">
                      <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a href="#why" onClick={() => setIsMenuOpen(false)}>
              {t('nav.why')}
            </a>
          </li>
           <li>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
              {t('nav.pricing')}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/18016240221"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      )}

      {/* Preload miniLogo to avoid image swap lag */}
      <link rel="preload" href="/miniLogo.png" as="image" />
    </nav>
  )
}
