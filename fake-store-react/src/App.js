import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  const [cart, dispatch] = useReducer(CartReducer, GetInitialCart());

  // Save any changes to cart.
  useEffect(() => {
    SaveCart(cart);
  }, [cart])

  console.log(cart);
  
  return (
    <div className="App">
      <CartContext.Provider value={{cart, dispatch}}>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#/">FakeStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/products">Products</Nav.Link>
              <Nav.Link href="/#/cart">Cart</Nav.Link>
              <Nav.Link href="/#/checkout">Checkout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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