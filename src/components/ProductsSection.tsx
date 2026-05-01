import React, { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories } from '../data/products'
import { ProductCard } from './ProductCard'
import { ProductViewer } from './ProductViewer'
import { type Product } from '../data/products'
import { ChevronRight } from 'lucide-react'

// Category banner images (reuse product images)
const CAT_IMAGES: Record<string, string> = {
  sneakers: '/products/samba.png',
  hoodies: '/products/hoodie.png',
  jackets: '/products/bomber.png',
  pants: '/products/cargo.png',
  shirts: '/products/overshirt.png',
}

interface Props { onAddToCart: (p: Product) => void }

export const ProductsSection: React.FC<Props> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewer, setViewer] = useState<Product | null>(null)

  const filtered = useMemo(() =>
    activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  const handleQuickView = useCallback((p: Product) => setViewer(p), [])

  return (
    <section id="products" className="py-16 sm:py-24" style={{ background: 'var(--c-bg)' }}>
      <div className="page-container">

        {/* ── CATEGORY BANNERS ── */}
        <div id="collections" className="mb-16 sm:mb-20">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
            className="text-center mb-8 sm:mb-10">
            <span className="label">Shop by Category</span>
          </motion.div>

          <div className="cat-grid">
            {categories.filter(c => c.id !== 'all').map((cat, i) => {
              const count = products.filter(p => p.category === cat.id).length
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity:0, y:20 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => { setActiveCategory(cat.id); document.getElementById('shop-grid')?.scrollIntoView({ behavior:'smooth', block:'start' }) }}
                  className="cat-card"
                  style={{ aspectRatio: '4/3' }}
                >
                  <img src={CAT_IMAGES[cat.id] || '/logo.png'} alt={cat.label} />
                  <div className="cat-card-overlay">
                    <span className="text-white font-display text-xl sm:text-2xl tracking-wider">{cat.label}</span>
                    <span className="text-white/70 text-[11px] sm:text-xs mt-0.5">{count} items</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* ── SECTION HEADER ── */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }} className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <span className="label">The Collection</span>
          </div>
          <h2 id="shop-grid" className="font-display leading-none mb-3"
            style={{ fontSize:'clamp(36px, 8vw, 80px)', color:'var(--c-text)', scrollMarginTop:'90px' }}>
            SHOP ALL
          </h2>
          <p className="font-serif italic text-base sm:text-lg" style={{ color:'var(--c-text-2)' }}>
            {products.length} curated pieces for your wardrobe
          </p>
        </motion.div>

        {/* ── FILTER BAR ── */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 flex-wrap px-2">
          {categories.map(cat => {
            const count = cat.id === 'all' ? products.length : products.filter(p => p.category === cat.id).length
            return (
              <motion.button key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileTap={{ scale:0.95 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] tracking-[0.1em] uppercase font-medium rounded-full transition-all duration-200 border"
                style={{
                  background: activeCategory === cat.id ? 'var(--c-taupe)' : 'transparent',
                  color: activeCategory === cat.id ? '#fff' : 'var(--c-text-3)',
                  borderColor: activeCategory === cat.id ? 'var(--c-taupe)' : 'var(--c-border)',
                }}>
                {cat.label}
                <span className="ml-1 opacity-60">({count})</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── PRODUCT GRID (2 col mobile → 4 col desktop) ── */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
            transition={{ duration:0.3 }}
            className="products-grid">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i}
                onAddToCart={onAddToCart} onQuickView={handleQuickView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-5 mt-12 sm:mt-16">
          <div className="divider" style={{ maxWidth:200 }} />
          <a href="https://www.instagram.com/betaahodoom" target="_blank" rel="noreferrer"
            className="btn-outline text-[11px] sm:text-[12px]">
            See More on Instagram <ChevronRight size={14} />
          </a>
        </div>
      </div>

      {viewer && <ProductViewer product={viewer} onClose={() => setViewer(null)} onAddToCart={onAddToCart} />}
    </section>
  )
}
