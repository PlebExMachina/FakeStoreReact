import Cart from "./Cart";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from './utils/CartContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Checkout() {
    const {cart, dispatch} = useContext(CartContext);
    const totalCost = cart.items.reduce((a, b) => a + (b.quantity*b.price), 0);
    const navigator = useNavigate();
    const handleSubmit = () => {
        dispatch({type:"empty"});
        navigator("/#/");
    };
    return (
        <>
            <Cart></Cart>
            <h1 className="text-center">
                Total Cost : ${totalCost.toFixed(2)}
            </h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control type="text" placeholder="..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Credit Card Info</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                    <Form.Control type="text" placeholder="Last Name" />
                    <Form.Control type="text" placeholder="Credit Card Number" />
                    <Form.Control type="text" placeholder="CCV" />
                    <Form.Control type="text" placeholder="Expiration Date" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
export default Checkout;