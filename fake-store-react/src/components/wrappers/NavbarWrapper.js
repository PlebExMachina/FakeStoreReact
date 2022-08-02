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
    <Navbar bg="dark" expand="lg" variant="dark" className={`${styles.module} ${styles.body}`}>
      <Container>
        <Nav className="ml-auto">
          {logo}
        </Nav>
        <Nav className="mr-auto">
          {children.length ? (children.map((el, index) => <Link key={keyFunction(el, index)} to={el.props.to}>{el}</Link>)) : <Link to={children.props.to}>{children}</Link> }
        </Nav>
        </Container>
  </Navbar>
  );
}

export default NavbarWrapper;