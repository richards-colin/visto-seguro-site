import { useTranslation } from 'react-i18next'

export default function TopBanner() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="bg-blue-950 text-white text-sm py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        {/* Icon */}
        {/* <Image
          src="/vistoSeguro.png"
          alt="Visto Seguro Icon"
          width={20}
          height={20}
          className="inline-block"
        /> */}

        {/* Financing */}
        <span className="font-semibold text-green-400">
          {i18n.language === 'en'
            ? 'Financing Options Available'
            : 'Opções de Financiamento Disponíveis'}
        </span>

        <span className="hidden md:inline">|</span>
        <span>2562 Monroe Boulevard, Ogden, UT 84401</span>
        <span className="hidden md:inline">|</span>
        <span>
          {i18n.language === 'en' ? 'Call' : 'Ligue'}{' '}
          <a href="tel:8014309184" className="underline hover:text-yellow-400">
            801-430-9184
          </a>
        </span>
      </div>

      <div className="flex items-center gap-3 justify-end">
        <span className="text-yellow-400 font-medium">
          {i18n.language === 'en'
            ? 'Se Habla Español'
            : 'Atendimento em Espanhol'}
        </span>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-white underline hover:text-yellow-400"
        >
          {i18n.language === 'en' ? (
            <>
              🇧🇷 Português
            </>
          ) : (
            <>
              🇺🇸 English
            </>
          )}
        </button>
      </div>
    </div>
  )
}
