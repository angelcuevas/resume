import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import {Home, WorkHistory} from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React from 'react'
import { useSelector } from 'react-redux';
import { ILanguageText } from '../../../../../languages/ILanguage';

const Navbar = () => {

    const {navBar :text} = useSelector((state:any)=>state.languages.text as ILanguageText)

    return (<>
        <List sx={{ width: '95%', maxWidth: 360 }}>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <Home />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={text.homeLabel} />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={text.portfolioLabel}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkHistory />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={text.ExpirienceLabel} />
                </ListItemButton>
            </ListItem>
        </List>
    </>

    )
}

export default Navbar