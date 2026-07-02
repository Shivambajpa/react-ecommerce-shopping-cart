function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewellery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>
  );
}

export default CategoryFilter;