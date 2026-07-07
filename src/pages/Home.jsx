import { useState, useEffect, useContext } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import Loading from "../components/loader";
import { CartContext } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const { cart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  let filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category)
    );
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "az") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "za") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  console.log(products.length);
console.log(filteredProducts.length);
console.log(totalPages);  

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🛍 Our Products
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        totalProducts={filteredProducts.length}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <h3
        style={{
          margin: "20px 0",
          color: "#2563eb",
        }}
      >
        🛒 Cart Items : {cartCount}
      </h3>

      {currentProducts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <h2>No Products Found 😔</h2>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>

            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;