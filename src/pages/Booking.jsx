import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Booking = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4">Book Your Cut</h1>
        <p className="text-white/70 mb-8">Select your service, choose your barber, and pick a time that works for you. You’ll receive a confirmation instantly.</p>
        <div className="rounded-xl overflow-hidden border border-[#D7A83F]/20 bg-[#1b1b1b]">
          <div className="aspect-[16/9] w-full">
            <iframe title="Setmore Booking" src="https://my.setmore.com/bookingpage" className="w-full h-full" frameBorder="0"></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Booking
