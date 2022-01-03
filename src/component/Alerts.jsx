import React,{useContext,useState} from 'react'

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

import Slide from '@mui/material/Slide'
import Alert from '@mui/material/Alert'

import {CartContext} from '../state/CartContext'

export default function Alerts({alertType}) {
    const {Cart, alertOpen} = useContext(CartContext)     

    return (
        <React.Fragment>                                    
            <Slide in={alertType === 'success' ? true : false} timeout={300}>
                <Box sx={{ position: 'fixed', top: 0, left: {md:'40%', xs:'8%'}, transform: {md:'translate(-50%, -50%)', xs:'translate(-10%, -50%)'}, pt: 15, zIndex: 99999 }}>
                    <Alert variant="filled" severity="success">
                        Data Berhasil Ditambahkan Ke Keranjang!
                    </Alert>
                </Box>
            </Slide>
            <Slide in={alertType === 'delete' ? true : false} timeout={300}>
                <Box sx={{ position: 'fixed', top: 0, left: {md:'40%', xs:'8%'}, transform: {md:'translate(-50%, -50%)', xs:'translate(-10%, -50%)'}, pt: 15, zIndex: 99999 }}>
                    <Alert variant="filled" severity="warning">
                        Data Berhasil Dihapus Dari Keranjang!
                    </Alert>
                </Box>
            </Slide>
        </React.Fragment>
    )
}
