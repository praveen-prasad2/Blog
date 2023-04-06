import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { deleteBlog } from '../../API/Api';
import { useNavigate } from 'react-router-dom';
import "./authorcard.css"
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material';

function AuthorCard({authormap}) {

  const navigate=useNavigate()
// 
  const[open,setopen]=useState(false)


  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  // 
    async function blogDelete(){
        await axios.delete(deleteBlog + authormap._id)
        window.location.replace("http://localhost:5173/authorblog")
    }

    async function blogEdit(){
      navigate('/editblog',{state:authormap})
    }
    

  return (
    <>
    <Navbar/>
    <div className="authcard">
        <div className="heading">
        <h1>{authormap.title}</h1>
        </div>
    <div className="content">
<p>{authormap.content}</p>
<p>{authormap.authorname}</p>
<p>{authormap.dateposted}</p>
<hr />
<div className="buttons">
<EditIcon onClick={blogEdit}/>
<DeleteIcon onClick={handleClickOpen} />

</div>
    </div>
    </div>

    {/* try */}

    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Blog"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={blogDelete} autoFocus>
          Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      
    </>
  )
}

export default  AuthorCard


