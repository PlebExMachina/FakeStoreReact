/*
  Entry point for the App
  Contains routing logic and any global components.
  Routes to appropriate pages.
*/
// Utils
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import loadable from '@loadable/component'
import CartContextAPI  from './utils/CartContext';

// Model
import Button from 'react-bootstrap/Button';
import NavbarWrapper from './components/wrappers/NavbarWrapper';

// CSS
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages (Lazy Loading)
const Cart = loadable(() => import('./pages/Cart'));
const Products = loadable(() => import('./pages/Products'));
const ProductDetails = loadable(() => import('./pages/ProductDetails'));
const Checkout = loadable(() => import('./pages/Checkout'));

function App() {
  // Initialize cart context.
  const [cart, dispatch] = useReducer(CartContextAPI.reducer, CartContextAPI.load());

  // Save any changes to cart.
  useEffect(() => {
    CartContextAPI.save(cart);
  }, [cart])
  
  return (
    <div className={`App ${styles.module} ${styles.body}`}>
      <CartContextAPI.CTX.Provider value={{cart, dispatch}}>
      <HashRouter>
        <NavbarWrapper logo={<Button variant="success">FakeStore</Button>}>
            <Button className="m-3" to="/products">Products</Button>
            <Button className="m-3" to="/cart">Cart</Button>
            <Button className="m-3" to="/checkout">Checkout</Button>
        </NavbarWrapper>
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" replace={true}/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<ProductDetails/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </HashRouter>
      </CartContextAPI.CTX.Provider>
    </div>
  );
}

export default App;