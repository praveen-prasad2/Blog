import React, { useEffect, useState } from 'react'
import { allBlog } from '../API/Api'
import Card from './Card'
import axios from 'axios'

function AllBlogs() {
    const [allBlogs,setallBlogs]=useState()

    async function getallBlog(){
        let theblogs=await axios.get(allBlog)
        setallBlogs(theblogs.data.allBlog)
        console.log(theblogs.data);
    }
    useEffect(()=>{getallBlog()},[])
  return (
    <>
    {allBlogs && allBlogs.map((bg)=>{
        return(
            <Card blogmap={bg}/>
        )
    })}
    </>
  )
}

export default AllBlogs