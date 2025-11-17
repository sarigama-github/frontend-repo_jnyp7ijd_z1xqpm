import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { SystemAdministrationSection, SecuritySection, ApproachSection, SocialProof } from '../components/Sections'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SystemAdministrationSection />
        <SecuritySection />
        <ApproachSection />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
