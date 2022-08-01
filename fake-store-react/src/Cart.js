import {useContext, useRef} from 'react'
import CartContext from './utils/CartContext';
import CartCard from './components/CartCard';
import { useDraggable } from "react-use-draggable-scroll";
import styles from './Cart.module.css'

function Cart() {
    const {cart, dispatch} = useContext(CartContext);

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:


    console.log(cart)
    return (
        <div className={`container ${styles.horizontalScrollable} ${styles.products}`}>
           <div className={`row text-center`} {...events} ref={ref}>
             {cart.items.length ? (cart.items && cart.items.map(el => <CartCard key={el.id} {...el}/>)) : <p>No Items In Cart</p>}
           </div>
        </div>
    );
}

export default Cart;