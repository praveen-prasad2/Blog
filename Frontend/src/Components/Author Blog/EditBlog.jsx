import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button,TextField } from '@mui/material'
import { editBlog } from '../../API/Api'
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import "./editblog.css"
import { useNavigate } from 'react-router-dom'

import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";


function EditBlog() {


    const[newtitle,setnewtitle]=useState()
    const [newcontent,setnewcontent]=useState()
    const[newcategory,setnewcategory]=useState("")

 

    const navigate=useNavigate()

    const location=useLocation()
    useEffect(()=>{
        
        console.log(location.state);
        setnewtitle(location.state.title)
        setnewcontent(location.state.content)
        setnewcategory(location.state.category)
    },[])

   

    async function editedData(){
        let newData={
            title:newtitle,
            content:newcontent,
            category:newcategory
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
     {/*  */}
     <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={newcategory}
                  label="category"
                  onChange={(e)=>{setnewcategory(e.target.value)}}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"HTML/CSS"}>HTML/CSS</MenuItem>
                  <MenuItem value={"React"}>React</MenuItem>
                  <MenuItem value={"NodeJS"}>NodeJS</MenuItem>
                  <MenuItem value={"MongoDB"}>MongoDB</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/*  */}
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