import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/RegistrationPage';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <CartProvider> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/register" element={<RegistrationPage />} />
        {/*<Route path="/checkout" element={<CheckoutPage />} />*/}
      </Routes>
    </CartProvider>
  );
}

export default App;
