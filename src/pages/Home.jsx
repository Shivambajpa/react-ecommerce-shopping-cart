import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/api";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Loading Products...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple E-Commerce Store</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <h3>🛒 Cart ({cartCount})</h3>
      </div>

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.length === 0 ? (
          <h2>No Products Found</h2>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;