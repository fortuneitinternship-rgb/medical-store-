import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)

    window.setTimeout(() => {
      setAdded(false)
    }, 1200)
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <span className="product-badge">{product.badge}</span>

        <button
          className="product-wishlist"
          aria-label={`Save ${product.name} to wishlist`}
          onClick={() => window.alert('Wishlist is coming soon.')}
        >
          <i className="bi bi-heart" />
        </button>

        <Link
          to={`/products/${product.id}`}
          className="product-image-link"
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.nextElementSibling.style.display =
                'flex'
            }}
          />

          <span className="product-image-fallback">
            <i className={`bi ${product.icon}`} />
          </span>
        </Link>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="product-title"
        >
          {product.name}
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-rating">
          <i className="bi bi-star-fill" />
          <strong>{product.rating}</strong>
          <span>
            ({product.reviews.toLocaleString('en-IN')})
          </span>
        </div>

        <div className="product-price-row">
          <strong>{formatPrice(product.price)}</strong>
          <del>{formatPrice(product.oldPrice)}</del>
        </div>

        <button
          className={`btn-add-cart ${added ? 'added' : ''}`}
          onClick={handleAdd}
        >
          <i
            className={`bi ${
              added ? 'bi-check2' : 'bi-bag-plus'
            } me-2`}
          />
          {added ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}