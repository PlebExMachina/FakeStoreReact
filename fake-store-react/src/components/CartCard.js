// Sub Components
import CardWrapper from './wrappers/CardWrapper';
import CartItemInterface from './ui/CartItemInterface';
import ProductBody from './ProductBody';

// CSS
import styles from './CartCard.module.css';

function CartCard(props) {
    return (
            <CardWrapper image={props.image} className={`${styles.module} ${styles.body}`}>
                <ProductBody {...props}/>
                <CartItemInterface {...props}/>
            </CardWrapper>
    );
}

export default CartCard;