import React, { useRef, useState } from "react";
import "../Stylesheets/navbar.css";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import Signout from "./Signout";
import { CircularProgress, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";


function Navbar() {
  const navigate = useNavigate();
  //Try

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/login");
      handleClose();
    }, 1000);
  };

  //

  const { loggedinUser } = useContext(UserContext);
  const [select,setSelect] = useState(" ")
  
  async function sorting(e) {
    setSelect(e.target.value)
    navigate('/sortblogs/'+e.target.value)
    
  }

  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1>
            <img src="/images/titleicon.png" alt="" /> BLOG
          </h1>
        </div>
        <div className="options">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Resources</a>
          {loggedinUser ? (
            <a href="/authorblog">Your Posts</a>
          ) : (
            <a href="/login">Your Posts</a>
          )}{" "}
          <br />
          <br />
          <a href="#contact">Contact</a>
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="category"
                onChange={sorting}
                value={select}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="HTML-CSS">HTML/CSS</MenuItem>
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="NodeJS">NodeJS</MenuItem>
                <MenuItem value="MongoDB">MongoDB</MenuItem>
              </Select>
            </FormControl>
          </div>
          {loggedinUser ? (
            <Signout />
          ) : (
            <button className="login" onClick={handleToggle}>
              Signin{" "}
            </button>
          )}
        </div>
      </div>
      {/* try */}

      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>

      {/*  */}
    </>
  );
}

export default Navbar;
