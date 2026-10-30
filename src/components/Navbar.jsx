import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { cartCount, wishlistCount } = useContext(CartContext);

  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (event) => {
    event.preventDefault();

    navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    closeMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg medihub-navbar">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <i className="bi bi-heart-pulse-fill"></i>
          Medi<span>Hub</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar Content */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>

          {/* Navigation Links */}
          <ul className="navbar-nav main-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={closeMenu}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search products"
            />

            <button type="submit" aria-label="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Navbar Actions */}
          <div className="navbar-actions">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="navbar-action navbar-icon-link"
              onClick={closeMenu}
              aria-label={`Wishlist, ${wishlistCount} saved`}
              title="Wishlist"
            >
              <i className="bi bi-heart"></i>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="navbar-action navbar-icon-link"
              onClick={closeMenu}
              aria-label={`Cart, ${cartCount} items`}
              title="Cart"
            >
              <i className="bi bi-cart3"></i>
            </Link>

            {/* Login / Sign Up */}
            <Link
              to="/login"
              className="navbar-action login-action"
              onClick={closeMenu}
            >
              <i className="bi bi-person-circle"></i>
              <span>Login / Sign Up</span>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;