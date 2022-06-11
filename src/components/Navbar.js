
import { AppBar, Button, Toolbar, Typography, Stack, Box } from "@mui/material";
import logo from '../images/logo.png';

function Navbar(){
    return(
      <> 
        <AppBar position='fixed' style={{backgroundColor: '#202027', boxShadow: '0px 0px 0px 0px', color: 'white', maxWidth:'100%',minWidth:'100% '}}>
            <Toolbar>
              <Box className="nav" style={{display:'flex',justifyItem:'center', alignItems:'center',marginLeft:'15rem', marginRight:'27rem'}}>
                <img src={logo} alt='logo de aplicacion'/>
                <a href="#Home">
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }} style={{color:'#fffff5',padding:'20px',fontSize:'1.2rem'}} href='#home'>Soundwave</Typography></a>
              </Box>
              <Stack direction='row' spacing = {2} style={{color: '#fffff5'}}>
                <Button href='#discover' style= {{color:'#fffff5', textTransform: "capitalize",fontSize:'1rem'}}>Discover</Button>
                <Button href="#join" style= {{color:'#fffff5',textTransform: "capitalize", fontSize:'1rem'}}> Join </Button>
              </Stack>
            </Toolbar>
            
        </AppBar>
       </> 
    )
}
       
export default Navbar;