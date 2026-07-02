function CategoryFilter({ category, setCategory }) {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{ padding: "10px", marginTop: "10px" }}
    >
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;