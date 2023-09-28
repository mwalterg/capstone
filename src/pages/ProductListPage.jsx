import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../components/Api';
import LoginForm from '../components/LoginForm';
import ProductFilter from '../components/FilterAndSort';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const sortProducts = (sort) => {
    setSelectedSort(sort);
  };

  let filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (selectedSort === 'price-asc') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === 'price-desc') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <h2>Product List</h2>
      <LoginForm />
      <ProductFilter
        products={products}
        onFilterChange={filterProducts}
        onSortChange={sortProducts}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductListPage;



