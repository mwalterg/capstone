import React from 'react';
import { useCart } from '../components/CartContext';

function CartPage() {
  const { cart } = useCart(); // Access the cart state from the CartContext

  // Calculate the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default CartPage;
