import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function AllAuthorCard({blogmap}) {

    const location=useLocation()
  
  return (
    <>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    <h1>{location.state.blogmap.authorname}</h1>
    </>
  )
}

export default AllAuthorCard