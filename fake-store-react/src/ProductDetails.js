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
    useEffect(()=>{
        getProductByID(id).then((obj) => {
            setDetails(obj);
        });
    }, [id]);

    const {cart, dispatch} = useContext(CartContext);

    const handleAddToCart = () => {
        dispatch({type: "add", payload: details });
        navigator("/#/");
    }

    const FixedWidth = { width: "22rem" };

    return (
        details && <Card>
            <Card.Img variant="top" src={details.image} style={FixedWidth} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{details.title}</Card.Title>
                <Button variant="secondary" style={FixedWidth}>{details.price}</Button>
                <Button variant="warning" style={FixedWidth}>{details.category}</Button>
                <Card.Text>{details.description}</Card.Text>
                <Button variant="primary" style={FixedWidth} onClick={handleAddToCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
        

    );
}
export default ProductDetails;