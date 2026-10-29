
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <i className="bi bi-heart-pulse-fill"></i>
          </span>
          <span>Medi<span className="brand-highlight">Hub</span></span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/categories" onClick={closeMenu}>Categories</NavLink>
          <NavLink to="/offers" onClick={closeMenu}>Offers</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>

          <div className="nav-actions">
            <Link
              to="/wishlist"
              className="nav-icon-link"
              aria-label="Wishlist"
              onClick={closeMenu}
            >
              <i className="bi bi-heart"></i>
            </Link>

            <Link
              to="/cart"
              className="nav-icon-link"
              aria-label="Shopping cart"
              onClick={closeMenu}
            >
              <i className="bi bi-bag"></i>
            </Link>

            <Link
              to="/login"
              className="nav-login"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
