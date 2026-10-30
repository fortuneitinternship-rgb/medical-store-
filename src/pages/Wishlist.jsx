import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

function Wishlist() {
const { wishlistItems, clearWishlist } = useContext(CartContext);
  return (
    <section className="container wishlist-page">
      <div className="wishlist-heading">
        <div>
          <span className="section-label">YOUR FAVOURITES</span>
          <h1>My Wishlist</h1>
          <p>
            Your favourite healthcare products, saved in one place.
          </p>
        </div>

        <span className="wishlist-total">
          <i className="bi bi-heart-fill"></i>
          {wishlistItems.length} Saved
        </span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <i className="bi bi-heart"></i>
          <h2>Your Wishlist is Empty</h2>
          <p>
            Click the heart icon on a product to save it here.
          </p>

          <Link to="/products" className="shop-btn">
            Explore Products
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      ) : (
        <>
          <div className="product-grid">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="wishlist-clear">
  <button type="button" onClick={clearWishlist}>
    Clear Wishlist
  </button>
</div>
        </>
      )}
    </section>
  );
}

export default Wishlist;