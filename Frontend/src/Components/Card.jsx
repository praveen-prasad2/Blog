import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import "../Stylesheets/card.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Card({ blogmap }) {
  return (
    <>
      <div className="main">
        <div className="card">
          <p className="author">
            <AccountCircleIcon className="accounticon" /> {blogmap.authorname}{" "}
            <br />
            {new Date(blogmap.dateposted).toDateString()}
          </p>
          <div className="heading">
            <h1>{blogmap.title}</h1>
            <p>{blogmap.category}</p>
          </div>
          <div className="content">
            <p id="content">{blogmap.content} <Link to={`/singleblog/${blogmap._id}`}>Read More...</Link></p>
            <hr />
            <div className="buttons">
              <ThumbUpIcon className="like" />
              <ThumbDownIcon className="dislike" />
              <CommentIcon />
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
