export type Category = 'sneakers' | 'hoodies' | 'jackets' | 'pants' | 'shirts'

export interface Product {
  id: number
  name: string
  brand: string
  category: Category
  price: number
  originalPrice?: number
  image: string
  badge?: 'NEW' | 'HOT' | 'SALE' | 'LIMITED'
  description: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  // ── SNEAKERS (11) ─────────────────────────────────
  { id:1, name:'Air Force 1 Shadow', brand:'Nike', category:'sneakers', price:1299, originalPrice:1599, image:'/products/sneaker_af1.png', badge:'HOT', description:'Iconic silhouette in smoke grey suede. Shadow detail adds depth.', sizes:['39','40','41','42','43','44','45'], colors:['Smoke Grey'] },
  { id:2, name:'Air Jordan 4 Retro', brand:'Nike', category:'sneakers', price:2499, image:'/products/jordan4.png', badge:'LIMITED', description:'Legendary Jordan 4 in Military Black. Visible Air cushioning.', sizes:['40','41','42','43','44'], colors:['Military Black'] },
  { id:3, name:'Old Skool Pro', brand:'Vans', category:'sneakers', price:899, originalPrice:1099, image:'/products/vans.png', badge:'SALE', description:'Classic skate DNA meets modern streetwear.', sizes:['38','39','40','41','42','43','44'], colors:['Black / White'] },
  { id:4, name:'Authentic Low', brand:'Vans', category:'sneakers', price:699, image:'/products/vans_tan.png', badge:'NEW', description:'Original canvas sneaker in warm tan. Timeless staple.', sizes:['38','39','40','41','42','43'], colors:['Tan / Natural'] },
  { id:5, name:'Samba OG', brand:'Adidas', category:'sneakers', price:1199, image:'/products/samba.png', badge:'HOT', description:'Grey suede upper with the iconic T-toe rubber sole.', sizes:['39','40','41','42','43','44'], colors:['Grey Suede'] },
  { id:6, name:'Superstar Suede', brand:'Adidas', category:'sneakers', price:999, originalPrice:1199, image:'/products/adidas.png', badge:'SALE', description:'Brown suede with legendary shell toe and bold 3-Stripes.', sizes:['39','40','41','42','43','44'], colors:['Brown Suede'] },
  { id:7, name:'New Balance 574', brand:'New Balance', category:'sneakers', price:1099, image:'/products/nb574.png', badge:'NEW', description:'Warm beige tones. Chunky ENCAP midsole comfort.', sizes:['40','41','42','43','44','45'], colors:['Beige / Cream'] },
  { id:8, name:'Chuck Taylor Hi', brand:'Converse', category:'sneakers', price:799, image:'/products/converse.png', description:'Most iconic high-top ever. Parchment canvas.', sizes:['38','39','40','41','42','43','44'], colors:['Parchment'] },
  { id:9, name:'Classic Leather', brand:'Reebok', category:'sneakers', price:849, image:'/products/reebok.png', description:'Clean white leather with light grey accents.', sizes:['39','40','41','42','43','44'], colors:['White / Grey'] },
  { id:10, name:'Suede Classic', brand:'Puma', category:'sneakers', price:799, image:'/products/puma.png', badge:'NEW', description:'Black suede with gold Puma formstrip. Street icon.', sizes:['39','40','41','42','43','44'], colors:['Black / Gold'] },

  // ── HOODIES (3) ───────────────────────────────────
  { id:11, name:'Gothic Oversized Hoodie', brand:'BETAA HODOOM', category:'hoodies', price:899, image:'/products/hoodie.png', badge:'HOT', description:'400GSM heavyweight cotton. Bold gothic print. Dropped shoulders.', sizes:['S','M','L','XL','XXL'], colors:['Off-White'] },
  { id:12, name:'Zip-Up Hoodie', brand:'BETAA HODOOM', category:'hoodies', price:799, image:'/products/hoodie_zip.png', badge:'NEW', description:'Full-zip in charcoal. Kangaroo pocket, fleece lining.', sizes:['S','M','L','XL','XXL'], colors:['Charcoal'] },
  { id:13, name:'Crewneck Sweatshirt', brand:'BETAA HODOOM', category:'hoodies', price:599, image:'/products/crewneck.png', description:'Classic crew in heather grey. 350GSM French terry.', sizes:['S','M','L','XL','XXL'], colors:['Heather Grey'] },

