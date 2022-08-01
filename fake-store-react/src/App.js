import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useReducer, useEffect, useState, useCallback } from 'react';
import Cart from './Cart'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Checkout from './Checkout'
import CartContext, {CartReducer, GetInitialCart} from './utils/CartContext'
import {getProducts, getProductsByCategory} from './utils/FakeStoreAPI'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, dispatch] = useReducer(CartReducer, GetInitialCart());

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" replace={true}/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<ProductDetails/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </HashRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;