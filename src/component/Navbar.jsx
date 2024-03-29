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
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar'

import { useLocation, Link as Links} from "react-router-dom";

import Logo from '../assets/Logo.png'

import {UserContext} from '../state/UserContext'
import {CartContext} from '../state/CartContext'
import Alerts from './Alerts'

export default function Navbar(props) {
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
        <Box sx={{ flexGrow: 1, mt: {md: 4, xs: 1}, display: location.pathname === '/Auth' ? 'none' : '', alignItems: 'center' }}>          
          <Alerts alertType={alertType} />
          <AppBar position="fixed" color="inherit" elevation={0} sx={{borderBottom: 'solid 1px #E5E5E5'}}> 
          <Container maxWidth="lg">
            <Toolbar disableGutters={true} sx={{ display: 'flex', alignItems: 'center'}}>                            
                <Box sx={{ display: 'flex', alignItems: 'center'}} component={Links} to='/'>                    
                      <Box component="img" src={Logo} alt="Logo"
                        sx={{ 
                            width:{ xs:90, md: 125},
                            height: { xs: 35, md: 50}
                        }}/>                    
                </Box>             
                <Box sx={{ ml: 'auto'}}>
                  <IconButton aria-label="show 4 new mails"  component={Links} to={user.userData != '' ? '/Cart' : '/Auth'} size="medium"
                      sx={{
                        mx: 2,
                        width: { xs: 16, md: 16},
                        height: { xs: 16, md: 16},
                      }}
                    >                    
                      <Badge badgeContent={totalItem()} color="success">
                          { totalItem() < 1 ? 
                            <LocalMallOutlinedIcon />
                            :
                            <LocalMallIcon />
                          }
                      </Badge>                                        
                  </IconButton>                              
                  { 
                    user.userData != '' ?
                      <Button variant='text' color='primary' sx={{ my: 1}} component={Links} to="/Profile">
                        <Avatar alt={user.userData.givenName} src={user.userData.imageUrl} />
                      </Button>
                    :                 
                    <Button variant="text" color="inherit" sx={{ my: 1}} component={Links} to='/Auth'>
                        Login
                      </Button>
                  }       
                </Box>
            </Toolbar>
            </Container>
          </AppBar>          
        </Box>
      );
}
