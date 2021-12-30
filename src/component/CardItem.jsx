import React,{useContext} from 'react'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

import {CartContext} from '../state/CartContext'

export default function CardItem({children, cartItem}) {
    const {addToCart, decrement} = useContext(CartContext)    

    return (
        <Card sx={{ minHeight: '350px', p: 2 }}>
            {children}
            <Box>
                <IconButton size="large" onClick={() => addToCart(cartItem)}>
                    <AddCircleIcon ></AddCircleIcon>
                </IconButton>
                <IconButton size="large" onClick={() => decrement(cartItem)}>
                    <IndeterminateCheckBoxIcon />
                </IconButton>
            </Box>
        </Card>
    )
}
