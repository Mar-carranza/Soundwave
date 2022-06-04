
import { AppBar, Button, Toolbar, Typography, Stack, Box } from "@mui/material";
import logo from '../images/logo.png';

function Navbar(){
    return(
       <section id='nav' style={{}}> 
        <AppBar position='fixed' style={{backgroundColor: '#202027', boxShadow: '0px 0px 0px 0px', color: 'white'}}>
            <Toolbar>
                <Box style={{display:'flex', justifyItem:'center', alignItems:'center',marginLeft:'15rem', marginRight:'27rem'}}>
                <img src={logo} alt='logo de aplicacion'/>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }} style={{padding:'20px',fontSize:'1.2rem'}}>Soundwave</Typography>
                </Box>
                <Stack direction='row' spacing = {2} style={{color: '#fffff5'}}>
                    <Button href='#discover' style= {{color:'#fffff5', textTransform: "capitalize",fontSize:'1rem'}}>Discover</Button> 
                    <Button href="#" style= {{color:'#fffff5',textTransform: "capitalize", fontSize:'1rem'}}> Join </Button>
                </Stack>
                

            </Toolbar>
        </AppBar>
       </section> 
    )
}


export default Navbar;