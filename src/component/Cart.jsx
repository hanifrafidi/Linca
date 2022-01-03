import React,{useContext, useState} from 'react'
import { Routes, Route, Link as Links, useParams } from "react-router-dom";

import { 
    Typography,
    Card,
    Grid,
    IconButton,
    Box,
    Container,
    Link,
    Button,
    Paper,
    Divider
} from '@mui/material'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import {CartContext} from '../state/CartContext'

export default function Cart() {
    const { Cart, decrement, addToCart, deleteFromCart } = useContext(CartContext);

    let price = 0;
    const totalPrice = () => {
        for ( var i in Cart) {
            const itemPrice = Cart[i].price * Cart[i].count
            price = price + itemPrice
        }
        return price
    }

    return (
        <div>            
            <Typography variant="h5" sx={{ mt: {md: 15, xs: 12}}}>Your Cart</Typography>
            <Grid container sx={{ mt: 3, pb: 30 }}>
                <Grid item md={8} xs={12}>
                        {
                            Cart.map((item,index) => {
                                return(
                                    <Grid container key={index} sx={{ mb: 4}} >
                                        <Grid item xs={4} component={Links} to={'/Book/' + item.id}>
                                            <Box component='img' sx={{                                                
                                                width: '100%',
                                                height: {md:'380px', xs:'22vh'},
                                            }} 
                                                src={item.cover}
                                            />
                                        </Grid>
                                        <Grid item xs={8} sx={{pl: {md: 3, xs: 2}, pr: {md: 4, xs: 0 } }}>
                                            <Typography variant="h6" sx={{mb: 1}}>{item.title}</Typography>
                                            <Typography variant="h6" color="text.secondary" sx={{ mt: 2}}>$ {item.price}</Typography>
                                            <Box sx={{ display: {md: 'flex', xs:'none'}, mt: 5, alignItems: 'center', justifyContent : 'flex-end'}}>
                                                <IconButton sx={{ mr: 3}} onClick={() => decrement(item)} disabled={item.count === 1 ? true : false} color="primary">
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography variant="h5" sx={{ mr: 3 }} color="inherit"> {item.count} </Typography>                                                
                                                <IconButton color='primary' sx={{ mr: 3 }} onClick={() => addToCart(item)}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                                <IconButton color='inherit' onClick={() => deleteFromCart(item)}>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Box>                                            
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: {md: 'none', xs:'block'}}}>
                                            <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', justifyContent : 'flex-end'}}>
                                                <IconButton sx={{ mr: 2}} onClick={() => decrement(item)} disabled={item.count === 1 ? true : false} color="primary">
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography variant="h5" sx={{ mr: 2 }} color="inherit"> {item.count} </Typography>                                                
                                                <IconButton color='primary' sx={{ mr: 2 }} onClick={() => addToCart(item)}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                                <IconButton color='inherit' onClick={() => deleteFromCart(item)}>
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Box> 
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }                    
                </Grid>                
                <Grid item md={4} xs={12}>
                    <Paper elevation={0} variant="outlined" 
                        sx={{ 
                            ml: {md:1, xs:0}, 
                            px: {md:3, xs: 2}, 
                            py: 3, 
                            position: 'fixed', 
                            bottom: {md: 'auto', xs: 30},
                            minWidth: {md: 0, xs: '90%'}
                        }}>
                        { Cart.map((item,index) => {
                            return(
                                <Box sx={{ display: {md:'flex', xs: 'none'}, mb: 2}} key={index}>
                                    <Typography variant="subtitle1" color="text.secondary" 
                                    sx={{ 
                                        flexGrow: 1, 
                                        display: '-webkit-box', 
                                        maxWidth: 220,
                                        minWidth: 220, 
                                        textOverflow: 'ellipsis', 
                                        overflow: 'hidden', 
                                        wordWrap: 'break-word', 
                                        WebkitLineClamp : '2', 
                                        WebkitBoxOrient: 'vertical',
                                        mr: 2
                                    }}>
                                         {item.title} 
                                     </Typography>
                                    <Typography variant="subtitle1" sx={{ mr: 5}}> {item.count} </Typography>
                                    <Typography variant="subtitle1"> $ {item.count * item.price} </Typography>
                                </Box>
                            )
                        })}

                        <Divider sx={{ mt: 5, mb: 2,  display: {md:'block', xs: 'none'}}} />
                        <Box sx={{ display: 'flex', mb: 3}}>
                            <Typography variant="h5" sx={{ flexGrow: 1}}>Total :</Typography>
                            <Typography variant="h5" color="primary">$ {totalPrice()}</Typography>
                        </Box>
                        <Button variant="contained" size="large" color="primary" sx={{ color: 'white', py: 1.5}} fullWidth={true}>Go To Payment</Button>
                    </Paper>
                </Grid>
            </Grid>           
            {console.log(Cart)}
            {console.log('total : ' + price)} 
        </div>
    )
}
