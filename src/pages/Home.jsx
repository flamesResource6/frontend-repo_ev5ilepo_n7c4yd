import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import BarbersCarousel from '../components/BarbersCarousel'
import InstagramEmbed from '../components/InstagramEmbed'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ServicesPreview />
        <BarbersCarousel />
        <InstagramEmbed />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default Home
