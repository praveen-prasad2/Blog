import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { deleteBlog } from '../../API/Api';

function AuthorCard({authormap}) {

    async function blogDelete(){
        await axios.delete(deleteBlog + authormap._id)
        window.location.replace("http://localhost:5173/authorblog")
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
<EditIcon />
<DeleteIcon onClick={blogDelete} />

</div>
    </div>
    </div>
    </>
  )
}

export default  AuthorCard


