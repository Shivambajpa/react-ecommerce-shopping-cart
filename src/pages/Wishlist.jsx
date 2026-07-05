import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No products in wishlist.</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <h3>{item.title}</h3>

              <p>₹ {item.price}</p>

          <button
  onClick={() => removeFromWishlist(item.id)}
  style={{
    backgroundColor: "#dc3545", // Red
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#b02a37";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#dc3545";
  }}
>
  Remove ❤️
</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;