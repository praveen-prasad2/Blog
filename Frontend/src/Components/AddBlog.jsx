import React, { useRef, useContext, useState } from "react";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { addBlog } from "../API/Api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import "../Stylesheets/addblog.css";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import PersonIcon from "@mui/icons-material/Person";

import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";


function AddBlog() {
  let titleref = useRef();
  let contentref = useRef();
    

  const navigate = useNavigate();
  const [category, setcategory] = useState("");

  const [open, setopen] = useState();

  const { loggedinUser } = useContext(UserContext);

  function handleClose() {
    setopen(false);
  }

    const handleChange = (event) => {
      setcategory(event.target.value);
    };
  
    async function saveBlog() {
      let blog = {
        title: titleref.current.value,
        content: contentref.current.value,
        authorid: loggedinUser._id,
        authorname: loggedinUser.username,
        category:category,
        dateposted: new Date(),
      };
      console.log(blog);
      let response = await axios.post(addBlog, blog);
      console.log(response);
      if ((response.data.success = true)) {
        setopen(true);
        setTimeout(() => {
          navigate("/authorblog");
        }, 1000);
      } else {
        alert("try again");
      }
    }
    return (
      <>
        <Navbar />
        <Box id="card">
          <Box>
            <h1>POST YOUR IDEAS</h1>
            <p>
              <PersonIcon /> {loggedinUser.username}
            </p>
            <TextField
              id="outlined-textarea"
              label="Title"
              inputRef={titleref}
            />{" "}
            <br />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              inputRef={contentref}
            />{" "}
            <br />
            <br />
            {/*  */}
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"HTML/CSS"}>HTML/CSS</MenuItem>
                  <MenuItem value={"React"}>React</MenuItem>
                  <MenuItem value={"NodeJS"}>NodeJS</MenuItem>
                  <MenuItem value={"MongoDB"}>MongoDB</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/*  */}
            <Button variant="outlined" className="saveblog" onClick={saveBlog}>
              Save
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                autoHideDuration={5000}
                severity="success"
                sx={{ width: "100%" }}
              >
                Blog Added Successfully
              </Alert>
            </Snackbar>
          </Box>
        </Box>
        <Footer />
      </>
    );
  
}

export default AddBlog;
