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
        dispatch({type: "remove", payload: props});
    };

    return (
            <Card className={`${styles.card} ${styles.product} col-xs-4`}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Button variant="primary" onClick={removeFromCart}>Remove From Cart</Button>
                </Card.Body>
            </Card>
    );
}
export default CartCard;