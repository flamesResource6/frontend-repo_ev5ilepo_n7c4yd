import React from 'react'
import CTAButton from './CTAButton'

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Tuan The Barber" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-wide">Tuan’s Barbershop</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/barbers" className="hover:text-white">Meet the Barbers</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/booking" className="hover:text-white">Booking</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="hidden md:block">
          <CTAButton href="#" >Book Now</CTAButton>
        </div>
      </div>
    </header>
  )
}

export default Navbar
