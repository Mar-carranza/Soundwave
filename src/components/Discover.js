import React from 'react';
import Typography from '@mui/material/Typography';
import covers from '../images/covers.jpg'
import microfono from '../images/microphone.svg';
import album from '../images/albums.svg'
import more from '../images/more.svg'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Footer from './Footer'



function Discover(){
    return(
        <section className='Discover' style={{backgroundColor: '#2F303A', padding: '1rem'}}>
            <Typography variant='h3' color= '#FFFFF5' marginTop= '2rem' marginBottom='2rem'> Discover new music </Typography>
            <Box style={{display:'flex'}}>
                <Button style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                  <img src={microfono} alt= 'microfono'/>
                  <Typography>Charts</Typography>
                </Button>
                <Button style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                  <img src={album} alt= 'albums'/>
                  <Typography>Albums</Typography>
                </Button>
                <Button style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                  <img src={more} alt= 'more'/>
                  <Typography>More</Typography>
                </Button>
             </Box>
             <Typography variant='h6' color= '#FFFFF5' marginTop= '2rem'>By joining you can benefit by listening to the latest albums relased.</Typography>
        <Box>
          <img src={covers} alt='imagen de albums' style={{ width:'50%', display: 'flex', justifyContent:'center'}} />
        </Box>
       <Footer /> 
   

        </section>
    )
}

export default Discover;