/*
  Faux Form for Shipping Info
*/

// Bootstrap
import Form from 'react-bootstrap/Form';

// CSS
import styles from './ShippingInfo.module.css';

function ShippingInfo() {
    return (
    <div className={`${styles.module} ${styles.body} mb-3 text-light`}>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name..." />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control type="text" placeholder="..." />
        </Form.Group>
    </div>
    );
}
export default ShippingInfo;