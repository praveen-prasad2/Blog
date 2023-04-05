import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { deleteBlog } from '../../API/Api';
import { useNavigate } from 'react-router-dom';

function AuthorCard({authormap}) {

  const navigate=useNavigate()

    async function blogDelete(){
        await axios.delete(deleteBlog + authormap._id)
        window.location.replace("http://localhost:5173/authorblog")
    }

    async function blogEdit(){
      navigate('/editblog',{state:authormap})
    }
    

  return (
    <>
    <div className="card">
        <div className="heading">
        <h1>{authormap.title}</h1>
        </div>
    <div className="content">
<p>{authormap.content}</p>
<p>{authormap.authorname}</p>
<p>{authormap.dateposted}</p>
<div className="buttons">
<EditIcon onClick={blogEdit}/>
<DeleteIcon onClick={blogDelete} />

</div>
    </div>
    </div>
    </>
  )
}

export default  AuthorCard


