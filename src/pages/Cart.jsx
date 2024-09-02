import CartPizzaCard from "../components/CartPizzaCard"
import pizzas from '../components/pizzas'
import { useState } from "react"
import NavBar from "../components/Navbar"
import { Button } from "react-bootstrap"


const Cart = () => {
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
    <>

<NavBar></NavBar>
  <div style={{marginLeft: '300px'}}>
        <h2 style={{marginTop: '100px', padding: '50px'}}>🛒 Mi Carrito:</h2>
        <div style={{border: '1px solid grey', width: '400px'}}>
        <ul style={{listStyle: 'none'}}>
          {carrito.map((item, index, img) => (
            <li key={index}> 🍕
              {item.cantidad} x {item.name} (${item.price} c/u)
            </li>
          ))}
        </ul>
        <div className="cart-total">
                <h3>Total: ${getTotal()}</h3>
            </div>
            </div>
            <Button style={{borderColor: 'white', backgroundColor: '#a52a2a', fontWeight: 'bold', fontSize: '25px', margin: '30px'}}> 💲 Pagar</Button>
      </div>

    

    <div className='d-flex justify-content-around my-5 flex-wrap'>
    {pizzas.map(({ desc, id, img, ingredients, name, price }, index) => {
    return (
    <CartPizzaCard
key={index}
name={name}
price={price}
ingredients={ingredients}
img={img}
desc= {desc}
id = {id}
onAgregar={agregarPizza}>
    
</CartPizzaCard>
    );
})}
 
</div>
    </>
    )}
    export default Cart;


