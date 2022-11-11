import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import {Home, WorkHistory} from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React from 'react'

const Navbar = () => {
    return (<>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <Home />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={'Home'} />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Portfolio"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkHistory />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Experiencia" />
                </ListItemButton>
            </ListItem>
        </List>
    </>

    )
}

export default Navbar