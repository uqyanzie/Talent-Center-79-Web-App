import React from 'react'
import { AppBar, Toolbar, Typography, Button, Stack, Box, IconButton, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import 'src/App.css'

import background from 'src/assets/landing-page-background.png'
import logo from 'src/assets/logotujuhsembilan 1.png'

import Footer from './partials/Footer';

interface LandingPageLayoutProps {
    children: React.ReactNode;
}

export default function LandingPageLayout ({ children }: Readonly<LandingPageLayoutProps>) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
    const drawer = (
        <Box onClick={handleDrawerToggle} height="100%" sx={{ textAlign: 'center', backgroundColor: "#2C8AD3" }}>
          <IconButton color='secondary'>
            <CloseOutlinedIcon/>
          </IconButton>
          <Stack>
            <Button color="secondary">
              Register
            </Button>
          </Stack>
        </Box>
    );

    return (
        <>  
            <Box sx={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`, backgroundSize: "cover"}} width="100%" height="100vh">
                <AppBar position='static' color='transparent' elevation={0} sx={{zIndex: 3}}>
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <Stack direction="row" spacing={1}>
                        <img src={logo} alt="logo" width="50px"/>
                        <Typography variant="h5" color="secondary" fontWeight={600}>
                            Talent Center 79
                        </Typography>
                        </Stack>
                        <IconButton
                        color="secondary"
                        
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                        >
                        <MenuIcon fontSize='large' />
                        </IconButton>
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Button color='secondary' sx={{borderRadius: "25px"}}>
                            Register
                        </Button>
                        <Button variant='outlined' color='secondary' sx={{borderRadius: "25px"}}>
                            Sign In
                        </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                    variant="temporary"
                    anchor='right'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "70%" },
                    }}
                    >
                    {drawer}
                    </Drawer>
                </nav>
             </Box>
            {children}
            <Footer/>
        </>
    )
}