  // ── JACKETS (3) ───────────────────────────────────
  { id:14, name:'Harrington Jacket', brand:'BETAA HODOOM', category:'jackets', price:1499, image:'/products/jacket.png', badge:'HOT', description:'Timeless British classic in khaki. Checked lining.', sizes:['S','M','L','XL'], colors:['Khaki'] },
  { id:15, name:'Olive Bomber', brand:'BETAA HODOOM', category:'jackets', price:1699, image:'/products/bomber.png', badge:'NEW', description:'Military-inspired bomber. Ribbed collar, cuffs and hem.', sizes:['S','M','L','XL'], colors:['Olive Green'] },
  { id:16, name:'Denim Trucker Jacket', brand:'BETAA HODOOM', category:'jackets', price:1299, image:'/products/denim_jacket.png', description:'Classic trucker in medium wash blue. Button front.', sizes:['S','M','L','XL'], colors:['Medium Wash'] },

  // ── PANTS (3) ─────────────────────────────────────
  { id:17, name:'Slim Cargo Chinos', brand:'BETAA HODOOM', category:'pants', price:699, image:'/products/chinos.png', description:'Charcoal grey. 6 pockets, tapered leg, stretch twill.', sizes:['28','30','32','34','36'], colors:['Charcoal'] },
  { id:18, name:'Stone Cargo Trousers', brand:'BETAA HODOOM', category:'pants', price:649, image:'/products/cargo.png', badge:'NEW', description:'Relaxed-fit in warm stone. Utility pockets, cotton ripstop.', sizes:['28','30','32','34','36'], colors:['Stone'] },
  { id:19, name:'Black Joggers', brand:'BETAA HODOOM', category:'pants', price:549, image:'/products/joggers.png', description:'Slim-fit joggers. Elastic cuffs, zippered pockets.', sizes:['S','M','L','XL','XXL'], colors:['Black'] },

  // ── SHIRTS & TEES (4) ────────────────────────────
  { id:20, name:'Linen Overshirt', brand:'BETAA HODOOM', category:'shirts', price:749, image:'/products/overshirt.png', badge:'NEW', description:'Relaxed linen in warm sand. Wear open or buttoned.', sizes:['S','M','L','XL'], colors:['Warm Sand'] },
  { id:21, name:'Cream Polo', brand:'BETAA HODOOM', category:'shirts', price:499, image:'/products/polo.png', description:'Premium piqué polo in cream. Two-button placket.', sizes:['S','M','L','XL','XXL'], colors:['Cream'] },
  { id:22, name:'Oversized Stone Tee', brand:'BETAA HODOOM', category:'shirts', price:349, image:'/products/tshirt.png', description:'240GSM oversized tee. Boxy fit, dropped shoulders.', sizes:['S','M','L','XL','XXL'], colors:['Stone Grey'] },
  { id:23, name:'Navy Henley', brand:'BETAA HODOOM', category:'shirts', price:399, image:'/products/henley.png', badge:'NEW', description:'Premium henley in navy blue. 3-button placket, soft cotton.', sizes:['S','M','L','XL','XXL'], colors:['Navy Blue'] },
]

export const categories: { id: string; label: string; icon: string }[] = [
  { id: 'all',      label: 'All Items',     icon: '🛒' },
  { id: 'sneakers', label: 'Sneakers',      icon: '👟' },
  { id: 'hoodies',  label: 'Hoodies',       icon: '🧥' },
  { id: 'jackets',  label: 'Jackets',       icon: '🧥' },
  { id: 'pants',    label: 'Pants',         icon: '👖' },
  { id: 'shirts',   label: 'Shirts & Tees', icon: '👕' },
]
