/*
  Contains a list of items in the global cart and provides an interface to increment, decrement, and remove items from the cart.
*/

// Utils
import CartContextAPI from '../utils/CartContext';
import { useDraggable } from "react-use-draggable-scroll";


// React
import {useContext, useRef} from 'react'

// Sub Components
import ProductCard from '../components/ProductCard';
import CartItemInterface from '../components/ui/CartItemInterface';

// CSS
import styles from './Cart.module.css'

function Cart() {
    // Get Cart
    const {cart} = useContext(CartContextAPI.CTX);

    // Draggable
    const dragPoint = useRef(); 
    const { events } = useDraggable(dragPoint);

    return (
        <div className={`container ${styles.horizontalScrollable} ${styles.products}`}>
           <div className={`row text-center`} {...events} ref={dragPoint}>
             {cart.items.length ? (cart.items && cart.items.map(el => 
                <ProductCard key={el.id} {...el} description={null} onDoubleClick={()=>{}}>
                  <CartItemInterface {...el}/>
                </ProductCard>)) : <p>No Items In Cart</p>
              }
           </div>
        </div>
    );
}

export default Cart;