import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#222",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>🛍 ShopEasy</h2>

      {/* Links */}
      <div style={{ display: "flex", gap: "25px" }}>
        <NavLink
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          🛒 Cart ({cartCount})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;