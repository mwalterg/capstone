import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage'; 
//import ProductDetailsPage from './pages/ProductDetailsPage';
//import CartPage from './pages/CartPage';
//import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Routes>
     
        <Route path="/" component={ProductListPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
    
    </Routes>
  );
}

export default App;
