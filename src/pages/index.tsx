import TopBanner from '@/components/TopBanner'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowWeHelp from '@/components/HowWeHelp'
import AttorneyBio from '@/components/AttorneyBio'
import OriginStory from '@/components/OriginStory'


export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <Hero />
      <HowWeHelp />
      <AttorneyBio />
      <OriginStory />
    </main>
  )
}