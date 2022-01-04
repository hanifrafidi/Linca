import React,{useContext,useState} from 'react'

import { Routes, Route, Link as Links, useParams } from "react-router-dom";

import { 
    Typography,
    Card,
    Grid,
    IconButton,
    Box,
    Container,    
    Button,
    Link,
    Paper
} from '@mui/material'

import Books from '../data/data'

import {CartContext} from '../state/CartContext'

export default function Book() {
    const {addToCart, Cart} = useContext(CartContext)
    
    const { bookId } = useParams();
    const Book = Books.find(
        Books => Books.id === parseInt(bookId)
    );        

    return (
        <div>        
        <Grid container sx={{ mt: {md:15, xs: 12}, mb: 15}}>                                    
            <Grid item md={3} xs={12} 
                sx={{ 
                    display: 'flex', 
                    justifyContent: {md: 'none', xs: 'center'}, 
                    mb: 5
                }}>
                <Paper component='img' elevation={3}
                sx={{
                    backgroundImage: `url(${Book.cover})`,                    
                    width: {md: '100%', xs: 'auto'},
                    height: {md: '440px', xs: '40vh'}
                }}
                    src= {Book.cover} 
                >                    
                </Paper>                
            </Grid>
            <Grid item md={9} xs={12} sx={{pl: {md: 5, xs: 0}}} >
                <Typography variant="h6" sx={{ mb: 2}}>{Book.title}</Typography>                
                <Box sx={{ display: 'flex', mb: 2}}>                    
                    <Typography variant="subtitle1" sx={{ mb: 2, mr: 2}}>Genre :</Typography>
                    { Book.genres.map((genre,index) => (
                        <Typography key={index} variant="subtitle1" color="text.secondary" sx={{ mr: 2}}>{genre}</Typography>
                    ))}                                        
                </Box>
                <Box>
                    <Typography variant="body1">{Book.description}</Typography>                    
                </Box>
                <Box sx={{ display: 'flex', justifyContent: {md: 'flex-start', xs:'center'} }}>
                    <Button variant="contained" size="large" sx={{mt: 3, bgColor: 'success.light', color: 'white', mx: {md: 0, xs: 'auto'}}} onClick={() => addToCart(Book)}>Add To Cart</Button>
                </Box>
            </Grid>            
            {console.log(Cart)}            
        </Grid>        
        </div>
    )
}
