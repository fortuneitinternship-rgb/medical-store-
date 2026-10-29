
import { Link } from "react-router-dom";

const categories = [
  { icon: "bi-capsule", name: "Everyday Essentials", path: "/categories" },
  { icon: "bi-bandaid", name: "First Aid", path: "/categories" },
  { icon: "bi-heart-pulse", name: "Health Devices", path: "/categories" },
  { icon: "bi-droplet", name: "Personal Care", path: "/categories" },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot"></span>
            YOUR EVERYDAY HEALTHCARE PARTNER
          </span>

          <h1>
            Everyday care.
            <br />
            <span>Made simpler.</span>
          </h1>

          <p>
            Discover everyday healthcare essentials and basic medical
            devices, all in one convenient place.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="button-primary">
              Explore Products <i className="bi bi-arrow-up-right"></i>
            </Link>

            <Link to="/about" className="button-secondary">
              Discover MediHub
            </Link>
          </div>

          <div className="hero-trust">
            <span><i className="bi bi-check-circle"></i> Everyday essentials</span>
            <span><i className="bi bi-check-circle"></i> Simple shopping</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-symbol">
            <i className="bi bi-heart-pulse-fill"></i>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon"><i className="bi bi-shield-check"></i></span>
            <span>
              <strong>Care you can count on</strong>
              <small>Everyday essentials</small>
            </span>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon"><i className="bi bi-bag-heart"></i></span>
            <span>
              <strong>Healthcare, simplified</strong>
              <small>Your needs in one place</small>
            </span>
          </div>
        </div>
      </section>

      <section className="categories-section section-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE OUR RANGE</span>
            <h2>Care for every day.</h2>
          </div>
          <Link to="/categories" className="text-link">
            View all <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={category.path}
              className="category-card"
              key={category.name}
            >
              <span className="category-icon">
                <i className={`bi ${category.icon}`}></i>
              </span>
              <h3>{category.name}</h3>
              <span className="category-arrow">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="coming-banner section-container">
        <div>
          <span className="eyebrow">SOMETHING GOOD IS ON THE WAY</span>
          <h2>Your healthcare destination is taking shape.</h2>
          <p>
            We're building a simpler way to explore everyday healthcare
            essentials. More of MediHub is coming soon.
          </p>
          <Link to="/about" className="button-primary">
            Learn About Us <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="banner-icon">
          <i className="bi bi-heart-pulse"></i>
          <span className="banner-glow"></span>
        </div>
      </section>
    </div>
  );
}

export default Home;
