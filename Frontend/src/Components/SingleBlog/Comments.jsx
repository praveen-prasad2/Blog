import { TextField } from '@mui/material'
import React from 'react'
import "./comments.css"
import FavoriteIcon from '@mui/icons-material/Favorite';

function Comments({thecomments}) {

  return (
    <>
    

      {/*  */}


      <div class="l-card">
	<div class="l-card__text">
		<p>{thecomments.comment}</p>
	</div>
	<section class="l-card__user">
		<div class="l-card__userImage">
<img src="../images/profile.webp" alt="" />
		</div>
		<div class="l-card__userInfo">
			<span>{thecomments.commentorname}</span>
			<span>{new Date(thecomments.dateposted).toDateString()}</span>
		</div>
	</section><br /><br />
  <FavoriteIcon className='favicon'/>
</div>
    </>
  )
}

export default Comments