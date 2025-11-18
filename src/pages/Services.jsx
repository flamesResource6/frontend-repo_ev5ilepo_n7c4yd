import React from 'react'
import Navbar from '../components/Navbar'
import CTAButton from '../components/CTAButton'
import Footer from '../components/Footer'

const services = [
  { name: 'Men’s Haircut', desc: 'Clean, sharp, and tailored to you.', price: '$35+' },
  { name: 'Fade Cut', desc: 'Precision fades with crisp detailing.', price: '$40+' },
  { name: 'Beard Trim', desc: 'Quick tidy-up and shape.', price: '$15+' },
  { name: 'Beard Sculpt & Line-Up', desc: 'Premium shaping with razor finish.', price: '$25+' },
  { name: 'Hot Towel Shave', desc: 'Classic wet shave with hot towel treatment.', price: '$35+' },
  { name: 'Kids Cut', desc: 'Patient, friendly cuts for little legends.', price: '$25+' },
  { name: 'Senior Cut', desc: 'Clean, comfortable cut for seniors.', price: '$25+' },
  { name: 'Grooming Packages', desc: 'Bundle and save on hair + beard.', price: '$55+' },
  { name: 'Razor / Straight Blade Finish', desc: 'Crisp, smooth finish on neck and edges.', price: '$10+' },
  { name: 'Custom Designs (Ice-T specialty)', desc: 'Freestyle designs and artistic fades.', price: '$50+' },
]

const Services = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-8">Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-[#1b1b1b] rounded-xl p-6 border border-[#D7A83F]/20">
              <h3 className="text-white font-semibold text-xl">{s.name}</h3>
              <p className="text-white/70 text-sm my-2">{s.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[#D7A83F] font-semibold">Starting {s.price}</span>
                <CTAButton href="#" className="!py-2 !px-3 !text-sm">Book Now</CTAButton>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Services
