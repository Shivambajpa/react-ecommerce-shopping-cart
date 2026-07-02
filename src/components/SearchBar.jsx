function SearchBar({ search, setSearch }) {
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;