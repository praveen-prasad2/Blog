import React from 'react'
import "../Stylesheets/navbar.css"
import { Link } from '@mui/material'

function Navbar() {
  return (
    <>
    <div className="navbar">
<div className="head">
      <h1>BLOG</h1>
      </div>
  <div className="options">
    <a href="/">Home</a>
    <a href="#">About</a>
    <a href="#">Resources</a>
    <a href="#contact">Contact</a>
    <button className='login'><a href="/login">Signin</a> </button>
  </div>
</div>
    </>
  )
}

export default Navbar