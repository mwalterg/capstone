
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../components/Api';
import LoginForm from '../components/LoginForm';

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
      <LoginForm />
      <ProductList products={products} />
    </div>
  );
}

export default ProductListPage;

