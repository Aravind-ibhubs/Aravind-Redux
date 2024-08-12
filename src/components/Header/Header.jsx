import './header.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = function({info}) {
    return (
        <>
            <Navbar bg='primary' variant='dark' className='navbar'>
                <Container>
                    <Navbar.Brand to="/">
                        <strong>Product App</strong>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Product</Nav.Link>
                        <Nav.Link as={Link} to="/product" className="nav-link">Post Product</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
