function SearchBar({
  search,
  setSearch,
  sort,
  setSort,
  totalProducts,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          flex: "1",
          minWidth: "250px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>

      <h3
        style={{
          color: "#2563eb",
          margin: 0,
        }}
      >
        Products: {totalProducts}
      </h3>
    </div>
  );
}

export default SearchBar;