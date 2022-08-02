// Bootstrap
import Form from 'react-bootstrap/Form';

// CSS
import styles from './CreditCardInfo.module.css';

function CreditCardInfo() {
    return (
    <div className={`${styles.module} ${styles.body} mb-3`}>
      <Form.Group className="mb-3">
        <Form.Label>Billing Address</Form.Label>
        <Form.Control type="text" placeholder="..." />
      </Form.Group>
      <Form.Group>
          <Form.Label>Credit Card Info</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
          <Form.Control type="text" placeholder="Last Name" />
          <Form.Control type="text" placeholder="Credit Card Number" />
          <Form.Control type="text" placeholder="CCV" />
          <Form.Control type="text" placeholder="Expiration Date" />
      </Form.Group>
    </div>
    );
}
export default CreditCardInfo;