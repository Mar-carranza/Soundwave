import React from "react";
import fb from '../images/facebook.svg';
import tw from '../images/twitter.svg';


function Footer() {
    return(
        <section className="footer">
            <a href='#'>About us</a>
            <a href='#'>Contact</a>
            <img src={fb} alt='facebook'/>
            <p>Facebook</p>
            <img src={tw} alt='twitter'/>
            <p>Twitter</p>
        </section>
      
    )
}

export default Footer;