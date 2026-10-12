import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 footer-main">
          <div className="col-lg-4 col-md-6">
            <Link
              className="navbar-brand brand-lockup footer-brand"
              to="/"
            >
              <span className="brand-mark">
                <i className="bi bi-plus-lg" />
              </span>
              <span>
                Medi<span>Hub</span>
                <small>HEALTH & WELLNESS</small>
              </span>
            </Link>

            <p className="footer-description">
              Everyday healthcare essentials and medical equipment,
              all in one convenient place.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-md-3">
            <h3>Shop</h3>
            <Link to="/products">All Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>

          <div className="col-6 col-lg-2 col-md-3">
            <h3>Quick Links</h3>
            <Link to="/about">About MediHub</Link>
            <Link to="/orders">Track Order</Link>
            <Link to="/profile">My Account</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <h3>Customer Care</h3>

            <p className="footer-contact">
              <i className="bi bi-envelope" />
              support@medihub.example
            </p>

            <p className="footer-contact">
              <i className="bi bi-clock" />
              Monday–Saturday · 9 AM–6 PM
            </p>

            <div className="footer-newsletter">
              <label htmlFor="newsletter-email">
                Get wellness updates
              </label>
              <div className="d-flex">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                />
                <button type="button" aria-label="Subscribe">
                  <i className="bi bi-arrow-right" />
                </button>
              </div>
              <small>
                Demo form only — no email is submitted.
              </small>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>
            © {new Date().getFullYear()} MediHub. Student frontend
            project.
          </span>
          <span>
            <i className="bi bi-shield-check me-2" />
            Sample storefront · Frontend demo only
          </span>
        </div>
      </div>
    </footer>
  )
}