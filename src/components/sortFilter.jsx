function SortFilter({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      style={{
        padding: "10px",
        marginLeft: "10px",
      }}
    >
      <option value="default">Sort By</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
      <option value="a-z">Name: A-Z</option>
      <option value="z-a">Name: Z-A</option>
    </select>
  );
}

export default SortFilter;