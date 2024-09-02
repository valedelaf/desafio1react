import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../pages/Profile';
const NavBar = () => {
    const token = true;
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
    <Navbar fixed='top' collapseOnSelect expand="lg" style={{backgroundColor: '#a52a2a', color: 'white', width:'100vw', marginTop: '0px', height: '10vh', fontSize: '20px'}}>
      <Container>
        <Navbar.Brand style={{color: 'white'}}>Pizzería Mamma Mía </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{fontSize: '20px'}} className="me-auto">
            <Link to= "/"style={{color: 'white'}}>🍕Home</Link>
            <Link to= "/profile" style={{color: 'white'}}>🔓{Profile()}</Link>
            <Link to= "/login" style={{color: 'white'}}>🔓Login</Link>
            <Link to= "/register" style={{color: 'white'}}>🔓Regístrate</Link>
           <Link to= "/cart" style={{color: 'white', marginLeft: '500px', marginBottom: '5px'}} > 🛒Total: ${getTotal()}
            </Link>
          </Nav>
          <Nav>
            <Nav.Link style={{color: 'white'}}><Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '20px'}}> 💲 Pagar</Button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavBar;
