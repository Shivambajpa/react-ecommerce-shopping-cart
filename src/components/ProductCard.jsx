function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3>{product.title}</h3>

      <p style={{ color: "#555" }}>
        {product.description.slice(0, 70)}...
      </p>

      <h2 style={{ color: "green" }}>
        ₹{product.price.toFixed(2)}
      </h2>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;