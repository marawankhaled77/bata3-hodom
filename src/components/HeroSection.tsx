import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { InstagramIcon } from './icons'

const floats = [
  { src:'/products/sneaker_af1.png', x:5, y:12, size:200, depth:1.2, cls:'float-anim' },
  { src:'/products/samba.png',       x:72,y:8,  size:180, depth:0.8, cls:'float-anim-2' },
  { src:'/products/vans.png',        x:80,y:55, size:160, depth:1.4, cls:'float-anim-3' },
  { src:'/products/jacket.png',      x:1, y:58, size:150, depth:0.7, cls:'float-anim-2' },
  { src:'/products/jordan4.png',     x:55,y:70, size:155, depth:1.0, cls:'float-anim' },
  { src:'/products/nb574.png',       x:38,y:3,  size:135, depth:0.6, cls:'float-anim-3' },
]

export const HeroSection: React.FC = () => {
  const [mouse, setMouse] = useState({ x:0.5, y:0.5 })

  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background:'var(--c-bg)', perspective:'1000px' }}>

      {/* BG grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position:'absolute', inset:0,
          background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(169,164,142,0.1) 0%, transparent 70%)' }} />
        <div style={{ position:'absolute', inset:0,
          backgroundImage:`linear-gradient(var(--c-border) 1px, transparent 1px), linear-gradient(90deg, var(--c-border) 1px, transparent 1px)`,
          backgroundSize:'64px 64px', opacity:0.4 }} />
      </div>

      {/* Floating Products — hidden on mobile via CSS */}
      {floats.map((p, i) => (
        <motion.div key={i}
          className="absolute pointer-events-none float-item"
          style={{ left:`${p.x}%`, top:`${p.y}%`, width:p.size, height:p.size }}
          animate={{ x:(mouse.x-0.5)*p.depth*45, y:(mouse.y-0.5)*p.depth*45 }}
          transition={{ type:'spring', stiffness:35, damping:18 }}>
          <div className={p.cls} style={{ width:'100%', height:'100%' }}>
            <img src={p.src} alt="" style={{ width:'100%', height:'100%', objectFit:'contain',
              filter:'drop-shadow(0 6px 24px rgba(26,24,21,0.12))' }} />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">

        <motion.div initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.5, delay:0.15 }} className="flex justify-center mb-6 sm:mb-8">
          <img src="/logo.png" alt="BETAA HODOOM"
            style={{ width:72, height:72, borderRadius:'50%',
              boxShadow:'0 0 0 2.5px rgba(169,164,142,0.35), var(--shadow-lg)' }}
            className="sm:w-[88px] sm:h-[88px]" />
        </motion.div>

        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:0.3 }} className="flex justify-center mb-5 sm:mb-6">
          <span className="label text-[10px] sm:text-[11px]">Your Fashion Guide · Est. 2022</span>
        </motion.div>

        <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8, delay:0.4, ease:[0.22,1,0.36,1] }}>
          <h1 className="font-display leading-none hero-title" style={{ fontSize:'clamp(60px, 14vw, 150px)', color:'var(--c-text)', lineHeight:0.9 }}>BETAA</h1>
          <h1 className="font-display text-grad leading-none hero-title" style={{ fontSize:'clamp(60px, 14vw, 150px)', lineHeight:0.9 }}>HODOOM</h1>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }}
          className="mt-6 sm:mt-8 mb-8 sm:mb-10 space-y-1">
          <p className="font-serif italic text-lg sm:text-xl hero-sub" style={{ color:'var(--c-taupe-d)' }}>
            "Premium Streetwear, Egyptian Soul"
          </p>
          <p className="text-xs sm:text-sm tracking-widest" style={{ color:'var(--c-text-3)' }}>
            Alexandria, Egypt · 47.8K Followers
          </p>
        </motion.div>

        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.9 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <motion.a href="#products" whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
            className="btn-primary">
            Shop Now <ArrowRight size={14} />
          </motion.a>
          <motion.a href="https://www.instagram.com/betaahodoom" target="_blank" rel="noreferrer"
            whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
            className="btn-outline">
            <InstagramIcon size={14} /> Follow Us
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
          className="flex items-center justify-center mt-10 sm:mt-14 stat-row">
          {[
            { v:'47.8K', l:'Followers' },
            { v:'758', l:'Posts' },
            { v:'23', l:'Products' },
          ].map((s, i) => (
            <React.Fragment key={s.l}>
              {i > 0 && <div style={{ width:1, height:30, background:'var(--c-border-d)', margin:'0 16px' }} className="sm:mx-7" />}
              <div className="text-center">
                <div className="font-display text-lg sm:text-2xl" style={{ color:'var(--c-taupe-d)' }}>{s.v}</div>
                <div className="text-[9px] sm:text-[10px] tracking-widest" style={{ color:'var(--c-text-3)' }}>{s.l}</div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <motion.div animate={{ y:[0,5,0] }} transition={{ repeat:Infinity, duration:1.6 }}>
          <ArrowDown size={14} style={{ color:'var(--c-taupe)' }} />
        </motion.div>
        <span className="text-[8px] tracking-[0.4em] uppercase" style={{ color:'var(--c-text-3)' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
