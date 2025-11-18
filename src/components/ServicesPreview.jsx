import React from 'react'
import { Scissors, Sparkles, Baby, DollarSign } from 'lucide-react'
import CTAButton from './CTAButton'

const items = [
  { icon: Scissors, title: "Men’s Haircut", desc: "Clean, sharp, and tailored to you.", price: "$35+" },
  { icon: Sparkles, title: "Fade Cut", desc: "Precision fades with crisp detailing.", price: "$40+" },
  { icon: DollarSign, title: "Beard Sculpt & Line-Up", desc: "Premium shaping and razor finish.", price: "$25+" },
  { icon: Baby, title: "Kids Cut", desc: "Patient, friendly cuts for little legends.", price: "$25+" },
]

const ServicesPreview = () => {
  return (
    <section className="bg-[#0F0F0F] py-16 border-t border-b border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Services</h2>
          <CTAButton href="/services" variant="outline">View All</CTAButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc, price}) => (
            <div key={title} className="bg-[#1b1b1b] rounded-xl p-6 border border-[#D7A83F]/10 hover:border-[#D7A83F]/40 transition-colors">
              <Icon className="h-8 w-8 text-[#D7A83F] mb-4" />
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-1 mb-4">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#D7A83F] font-semibold">Starting {price}</span>
                <CTAButton href="#" className="!py-2 !px-3 !text-sm">Book Now</CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
