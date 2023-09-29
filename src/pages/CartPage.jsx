import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, updateCartItemQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  // Calculate the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Navigate to the CheckoutPage when the "Checkout" button is clicked
    navigate('/checkout');
  };

  return (
    <div classname="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x{' '}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              min="1"
            />{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CartPage;
