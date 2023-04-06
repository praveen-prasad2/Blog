import React from 'react'
import "../Stylesheets/navbar.css"
import { Link } from '@mui/material'
import { useContext } from 'react'
import { UserContext } from './Context/UserContext'
import Signout from './Signout'


function Navbar() {

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
    
    {loggedinUser ?<Signout />:<button className='login'><a href="/login">Signin</a> </button>}
  </div>
</div>
    </>
  )
}

export default Navbar