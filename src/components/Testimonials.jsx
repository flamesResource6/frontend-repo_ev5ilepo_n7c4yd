import React from 'react'

const testimonials = [
  { name: 'Ryan', text: 'Best fade in town. Clean lines, great vibe, and on-time.', rating: 5 },
  { name: 'Jamal', text: 'Professional and precise. My beard has never looked better.', rating: 5 },
  { name: 'Ethan', text: 'Took my son for a kids cut—A+ experience.', rating: 5 },
]

const StarRow = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({length: count}).map((_,i) => (
      <span key={i} className="text-[#D7A83F]">★</span>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-[#1b1b1b] border border-[#D7A83F]/10 rounded-xl p-6">
              <StarRow count={t.rating} />
              <p className="text-white/80 mt-3 mb-4">“{t.text}”</p>
              <p className="text-white font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
