import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import Pizza from './components/Pizza'


function App() {

  return (
    <>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      {/*<RegisterPage></RegisterPage>*/}
      {/*<LoginPage></LoginPage>*/}
      {/*<Cart></Cart>*/}
      <Pizza></Pizza>
      <Footer></Footer>
    </>
  )
}

export default App
