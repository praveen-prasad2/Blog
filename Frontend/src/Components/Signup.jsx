import React from 'react'
import { signUp } from '../API/Api'
import { useRef } from 'react'
import axios from 'axios'
import { TextField,Box,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../Stylesheets/signup.css'


function Signup() {

    const usernameRef=useRef()
const emailRef=useRef()
const phoneRef=useRef()
const passRef=useRef()
const pass2Ref=useRef()

const navigate=useNavigate()

async function userSignup(){
    if(passRef.current.value==pass2Ref.current.value){

      let newuser={
        username:usernameRef.current.value,
        email:emailRef.current.value,
        phnNo:phoneRef.current.value,
        password:passRef.current.value
  
      }
      let response=await axios.post(signUp,newuser)
      navigate('/login')
    }else{
      alert("Password Missmatch")
    }
  }
  return (
    <Box id="wrap">
    <h1 className='head'>SIGNUP</h1>
   <TextField id="standard-basic" label="Full Name" variant="standard" type="text" inputRef={usernameRef}/><br /><br />
   <TextField id="standard-basic" label="Email" variant="standard" type="email" inputRef={emailRef}/><br /><br />
   <TextField id="standard-basic" label="Phone Number" variant="standard" type="number" inputRef={phoneRef}/><br /><br />
   <TextField id="standard-basic" label="Password" variant="standard" type="password" inputRef={passRef}/><br /><br />
   <TextField id="standard-basic" label="Re-enter Password" variant="standard" type="password" inputRef={pass2Ref}/><br /><br />
   <Button variant="outlined" id='btn' onClick={userSignup}>SignUp</Button>
  </Box>
  )
}

export default Signup