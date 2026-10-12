export const categories = [
  {
    name: 'OTC Medicines',
    subtitle: 'Everyday essentials',
    icon: 'bi-capsule',
    color: 'blue',
    count: '420+',
  },
  {
    name: 'Pain Relief',
    subtitle: 'Comfort & care',
    icon: 'bi-bandaid',
    color: 'mint',
    count: '180+',
  },
  {
    name: 'Vitamins',
    subtitle: 'Daily wellness',
    icon: 'bi-heart-pulse',
    color: 'peach',
    count: '310+',
  },
  {
    name: 'First Aid',
    subtitle: 'Ready when needed',
    icon: 'bi-clipboard2-pulse',
    color: 'lavender',
    count: '95+',
  },
  {
    name: 'Personal Care',
    subtitle: 'Care for every day',
    icon: 'bi-droplet',
    color: 'mint',
    count: '260+',
  },
  {
    name: 'Medical Equipment',
    subtitle: 'At-home monitoring',
    icon: 'bi-heart-pulse-fill',
    color: 'blue',
    count: '115+',
  },
]

export const products = [
  {
    id: 'bp-monitor',
    name: 'Digital BP Monitor',
    description:
      'Automatic upper-arm blood pressure monitor',
    category: 'Medical Equipment',
    price: 2190,
    oldPrice: 2850,
    rating: '4.8',
    reviews: 890,
    badge: 'BESTSELLER',
    icon: 'bi-heart-pulse',
    image:
      'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C Chewables',
    description:
      'Daily wellness supplement · 60 tablets',
    category: 'Vitamins',
    price: 185,
    oldPrice: 220,
    rating: '4.6',
    reviews: 612,
    badge: 'POPULAR',
    icon: 'bi-capsule',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'digital-thermometer',
    name: 'Digital Thermometer',
    description:
      'Fast-read digital temperature monitor',
    category: 'Medical Equipment',
    price: 249,
    oldPrice: 350,
    rating: '4.7',
    reviews: 2110,
    badge: 'GREAT VALUE',
    icon: 'bi-thermometer-half',
    image:
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'first-aid-kit',
    name: 'First Aid Essentials Kit',
    description:
      'Home first-aid and wound-care basics',
    category: 'First Aid',
    price: 399,
    oldPrice: 499,
    rating: '4.7',
    reviews: 440,
    badge: 'HOME ESSENTIAL',
    icon: 'bi-bandaid',
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'pulse-oximeter',
    name: 'Fingertip Pulse Oximeter',
    description:
      'Compact fingertip oxygen saturation monitor',
    category: 'Medical Equipment',
    price: 899,
    oldPrice: 1200,
    rating: '4.6',
    reviews: 328,
    badge: 'TOP RATED',
    icon: 'bi-activity',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=700&q=85',
  },
]

export const formatPrice = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)