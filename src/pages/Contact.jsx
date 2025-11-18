import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-6">Contact</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1b1b1b] border border-[#D7A83F]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Find Us</h2>
              <p className="text-white/80">1 Library Lane, Suite 103, Tillsonburg, Ontario N4G 4W3</p>
              <p className="text-white/80 mt-2">Phone: (226) 758-6496</p>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                <iframe title="Map" src="https://www.google.com/maps?q=1%20Library%20Lane%20Tillsonburg&output=embed" className="w-full h-full" loading="lazy"></iframe>
              </div>
            </div>

            <div className="bg-[#1b1b1b] border border-[#D7A83F]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white" placeholder="Name" />
                <input className="bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white" placeholder="Email" />
                <input className="md:col-span-2 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white" placeholder="Phone" />
                <textarea className="md:col-span-2 bg-black/40 border border-white/10 rounded-md px-4 py-3 text-white" placeholder="Message" rows="4"></textarea>
                <button type="button" className="md:col-span-2 bg-[#D7A83F] text-black font-semibold px-6 py-3 rounded-md">Send</button>
              </form>
              <p className="text-xs text-white/50 mt-2">Parking: Street and lot parking available nearby.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1b1b1b] border border-[#D7A83F]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Hours</h2>
              <ul className="text-white/80 space-y-1">
                <li>Mon–Thu: 9AM–9PM</li>
                <li>Friday: 6AM–7PM</li>
                <li>Saturday: 6AM–12PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
