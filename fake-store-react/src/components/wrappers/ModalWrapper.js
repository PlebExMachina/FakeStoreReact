/*
  Wrapper for a Bootstrap Modal
*/


// Bootstrap
import Modal from 'react-bootstrap/Modal';

// React
import { useNavigate } from 'react-router-dom';

// CSS
import styles from './ModalWrapper.module.css';


function ModalWrapper({children, title, to}) {
  // Navigate on close.
  const navigate = useNavigate();
  const handleClose = (() => { navigate(to); });

    return (
        <div>
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                    {children}
            </Modal.Body>
        </Modal>
        </div>
    );
}
export default ModalWrapper;