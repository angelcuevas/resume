import React from 'react'
import { Container, Grid, Button } from '@mui/material';
import SideDrawer from './Components/SideDrawer/SideDrawer';

const Resume = () => {
    return (
        <div style={{display:'flex'}}>
        <Grid container spacing={2} style={gridStyle}>
            <Grid item xs={2}>
                <SideDrawer />
            </Grid>
            <Grid item xs={10}>
                El resto
            </Grid>
        </Grid>
        </div>
    )
}

const gridStyle = {
    background: 'transparent',
    minHeight: '100%'
}

export default Resume