
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <i className="bi bi-heart-pulse-fill"></i>
            </span>
            <span>Medi<span className="brand-highlight">Hub</span></span>
          </Link>

          <p>
            Everyday healthcare essentials, thoughtfully brought together.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/offers">Offers</Link>
        </div>

        <div className="footer-column">
          <h3>MediHub</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Sign In</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MediHub. All rights reserved.</p>
        <span>Everyday care, made simpler.</span>
      </div>
    </footer>
  );
}

export default Footer;
