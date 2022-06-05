import React from "react";
import imagenmujer from '../images/landing-page-girl.png'
import { Button, Box, Typography } from '@mui/material';


function Home(){
    return(
      <section id="Home" style={{backgroundColor:'#2F303A', display:'flex', alignItems:'center', justifyContent: 'space-around', paddingTop: '10%', minHeight: '100vh'}}>
        <Box className= 'imagenmujer'>
          <img src={imagenmujer} alt='imagen mujer' style={{width:'70%'}}/>
        </Box>
        <Box className="textHome" style={{marginLeft: '-35%'}}>
          <Typography variant='h3' paragraph color='#fffff5' style={{fontWeight: 'bold'}}>Feel The Music</Typography>
          <Typography variant= 'h5' color='#fffff5' style={{paddingBottom:'2rem'}}>Stream over 20 thousand songs with one click</Typography>
          <Button variant="contained" color="primary"> Join Now </Button>
        </Box> 
         
      </section>
    )
}

export default Home;
