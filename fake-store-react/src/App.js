/*
  Entry point for the App
  Contains routing logic and any global components.
  Routes to appropriate pages.
*/
// Utils
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import loadable from '@loadable/component'
import CartContextAPI  from './utils/CartContext';

// Model
import Button from 'react-bootstrap/Button';
import NavbarWrapper from './components/wrappers/NavbarWrapper';
import { CartFill } from 'react-bootstrap-icons';

// Sub Components
import ModalWrapper from './components/wrappers/ModalWrapper';
import ToCheckout from './components/ToCheckout';

// CSS
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrapOverride.css';

// Pages (Eager Loading)
import Cart from './pages/Modals/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/Modals/ProductDetails';
import Checkout from './pages/Modals/Checkout';

// Pages (Lazy Loading)
/*const Cart = loadable(() => import('./pages/Modals/Cart'));
const Products = loadable(() => import('./pages/Products'));
const ProductDetails = loadable(() => import('./pages/Modals/ProductDetails'));
const Checkout = loadable(() => import('./pages/Modals/Checkout'));*/

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
            <Button className="m-3" to="/cart"><CartFill/></Button>
        </NavbarWrapper>
        <Routes>
          <Route path="/" element={<Products/>}>
            <Route exact path="/products/:id" element={<ModalWrapper to="/" title="Product Details"><ProductDetails/></ModalWrapper>}/>
            <Route exact path="/cart" element={<ModalWrapper to="/" title={<ToCheckout/>}><Cart/></ModalWrapper>}/>
            <Route exact path="/checkout" element={<ModalWrapper to="/" title="Checkout"><Checkout/></ModalWrapper>}/>
          </Route>
        </Routes>
      </HashRouter>
      </CartContextAPI.CTX.Provider>
    </div>
  );
}

export default App;