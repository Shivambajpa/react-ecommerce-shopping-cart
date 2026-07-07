import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar({ setIsOpen }) {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistItems = wishlist.length;

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logout Successful!");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "15px 25px",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          🛒 React Store
        </Link>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/cart"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          🛒 Cart ({totalItems})
        </Link>

        <Link
          to="/wishlist"
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          ❤️ Wishlist ({wishlistItems})
        </Link>

        {isLoggedIn ? (
          <>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              👋 {user?.name || "User"}
            </span>

            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#dc2626",
                color: "#fff",
                border: "none",
                padding: "8px 15px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;