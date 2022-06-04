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



      /*
      <section className="Main3" id="Main3" style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "8%", paddingBottom: "10%"}}>
    <Box style={{display: "flex", gap: "20px"}}>
    <Typography variant="h1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins", fontWeight: "600", marginRight: "8rem"}}>Join the <span style={{color: "#d3007b"}}>fun.</span></Typography>
    </Box>
    <Box style={{backgroundColor: "#202027", padding: "3rem", borderRadius: "30px", paddingLeft: "3rem"}}>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Name:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}}/>
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Email:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <Typography variant="body1" paragraph color="#FFFFFD" style={{fontFamily: "Poppins"}}>Password:</Typography>
        <TextField sx={{ input: { color: 'white', fontFamily: "Poppins", fontWeight: "300" } }} variant="outlined" size="small" style={{width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBottom: "1.5rem"}} />
        </>
        <>
        <br/><Button style={{color: "white", backgroundColor: "#4853ab", width: "20rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize", marginTop: "1rem", padding: "0.75rem", borderRadius: "10px"}}>Join Now</Button>
        </>
    </Box>
</section>
*/