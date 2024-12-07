import { Hero } from "@/components/homepage/Hero"
import { Features } from "@/components/homepage/Features"
import { Testimonials } from "@/components/homepage/Testimonials"
import { WhyChooseUs } from "@/components/homepage/WhyChooseUs"
import { HowItWorks } from "@/components/homepage/HowItWorks"
import { GrowthMetrics } from "@/components/homepage/GrowthMetrics"
import { FAQ } from "@/components/homepage/FAQ"
import { ContactForm } from "@/components/homepage/ContactForm"
import { Footer } from "@/components/homepage/Footer"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Growth Metrics Section */}
      <GrowthMetrics />

      {/* Testimonials Section */}
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}
