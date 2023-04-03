import React from 'react'
import { useRef } from 'react'
import { signIn } from '../API/Api'
import axios from 'axios'
import { TextField,Box,Button } from '@mui/material'
import '../Stylesheets/signin.css'


function Signin() {
    const emailRef=useRef()
    const passRef=useRef()
    

    async function userLogin(){
        let user={
            email:emailRef.current.value,
            password:passRef.current.value
        }
        let response=await axios.post(signIn,user)
        console.log(response.data);

        if(response.data.success==true){
            alert("Login Success")
        }else{
            alert("Login Error")
        }
    }
  return (
    <Box id="container" >
    <h1 className='head'>SIGN IN</h1>
<TextField id="standard-basic" label="Email" variant="standard" type="email" className='input email' color="success" inputRef={emailRef} /><br /><br />
<TextField id="standard-basic" label="Password" variant="standard" type="password" className='input password' inputRef={passRef}/><br /><br />
<Button variant="outlined" className='btn' onClick={userLogin}>Signin</Button>
</Box>
  )
}

export default Signin