import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPizza = ({name, price, ingredients, img}) => {

    ingredients = ingredients.toString ()
    let ingredientes = ingredients.replace (/,/g, ', ');
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name} </Card.Title>
        <Card.Text>
          Ingredientes: 🍕 {ingredientes}
        </Card.Text>
        <Card.Text>
          Precio: ${price}
        </Card.Text>
        <Button variant="dark" className='mx-4 py-2'>Ver más</Button>
        <Button variant="dark">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPizza; 