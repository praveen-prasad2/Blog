import React, { useState } from 'react'
import "../Stylesheets/navbar.css"
import { Link } from '@mui/material'
import { useContext } from 'react'
import { UserContext } from './Context/UserContext'
import Signout from './Signout'
import {CircularProgress,Backdrop} from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Navbar() {


  const navigate=useNavigate()
  //Try

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
    setTimeout(()=>{
      navigate('/login')
      handleClose()
    },1000)
  };

  //

  const {loggedinUser}=useContext(UserContext)

  return (
    <>
    <div className="navbar">
<div className="head">
      <h1><img src="/images/titleicon.png" alt="" /> BLOG</h1>
      </div>
  <div className="options">
    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Resources</a>
    {loggedinUser ?<a href="/authorblog">Your Posts</a>:<a href="/login">Your Posts</a> } <br /><br />
    <a href="#contact">Contact</a>
    
    {loggedinUser ?<Signout />:<button className='login' onClick={handleToggle}>Signin </button>}
  </div>
</div>
{/* try */}

<div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

{/*  */}
    </>
  )
}

export default Navbar