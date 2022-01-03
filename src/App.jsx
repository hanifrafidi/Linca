import React from 'react';


import Container from '@mui/material/Container'
import { Routes, Route, Link } from "react-router-dom";


import Navbar from './component/Navbar'

const Home = React.lazy(() => import("./component/Home"));
const Book = React.lazy(() => import("./component/Book"));
const Cart = React.lazy(() => import("./component/Cart"));
const Auth = React.lazy(() => import("./component/Auth"));
const Profile = React.lazy(() => import("./component/Profile"));


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
              <Route path="/" element={
              <React.Suspense fallback={<h1>Loading ...</h1>}>
                <Home />
              </React.Suspense>
              } loading/>
              <Route path="/Book/:bookId" element={
              <React.Suspense fallback={<h1>Loading ...</h1>}>
                <Book />
              </React.Suspense>
              } />
              <Route path="/Cart" element={
              <React.Suspense fallback={<h1>Loading ...</h1>}>
                <Cart />
              </React.Suspense>
              } />
              <Route path="/Auth" element={
                <React.Suspense fallback={<h1>Loading ...</h1>}>
                  <Auth />
                </React.Suspense>
              } /> 
              <Route path="/Profile" element={
                <React.Suspense fallback={<h1>Loading ...</h1>}>
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
