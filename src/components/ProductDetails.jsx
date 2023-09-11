import React from 'react';

function ProductDetails({ product }) {
  
  const { title, description, price, category, image } = product;

  return (
    <div>
      <h2>{title}</h2>
      <div>
        <img src={image} alt={title}  />
      </div>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      
    </div>
  );
}

export default ProductDetails;
