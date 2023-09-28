import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage'; // Import the CartPage
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Add a route for the CartPage */}
        {/*<Route path="/checkout" element={<CheckoutPage />} />*/}
      </Routes>
    </CartProvider>
  );
}

export default App;
