import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import '../Stylesheets/card.css'


function Card({blogmap}) {
  return (
    <>
    <div className="card">
        <div className="heading">

        <h1>{blogmap.title}</h1>
        </div>
    <div className="content">
<p>{blogmap.content}</p>
<p>{blogmap.authorname}</p>
<p>{blogmap.dateposted}</p>
<div className="buttons">
<ThumbUpIcon />
<ThumbDownIcon />
<CommentIcon />
<ShareIcon />

</div>
    </div>
    </div>
    </>
  )
}

export default Card