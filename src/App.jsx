import React from 'react';


import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import LoaderGif from './assets/Loader.gif'
import { Routes, Route, Link } from "react-router-dom";


import Navbar from './component/Navbar'

const Home = React.lazy(() => import("./component/Home"));
const Book = React.lazy(() => import("./component/Book"));
const Cart = React.lazy(() => import("./component/Cart"));
const Auth = React.lazy(() => import("./component/Auth"));
const Profile = React.lazy(() => import("./component/Profile"));


import CartProvider from './state/CartContext'
import UserProvider from './state/UserContext'



const Loader = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      minWidth: '100vh', 
      minHeight: '50vh', 
      justifyContent:'center', 
      alignItems: 'center', 
      pt:'30%'
      }}>
      <img src={LoaderGif} width='auto' height='auto' alt='loader'/>
    </Box>
    
  )
}

function App() {
  
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <Container maxWidth="lg">
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
              } loading/>
              <Route path="/Book/:bookId" element={
              <React.Suspense fallback={<Loader />}>
                <Book />
              </React.Suspense>
              } />
              <Route path="/Cart" element={
              <React.Suspense fallback={<Loader />}>
                <Cart />
              </React.Suspense>
              } />
              <Route path="/Auth" element={
                <React.Suspense fallback={<Loader />}>
                  <Auth />
                </React.Suspense>
              } /> 
              <Route path="/Profile" element={
                <React.Suspense fallback={<Loader />}>
                  <Profile />
                </React.Suspense>
              } /> 
            </Routes>        
          </Container>
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App
