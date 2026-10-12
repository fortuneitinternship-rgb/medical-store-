import { useMemo, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.jsx'

export default function Home() {
  const { searchValue, setSearchValue } = useOutletContext()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    const query = searchValue.trim().toLowerCase()

    return products.filter((product) => {
      const matchesQuery =
        !query ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query)

      const matchesCategory =
        activeCategory === 'All' ||
        product.category === activeCategory

      return matchesQuery && matchesCategory
    })
  }, [searchValue, activeCategory])

  const chooseCategory = (name) => {
    setActiveCategory(name)
    setSearchValue('')

    document
      .getElementById('popular-products')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <div className="home-page">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="container hero-content">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR EVERYDAY HEALTH PARTNER
              </div>

              <h1>
                Your health.
                <br />
                <span>Our priority.</span>
              </h1>

              <p className="hero-description">
                Reliable healthcare essentials and trusted medical
                equipment, thoughtfully brought together for your
                everyday wellbeing.
              </p>

              <div className="hero-buttons">
                <a href="#popular-products" className="btn-primary-custom">
                  Shop essentials
                  <i className="bi bi-arrow-up-right ms-2" />
                </a>

                <a href="#categories" className="btn-secondary-custom">
                  Explore categories
                  <i className="bi bi-arrow-down-right ms-2" />
                </a>
              </div>

              <div className="hero-proof">
                <div className="proof-avatars">
                  <span><i className="bi bi-person-fill" /></span>
                  <span><i className="bi bi-person-fill" /></span>
                  <span><i className="bi bi-person-fill" /></span>
                </div>

                <div>
                  <strong>Care for every day</strong>
                  <small>
                    Simple shopping for health essentials
                  </small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">
                <div className="hero-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90"
                    alt="Healthcare professional in a clinical setting"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="hero-image-overlay" />
                </div>

                <div className="floating-card floating-card-top">
                  <span className="floating-icon green">
                    <i className="bi bi-patch-check-fill" />
                  </span>
                  <span>
                    <strong>Everyday essentials</strong>
                    <small>Carefully selected</small>
                  </span>
                </div>

                <div className="floating-card floating-card-bottom">
                  <span className="floating-icon blue">
                    <i className="bi bi-heart-pulse-fill" />
                  </span>
                  <span>
                    <strong>Health at home</strong>
                    <small>Equipment & wellness</small>
                  </span>
                </div>

                <div className="hero-sticker">
                  <i className="bi bi-plus-lg" />
                  <span>CARE<br />FIRST</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-stats row g-3">
            <div className="col-4">
              <strong>Everyday</strong>
              <span>Health essentials</span>
            </div>
            <div className="col-4">
              <strong>Trusted</strong>
              <span>Useful equipment</span>
            </div>
            <div className="col-4">
              <strong>Simple</strong>
              <span>Online shopping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="row g-3">
            {[
              {
                icon: 'bi-patch-check',
                title: 'Quality essentials',
                subtitle: 'Thoughtfully selected',
              },
              {
                icon: 'bi-truck',
                title: 'Convenient delivery',
                subtitle: 'To your doorstep',
              },
              {
                icon: 'bi-lock',
                title: 'Secure experience',
                subtitle: 'Simple checkout design',
              },
              {
                icon: 'bi-headset',
                title: 'Helpful support',
                subtitle: 'Here when you need us',
              },
            ].map((benefit) => (
              <div className="col-6 col-lg-3" key={benefit.title}>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <i className={`bi ${benefit.icon}`} />
                  </span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <small>{benefit.subtitle}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad category-section" id="categories">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                FIND WHAT YOU NEED
              </span>
              <h2>Shop by category</h2>
              <p>Everyday care, made easier to find.</p>
            </div>

            <Link to="/categories" className="text-link">
              View all categories
              <i className="bi bi-arrow-up-right" />
            </Link>
          </div>

          <div className="row g-3 category-grid">
            {categories.map((category) => (
              <div
                className="col-6 col-md-4 col-lg-2"
                key={category.name}
              >
                <button
                  className={`category-card ${category.color}`}
                  onClick={() => chooseCategory(category.name)}
                >
                  <span className="category-icon">
                    <i className={`bi ${category.icon}`} />
                  </span>

                  <strong>{category.name}</strong>
                  <small>{category.subtitle}</small>

                  <span className="category-count">
                    {category.count} items
                    <i className="bi bi-arrow-up-right" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        className="section-pad products-section"
        id="popular-products"
      >
        <div className="container">
          <div className="section-heading align-items-end">
            <div>
              <span className="section-kicker">
                THE EVERYDAY EDIT
              </span>
              <h2>Popular essentials</h2>
              <p>Useful picks for your home health kit.</p>
            </div>

            <Link to="/products" className="text-link">
              Explore products
              <i className="bi bi-arrow-up-right" />
            </Link>
          </div>

          <div className="product-filter-row">
            {[
              'All',
              'Medical Equipment',
              'Vitamins',
              'First Aid',
            ].map((category) => (
              <button
                key={category}
                className={`filter-chip ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

            {searchValue && (
              <button
                className="filter-chip clear-chip"
                onClick={() => setSearchValue('')}
              >
                Clear search ×
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <i className="bi bi-search" />
              <h3>No matching products</h3>
              <p>
                Try another search or clear your selected category.
              </p>
              <button
                className="btn-primary-custom"
                onClick={() => {
                  setSearchValue('')
                  setActiveCategory('All')
                }}
              >
                Show all products
              </button>
            </div>
          )}

          <p className="catalog-note">
            <i className="bi bi-info-circle me-2" />
            Sample catalogue for a student project. Product
            availability and classification must be verified before
            real-world use.
          </p>
        </div>
      </section>

      {/* Wellness banner */}
      <section className="wellness-banner-section">
        <div className="container">
          <div className="wellness-banner">
            <div className="wellness-copy">
              <span className="section-kicker">
                SMALL STEPS, EVERY DAY
              </span>

              <h2>
                Make room for
                <br />
                better everyday care.
              </h2>

              <p>
                Explore wellness essentials and practical tools for
                your home.
              </p>

              <Link to="/products" className="btn-primary-custom">
                Explore essentials
                <i className="bi bi-arrow-up-right ms-2" />
              </Link>
            </div>

            <div className="wellness-art">
              <div className="wellness-circle">
                <i className="bi bi-heart-pulse-fill" />
              </div>
              <span className="wellness-pill pill-one" />
              <span className="wellness-pill pill-two" />
              <span className="wellness-cross">
                <i className="bi bi-plus-lg" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}