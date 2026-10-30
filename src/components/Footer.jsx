import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="medihub-footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="footer-brand">
            <i className="bi bi-heart-pulse-fill"></i> Medi
            <span>Hub</span>
          </Link>
          <p>
            Your everyday destination for healthcare essentials,
            personal care products and health monitoring devices.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Customer Support</h4>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MediHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;