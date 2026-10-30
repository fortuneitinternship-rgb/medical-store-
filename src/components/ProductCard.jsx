import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart, wishlistItems, toggleWishlist } =
    useContext(CartContext);

  const [added, setAdded] = useState(false);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  // Automatically restore the button after 1.5 seconds
  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [added]);

  return (
    <article className="product-card">
      <div className="product-card-top">
        <span className="product-category">{product.category}</span>

        <button
          type="button"
          className={`product-heart ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <i
            className={`bi ${
              isWishlisted ? "bi-heart-fill" : "bi-heart"
            }`}
          ></i>
        </button>
      </div>

      <div className="product-icon-area">
        <i className="bi bi-heart-pulse"></i>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
        </div>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-price">
          <strong>₹{product.price}</strong>
          <del>₹{product.oldPrice}</del>
        </div>

        <button
          type="button"
          className={`add-cart-btn ${added ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? (
            <>
              <i className="bi bi-check-circle-fill"></i>
              Added to Cart
            </>
          ) : (
            <>
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;