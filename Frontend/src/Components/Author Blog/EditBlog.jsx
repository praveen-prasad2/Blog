import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button,TextField } from '@mui/material'
import { editBlog } from '../../API/Api'
import axios from 'axios'

function EditBlog() {


    const[newtitle,setnewtitle]=useState()
    const [newcontent,setnewcontent]=useState()

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
    }

  return (
    <>
    <div className="card">
        <div className="heading">
        <TextField id="outlined-textarea" label="Title" placeholder="Placeholder" value={newtitle} onChange={(e)=>{setnewtitle(e.target.value)}}/> <br /><br />
        </div>
    <div className="content">
    <TextField id="outlined-multiline-static" label="Content" multiline rows={4} value={newcontent} onChange={(e)=>{setnewcontent(e.target.value)}} /> <br /><br />
<div className="buttons">
<Button variant="outlined" onClick={editedData}>Save</Button>

</div>
    </div>
    </div>
    </>
  )
}

export default EditBlog