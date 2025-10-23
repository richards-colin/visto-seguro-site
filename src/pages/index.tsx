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
      <Hero imageUrl="/arches.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/archesGrey.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/fieldMountains.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/redMountain.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/singleMountain.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/sky.jpg" />
      <HowWeHelp/>
            
      <Hero imageUrl="/yellowArch.jpg" />
      <HowWeHelp/>
                  
      <Hero imageUrl="/yellowMountain.jpg" />
      <HowWeHelp/>
      <Values />
      <Footer />
    </main>
  )
}