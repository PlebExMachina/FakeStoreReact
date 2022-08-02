// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import styles from './CardWrapper.module.css';

function CardWrapper({children, image, onDoubleClick}) {
  // Injected double click event
  onDoubleClick = onDoubleClick || (() => {});

    return (
            <Card className={`${styles.module} ${styles.body} text-center col-xs-4 d-flex justify-content-between`} onDoubleClick={onDoubleClick}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  {children}
                </Card.Body>
            </Card>
    );
}
export default CardWrapper;