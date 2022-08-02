// Utils
import CartContextAPI from '../utils/CartContext';
import { useDraggable } from "react-use-draggable-scroll";


// React
import {useContext, useRef} from 'react'

// Sub Components
import CartCard from '../components/CartCard';


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
             {cart.items.length ? (cart.items && cart.items.map(el => <CartCard key={el.id} {...el} description={null} category={null}/>)) : <p>No Items In Cart</p>}
           </div>
        </div>
    );
}

export default Cart;