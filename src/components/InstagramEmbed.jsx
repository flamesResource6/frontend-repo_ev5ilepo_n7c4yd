import React from 'react'

const InstagramEmbed = () => {
  return (
    <section className="bg-[#0F0F0F] py-16 border-t border-b border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">From the Feed</h2>
          <a href="https://instagram.com/tuan_thebarber" target="_blank" rel="noreferrer" className="text-[#D7A83F] hover:underline">@tuan_thebarber</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-square bg-[#1b1b1b] border border-[#D7A83F]/10 rounded-xl overflow-hidden">
              <iframe title={`Instagram Post ${i}`} className="w-full h-full" src="https://www.instagram.com/p/C6cU9DbrSna/embed" frameBorder="0"></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramEmbed
