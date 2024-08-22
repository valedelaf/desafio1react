import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardPizza = ({name, price, ingredients, img, desc}) => {
 const getingredients = () => (
  <ul>
{ingredients.map((ingredient, index) => (
  <li key={index} style={{listStyle: 'none'}}> 🍕 {ingredient} </li>
))}
    </ul>
 );
  return (
    <Card style={{ width: '35rem'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <h3 style={{textAlign: 'center'}}>Pizza {name} </h3> </Card.Title> 
          <h4>{getingredients()} </h4>
          <Card.Text style={{display:'flex', textAlign: 'center'}}>
          {desc}
        </Card.Text>
        <Card.Text>
         <h3 style={{textAlign: 'center'}}> Precio: ${price} </h3>
        </Card.Text>
        <Button variant="dark" className='mx-4 py-2'>Ver más</Button>
        <Button variant="dark">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza; 