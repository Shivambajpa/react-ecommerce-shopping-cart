import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "35px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {/* Logo */}
        <div>
          <h2>🛒 React Store</h2>

          <p style={{ lineHeight: "1.7" }}>
            Your one-stop shop for fashion,
            electronics, jewellery and more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3>Quick Links</h3>

          <p>
            <Link
              to="/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              🏠 Home
            </Link>
          </p>

          <p>
            <Link
              to="/wishlist"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              ❤️ Wishlist
            </Link>
          </p>

          <p>
            <Link
              to="/cart"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              🛒 Cart
            </Link>
          </p>

          <p>
            <Link
              to="/login"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              🔐 Login
            </Link>
          </p>

          <p>
            <Link
              to="/register"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              📝 Register
            </Link>
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <p>📧 support@reactstore.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 India</p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              fontSize: "22px",
            }}
          >
            <a href="#" style={{ color: "#fff" }}>
              <FaFacebookF />
            </a>

            <a href="#" style={{ color: "#fff" }}>
              <FaInstagram />
            </a>

            <a href="#" style={{ color: "#fff" }}>
              <FaLinkedinIn />
            </a>

            <a href="#" style={{ color: "#fff" }}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "25px 0",
          borderColor: "#555",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#ddd",
          margin: 0,
        }}
      >
        © 2026 React Store | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;