import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { addComment, blogComments, oneBlog } from '../../API/Api'
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import Comments from './Comments';
import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import "./singleblog.css"



function SingleBlog() {

    const{id}=useParams()

const[oneblog,setOneBlog]=useState({})
    
    const navigate=useNavigate()

    const location=useLocation()

    const {loggedinUser}=useContext(UserContext)

    

    async function showOneBlog(){
        const response=await axios.get(oneBlog+id)
      setOneBlog(response.data.blog)
        console.log(oneblog);
        
    }

    const [refresh,setRefresh]=useState()
    useEffect(()=>{
        showOneBlog()
    },[id])

    let commentref=useRef("")

    async function addYourComment(){
        if(loggedinUser){
        let yourcomment={
            commentorname:loggedinUser.username,
            comment:commentref.current.value,
            commentorid:loggedinUser._id,
            blogid:id,
            dateposted:new Date()
        }
        let comment=await axios.post(addComment,yourcomment)
        setRefresh(!refresh)
        commentref.current.value=""
        console.log(yourcomment);
    }else{
        navigate("/login")
    }
       
    }

const [blogComment,setBlogComments]=useState()

async function getBlogComments(){
    let theBlogComments=await axios.get(blogComments+id)
    console.log(theBlogComments);
    setBlogComments(theBlogComments.data.blogcomments)
    
}
useEffect(()=>{
    getBlogComments()
},[refresh])

  return (
    <>
    <Navbar/>
    <div className="mainsingle">
      <div className="card">
        <p className="author">
          <AccountCircleIcon className="accounticon" /> {oneblog.authorname}{" "}
          <br />
          {new Date(oneblog.dateposted).toDateString()}
        </p>
        <div className="heading">
          <h1>{oneblog.title}</h1>
          <p>{oneblog.category}</p>
        </div>
        <div className="content">
          <p id="content">{oneblog.content} </p>
          <hr />
          <div className="buttons">
            <ThumbUpIcon className="like" />
            <ThumbDownIcon className="dislike" />
            <CommentIcon />
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
    <div className="addcomment">
        <h1>ADD YOUR COMMENTS HERE</h1>
      <TextField
          id="standard-multiline-flexible"
          label="Write your comment"
          multiline
          maxRows={4}
          size='big'
          variant="standard"
          inputRef={commentref}
          style = {{width: 500}}
        />
           <Button variant="outlined" className="postcomment" onClick={addYourComment} >
              Post
            </Button>
        </div>

    <div className="comments">

        {blogComment && blogComment.map((bc)=>{
            return(

                <Comments thecomments={bc}/>
            )
        })}
      
    
    </div>
    <Footer/>
  </>
  )

}

export default SingleBlog