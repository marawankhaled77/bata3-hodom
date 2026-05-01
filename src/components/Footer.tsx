import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, MapPin, Navigation } from 'lucide-react'
import { InstagramIcon } from './icons'

const branches = [
  {
    name: 'Al Bitash — Agami Branch',
    address: '16 Al Bitash, Al Beitash Gharb, Dekhela, Alexandria',
    mapUrl: 'https://maps.app.goo.gl/8LZBiUrMcAQe7wLZ6',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705!2d29.7900144!3d31.1181868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5eb36b0ed178f%3A0xce7f0f537108f63e!2sBetaa%20Hodoom!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg',
  },
  {
    name: 'Stanley Branch',
    address: 'Stanley, Alexandria',
    mapUrl: 'https://maps.app.goo.gl/iRvqqgtnbTZgmtFJ7',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705!2d29.9529623!3d31.232249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c51ee3656131%3A0x26453b95c85fbac9!2sBETAA%20HODOOM!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg',
  },
]

export const Footer: React.FC = () => (
  <footer id="contact" style={{ background:'var(--c-bg-3)', borderTop:'1px solid var(--c-border)' }}>

    {/* ── OUR STORES / MAPS ── */}
    <div className="page-container py-12 sm:py-16">
      <div className="text-center mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-2" style={{ color:'var(--c-taupe)' }}>
          ── Visit Us ──
        </p>
        <h3 className="font-display text-2xl sm:text-3xl tracking-[0.08em]" style={{ color:'var(--c-text)' }}>
          OUR STORES
        </h3>
        <p className="text-xs sm:text-sm mt-1" style={{ color:'var(--c-text-3)', fontStyle:'italic' }}>
          Two locations in Alexandria, Egypt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branches.map((b, i) => (
          <motion.div key={i}
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.15 }}
            className="rounded-lg overflow-hidden"
            style={{ border:'1px solid var(--c-border)', background:'var(--c-bg)' }}>

            {/* Map iframe */}
            <div style={{ position:'relative', width:'100%', paddingBottom:'56.25%', background:'var(--c-bg-2)' }}>
              <iframe
                src={b.embedSrc}
                width="100%" height="100%"
                style={{ border:0, position:'absolute', top:0, left:0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={b.name} />
            </div>

            {/* Info bar */}
            <div className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-start gap-2.5 min-w-0">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color:'var(--c-taupe)' }} />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold truncate" style={{ color:'var(--c-text)' }}>{b.name}</p>
                  <p className="text-[11px] leading-relaxed" style={{ color:'var(--c-text-3)' }}>{b.address}</p>
                </div>
              </div>
              <motion.a href={b.mapUrl} target="_blank" rel="noreferrer"
                whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[0.05em] uppercase transition-colors"
                style={{ background:'var(--c-taupe)', color:'#fff' }}>
                <Navigation size={11} /> Directions
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ── FOOTER GRID ── */}
    <div className="page-container py-10 sm:py-12" style={{ borderTop:'1px solid var(--c-border)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

        {/* Brand */}
        <div className="sm:col-span-2 space-y-3">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="BETAA HODOOM" className="w-10 h-10 rounded-full"
              style={{ boxShadow:'0 0 0 1px var(--c-border-d)' }} />
            <div>
              <div className="font-display text-lg tracking-[0.12em]" style={{ color:'var(--c-text)' }}>BETAA</div>
              <div className="text-[8px] tracking-[0.5em] font-medium" style={{ color:'var(--c-taupe)' }}>HODOOM</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm leading-loose" style={{ color:'var(--c-text-3)', maxWidth:280 }}>
            Your fashion guide — premium streetwear boutique in Alexandria, Egypt.
          </p>
          <motion.a href="https://www.instagram.com/betaahodoom" target="_blank" rel="noreferrer"
            whileHover={{ scale:1.05 }}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all"
            style={{ borderColor:'var(--c-border)', color:'var(--c-taupe)' }}>
            <InstagramIcon size={14} />
          </motion.a>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color:'var(--c-taupe)' }}>Navigate</h4>
          <ul className="space-y-2">
            {['Home','Shop All','About','Contact'].map(l=>(
              <li key={l}><a href={`#${l.toLowerCase().replace(' ','-')}`}
                className="text-xs sm:text-sm transition-colors" style={{ color:'var(--c-text-3)' }}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--c-taupe-d)')}
                onMouseLeave={e=>(e.currentTarget.style.color='var(--c-text-3)')}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color:'var(--c-taupe)' }}>Find Us</h4>
          <div className="space-y-2.5">
            <div className="flex gap-2 items-start">
              <MapPin size={13} style={{ color:'var(--c-taupe)', marginTop:2, flexShrink:0 }} />
              <p className="text-[11px] leading-relaxed" style={{ color:'var(--c-text-3)' }}>16 Al Bitash, Agami<br/>Alexandria</p>
            </div>
            <div className="flex gap-2 items-start">
              <MapPin size={13} style={{ color:'var(--c-taupe)', marginTop:2, flexShrink:0 }} />
              <p className="text-[11px] leading-relaxed" style={{ color:'var(--c-text-3)' }}>Stanley Branch<br/>Alexandria</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={12} style={{ color:'var(--c-taupe)', flexShrink:0 }} />
              <a href="tel:034363919" className="text-[11px]" style={{ color:'var(--c-text-3)' }}>03-4363919</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── COPYRIGHT ── */}
    <div className="py-3.5 px-4" style={{ borderTop:'1px solid var(--c-border)' }}>
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-1.5">
        <p className="text-[10px] sm:text-[11px]" style={{ color:'var(--c-text-3)' }}>© 2025 BETAA HODOOM. All rights reserved.</p>
        <p className="text-[10px] sm:text-[11px] flex items-center gap-1" style={{ color:'var(--c-text-3)' }}>
          Made with <Heart size={9} fill="var(--c-taupe)" stroke="none" /> in Alexandria
        </p>
      </div>
    </div>
  </footer>
)
