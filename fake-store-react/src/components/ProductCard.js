import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({id, title, price, description, category, image, rating}) {
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`./${id}`);
    };

    return (
            <Card className={`${styles.card} ${styles.product} col-xs-4`}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary" onClick={toDetails}>Details</Button>
                </Card.Body>
            </Card>
    );
}
export default ProductCard;