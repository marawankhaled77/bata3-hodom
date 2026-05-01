import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { InstagramIcon } from './icons'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop', href: '#products' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
]

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(247,244,239,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(169,164,142,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(26,24,21,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#hero" whileHover={{ opacity: 0.8 }} className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BETAA HODOOM"
              className="w-10 h-10 rounded-full"
              style={{ boxShadow: '0 0 0 1.5px rgba(169,164,142,0.5)' }}
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[20px] tracking-[0.12em]" style={{ color: 'var(--c-text)' }}>
                BETAA
              </span>
              <span
                className="text-[9px] tracking-[0.5em] font-medium"
                style={{ color: 'var(--c-taupe)', fontFamily: "'Inter', sans-serif" }}
              >
                HODOOM
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <a
                  href={link.href}
                  className="text-[13px] font-medium tracking-wide transition-colors duration-300 relative group"
                  style={{ color: 'var(--c-text-2)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-taupe-d)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-text-2)')}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-current group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.instagram.com/betaahodoom"
              target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="hidden md:flex transition-colors duration-300"
              style={{ color: 'var(--c-text-3)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-taupe)')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--c-text-3)')}
            >
              <InstagramIcon size={18} />
            </motion.a>

            <motion.button
              onClick={onCartClick}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
              className="relative transition-colors duration-300"
              style={{ color: 'var(--c-text-2)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--c-taupe-d)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'var(--c-text-2)')}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-[18px] h-[18px] rounded-full text-[10px] font-bold flex items-center justify-center"
                  style={{ background: 'var(--c-taupe)', color: 'var(--c-white)' }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            <button
              className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: 'var(--c-text-2)' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(247,244,239,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <img src="/logo.png" alt="Logo" className="w-16 h-16 rounded-full mb-2" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href} href={link.href}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-4xl italic"
                style={{ color: 'var(--c-text)' }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
