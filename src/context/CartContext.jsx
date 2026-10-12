import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'medihub-cart-v1'

function readCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readCart)

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cartItems),
      )
    } catch {
      // The app remains usable if storage is unavailable.
    }
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
  }

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      ),
    [cartItems],
  )

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider',
    )
  }

  return context
}