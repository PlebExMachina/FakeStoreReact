/*
    The checkout page has a faux form and displays items in the cart, exposes the cart UI, and provides an "exit point" for a transaction.
    Completing the transaction clears the cart.
*/

// Utils
import CartContextAPI from '../../utils/CartContext';

// React
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Sub Pages
import Cart from "./Cart";

// Sub Components
import CreditCardInfo from "../../components/forms/CreditCardInfo";
import ShippingInfo from "../../components/forms/ShippingInfo";

// CSS
import styles from './Checkout.module.css';
function Checkout() {
    const {cart, dispatch} = useContext(CartContextAPI.CTX);
    const totalCost = cart.items.reduce((a, b) => a + (b.quantity*b.price), 0);
    const navigator = useNavigate();

    // Empty Cart then navigate to front page.
    const handleSubmit = () => {
        dispatch({type:"empty"});
        navigator("/");
    };

    return (
        <div className={`${styles.module} ${styles.body}`}>
            <Cart/>
            <h1 className="text-center">Total Cost : ${totalCost.toFixed(2)}</h1>
            <Form onSubmit={handleSubmit}>
                <ShippingInfo/>
                <CreditCardInfo/>
                <Button variant="primary" type="submit" value="submit">Submit</Button>
            </Form>
        </div>
    );
}
export default Checkout;