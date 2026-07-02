import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Your Cart is Empty 😔</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                background: "#fff",
              }}
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              {/* Product Details */}
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>

                <p>
                  <strong>Price:</strong> ₹
                  {item.price.toFixed(2)}
                </p>

                <p>
                  <strong>Quantity:</strong>
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                <p>
                  <strong>
                    Subtotal: ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </strong>
                </p>
                <p>
  <strong>
    Total: ₹{(item.price * item.quantity).toFixed(2)}
  </strong>
</p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Grand Total */}
          <div
            style={{
              borderTop: "2px solid #000",
              paddingTop: "20px",
              textAlign: "right",
            }}
          >
            <h2>Grand Total: ₹{total.toFixed(2)}</h2>

            <button
              onClick={clearCart}
              style={{
                background: "#333",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Clear Cart
            </button>

            <button
              onClick={() => {
                alert("🎉 Order Placed Successfully!");
                clearCart();
              }}
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;