import {useContext} from 'react'
import CartContext from '../utils/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './CartCard.module.css';
import { useNavigate } from 'react-router-dom';

function CartCard(props) {
    const navigate = useNavigate();
    const {cart, dispatch} = useContext(CartContext);

    const {id, title, price, description, category, image, rating, quantity} = props;

    const removeFromCart = () => {
        dispatch({type: "clear", payload: props});
    };

    const removeItem = () => {
        dispatch({type: "remove", payload: props});
    };
    const addItem = () => {
        dispatch({type: "add", payload: {...props, quantity: 1}});
    };

    const FixedWidth = { width: "22rem" };
    const SmallButton = { width: "3rem" };
    return (
            <Card className={`${styles.card} ${styles.product} col-xs-4`}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <div className="d-flex justify-content-between">
                    <Button variant="primary" style={FixedWidth} onClick={removeFromCart}>Remove From Cart</Button>
                    <div className="d-flex">
                        <Button variant="warning" style={SmallButton} onClick={removeItem}>-</Button>
                        <p className="m-3">Quantity: {quantity}</p>
                        <Button variant="warning" style={SmallButton} onClick={addItem}>+</Button>
                    </div>
                </div>
                </Card.Body>
            </Card>
    );
}
export default CartCard;