import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { blogsofAuthor } from '../../API/Api'
import axios from 'axios'
import AllAuthorCard from './AllAuthorCard'
import { useLocation } from 'react-router-dom'

function AllAuthorBlog({blogmap}) {
  const location=useLocation()
  const [allauthorblogs,setallauthorBlogs]=useState()

  async function getAllAuthorBlogs(){
    let authorblogs=await axios.get(blogsofAuthor + location.state.blogmap.authorid)
    console.log(authorblogs);
    setallauthorBlogs(authorblogs)
  }
  useEffect(()=>{
    getAllAuthorBlogs();
  },[])
  return (
    <>   
    <Navbar />
    
    <AllAuthorCard blogmap={blogmap} />

    <Footer />
    </>
  )
}

export default AllAuthorBlog