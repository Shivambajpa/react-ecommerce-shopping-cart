import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  maxWidth: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />

              <h3>{item.title}</h3>

              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>

              <p>
                <strong>Price:</strong> ₹ {item.price}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "10px 0",
                }}
              >
                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <p>
                <strong>Subtotal:</strong> ₹{" "}
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹ {totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;