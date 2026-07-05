import { Link } from "react-router-dom";

function Success() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "60px auto",
        padding: "30px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ color: "green" }}>🎉 Order Placed Successfully!</h1>

      <h2>Order ID: #{orderId}</h2>

      <p>
        <strong>Order Date:</strong> {orderDate}
      </p>

      <p>
        <strong>Payment Method:</strong> Cash on Delivery
      </p>

      <p>Thank you for shopping with us ❤️</p>

      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default Success;