import { useParams, useNavigate } from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import {getProductByID} from './utils/FakeStoreAPI'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartContext from './utils/CartContext';

function ProductDetails() {
    const navigator = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(()=>{
        getProductByID(id).then((obj) => {
            setDetails(obj);
        });
    }, [id]);

    const {cart, dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({type: "add", payload: {...details, quantity: quantity} });
        navigator("/#/");
    }

    const FixedWidth = { width: "22rem" };
    const SmallButton = { width: "3rem" };
    return (
        details && <Card>
            <Card.Img variant="top" src={details.image} style={FixedWidth} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{details.title}</Card.Title>
                <Button variant="secondary" style={FixedWidth}>{details.price}</Button>
                <Button variant="warning" style={FixedWidth}>{details.category}</Button>
                <Card.Text>{details.description}</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="primary" style={FixedWidth} onClick={handleAddToCart}>Add to Cart</Button>
                    <div className="d-flex">
                        <Button variant="warning" style={SmallButton} onClick={()=>{setQuantity(quantity - 1 <= 0 ? 1 : quantity-1)}}>-</Button>
                        <p className="m-3">Quantity: {quantity}</p>
                        <Button variant="warning" style={SmallButton} onClick={()=>{setQuantity(quantity+1)}}>+</Button>
                    </div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </Card.Body>
        </Card>
        

    );
}
export default ProductDetails;