import Header from "./Header"
import CardPizza from "./CardPizza"
import pizzeriaImagen from '../assets/img/header-pizzas.jpg'
//import pizzas from './pizzas'
import { useEffect, useState } from "react"


const Home = () => {
const [pizzas, setPizzas] = useState([])

const getPizzas = async () => {
    const respuesta = await fetch ('http://localhost:5000/api/pizzas')
    const pizzas = await respuesta.json()

    setPizzas(pizzas)
}
useEffect(() => {
    getPizzas()
}, [])

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