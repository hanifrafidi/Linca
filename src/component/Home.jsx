import React,{useState} from 'react'

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

import { Routes, Route, Link as Links } from "react-router-dom";

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import Books from '../data/data'

const genres = [
    {
        genre : 'All Product',
        amount : 2,
    },
    {
        genre : 'Musical',
        amount : 10,
    },
    {
        genre : 'Technology',
        amount : 22,
    },
    {
        genre : 'Gaming',
        amount : 14,
    },
    {
        genre : 'Sports',
        amount : 32,
    },
    {
        genre : 'kids',
        amount : 2,
    },
    {
        genre : 'Entertainment',
        amount : 42,
    },
]

export default function Home() {
    const [listBook,setListBook] = useState([])
    const [listGenre,setListGenre] = useState([])

    
    return (
        <div>            
            <Grid container>
                <Grid item xs={4}>                
                    <Typography variant="h6" sx={{ mt: 10}}>
                        Genre
                    </Typography>
                    <Box sx={{mt: 3, pr: 4}}>                        
                        <MenuList autoFocusItem={true} disabledgutter="true">
                            {
                                genres.map((genre,index) => {
                                    return (
                                        
                                            <MenuItem sx={{borderRadius: 1}} key={index}>
                                                <ListItemText>{genre.genre}</ListItemText>                                                
                                                <Typography variant="subtitle1">{genre.amount}</Typography>
                                            </MenuItem>                                        
                                    )                            
                                })
                            }           
                        </MenuList>             
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Box sx={{ py: 0.5, px: 2, border: "1px solid #E5E5E5", borderRadius: 2, display: "flex"}}>
                            <IconButton sx={{ mr: 0.5}} size="small">
                                <SearchIcon />
                            </IconButton>
                            <InputBase sx={{ p: 0 }} placeholder="Search..."></InputBase>
                        </Box>
                        <Box sx={{ display: 'flex', ml: 'auto'}}>
                            <Typography variant="subtitle1" color="primary" sx={{ mr: 2}}>Low Price</Typography>
                            <Typography variant="subtitle1">High Price</Typography>
                        </Box>                        
                    </Box>
                    <Grid container sx={{ mt: 2}} spacing={2}>                           
                            { Books.map((book, index) => {
                                return (                                
                                <Grid item sm={4} sx={{ mb: 1}} key={index}>
                                    <Links to={'/Book/' + book.id}>
                                        <Paper elevation={0} sx={{
                                            backgroundImage: `url(${book.cover})`,
                                            backgroundSize : 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            width: '100%',
                                            height: '370px',
                                        }}>
                                            {/* <img src={item} alt="something" width="100%" height="207" /> */}
                                        </Paper>
                                    </Links>
                                    <Box sx={{ mt: 2}}>
                                        {book.genres.map((genre,index) => (
                                            <Typography key={index} variant="caption2" color="text.secondary" sx={{mr: 1}}>{genre}</Typography>
                                        ))}                                        
                                        {/* <Typography variant="caption" color="text.secondary" sx={{mr: 1}}>Entertainment</Typography> */}
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6" sx={{mt: 0.5, display: '-webkit-box', width: '100%', maxHeight: '100px', minHeight: '70px', textOverflow: 'ellipsis', overflow: 'hidden', wordWrap: 'break-word', WebkitLineClamp : '2', WebkitBoxOrient: 'vertical' }}>{book.title}</Typography>
                                        <Typography variant ="h6" color="primary" sx={{ mt: 1}}>$ {book.price}</Typography>
                                    </Box>
                                </Grid>
                                )                                
                            })}                            
                    </Grid>                    
                </Grid>
            </Grid>            
        </div>        
    )
}