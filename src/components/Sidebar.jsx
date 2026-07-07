import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 15px",
    marginBottom: "10px",
    color: isActive ? "#fff" : "#111827",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "0.3s",
  });

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? "0" : "-240px",
          width: "220px",
          height: "100vh",
          backgroundColor: "#fff",
          boxShadow: "2px 0 15px rgba(0,0,0,0.2)",
          transition: "0.3s ease",
          zIndex: 1000,
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#2563eb",
              fontSize: "22px",
            }}
          >
            🛒 React Store
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#555",
            }}
          >
            ✖
          </button>
        </div>

        {/* Links */}
        <NavLink
          to="/"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/cart"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          🛒 Cart
        </NavLink>

        <NavLink
          to="/wishlist"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          ❤️ Wishlist
        </NavLink>

        <NavLink
          to="/login"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          🔐 Login
        </NavLink>

        <NavLink
          to="/register"
          style={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          📝 Register
        </NavLink>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            textAlign: "center",
            color: "#888",
            fontSize: "13px",
            borderTop: "1px solid #ddd",
            paddingTop: "15px",
          }}
        >
          © 2026 React Store
        </div>
      </div>
    </>
  );
}

export default Sidebar;