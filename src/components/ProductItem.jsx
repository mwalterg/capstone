import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
