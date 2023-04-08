import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { sortBlog } from '../API/Api';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
import "../Stylesheets/sortedblog.css"

function SortedBlog() {
    const {category} = useParams()

    const[categories,setCategories]=useState([])

    async function getCategoryBlogs(){
        console.log(location.state);
        let response=await axios.get(sortBlog+category)
        console.log(response);
        setCategories(response.data.sort)
    }
    useEffect(()=>{
        getCategoryBlogs()
        console.log(categories);
    },[category])
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
                    <h1 className="titlecat">{c.title}</h1>
                    <p className="cathead">{c.category}</p>
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