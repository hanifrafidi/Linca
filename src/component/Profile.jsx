import React,{useState,useContext,useEffect} from 'react'
import {UserContext} from '../state/UserContext'

import { 
    Typography,
    Card,
    Grid,
    IconButton,
    Box,
    Container,
    Button,
    Link,    
    Paper,
    Divider
} from '@mui/material'

import {Link as Links, useNavigate} from 'react-router-dom'

export default function Profile() {
    const {logout,user} = useContext(UserContext)    
    const navigate = useNavigate()    
    
    const check = user.userData != '' ? true : false;
    const checkUser = () => {        
        if(!check){
            return navigate("/Auth", {replace: true})
        }
    }        

    useEffect(() => {
        checkUser()
    });

    return (
        <div>                                    
            <Grid container  sx={{py: 10}}>
                <Grid item md={3} xs={12} sx={{display: 'flex', justifyContent : {md: 'space-between', xs: 'center'} }}>
                    <Box sx={{ py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: {md: '70vh', xs: '35vh'}}}>
                        <img 
                            src={user.userData.imageUrl}
                            width="150"
                            height="150" 
                            alt="avatar-image"
                            loading='lazy'
                            style={{ borderRadius: '50%', backgroundSize: 'contain' }}
                        />                    
                        <Typography variant="h5" sx={{ my: 3, flexGrow: {md:1, xs:0}}}>{user.userData.givenName}</Typography>                    
                        <Link onClick={logout} color="error" variant="h5" underline="hover">Logout</Link>
                    </Box>
                    <Divider orientation='vertical' sx={{ display: {md: 'block', xs: 'none'}}}/>
                </Grid>
                <Grid item md={9} xs={12} sx={{ pl: {md: 5, xs: 0}}}>
                    <Box sx={{ mb: 5, minHeight: 250}}>
                        <Typography variant="h6">Your Liked Books</Typography>                        
                    </Box>
                    <Box>
                        <Typography variant="h6">Your Transactions</Typography>
                    </Box>
                </Grid>
            </Grid>        
        </div>
    )
}
