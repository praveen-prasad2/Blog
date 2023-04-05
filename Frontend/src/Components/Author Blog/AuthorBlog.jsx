import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { oneBlog } from '../../API/Api'
import { UserContext } from '../Context/UserContext'
import AuthorCard from './AuthorCard'
import Footer from '../Footer/Footer'


function authorBlog() {
    const [authorblog,setauthorblog]=useState()

    const {loggedinUser}=useContext(UserContext)

    async function getAuthorBlog(){
        let blogofauthor=await axios.get(oneBlog + loggedinUser._id)
        setauthorblog(blogofauthor.data.blogs)
        console.log(blogofauthor)
    }
    useEffect(()=>{getAuthorBlog()},[])
  return (
  <>
  {authorblog && authorblog.map((ablog)=>{
    return(
<AuthorCard authormap={ablog}/>
    )
  })}
  <Footer />
  </>
  )
}

export default authorBlog