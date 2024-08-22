import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

const NavBar = () => {
    const token = false;
    const [carrito, setCarrito] = useState([]);
    
    const getTotal = () => {
      return carrito.reduce((total, item) => total + item.price, 0);
  };
  
  const agregarPizza = (pizza, cantidad) => {
    setCarrito(prevCarrito => [
      ...prevCarrito,
      { ...pizza, cantidad }
    ]);
  };

    return (
    <Navbar fixed='top' collapseOnSelect expand="lg" style={{backgroundColor: '#a52a2a', color: 'white', width:'100vw', marginTop: '0px', height: '5vw', fontSize: '20px'}}>
      <Container>
        <Navbar.Brand style={{color: 'white'}}href="#home">Pizzería Mamma Mía </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: 'white'}} href="#features">🍕Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#pricing">{token ? '🔓Profile' : '🔓Register'}</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#pricing">{token ? '🔓Logout' : '🔓Login'}</Nav.Link>
            <NavDropdown style={{color: 'white', fontSize: '35px', marginLeft: '500px'}} title="🛒" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">
                 </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link style={{color: 'white'}} href="#deets"><Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '20px'}}> 💲 Pagar</Button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavBar;
