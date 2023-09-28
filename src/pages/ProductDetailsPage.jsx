
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../components/Api';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Item added to cart');
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <img src={product.image} alt={product.title} />
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
