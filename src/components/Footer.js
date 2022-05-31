import React from "react";
import fb from '../images/facebook.svg';
import tw from '../images/twitter.svg';


function Footer() {
    return(
        <section id="footer" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center' }}>
            <a href='#' style={{color:'#FFFFF5'}}>About us</a>
            <a href='#' style={{color:'#FFFFF5'}}>Contact</a>
            <img src={fb} alt='facebook'/>
            <p>Facebook</p>
            <img src={tw} alt='twitter'/>
            <p>Twitter</p>
        </section>
      
    )
}

export default Footer;