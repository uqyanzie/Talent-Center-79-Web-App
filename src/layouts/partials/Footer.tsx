import React from 'react'
import { Typography, Stack, Box, Grid, IconButton, Divider, List, ListItem, ListItemText } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo2 from 'src/assets/logotujuhsembilan 2.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <Box position="relative" display="flex" justifyContent="center" paddingY={{xs:5}} paddingX={{xs:5, lg: 30}} sx={{backgroundColor:"#142B51"}}>
                <Grid container columnSpacing={{sm: 5, lg: 40}} justifyContent="center">
                    <Grid item xs={12} md={6} textAlign={{xs:"center", md:"left"}}>
                        <Typography variant="h5" color="secondary" fontWeight={600} paddingTop={2} paddingBottom={2}>
                        Useful Links
                        </Typography>
                        <Divider sx={{backgroundColor: "#FF6E1D", width: {xs: "100%", md:"50%"}}}/>
                        <List>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"} }} component={Link} to="/">
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"} }} component={Link} to="/">
                            <ListItemText primary="Our Technologies"/>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"}}} component={Link} to="/">
                            <ListItemText primary="Why Choose Us"/>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"}}} component={Link} to="/">
                            <ListItemText primary="Testimonials"/>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"}}} component={Link} to="/">
                            <ListItemText primary="Contact"/>
                        </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign={{xs:"center", md:"left"}}>
                        <Typography variant="h5" color="secondary" fontWeight={600} paddingTop={2} paddingBottom={2}>
                        Contact Us
                        </Typography>
                        <Divider sx={{backgroundColor: "#FF6E1D", width: {xs: "100%", md:"50%"}}}/>
                        <List sx={{textAlign: "center", width:"80%", marginX:{xs: "auto", md:0}, marginBottom:2}}>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"} }}>
                            <Typography>
                            <span style={{fontWeight: 'bold'}}>Address:</span> Kompleks Terasana No.6A Jalan Cihampelas (Bawah) Bandung 40171
                            </Typography>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"} }}>
                            <Typography width="100%">
                            <span style={{fontWeight: 'bold'}}>Phone:</span> (022) 20505455 
                            </Typography>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', paddingX:0, textAlign:{xs:"center", md:"left"}}}>
                        <Typography width="100%">
                            <span style={{fontWeight: 'bold'}}>Follow us On</span>
                            </Typography>
                        </ListItem>
                        <ListItem sx={{color: '#fdfdfd', textDecoration: 'none', padding:0, textAlign:{xs:"center", md:"left"}}}>
                            <Stack direction="row" margin="auto">
                            <IconButton color="secondary" onClick={event => window.location.href='https://web.facebook.com/padepokantujuhsembilan'}>
                                <FacebookIcon fontSize='large'/>
                            </IconButton>
                            <IconButton color="secondary" onClick={event => window.location.href='https://www.instagram.com/padepokantujuhsembilan/'}>
                                <InstagramIcon fontSize='large'/>
                            </IconButton>
                            <IconButton color="secondary" onClick={event => window.location.href='https://www.youtube.com/@tujuhsembilantv5555'}>
                                <YouTubeIcon fontSize='large'/>
                            </IconButton>
                            </Stack>
                        </ListItem>
                        </List>
                        <Link to="https://www.tujuhsembilan.com/" target='_blank'>
                        <img src={logo2} alt="logo"/>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box position="relative"  padding={3} sx={{backgroundColor:"#081E43"}} color="#fdfdfd" textAlign="center">
                <Typography fontWeight="bold">© Copyright 2020</Typography>
                <Typography>Privacy Policy Design</Typography>
                <Typography>By Tujuh Sembilan</Typography>
            </Box>
        </>
    )
}