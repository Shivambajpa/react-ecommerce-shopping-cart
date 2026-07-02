function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
        }}
      />

      <h3>{product.title}</h3>

      <p>{product.description.substring(0, 80)}...</p>

      <h2>₹ {product.price}</h2>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;