import Header from "./Header"
import CardPizza from "./CardPizza"
import pizzeriaImagen from '../assets/img/header-pizzas.jpg'
import pizzas from './pizzas'


const Home = () => {
    return (
    <>
    <Header 
    imagen={pizzeriaImagen}
    title="¡Pizzería Mamma Mía!"
    subtitulo="Las mejores pizzas que podrás encontrar">
    </Header>

    <div className='d-flex justify-content-around my-5 flex-wrap'>
    {pizzas.map(({ desc, id, img, ingredients, name, price }, index) => {
    return (
    <CardPizza
key={index}
name={name}
price={price}
ingredients={ingredients}
img={img}
desc= {desc}
id = {id}>
    
</CardPizza>
    );
})}
</div>
    </>
    )}
    export default Home;