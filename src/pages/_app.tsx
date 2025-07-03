import "@/styles/globals.css";
import '@/i18n/i18n'
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react' // <-- ✅ import it here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* <-- ✅ include it after your component */}
    </>
  );
}
