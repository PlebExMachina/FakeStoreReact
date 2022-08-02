/*
  Wrapper for a Bootstrap Card with provided image properties and children elements for the body.
*/

// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import styles from './CardWrapper.module.css';

function CardWrapper({children, image, onDoubleClick, config}) {
  const useConfig = config || false;
  // Injected double click event
  onDoubleClick = onDoubleClick || (() => {});

    return (
            <Card className={`${styles.module} ${styles.body} text-center col-xs-4 d-flex justify-content-between ${useConfig ? styles.alt : ''}`} onDoubleClick={onDoubleClick}>
                <Card.Img variant="top" src={image} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  {children}
                </Card.Body>
            </Card>
    );
}
export default CardWrapper;