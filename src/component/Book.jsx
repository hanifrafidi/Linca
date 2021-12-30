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
import Alerts from './Alerts'

import {CartContext} from '../state/CartContext'

export default function Book() {
    const {addToCart, alertType, Cart} = useContext(CartContext)
    
    const { bookId } = useParams();
    const Book = Books.find(
        Books => Books.id === parseInt(bookId)
    );    

    const [alertOpen, setAlert] = useState(false)
    const moveToCart = (Book) => {
        addToCart(Book);
        
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 1500);
    }

    return (
        <div>        
        <Grid container sx={{ mt: 12}}>                                    
            <Grid item sm={3}>
                <Box>                    
                    <Paper elevation={0} sx={{
                                        backgroundImage: `url(${Book.cover})`,
                                        backgroundSize : 'cover',
                                        backgroundPosition: 'center',
                                        width: 'auto',
                                        height: '440px',
                    }} />
                </Box>
                <Box sx={{ display: "flex", mt: 3}}>
                    <Grid container disabledgutters="true">
                        <Grid item xs={3}>
                            <img src="https://images.unsplash.com/photo-1598960087461-556c5a1f864a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2NDAwNjA2Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" height="50" width="auto"></img>
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://images.unsplash.com/photo-1598960087461-556c5a1f864a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2NDAwNjA2Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" height="50" width="auto"></img>        
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://images.unsplash.com/photo-1598960087461-556c5a1f864a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2NDAwNjA2Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" height="50" width="auto"></img>        
                        </Grid>
                        <Grid item xs={3}>
                            <img src="https://images.unsplash.com/photo-1598960087461-556c5a1f864a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ym9va3x8fHx8fDE2NDAwNjA2Mjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" height="50" width="auto"></img>        
                        </Grid>
                    </Grid>                    
                </Box>
            </Grid>
            <Grid item sm={9} sx={{pl: 5}} >
                <Typography variant="h5" sx={{ mb: 2}}>{Book.title}</Typography>
                
                <Box sx={{ display: 'flex', mb: 2}}>                    
                    <Typography variant="subtitle1" sx={{ mb: 2, mr: 2}}>Genre :</Typography>
                    { Book.genres.map((genre,index) => (
                        <Typography key={index} variant="subtitle1" color="text.secondary" sx={{ mr: 2}}>{genre}</Typography>
                    ))}                                        
                </Box>
                <Box>
                    <Typography variant="body1">{Book.description}</Typography>                    
                </Box>
                
                    <Button variant="contained" size="large" sx={{mt: 3, bgColor: 'success.light', color: 'white'}} onClick={() => addToCart(Book)}>Add To Cart</Button>
                
            </Grid>            
            {console.log(Cart)}            
        </Grid>        
        </div>
    )
}
