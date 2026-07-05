function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "30px 20px",
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
        <div>
          <h2>🛒 React Store</h2>
          <p>
            Your one-stop shop for fashion, electronics,
            jewellery and more.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>🏠 Home</p>
          <p>❤️ Wishlist</p>
          <p>🛒 Cart</p>
          <p>📦 Orders</p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 support@reactstore.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 India</p>
        </div>
      </div>

      <hr
        style={{
          margin: "20px 0",
          borderColor: "#555",
        }}
      />

      <p
        style={{
          textAlign: "center",
        }}
      >
        © 2026 React Store | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;