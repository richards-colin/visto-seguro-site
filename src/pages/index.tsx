import TopBanner from '@/components/TopBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import Values from '@/components/Values'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <Hero />
      <HowWeHelp/>
      <Values />
      <Footer />
    </main>
  )
}