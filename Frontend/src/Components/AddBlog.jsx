import React, { useRef ,useContext} from 'react'
import { TextField,Button,Box } from '@mui/material'
import { addBlog } from '../API/Api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './Context/UserContext'
import "../Stylesheets/addblog.css"
import axios from 'axios'



function AddBlog() {

    let titleref=useRef()
    let contentref=useRef()

    const navigate=useNavigate()



    const {loggedinUser}=useContext(UserContext)

    async function saveBlog(){
        let blog={
            title:titleref.current.value,
            content:contentref.current.value,
            authorid:loggedinUser._id,
            authorname:loggedinUser.username,
            dateposted:new Date()
        }
        console.log(blog);
        let response=await axios.post(addBlog,blog)
        console.log(response);
        if(response.data.success=true){
            alert("blog posted succcessfully")
        }else{
            alert("try again")
        }
    }
  return (
    
    <Box id="card">
        <Box>
    <h1>Post Your Ideas</h1>
    <p>{loggedinUser.username}</p>  
    <TextField id="outlined-textarea" label="Title" placeholder="Placeholder" inputRef={titleref}/> <br /><br />
    <TextField id="outlined-multiline-static" label="Content" multiline rows={4} inputRef={contentref}/> <br /><br />
    <Button variant="outlined" onClick={saveBlog}>Save</Button>
        </Box>
    </Box>


  )
}

export default AddBlog