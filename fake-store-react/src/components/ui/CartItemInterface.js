/*
    UI for interfacing with CartItems
    -- Increment Item
    -- Decrement Item (Removes at 0)
    -- Remove Item From Cart
*/

// Utils
import CartContextAPI from '../../utils/CartContext';

// Boostrap
import Button from 'react-bootstrap/Button';

// React
import { useContext } from 'react'

// CSS
import styles from './CartItemInterface.module.css';

function CartItemInterface(props) {
    const {dispatch} = useContext(CartContextAPI.CTX);

    // Removes item entirely from cart.
    const removeFromCart = () => {
        dispatch({type: "clear", payload: props});
    };

    // Removes quantity items from cart. (Decrement)
    const removeItem = () => {
        dispatch({type: "remove", payload: props});
    };

    // Adds quantity items to cart. (Increment)
    const addItem = () => {
        dispatch({type: "add", payload: {...props, quantity: 1}});
    };

    return (
        <div className={`d-flex justify-content-between ${styles.module} ${styles.body}`}>
            <Button variant="primary" className={`${styles.module} ${styles.button}`} onClick={removeFromCart}>Remove From Cart</Button>
            <div className="d-flex">
                <Button variant="warning" className={`${styles.module} ${styles.button}`} onClick={removeItem}>-</Button>
                    <p className="m-3">Quantity: {props.quantity}</p>
                <Button variant="warning" className={`${styles.module} ${styles.button}`} onClick={addItem}>+</Button>
            </div>
        </div>
    );
}
export default CartItemInterface;