'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY

    // Add hysteresis buffer (10px) to avoid jitter
    if (!isScrolled && currentY > 90) {
      setIsScrolled(true)
    } else if (isScrolled && currentY < 70) {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [isScrolled])

  return (
    <nav
      className={`bg-[#f8f4f1] border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#top"
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? 'justify-start' : 'justify-center'
          } w-full md:w-auto`}
        >
          <div className="relative transition-all duration-300">
            <Image
              src={isScrolled ? '/miniLogo.png' : '/logo.PNG'}
              alt="Visto Seguro Logo"
              width={isScrolled ? 50 : 185}
              height={isScrolled ? 50 : 185}
              priority
              className="transition-all duration-300 object-contain"
            />
          </div>
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
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
              href="https://wa.me/18016240221"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 text-gray-800 text-base font-medium bg-[#f8f4f1] border-t border-gray-300">
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a href="#why" onClick={() => setIsMenuOpen(false)}>
              {t('nav.why')}
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
