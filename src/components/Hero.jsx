import React from 'react'
import CTAButton from './CTAButton'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <img src="/hero.jpg" alt="Tuan's Barbershop Interior" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Tilsonburg’s Freshest Cuts & Cleanest Fades
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Walk-ins welcome. Book online in seconds.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="#">Book Now</CTAButton>
          <CTAButton href="/barbers" variant="outline">Meet the Barbers</CTAButton>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D7A83F] to-transparent opacity-80" />
    </section>
  )
}

export default Hero
