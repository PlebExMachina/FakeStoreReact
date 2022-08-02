/*
    Specialization of the card that contains product information.
*/

// React
import { useNavigate } from 'react-router-dom';

// Sub Components
import CardWrapper from './wrappers/CardWrapper';
import ProductBody from './ProductBody';

// CSS
import styles from './ProductCard.module.css';

function ProductCard(props) {
    const navigate = useNavigate();
    const toDetails = () => {
        navigate(`./products/${props.id}`);
    };

    const localDoubleClick = props.onDoubleClick || toDetails;

    return (
        <CardWrapper image={props.image} onDoubleClick={localDoubleClick} config={props.config} className={`${styles.module} ${styles.body}`}>
            <ProductBody {...props}/>
            {props.children}
        </CardWrapper>
    );
}
export default ProductCard;