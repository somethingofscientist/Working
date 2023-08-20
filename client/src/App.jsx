import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route  path='/' element={ <Home /> } />
        <Route  path='/login' element={ <Login /> } />
        <Route  path='/register' element={ <Register /> } />
      </Routes>
    </>
  )
}

export default App
