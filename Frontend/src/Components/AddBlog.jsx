import React, { useRef ,useContext, useState} from 'react'
import { TextField,Button,Box, Snackbar, Alert } from '@mui/material'
import { addBlog } from '../API/Api'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './Context/UserContext'
import "../Stylesheets/addblog.css"
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import PersonIcon from '@mui/icons-material/Person';





function AddBlog() {

    let titleref=useRef()
    let contentref=useRef()

    const navigate=useNavigate()

    const [open,setopen]=useState()



    const {loggedinUser}=useContext(UserContext)


    function handleClose(){
        setopen(false)
    }

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
            setopen(true)
            setTimeout(()=>{

                navigate('/authorblog')
            },1000)
        }else{
            alert("try again")
        }
    }
  return (
    <>
    <Navbar/>
    <Box id="card">
        <Box>
    <h1>POST YOUR IDEAS</h1>
    <p ><PersonIcon/> {loggedinUser.username}</p>  
    <TextField id="outlined-textarea" label="Title"  inputRef={titleref}/> <br /><br />
    <TextField id="outlined-multiline-static" label="Content" multiline rows={4} inputRef={contentref}/> <br /><br />
    <Button variant="outlined" className='saveblog' onClick={saveBlog} >Save</Button>
    <Snackbar open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            >
           <Alert onClose={handleClose} autoHideDuration={5000} severity="success" sx={{ width: '100%' }}>
          Blog Added Successfully
        </Alert>
          </Snackbar>
        </Box>
    </Box>
    <Footer/>
    </>


  )
}

export default AddBlog