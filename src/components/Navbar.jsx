import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const total = 25000;
    const token = false;
    const precioTotal = Intl.NumberFormat("de-DE").format(total);

    return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'black', width:'100vw', marginTop: '0px'}}>
      <Container>
        <Navbar.Brand style={{color: 'white'}}href="#home">Pizzería Mamma Mía </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'white'}} href="#features">🍕Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#pricing">{token ? '🔓Profile' : '🔓Register'}</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#pricing">{token ? '🔓Logout' : '🔓Login'}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={{color: 'white'}} href="#deets">🛒Total: ${precioTotal}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
