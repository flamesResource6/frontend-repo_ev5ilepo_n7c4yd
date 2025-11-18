import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6">About Tuan’s Barbershop</h1>
        <div className="prose prose-invert max-w-none">
          <p>
            Tuan built this shop to raise the bar for grooming in Tillsonburg—precision work, clean lines, and a friendly culture that welcomes everyone.
          </p>
          <p>
            With years behind the chair, Tuan’s focus has always been consistency and quality. From sharp fades to premium beard work, the goal is simple: you leave looking fresh and feeling confident.
          </p>
          <p>
            The team brings a balance of craftsmanship and personality. We’re community-focused, detail-driven, and proud of the standards we keep.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#1b1b1b] border border-[#D7A83F]/20 rounded-xl p-6 flex items-center justify-center aspect-video">
            <img src="/favicon.svg" alt="Tuan The Barber Logo" className="h-16" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#D7A83F]/20">
            <img src="/hero.jpg" alt="Shop interior" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
