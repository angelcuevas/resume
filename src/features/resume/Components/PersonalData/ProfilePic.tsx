import { Card, CardMedia, Typography, CardActions, Button, CardContent } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const PLACEHOLDER_IMAGE = 'https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg'

const ProfilePic = () => {
  return (<>
    <Container>
        <img
            src={`${PLACEHOLDER_IMAGE}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${PLACEHOLDER_IMAGE}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'hi'}
            loading="lazy"
            style={{width:'200px', height:'200px', borderRadius:'50%'}}
        />
        <Typography gutterBottom variant="h5" component="div" >
          Ángel Pablo Cuevas
        </Typography>
        </Container>
    </>)
}

export default ProfilePic