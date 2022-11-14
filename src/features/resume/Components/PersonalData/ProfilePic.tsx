import { Card, CardMedia, Typography, CardActions, Button, CardContent } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const PLACEHOLDER_IMAGE = 'https://st3.depositphotos.com/1177973/14106/i/1600/depositphotos_141065150-stock-photo-handsome-young-programmer.jpg'

const ProfilePic = () => {
  return (<>
    <Container className="text-center">
        <img
            src={`${PLACEHOLDER_IMAGE}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${PLACEHOLDER_IMAGE}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'hi'}
            loading="lazy"
            style={profileStyle.pic}
        />
        <Typography gutterBottom variant="h4" component="div" >
          Ángel Cuevas
        </Typography>
        </Container>
    </>)
}

const picSize = 150;
const profileStyle = {
  pic: {width:`${picSize}px`, height:`auto`, borderRadius:'50%', margin:'15px', border:'2px solid #fff'}
}

export default ProfilePic