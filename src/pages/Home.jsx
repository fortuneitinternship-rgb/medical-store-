import { Link } from "react-router-dom";
import { categories, products } from "../data/products.jsx";
import ProductCard from "../components/ProductCard.jsx";

const categoryIcons = [
  "bi-capsule",
  "bi-bandaid",
  "bi-heart-pulse",
  "bi-droplet",
  "bi-prescription2",
  "bi-bandaid-fill",
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="section-label">
              YOUR EVERYDAY HEALTHCARE STORE
            </span>

            <h1>
              Your Health,
              <br />
              <span>Our Priority.</span>
            </h1>

            <p>
              Discover everyday healthcare essentials, personal care
              products and health monitoring devices in one place.
            </p>

            <Link to="/products" className="shop-btn">
              Shop Products <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>
        </div>

        <div className="category-grid">
          {categories.slice(1).map((category, index) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <i className={`bi ${categoryIcons[index]}`}></i>
              <h3>{category}</h3>
              <span>
                Explore <i className="bi bi-arrow-up-right"></i>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section-spacing featured-section">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Featured Products</h2>
            <p>Everyday essentials for your healthcare needs.</p>
          </div>

          <Link to="/products" className="view-all-link">
            View All <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="container">
        <div className="bottom-banner">
          <div>
            <span className="section-label">MEDIHUB</span>
            <h2>Take care of your everyday health.</h2>
            <p>Explore our collection of healthcare essentials.</p>
          </div>

          <Link to="/products" className="shop-btn">
            Explore Products <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;