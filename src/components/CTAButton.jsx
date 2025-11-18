import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTAButton = ({ href = '#', children, onClick, variant = 'gold', className = '' }) => {
  const base = 'inline-flex items-center justify-center px-5 py-3 rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const styles = {
    gold: 'bg-[#D7A83F] text-black hover:bg-[#e0b652] focus:ring-[#D7A83F] focus:ring-offset-black',
    outline: 'border border-[#D7A83F] text-white hover:bg-[#D7A83F]/10 focus:ring-[#D7A83F] focus:ring-offset-black'
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
        <span>{children}</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    )
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  )
}

export default CTAButton
