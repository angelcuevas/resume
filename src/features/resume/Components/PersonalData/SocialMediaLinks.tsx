import { Avatar, Box, Button, Chip, List, ListItem, ListItemAvatar, Paper, ListItemButton, ListItemText } from '@mui/material'
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import React from 'react'

const LINKS = [
    {
        logo: Facebook,
        url: 'https://www.facebook.com/angelpablo.cuevas'
    },
    {
        logo: LinkedIn,
        url: 'https://www.linkedin.com/in/ángel-pablo-cuevas-15659b13a/'
    }, {
        logo: GitHub,
        url: 'https://github.com/angelcuevas'
    }
]

const SocialMediaLinks = () => {
    return (
        <div style={{position:'absolute', bottom:"0px", width:'90%', textAlign:'center'}}>
            <Box>
            {LINKS.map((link, i) => {
                return (
                    <Button key={'social-media-' + i} variant="text"
                        onClick={() => { window.open(link.url, '_blank')?.focus() }}
                    >
                        <Avatar><link.logo  fontSize="medium" /></Avatar>
                    </Button>
                );
            })}
            </Box>
        </div>
    )
}

export default SocialMediaLinks