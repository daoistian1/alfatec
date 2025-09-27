'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#differentials', label: 'Differentials' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ALFATEC
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleMenuClick(item.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
