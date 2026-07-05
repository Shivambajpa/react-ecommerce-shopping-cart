import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const [added, setAdded] = useState(false);

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const formatPrice = (price) => `₹ ${(price ?? 0).toFixed(2)}`;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        transition: "0.3s",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* ❤️ Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "28px",
          cursor: "pointer",
        }}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          height: "48px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          color: "#555",
          fontSize: "14px",
          marginBottom: "15px",
          height: "42px",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {product.description}
      </p>

      <h2 style={{ color: "green" }}>
        {formatPrice(product.price)}
      </h2>

      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: added ? "green" : "#ff9900",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;