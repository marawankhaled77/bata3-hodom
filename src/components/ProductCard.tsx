import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Eye, Heart, Star } from 'lucide-react'
import { type Product } from '../data/products'

const BADGE_BG: Record<string, string> = {
  NEW:     '#5E8750',
  HOT:     '#A9A48E',
  SALE:    '#B8984A',
  LIMITED: '#7A6A5A',
}

interface Props {
  product: Product
  onAddToCart: (p: Product) => void
  onQuickView: (p: Product) => void
  index: number
}

export const ProductCard: React.FC<Props> = ({ product, onAddToCart, onQuickView, index }) => {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null

  const handleAdd = useCallback(() => {
    if (!selectedSize) return
    setAdding(true)
    setTimeout(() => { onAddToCart(product); setAdding(false) }, 450)
  }, [selectedSize, product, onAddToCart])

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="card flex flex-col group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── IMAGE (full cover, no whitespace) ── */}
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 sm:top-3 sm:left-3">
          {product.badge && (
            <span className="px-2 py-[2px] text-[9px] sm:text-[10px] font-bold tracking-[0.12em] uppercase text-white rounded-sm"
              style={{ background: BADGE_BG[product.badge] }}>
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2 py-[2px] text-[9px] sm:text-[10px] font-bold rounded-sm"
              style={{ background:'rgba(184,152,74,0.18)', color:'var(--c-gold)' }}>
              -{discount}%
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <motion.button onClick={() => setLiked(!liked)} whileTap={{ scale: 0.85 }}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/85 backdrop-blur-sm rounded-full"
            style={{ boxShadow:'var(--shadow-sm)' }}>
            <Heart size={13} fill={liked ? '#A9A48E' : 'none'} stroke={liked ? '#A9A48E' : '#8A8580'} />
          </motion.button>
          <motion.button onClick={() => onQuickView(product)} whileTap={{ scale: 0.85 }}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/85 backdrop-blur-sm rounded-full"
            style={{ boxShadow:'var(--shadow-sm)', color:'#8A8580' }}>
            <Eye size={13} />
          </motion.button>
        </div>

        {/* Shimmer */}
        <AnimatePresence>
          {hovered && (
            <motion.div initial={{ x: '-100%' }} animate={{ x: '250%' }}
              transition={{ duration: 0.65 }}
              className="absolute inset-0 pointer-events-none"
              style={{ background:'linear-gradient(105deg, transparent 42%, rgba(255,255,255,0.35) 50%, transparent 58%)' }} />
          )}
        </AnimatePresence>
      </div>

      {/* ── CONTENT ── */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">

        {/* Brand + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color:'var(--c-taupe)' }}>
            {product.brand}
          </span>
          <div className="flex items-center gap-0.5">
            <Star size={9} fill="var(--c-gold)" stroke="none" />
            <span className="text-[10px]" style={{ color:'var(--c-text-3)' }}>4.9</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-[13px] sm:text-[14px] leading-snug line-clamp-1" style={{ color:'var(--c-text)' }}>
          {product.name}
        </h3>

        {/* Description — hidden on very small screens */}
        <p className="hidden sm:block text-[11px] leading-relaxed line-clamp-2" style={{ color:'var(--c-text-3)' }}>
          {product.description}
        </p>

        {/* Sizes */}
        <div>
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 5).map(size => (
              <button key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className="px-1.5 py-[2px] text-[9px] sm:text-[10px] border rounded-sm transition-all duration-150"
                style={{
                  borderColor: size === selectedSize ? 'var(--c-taupe)' : 'var(--c-border)',
                  background: size === selectedSize ? 'var(--c-taupe)' : 'transparent',
                  color: size === selectedSize ? '#fff' : 'var(--c-text-3)',
                }}>
                {size}
              </button>
            ))}
            {product.sizes.length > 5 && (
              <span className="text-[9px] self-center" style={{ color:'var(--c-text-3)' }}>+{product.sizes.length - 5}</span>
            )}
          </div>
        </div>

        <div className="flex-1" />

        {/* Price + Add */}
        <div className="flex items-center justify-between pt-2" style={{ borderTop:'1px solid var(--c-border)' }}>
          <div>
            <span className="font-bold text-sm sm:text-base" style={{ color:'var(--c-text)' }}>
              {product.price.toLocaleString()}
            </span>
            <span className="text-[10px] ml-0.5" style={{ color:'var(--c-text-3)' }}>EGP</span>
            {product.originalPrice && (
              <span className="text-[10px] line-through ml-1.5" style={{ color:'var(--c-text-3)' }}>
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <motion.button onClick={handleAdd} whileTap={{ scale: 0.92 }}
            disabled={!selectedSize}
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase rounded-sm transition-all disabled:opacity-25 disabled:cursor-not-allowed"
            style={{
              background: selectedSize ? 'var(--c-taupe)' : 'transparent',
              color: selectedSize ? '#fff' : 'var(--c-text-3)',
              border: `1px solid ${selectedSize ? 'var(--c-taupe)' : 'var(--c-border)'}`,
            }}>
            {adding
              ? <motion.div animate={{ rotate:360 }} transition={{ duration:0.4, repeat:Infinity, ease:'linear' }}
                  className="w-3 h-3 border border-current border-t-transparent rounded-full" />
              : <><ShoppingBag size={11} /> Add</>
            }
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
