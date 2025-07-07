import { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/i18n/i18n'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17298586607"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17298586607');
        `}
      </Script>

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
