// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import styles from './ProductBody.module.css';

function ProductBody({title, price, description}) {
    return (
        <div className={`${styles.module} ${styles.body}`}>
            {title && <Card.Title>{title}</Card.Title>}
            {price && <Card.Text>${price.toFixed(2)}</Card.Text>}
            {description && <Card.Text>{description}</Card.Text>}
        </div>
    );
}

export default ProductBody;