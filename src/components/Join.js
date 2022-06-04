import React from "react";
import { FormControl, FormHelperText, InputLabel, Input, Button, Typography} from "@mui/material";
import { Box } from "@mui/system";
import Footer from './Footer'



function Join() { 
    return ( 
      <>
      <section className="Join" style={{height: '100vh',gap:'5rem',padding:'2rem', display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Box className='text' style={{display:'flex'}}>
          <Typography variant="h2" paragraph color='#fffff5' style={{fontWeight: "600"}}>Join the <span style={{color: "#d3007b",fontWeight: "600"}}>fun.</span></Typography>
          
          
          </Box>
        <Box style={{background:'#202027', padding:'1.5rem', borderRadius:'0.5rem', display:'flex', flexDirection:'column', justifyContent:"flexStart", gap:'1rem', width:'20rem'}}>
          <FormControl>
            <InputLabel htmlFor="name" style={{color:'#fffff5' }}>Name</InputLabel>
            <Input id='name' type='name' arial-describedby='name-helper'/>
            <FormHelperText id='name-helper'>Tu nombre</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email" style={{color:'#fffff5' }}>Email</InputLabel>
            <Input id='Email' type='Email' arial-describedby='email-helper'/>
            <FormHelperText id='email-helper'>Tu email personal</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='pwd' style={{color:'#fffff5' }}>Password</InputLabel>
            <Input id='pwd' type='password' arial-describedby='password-helper'/>
            <FormHelperText id='password-helper'>Entre 8 y 16 caracteres</FormHelperText>
          </FormControl>
          <Button variant='contained' color='primary'>Join Now</Button>
        </Box>
      </section>
     <Footer/> 
      
      </>
      
      
  )
}
export default Join;
