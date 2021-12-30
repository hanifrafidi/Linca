import React,{useState, useContext} from 'react'

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

import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/Logo.png'

import {Link as Links} from 'react-router-dom'

import { GoogleLogin,useGoogleLogin } from 'react-google-login';

import { UserContext } from '../state/UserContext'

export default function Auth() {
    const {user, login, logout} = useContext(UserContext)   
        
    return (
        <div>            
            <Grid container justifyContent='center'>
                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', mt: 15, justifyContent: 'center' }} component={Links} to='/'>
                        <img src={Logo} width="250" height="100" alt="logo" />
                    </Box>                    
                    <Card sx={{mt: 10, px: 6, pt: 5, pb: 8}}>                        
                         {
                         user.userData != '' ? 
                            <Button variant='text' color='inherit' size="medium" fullWidth={true} onClick={()=> logout()} sx={{mt: 4, py: 1}}>
                                <Typography variant='subtitle1' textAlign='center'>Logout</Typography>
                            </Button> 
                         : 
                         <div>
                        <Typography variant='h6' textAlign='center'>Login With</Typography>                        
                        <Typography variant='body2' textAlign='center' color="text.secondary" sx={{mt:1, mb: 3}}>You can use your favorite account</Typography>                            
                            <GoogleLogin
                            clientId="343523054454-r5g42frbo21mvhebv3ieigd9ldrd6gfr.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button variant='outlined' color="warning" size="small" fullWidth={true} sx={{mt: 1}} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <IconButton component='div' color="inherit" sx={{ mr: 1}}>
                                        <GoogleIcon />
                                    </IconButton>
                                    <Typography variant='subtitle1' textAlign='center'>Google</Typography>
                                </Button>         
                                )}
                            onSuccess={login}
                            onFailure={login}
                            cookiePolicy={'https://linca.vercel.app'}
                            tag='a'
                            />                                                    
                        <Button variant='outlined' color="info" size="small" fullWidth={true} sx={{mt: 1}}>
                            <IconButton component='div' color="inherit" sx={{ mr: 1}}>
                                <TwitterIcon />
                            </IconButton>
                            <Typography variant='subtitle1' textAlign='center'>Twitter</Typography>
                        </Button> 
                        </div>                                                               
                        }      
                    </Card>                                        
                </Grid>
            </Grid>
        </div>
    )
}
