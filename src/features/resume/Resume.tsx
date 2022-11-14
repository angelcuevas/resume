import React from 'react'
import { Container, Grid, Button } from '@mui/material';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import TopOptions from './Components/layout/TopOptions';

const Resume = () => {
    return (

        <Grid container spacing={2} style={gridStyle} >
            <Grid item xs={2} style={gridStyle.sideBar}>
                <SideDrawer />
            </Grid>
            <Grid item xs={10}>
                <TopOptions />
            </Grid>
        </Grid>

    )
}

const gridStyle = {
    height: '100%',
    sideBar: {
        background: '#eeefee'
    }
}

export default Resume