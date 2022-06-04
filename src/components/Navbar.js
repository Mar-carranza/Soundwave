
import { AppBar, Button, Toolbar, Typography, Stack, Box } from "@mui/material";
import logo from '../images/logo.png';

function Navbar(){
    return(
       <section id='nav'> 
        <AppBar position='fixed' style={{backgroundColor: '#202027', boxShadow: '0px 0px 0px 0px', color: 'white',display:'flex'}}>
            <Toolbar>
                <img src={logo} alt='logo de aplicacion'/>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }} style={{padding:'20px',fontSize:'1em'}}>Soundwave</Typography>
                <Stack direction='row' spacing = {2} style={{color: '#fffff5'}}>
                    <Button href='#discover' style= {{color:'#fffff5'}}>Discover</Button> 
                    <Button href="#" style= {{color:'#fffff5'}}> Join </Button>
                </Stack>
            </Toolbar>
        </AppBar>
       </section> 
    )
}


export default Navbar;