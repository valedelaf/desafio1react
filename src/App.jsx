import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/pizza/p001" element={<Pizza/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
