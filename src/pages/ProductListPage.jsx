
import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import { getProducts } from './components/Api';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListPage;

