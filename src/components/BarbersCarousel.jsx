import React from 'react'
import CTAButton from './CTAButton'

const barbers = [
  {
    name: 'Tuan',
    role: 'Owner & Master Barber',
    specialties: 'Precision fades, straight-blade detailing, premium beard sculpting',
    style: 'Clean, sharp, modern technical cuts',
    bio: 'Tuan leads the shop with a calm confidence and a relentless eye for detail. Every cut is executed with precision and pride.'
  },
  {
    name: 'Wilson',
    role: 'Senior Barber',
    specialties: 'Classic cuts, beard trims, taper fades, scissor work',
    style: 'Patient, detail-oriented',
    bio: 'Steady, experienced, and consistent. Wilson delivers classic craftsmanship with modern polish.'
  },
  {
    name: 'Charlene',
    role: 'Barber',
    specialties: 'Kids cuts, scissor work, textured hairstyles',
    style: 'Friendly, creative, light touch',
    bio: 'Charlene brings a warm energy and a clean finish—great with kids and sharp with scissor work.'
  },
  {
    name: 'Trimar (Ice-T Cuts)',
    role: 'Barber',
    specialties: 'Urban fades, freestyle designs, beard shaping',
    style: 'High-energy, artistic, trend-forward',
    bio: 'Ice-T pushes the culture with bold fades and custom designs built to stand out.'
  }
]

const BarbersCarousel = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Barbers</h2>
          <CTAButton href="/barbers" variant="outline">View Team</CTAButton>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((b) => (
            <div key={b.name} className="bg-[#1b1b1b] rounded-xl p-6 border border-[#D7A83F]/10">
              <div className="h-40 mb-4 rounded-lg bg-gradient-to-br from-[#2A2A2A] to-black flex items-center justify-center text-[#C6C6C6]">
                Photo
              </div>
              <h3 className="text-white font-semibold text-xl">{b.name}</h3>
              <p className="text-[#D7A83F] text-sm mb-2">{b.role}</p>
              <p className="text-white/80 text-sm mb-2"><span className="font-semibold">Specialties:</span> {b.specialties}</p>
              <p className="text-white/70 text-sm mb-2"><span className="font-semibold">Style:</span> {b.style}</p>
              <p className="text-white/70 text-sm mb-4">{b.bio}</p>
              <CTAButton href="#" className="w-full">Book With {b.name.split(' ')[0]}</CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BarbersCarousel
