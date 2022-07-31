import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart'
import Products from './Products'
import ProductDetails from './ProductDetails'
import Checkout from './Checkout'
import applicationContext from './utils/applicationContext'

function App() {
  // Some generic appdata, may switch to reducer, persistent, etc. as needed.
  const [appdata, setAppdata] = useState({});
  return (
    <div className="App">
      <applicationContext.Provider value={appdata}>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" replace={true}/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<ProductDetails/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
      </HashRouter>
      </applicationContext.Provider>
    </div>
  );
}

export default App;