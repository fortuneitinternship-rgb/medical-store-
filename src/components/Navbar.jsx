import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const navItems = [
  ['Home', '/'],
  ['Categories', '/categories'],
  ['Medical Equipment', '/products'],
  ['Offers', '/offers'],
  ['About', '/about'],
]

export default function Navbar({ searchValue, onSearchChange }) {
  const { cartCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const submitSearch = (event) => {
    event.preventDefault()
    navigate(
      `/products?search=${encodeURIComponent(searchValue || '')}`,
    )
  }

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container d-flex justify-content-between align-items-center">
          <span>
            <i className="bi bi-shield-check me-2" />
            Everyday healthcare, made simple
          </span>
          <span className="top-strip-right">
            <i className="bi bi-truck me-2" />
            Reliable delivery on essentials
          </span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link
            className="navbar-brand brand-lockup"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">
              <i className="bi bi-plus-lg" />
            </span>
            <span>
              Medi<span>Hub</span>
              <small>HEALTH & WELLNESS</small>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <form
              className="nav-search mx-lg-4 my-3 my-lg-0"
              onSubmit={submitSearch}
            >
              <i className="bi bi-search" />
              <input
                aria-label="Search medicines and equipment"
                value={searchValue}
                onChange={(event) =>
                  onSearchChange(event.target.value)
                }
                placeholder="Search medicines, equipment..."
              />
              <button type="submit">Search</button>
            </form>

            <div className="navbar-actions ms-lg-auto">
              <Link className="header-action" to="/wishlist">
                <i className="bi bi-heart" />
                <span>Wishlist</span>
              </Link>

              <Link className="header-action" to="/cart">
                <span className="cart-icon-wrap">
                  <i className="bi bi-bag" />
                  {cartCount > 0 && <b>{cartCount}</b>}
                </span>
                <span>Cart</span>
              </Link>

              <Link className="login-link" to="/login">
                <i className="bi bi-person me-1" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="category-nav">
        <div className="container d-flex align-items-center gap-4">
          {navItems.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `category-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}

          <span className="category-nav-note ms-auto">
            <i className="bi bi-patch-check-fill me-2" />
            Care you can count on
          </span>
        </div>
      </div>
    </header>
  )
}