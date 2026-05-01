import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, ZoomIn, ZoomOut, X, ShoppingBag, Star } from 'lucide-react'
import { type Product } from '../data/products'

interface Props { product: Product; onClose: () => void; onAddToCart: (p: Product) => void }

export const ProductViewer: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  const [rotation, setRotation] = useState({ x:0, y:0 })
  const [zoom, setZoom] = useState(1)
  const [dragging, setDragging] = useState(false)
  const [last, setLast] = useState({ x:0, y:0 })
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const onDown = (e: React.MouseEvent|React.TouchEvent) => {
    setDragging(true)
    const p = 'touches' in e ? e.touches[0] : e
    setLast({ x:p.clientX, y:p.clientY })
  }
  const onMove = (e: React.MouseEvent|React.TouchEvent) => {
    if (!dragging) return
    const p = 'touches' in e ? e.touches[0] : e
    setRotation(r => ({ x:r.x+(p.clientY-last.y)*0.3, y:r.y+(p.clientX-last.x)*0.3 }))
    setLast({ x:p.clientX, y:p.clientY })
  }
  const onUp = () => setDragging(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice-product.price)/product.originalPrice)*100) : null

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        style={{ background:'rgba(26,24,21,0.5)', backdropFilter:'blur(16px)' }}
        onClick={e => e.target === e.currentTarget && onClose()}>

        <motion.div
          initial={{ scale:0.92, opacity:0, y:24 }}
          animate={{ scale:1, opacity:1, y:0 }}
          exit={{ scale:0.92, opacity:0 }}
          transition={{ type:'spring', stiffness:260, damping:28 }}
          className="relative w-full sm:max-w-4xl overflow-hidden flex flex-col sm:grid sm:grid-cols-2"
          style={{ background:'var(--c-white)', boxShadow:'var(--shadow-lg)',
            borderRadius:'var(--radius) var(--radius) 0 0',
            maxHeight:'95vh' }}>

          {/* Close */}
          <button onClick={onClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full"
            style={{ background:'var(--c-bg-2)', border:'1px solid var(--c-border)', color:'var(--c-text-3)' }}>
            <X size={15} />
          </button>

          {/* Image / 3D */}
          <div className="relative flex items-center justify-center overflow-hidden select-none"
            style={{ minHeight:280, background:'var(--c-bg)', cursor:dragging?'grabbing':'grab',
              borderBottom:'1px solid var(--c-border)' }}
            onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
            onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}>

            <motion.div style={{ rotateX:rotation.x, rotateY:rotation.y, scale:zoom, width:220, height:220 }}>
              <img src={product.image} alt={product.name}
                className="w-full h-full object-cover rounded-lg" draggable={false}
                style={{ filter:'drop-shadow(0 10px 36px rgba(26,24,21,0.12))' }} />
            </motion.div>

            <div className="absolute bottom-3 flex gap-2">
              {[
                { I:ZoomOut, fn:()=>setZoom(z=>Math.max(0.5,z-0.2)) },
                { I:RotateCcw, fn:()=>{setRotation({x:0,y:0});setZoom(1)} },
                { I:ZoomIn, fn:()=>setZoom(z=>Math.min(2.5,z+0.2)) },
              ].map(({I,fn},i)=>(
                <button key={i} onClick={fn}
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background:'var(--c-white)', border:'1px solid var(--c-border)', color:'var(--c-text-3)' }}>
                  <I size={13} />
                </button>
              ))}
            </div>
            <p className="absolute top-3 w-full text-center text-[10px] tracking-widest uppercase" style={{ color:'var(--c-text-3)' }}>
              Drag to Rotate
            </p>
          </div>

          {/* Info */}
          <div className="p-5 sm:p-8 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight:'50vh' }}>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color:'var(--c-taupe)' }}>{product.brand}</span>
              {product.badge && <span className="px-2 py-[1px] text-[9px] font-bold uppercase text-white rounded-sm" style={{ background:'var(--c-taupe)' }}>{product.badge}</span>}
            </div>
            <h2 className="font-semibold text-xl" style={{ color:'var(--c-text)' }}>{product.name}</h2>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_,i)=><Star key={i} size={11} fill="var(--c-gold)" stroke="none" />)}
              <span className="text-xs ml-1" style={{ color:'var(--c-text-3)' }}>(128)</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color:'var(--c-text-2)' }}>{product.description}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{product.price.toLocaleString()} EGP</span>
              {product.originalPrice && <span className="text-sm line-through" style={{ color:'var(--c-text-3)' }}>{product.originalPrice.toLocaleString()}</span>}
              {discount && <span className="text-xs px-1.5 py-0.5 rounded-sm" style={{ background:'rgba(184,152,74,0.12)', color:'var(--c-gold)' }}>-{discount}%</span>}
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color:'var(--c-text-3)' }}>Select Size</p>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map(s=>(
                  <button key={s} onClick={()=>setSelectedSize(s===selectedSize?null:s)}
                    className="px-3 py-1.5 text-xs border rounded-sm transition-all"
                    style={{
                      borderColor:s===selectedSize?'var(--c-taupe)':'var(--c-border)',
                      background:s===selectedSize?'var(--c-taupe)':'transparent',
                      color:s===selectedSize?'#fff':'var(--c-text-3)'
                    }}>{s}</button>
                ))}
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <button onClick={()=>{onAddToCart(product);onClose()}}
                className="btn-primary w-full"><ShoppingBag size={15} /> Add to Cart</button>
              <p className="text-center text-[11px]" style={{ color:'var(--c-text-3)' }}>🚚 Free shipping above 1,500 EGP</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
