/* 
  Debriefing
    Now that I've made a somewhat complex app I have a better idea on how to design one / implement one.
    I would absolutely do a better job if I re-did this. Maybe for the future.
*/

import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useReducer, useEffect, useState, useCallback } from 'react';
import Cart from './Cart'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Checkout from './Checkout'
import CartContext, {CartReducer, GetInitialCart, SaveCart} from './utils/CartContext'
import {getProducts, getProductsByCategory} from './utils/FakeStoreAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function App() {
  const [cart, dispatch] = useReducer(CartReducer, GetInitialCart());
  // Save any changes to cart.
  useEffect(() => {
    SaveCart(cart);
  }, [cart])
  
  return (
    <div className="App">
      <CartContext.Provider value={{cart, dispatch}}>
      <HashRouter>
        <Navbar bg="light" expand="lg">
          <Container >
          <Link to="/"><Button variant="success">FakeStore</Button></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/products"><Button className="m-3">Products</Button></Link>
              <Link to="/cart"><Button className="m-3">Cart</Button></Link>
              <Link to="/checkout"><Button className="m-3">Checkout</Button></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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