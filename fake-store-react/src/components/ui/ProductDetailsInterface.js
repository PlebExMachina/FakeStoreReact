/*
    UI for interfacing with Product Details
        -- Increment
        -- Decrement
        -- Add to Cart
*/

import { useNavigate } from 'react-router-dom'
import { useState, useContext} from 'react'
import CartContextAPI from '../../utils/CartContext';

// Bootstrap
import Button from 'react-bootstrap/Button';

// CSS
import styles from './ProductDetailsInterface.module.css'

function ProductDetailsInterface(props) {
    // How many to add to cart.
    const [quantity, setQuantity] = useState(1);

    const navigator = useNavigate();

    // Get cart.
    const {dispatch} = useContext(CartContextAPI.CTX);

    // Adds quantity to cart.
    const handleAddToCart = () => {
        dispatch({type: "add", payload: {...props, quantity: quantity} });
        navigator("/");
    }

    return (
        <div className="d-flex justify-content-between">
            <Button variant="primary" className={`${styles.module} ${styles.button}`} onClick={handleAddToCart}>Add to Cart</Button>
            <div className="d-flex">
                <Button variant="warning" className={`${styles.module} ${styles.button}`} onClick={()=>{setQuantity(quantity - 1 <= 0 ? 1 : quantity-1)}}>-</Button>
                <p className="m-3">Quantity: {quantity}</p>
                <Button variant="warning" className={`${styles.module} ${styles.button}`} onClick={()=>{setQuantity(quantity+1)}}>+</Button>
            </div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    );
}
export default ProductDetailsInterface;