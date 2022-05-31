
import { AppBar, Button, Toolbar, Typography, Stack, Box } from "@mui/material";
import logo from '../images/logo.png';

function Navbar(){
    return(
       <section id='nav'> 
        <AppBar position='static' style={{backgroundColor: '#2F303A', boxShadow: '0px 0px 0px 0px', color: 'white'}}>
            <Toolbar>
                <img src={logo} alt='lo0px pxgo de aplicacion'/>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }} style={{padding:'20px',fontSize:'1em'}}>Soundwave</Typography>
                <Stack direction='row' spacing = {2} style={{color: '#fffff5'}}>
                    <Button href="#nav" style= {{color:'#fffff5'}}>Discover</Button> 
                    <Button href="#nav" style= {{color:'#fffff5'}}> Join </Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </section> 
    )
}


export default Navbar;