import { Link, useLocation } from 'react-router-dom'

const routeNames = {
  '/products': 'Products',
  '/categories': 'Categories',
  '/cart': 'Your Cart',
  '/wishlist': 'Wishlist',
  '/login': 'Login',
  '/register': 'Create an Account',
  '/checkout': 'Checkout',
  '/offers': 'Offers',
  '/about': 'About MediHub',
  '/contact': 'Contact Us',
  '/orders': 'Order Tracking',
  '/profile': 'My Profile',
  '/admin': 'Admin Dashboard',
}

export default function ComingSoon() {
  const location = useLocation()

  const title =
    routeNames[location.pathname] ||
    (location.pathname.startsWith('/products/')
      ? 'Product Details'
      : 'Page')

  const isNotFound =
    !routeNames[location.pathname] &&
    !location.pathname.startsWith('/products/')

  return (
    <section className="coming-soon-page">
      <div className="coming-card">
        <div className="coming-icon">
          <i
            className={`bi ${
              isNotFound
                ? 'bi-signpost-split'
                : 'bi-cone-striped'
            }`}
          />
        </div>

        <span className="section-kicker">
          {isNotFound ? 'PAGE NOT FOUND' : 'MEDIHUB · IN PROGRESS'}
        </span>

        <h1>
          {isNotFound
            ? 'We couldn’t find that page.'
            : `${title} is coming soon.`}
        </h1>

        <p>
          {isNotFound
            ? 'The page may have moved, or the link may be incorrect.'
            : 'This section is part of the MediHub project plan and will be built in a future development task.'}
        </p>

        <div className="coming-progress">
          <span />
        </div>

        <div className="coming-label">
          <span>PROJECT STATUS</span>
          <strong>
            Homepage ready · Other pages planned
          </strong>
        </div>

        <Link to="/" className="btn-primary-custom">
          <i className="bi bi-arrow-left me-2" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}