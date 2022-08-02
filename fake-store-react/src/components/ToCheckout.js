// Bootstrap
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function ToCheckout(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/checkout");
    }
    return(
        <Button onClick={handleClick}>To Checkout</Button>
    );
}

export default ToCheckout;