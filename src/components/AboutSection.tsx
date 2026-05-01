import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { InstagramIcon } from './icons'

export const AboutSection: React.FC = () => (
  <section id="about" className="py-16 sm:py-24" style={{ background:'var(--c-bg-2)' }}>
    <div className="page-container">
      <div className="divider mb-12 sm:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

        {/* Text */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}>
          <span className="label mb-5 block">About The Brand</span>
          <h2 className="font-display leading-none mb-5"
            style={{ fontSize:'clamp(36px, 6vw, 68px)', color:'var(--c-text)' }}>
            WHO WE <span className="text-grad">ARE</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-xl mb-4" style={{ color:'var(--c-taupe-d)' }}>
            "Your Fashion Guide — from Alexandria to Egypt."
          </p>
          <p className="text-sm leading-loose mb-3" style={{ color:'var(--c-text-2)' }}>
            BETAA HODOOM is a premium streetwear boutique based in Alexandria, Egypt.
            We source the best sneakers and apparel from the world's top brands.
          </p>
          <p className="text-sm leading-loose" style={{ color:'var(--c-text-3)' }}>
            Every piece is handpicked with care — whether it's a pair of Jordans,
            a Vans classic, or a premium hoodie for your everyday look.
          </p>

          <div className="divider my-6 sm:my-8" style={{ maxWidth:260 }} />

          <div className="space-y-3">
            {[
              { Icon:InstagramIcon, t:'@betaahodoom', s:'47.8K Followers', href:'https://www.instagram.com/betaahodoom' },
              { Icon:Phone, t:'03-4363919', s:'Call Us', href:'tel:034363919' },
              { Icon:MapPin, t:'34 Al Bitash Main St · Stanley', s:'Alexandria, Egypt', href:'#' },
              { Icon:MapPin, t:'23 Abdelhamid Elabadi St', s:'Stanley, Alexandria', href:'#' },
            ].map(({Icon,t,s,href})=>(
              <motion.a key={t} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                whileHover={{ x:4 }}
                className="flex items-center gap-3 group transition-all">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg"
                  style={{ border:'1px solid var(--c-border)', background:'var(--c-white)' }}>
                  <Icon size={15} style={{ color:'var(--c-taupe)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color:'var(--c-text)' }}>{t}</p>
                  <p className="text-[11px]" style={{ color:'var(--c-text-3)' }}>{s}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }}
          className="space-y-2 sm:space-y-3">
          {[
            { v:'47.8K+', l:'Instagram Followers', s:'Growing every day' },
            { v:'758',    l:'Instagram Posts',      s:'Curated content & drops' },
            { v:'23+',    l:'Products Available',   s:'Sneakers, hoodies, jackets & more' },
            { v:'4.9 ★',  l:'Customer Rating',      s:'Quality speaks for itself' },
            { v:'2022',   l:'Year Founded',         s:'Alexandria, Egypt' },
          ].map((stat,i)=>(
            <motion.div key={stat.l}
              initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.08+0.25 }}
              className="flex items-center gap-4 p-4 sm:p-5 rounded-lg transition-all"
              style={{ background:'var(--c-white)', border:'1px solid var(--c-border)', boxShadow:'var(--shadow-sm)' }}
              onMouseEnter={e=>(e.currentTarget.style.boxShadow='var(--shadow-md)')}
              onMouseLeave={e=>(e.currentTarget.style.boxShadow='var(--shadow-sm)')}>
              <div className="font-display text-2xl sm:text-3xl flex-shrink-0 w-16 sm:w-20 text-center" style={{ color:'var(--c-taupe-d)' }}>{stat.v}</div>
              <div className="w-px self-stretch" style={{ background:'var(--c-border)' }} />
              <div>
                <p className="text-xs sm:text-sm font-semibold" style={{ color:'var(--c-text)' }}>{stat.l}</p>
                <p className="text-[10px] sm:text-[11px]" style={{ color:'var(--c-text-3)' }}>{stat.s}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Meet the Founder ── */}
      <div className="divider mt-16 sm:mt-24 mb-12 sm:mb-16" />

      <motion.div
        initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
      >
        {/* Founder Photo */}
        <motion.div
          initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }} transition={{ duration:0.9, ease:'easeOut' }}
          className="relative"
        >
          {/* Decorative frame */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              transform:'translate(12px, 12px)',
              background:'var(--c-taupe)',
              opacity:0.18,
              borderRadius:'1rem',
            }}
          />
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              boxShadow:'0 32px 80px rgba(0,0,0,0.18)',
              border:'1px solid var(--c-border)',
              aspectRatio:'4/5',
            }}
          >
            <img
              src="/founder.png"
              alt="Muhammad Attef — Founder & CEO of BETAA HODOOM"
              className="w-full h-full object-cover object-top"
              style={{ filter:'brightness(1.03) contrast(1.02)' }}
            />
            {/* Gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height:'38%',
                background:'linear-gradient(to top, rgba(20,18,16,0.72) 0%, transparent 100%)',
              }}
            />
            {/* Name badge on photo */}
            <div
              className="absolute bottom-5 left-5 right-5"
            >
              <p className="font-display text-white text-xl sm:text-2xl leading-tight">Muhammad Attef</p>
              <p className="text-xs sm:text-sm" style={{ color:'rgba(255,255,255,0.65)' }}>
                Founder &amp; CEO · <span style={{ color:'var(--c-taupe-l, #c9a96e)' }}>@el.nivo</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founder text */}
        <motion.div
          initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, delay:0.2 }}
        >
          <span className="label mb-5 block">The Vision Behind The Brand</span>
          <h2
            className="font-display leading-none mb-6"
            style={{ fontSize:'clamp(30px, 5vw, 56px)', color:'var(--c-text)' }}
          >
            MEET THE <span className="text-grad">FOUNDER</span>
          </h2>

          <p className="font-serif italic text-base sm:text-lg mb-4" style={{ color:'var(--c-taupe-d)' }}>
            "Fashion isn't just what you wear — it's who you are."
          </p>

          <p className="text-sm leading-loose mb-3" style={{ color:'var(--c-text-2)' }}>
            Muhammad Attef — known online as <strong style={{ color:'var(--c-text)' }}>@el.nivo</strong> — is a fashion
            stylist, entrepreneur, and the creative force behind BETAA HODOOM. Born and raised in
            Alexandria, he built the brand from a passion for streetwear and a deep belief that
            everyone deserves access to premium fashion.
          </p>
          <p className="text-sm leading-loose mb-6" style={{ color:'var(--c-text-3)' }}>
            With over 16K followers on his personal Instagram, Muhammad's eye for style has shaped
            BETAA HODOOM into Alexandria's most trusted fashion boutique — curating only the
            finest pieces from Nike, Adidas, Vans, and beyond.
          </p>

          {/* Founder socials */}
          <motion.a
            href="https://www.instagram.com/el.nivo/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x:4 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg transition-all"
            style={{
              background:'var(--c-white)',
              border:'1px solid var(--c-border)',
              boxShadow:'var(--shadow-sm)',
              color:'var(--c-text)',
              textDecoration:'none',
            }}
            onMouseEnter={e=>(e.currentTarget.style.boxShadow='var(--shadow-md)')}
            onMouseLeave={e=>(e.currentTarget.style.boxShadow='var(--shadow-sm)')}
          >
            <InstagramIcon size={16} style={{ color:'var(--c-taupe)' }} />
            <span className="text-sm font-medium">Follow @el.nivo on Instagram</span>
          </motion.a>
        </motion.div>
      </motion.div>

    </div>
  </section>
)
