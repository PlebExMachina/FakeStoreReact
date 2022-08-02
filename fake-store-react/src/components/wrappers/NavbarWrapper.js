/*
    Utilizes Logo element and children to build up a Bootstrap Navbar.
    Link elements are injected into the children with provided 'to' properties.
*/

// Utils
import RandomKey from '../../utils/RandomKey';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// React
import { Link } from 'react-router-dom';

// CSS
import styles from './NavbarWrapper.module.css';

function NavbarWrapper({logo, keyFunction, children}) {
    // Use specified Key function if children are dynamic.
    keyFunction = keyFunction || RandomKey
    return (
    <Navbar bg="light" expand="lg" className={`${styles.module} ${styles.body}`}>
        <Container >
            <Link to="/">{logo}</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {children.map((el, index) => <Link key={keyFunction(el, index)} to={el.props.to}>{el}</Link>)}
                </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarWrapper;