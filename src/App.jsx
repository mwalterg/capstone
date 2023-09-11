import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage'; 
import ProductDetailsPage from './pages/ProductDetailsPage';
//import CartPage from './pages/CartPage';
//import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Routes>
     
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        {/*<Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />*/}
    
    </Routes>
  );
}

export default App;
