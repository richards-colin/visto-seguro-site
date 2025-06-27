import TopBanner from '@/components/TopBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import AttorneyBio from '@/components/AttorneyBio'
import OriginStory from '@/components/OriginStory'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'


export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <Hero />
      <HowWeHelp />
      <AttorneyBio />
      <OriginStory />
      <PricingSection />
      <Footer />
    </main>
  )
}