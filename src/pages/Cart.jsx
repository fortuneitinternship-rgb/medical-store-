import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <section className="container cart-page empty-cart">
        <i className="bi bi-cart-x"></i>
        <h2>Your Cart is Empty</h2>
        <p>Add some healthcare essentials to your cart.</p>
        <Link to="/products" className="shop-btn">
          Shop Products
        </Link>
      </section>
    );
  }

  return (
    <section className="container cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <strong>₹{item.price}</strong>

                <div className="quantity-controls">
                  <button
                    type="button"
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-actions">
                <strong>₹{item.price * item.quantity}</strong>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <div className="summary-line">
            <span>Delivery</span>
            <strong>Calculated later</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>

          <button
            type="button"
            className="add-cart-btn"
            onClick={() => alert("Checkout will be available soon.")}
          >
            Proceed to Checkout
          </button>

          <button
            type="button"
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;