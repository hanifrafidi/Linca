import React,{useContext} from 'react'
import { 
    Typography,
    Card,
    Grid,
    IconButton,
    Box,
    Container,
    Button,
    Link
} from '@mui/material'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';

import { useLocation, Link as Links} from "react-router-dom";

import Logo from '../assets/Logo.png'

import {UserContext} from '../state/UserContext'
import {CartContext} from '../state/CartContext'
import Alerts from './Alerts'

export default function Navbar() {
    const {Cart, alertType} = useContext(CartContext)

    let item = 0;
    const totalItem = () => {
        for ( var i in Cart) {
            item += Cart[i].count
        }
        return item
    }

    const {user} = useContext(UserContext)

    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 1, my: 4, display: location.pathname === '/Auth' ? 'none' : '' }}>
          {console.log(user)} 
          {console.log('user storage1 : ',localStorage.getItem("user") === null ? true : false)}
          {console.log('user storage2 : ',localStorage.getItem("user") === '' ? true : false)}
          {console.log('user storage3 : ',localStorage.getItem("user") === undefined ? true : false)}
          {console.log('user :',localStorage.getItem('user'))}
          {console.log(typeof localStorage.getItem("user"))}
          <Alerts alertType={alertType} />
          <AppBar position="static"color="transparent" elevation={0}> 
            <Toolbar disableGutters={true} sx={{ display: 'flex', alignItems: 'center'}}>                            
                <Box sx={{ flexGrow: 1 }}>             
                    <Links to='/'>
                      <img src={Logo} width="150" height="60" alt="logo" />                                
                    </Links>
                </Box>              
              <nav>                
                  <IconButton size="large" aria-label="show 4 new mails" sx={{mx: 2}} component={Links} to='/Cart'>
                    { Cart.length > 0 ? 
                    <Badge badgeContent={totalItem()} color="error">
                        <LocalMallIcon />
                    </Badge>
                     : 
                     <LocalMallIcon />
                     }
                    
                </IconButton>                
              </nav>
              { 
                user.userData != '' ?
                  <Button variant='text' color='primary' sx={{ my: 1}} component={Links} to="/Profile">Welcome, {user.userData.givenName}</Button>
                 :                 
                 <Button variant="text" color="inherit" sx={{ my: 1}} component={Links} to='/Auth'>
                    Login
                  </Button>
              }              
            </Toolbar>
          </AppBar>          
        </Box>
      );
}
