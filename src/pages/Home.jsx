import { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category)
    );
  });

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading Products...
      </h2>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🛍 Our Products</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <h3 style={{ margin: "20px 0" }}>
        🛒 Cart Items: {cartCount}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;