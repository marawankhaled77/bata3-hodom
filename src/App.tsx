import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProductsSection } from './components/ProductsSection'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { type Product } from './data/products'

interface CartItem extends Product { quantity: number }

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const ex = prev.find(i => i.id === product.id)
      if (ex) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }, [])

  const handleRemove = useCallback((id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const totalCount = cartItems.reduce((s, i) => s + i.quantity, 0)

  return (
    <div className="min-h-screen" style={{ background: 'var(--c-bg)' }}>
      <Navbar cartCount={totalCount} onCartClick={() => setCartOpen(true)} />

      <main>
        <HeroSection />

        {/* ── MARQUEE BELT ── */}
        <div style={{
          background: 'var(--c-taupe)', overflow: 'hidden',
          padding: '8px 0',
          borderTop: '1px solid var(--c-border-d)',
          borderBottom: '1px solid var(--c-border-d)',
        }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', whiteSpace: 'nowrap' }}>
            {[...Array(12)].map((_, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: '0.62rem', fontWeight: 500,
                letterSpacing: '0.35em', textTransform: 'uppercase',
                color: 'rgba(253,252,249,0.88)',
              }}>
                <span style={{ margin: '0 14px', opacity: 0.55 }}>✦</span>BETAA HODOOM
                <span style={{ margin: '0 14px', opacity: 0.55 }}>✦</span>YOUR FASHION GUIDE
                <span style={{ margin: '0 14px', opacity: 0.55 }}>✦</span>ALEXANDRIA EGYPT
                <span style={{ margin: '0 14px', opacity: 0.55 }}>✦</span>PREMIUM STREETWEAR
              </span>
            ))}
          </motion.div>
        </div>

        <ProductsSection onAddToCart={handleAddToCart} />
        <AboutSection />
      </main>

      <Footer />

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)}
        items={cartItems} onRemove={handleRemove} />
    </div>
  )
}

export default App
