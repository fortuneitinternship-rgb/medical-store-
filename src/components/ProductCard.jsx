
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="product-card">
      <Link
        to={`/products/${product.id}`}
        className="product-image-wrap"
      >
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <div className="product-image-placeholder">
            <i className="bi bi-heart-pulse"></i>
          </div>
        )}
      </Link>

      <div className="product-card-info">
        <span className="product-category">
          {product.category || "Healthcare Essentials"}
        </span>

        <h3>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {product.price != null && (
          <p className="product-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </p>
        )}

        <Link
          to={`/products/${product.id}`}
          className="product-view-link"
        >
          View Details <i className="bi bi-arrow-up-right"></i>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
