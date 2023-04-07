import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { sortBlog } from '../API/Api';
import Navbar from './Navbar';
import Footer from './Footer/Footer';

function SortedBlog() {
    const location=useLocation()

    const[categories,setCategories]=useState([])

    async function getCategoryBlogs(){
        console.log(location.state);
        let response=await axios.get(sortBlog+location.state)
        console.log(response);
        setCategories(response.data.sort)
    }
    useEffect(()=>{
        getCategoryBlogs()
        console.log(categories);
    },[])
  return (
    <>

    <Navbar />
    {
        categories.map((c)=>{
            return(
                <>
                <div className="sortedcard">
                    <p className="coma">{c.authorname}</p>
                    <p>{c.dateposted}</p>
                    <h1 className="cathead">{c.category}</h1>
                </div>
                <div className="bottom">
                <p>{c.title}</p>
                <p>{c.content}</p>
                </div>
                </>
            )
        })
    }

    <Footer/>
    </>
  )
}

export default SortedBlog