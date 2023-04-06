import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button,TextField } from '@mui/material'
import { editBlog } from '../../API/Api'
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import "./editblog.css"
import { useNavigate } from 'react-router-dom'

function EditBlog() {


    const[newtitle,setnewtitle]=useState()
    const [newcontent,setnewcontent]=useState()
    const navigate=useNavigate()

    const location=useLocation()
    useEffect(()=>{
        
        console.log(location.state);
        setnewtitle(location.state.title)
        setnewcontent(location.state.content)
    },[])

    async function editedData(){
        let newData={
            title:newtitle,
            content:newcontent
        }
        const response=await axios.patch(editBlog + location.state._id,newData)
       navigate("/authorblog")
    }

  return (
    <>
    <Navbar/>
<div className="editcard">
        <h1>EDIT YOUR POST</h1>
        <div className="content">
        <TextField id="outlined-textarea" label="Title" placeholder="Placeholder" value={newtitle} onChange={(e)=>{setnewtitle(e.target.value)}}/> <br /><br />
    <TextField id="outlined-multiline-static" label="Content" multiline rows={6} value={newcontent} onChange={(e)=>{setnewcontent(e.target.value)}} /> <br /><br />
    <div className="buttons">
    <Button variant="outlined" onClick={editedData}>Save</Button>

        </div>
        </div>
</div>
    <Footer/>
    </>
  )
}

export default EditBlog