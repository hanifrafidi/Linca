import React from 'react'

import {Grid} from '@mui/material/'

import CardItem from './CardItem'

export default function ListItem() {
    const datas = [
        {id: 1, title : 'hello'},
        {id: 2, title : 'hellos'},
        {id: 3, title : 'helloss'},
        {id: 4, title : 'hellosss'},
      ]

    return (
        <Grid container spacing={4} justifyContent='center'>
        {
            datas.map(data => (
            <Grid item xs={3} key={data.id}>
                <CardItem key={data.title} 
                    cartItem={{ 
                        id : data.id, 
                        title : data.title,
                        count : 1,
                    }}>{data.title}</CardItem>
            </Grid>
            ))
        }
        </Grid>
    )
}
