import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../components/Api';
import { useCart } from '../CartContext'; // Import the CartContext

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Access the addToCart function from the CartContext

  useEffect(() => {
    // Fetch product details by ID
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <img src={product.image} alt={product.title} />
        <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to cart button */}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
