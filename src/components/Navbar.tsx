'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English', flag: '/us-flag.svg' },
  { code: 'pt', label: 'Português', flag: '/br-flag.svg' },
  { code: 'es', label: 'Español', flag: '/es-flag.svg' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasLanguageLoaded, setHasLanguageLoaded] = useState(false)
  const scrollState = useRef(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const storedLang = localStorage.getItem('lang')
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang)
    }
    setHasLanguageLoaded(true)
  }, [i18n])

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

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

//   const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  const renderLanguageSelector = () => (
    <select
      aria-label="Select language"
      className="border rounded px-2 py-1 text-sm cursor-pointer"
      value={i18n.language}
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  )

  return (
    <nav className={`bg-[#f8f4f1] border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
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

        {/* Mobile Flag + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {isScrolled && hasLanguageLoaded && renderLanguageSelector()}
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
          <li><a href="#services" className="hover:text-blue-600">{t('nav.services')}</a></li>
          <li><a href="#about" className="hover:text-blue-600">{t('nav.about')}</a></li>
          <li><a href="#why" className="hover:text-blue-600">{t('nav.why')}</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">{t('nav.pricing')}</a></li>
          <li><a href="#contact" className="hover:text-blue-600">{t('nav.contact')}</a></li>
          <li className="flex items-center gap-3">
            <a
              href="https://wa.me/18016240221"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
            {isScrolled && hasLanguageLoaded && renderLanguageSelector()}
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 text-gray-800 text-base font-medium bg-[#f8f4f1] border-t border-gray-300">
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#why" onClick={() => setIsMenuOpen(false)}>{t('nav.why')}</a></li>
          <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>{t('nav.pricing')}</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
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

      <link rel="preload" href="/miniLogo.png" as="image" />
    </nav>
  )
}
