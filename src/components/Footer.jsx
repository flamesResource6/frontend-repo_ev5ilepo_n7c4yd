import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D7A83F]/20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/favicon.svg" className="h-8 w-8" alt="Logo" />
            <span className="text-white font-semibold">Tuan’s Barbershop</span>
          </div>
          <p className="text-white/60">Tilsonburg’s home for sharp cuts and clean fades.</p>
        </div>
        <div className="text-white/80">
          <h4 className="text-white font-semibold mb-3">Visit</h4>
          <p>1 Library Lane, Suite 103</p>
          <p>Tillsonburg, Ontario N4G 4W3</p>
        </div>
        <div className="text-white/80">
          <h4 className="text-white font-semibold mb-3">Hours</h4>
          <p>Mon–Thu: 9AM–9PM</p>
          <p>Friday: 6AM–7PM</p>
          <p>Saturday: 6AM–12PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="text-white/80">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p>Phone: (226) 758-6496</p>
          <p>Email: info@tuansbarbershop.com</p>
        </div>
      </div>
      <div className="text-center text-white/50 text-xs py-6 border-t border-[#D7A83F]/10">© {new Date().getFullYear()} Tuan’s Barbershop. All rights reserved.</div>
    </footer>
  )
}

export default Footer
