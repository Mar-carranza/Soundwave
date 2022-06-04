import { Box } from "@mui/system";
import React from "react";
import fb from '../images/facebook.svg';
import tw from '../images/twitter.svg';



function Footer() {
    return(
        <section id="footer" style={{background:'#202027', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', fontWeight: 'bold', color:'#FFFFF5'}}>
            <Box>
            <a href='#' style={{color:'#FFFFF5', paddingRight: '0.8rem', textDecoration: 'none'}}>About us </a>
            <a href='#' style={{color:'#FFFFF5', textDecoration: 'none'}}>Contact</a>
            </Box>
            <Box style={{display:'flex'}}>
            <Box style={{display:'flex'}}>
            <img src={tw} alt='twitter' style={{paddingRight: '0.5rem'}}/>
            <p style={{paddingRight: '0.8rem'}}>Twitter</p>
            </Box>
            <Box style={{display:'flex'}}>
            <img src={fb} alt='facebook' style={{paddingRight: "0.5rem"}}/>
            <p>Facebook</p>
            </Box>
            </Box>
        </section>
      
    )
}

export default Footer;