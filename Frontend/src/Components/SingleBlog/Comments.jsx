import { TextField } from '@mui/material'
import React from 'react'

function Comments({thecomments}) {

  return (
    <>
    
      <div className="thecomments">
        <h5>{thecomments.commentorname}</h5>
        <p>{thecomments.dateposted}</p>
        <h1>{thecomments.comment}</h1>
      </div>
    </>
  )
}

export default Comments