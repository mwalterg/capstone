import React, { useState } from 'react';

function ProductFilter({ products, onFilterChange, onSortChange }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSelectedSort(sort);
    onSortChange(sort);
  };

  return (
    <div>
      <label>Filter by Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
      </select>

      <label>Sort by:</label>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default ProductFilter;
