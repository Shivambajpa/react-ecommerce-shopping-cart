import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        background: "#333",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
      >
        Home
      </Link>

      <Link
        to="/cart"
        style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
      >
        Cart
      </Link>
    </div>
  );
}

export default Navbar;