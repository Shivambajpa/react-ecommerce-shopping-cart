import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: "70px",
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>📋 Menu</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          🏠 Home
        </Link>

        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          🛒 Cart
        </Link>

        <Link to="/wishlist" style={{ color: "#fff", textDecoration: "none" }}>
          ❤️ Wishlist
        </Link>

        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
          🔐 Login
        </Link>

        <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
          📝 Register
        </Link>

        <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          ℹ️ About
        </Link>

        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          📞 Contact
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;