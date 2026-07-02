function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "60%",
        padding: "10px",
        fontSize: "16px",
      }}
    />
  );
}

export default SearchBar;