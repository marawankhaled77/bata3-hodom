import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Trash2, ArrowRight, ChevronLeft } from 'lucide-react'
import { type Product } from '../data/products'

interface CartItem extends Product { quantity: number }
interface Props { isOpen: boolean; onClose: () => void; items: CartItem[]; onRemove: (id: number) => void }

export const CartDrawer: React.FC<Props> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-50"
            style={{ background:'rgba(26,24,21,0.35)', backdropFilter:'blur(4px)' }}
            onClick={onClose} />

          <motion.div initial={{ x:'100%' }} animate={{ x:0 }} exit={{ x:'100%' }}
            transition={{ type:'spring', stiffness:300, damping:32 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
            style={{ background:'var(--c-white)', borderLeft:'1px solid var(--c-border)', boxShadow:'var(--shadow-lg)' }}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-4" style={{ borderBottom:'1px solid var(--c-border)' }}>
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} style={{ color:'var(--c-taupe)' }} />
                <div>
                  <h2 className="text-sm font-semibold" style={{ color:'var(--c-text)' }}>Shopping Bag</h2>
                  <p className="text-[10px]" style={{ color:'var(--c-text-3)' }}>{items.length} item{items.length!==1?'s':''}</p>
                </div>
              </div>
              <button onClick={onClose} style={{ color:'var(--c-text-3)' }}><X size={18} /></button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full" style={{ border:'1px solid var(--c-border)' }}>
                    <ShoppingBag size={22} style={{ color:'var(--c-text-3)' }} />
                  </div>
                  <p className="text-sm" style={{ color:'var(--c-text-2)' }}>Your bag is empty</p>
                  <button onClick={onClose} className="btn-outline text-[11px] gap-1.5">
                    <ChevronLeft size={12} /> Browse Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {items.map(item => (
                    <motion.div key={item.id} layout
                      initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:12 }}
                      className="flex gap-3 p-3 rounded-lg"
                      style={{ background:'var(--c-bg)', border:'1px solid var(--c-border)' }}>
                      <div className="w-14 h-14 flex-shrink-0 rounded-md overflow-hidden" style={{ background:'var(--c-bg-2)' }}>
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] tracking-wide uppercase" style={{ color:'var(--c-taupe)' }}>{item.brand}</p>
                        <p className="text-sm font-medium truncate" style={{ color:'var(--c-text)' }}>{item.name}</p>
                        <p className="text-sm font-bold mt-0.5" style={{ color:'var(--c-taupe-d)' }}>
                          {(item.price*item.quantity).toLocaleString()} EGP
                        </p>
                      </div>
                      <button onClick={()=>onRemove(item.id)} style={{ color:'var(--c-text-3)' }}>
                        <Trash2 size={13} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 sm:p-5 space-y-3" style={{ borderTop:'1px solid var(--c-border)' }}>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-widest uppercase" style={{ color:'var(--c-text-3)' }}>Subtotal</span>
                  <span className="text-lg font-bold">{total.toLocaleString()} EGP</span>
                </div>
                <button className="btn-primary w-full">Checkout <ArrowRight size={14} /></button>
                <p className="text-center text-[10px]" style={{ color:'var(--c-text-3)' }}>🔒 Secure checkout</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
