import './App.css'

import Container from '@mui/material/Container'
import { Routes, Route, Link } from "react-router-dom";


import Navbar from './component/Navbar'
import Home from './component/Home'
import Book from './component/Book'
import Cart from './component/Cart'
import Auth from './component/Auth'
import Profile from './component/Profile'

import CartProvider from './state/CartContext'
import UserProvider from './state/UserContext'

function App() {
  
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <Container maxWidth="lg">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} loading/>
              <Route path="/Book/:bookId" element={<Book />} />
              <Route path="/Cart" element={<Cart />} />         
              <Route path="/Auth" element={<Auth />} /> 
              <Route path="/Profile" element={<Profile />} /> 
            </Routes>        
          </Container>
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App
