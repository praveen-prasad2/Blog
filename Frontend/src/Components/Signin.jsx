import React, { useState } from "react";
import { useRef, useContext } from "react";
import { UserContext } from "./Context/UserContext";

import { signIn } from "../API/Api";
import axios from "axios";
import { TextField, Box, Button, Snackbar, Alert } from "@mui/material";
import "../Stylesheets/signin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

function Signin() {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const [open,setopen]=useState()
  const { SetloggedinUser } = useContext(UserContext);

  function handleClose(){
    setopen(false)
  }

  async function userLogin() {
    let user = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    let response = await axios.post(signIn, user);
    console.log(response.data);

    if (response.data.success == true) {
      SetloggedinUser(response.data.user);
      setopen(true)
      localStorage.setItem("loggedinuser", JSON.stringify(response.data.user));
      setTimeout(()=>{
        navigate("/authorblog");
      },1000)
    } else {
      alert("Login Error");
    }
  }
  return (
    <>
      <Navbar />
      <div className="wrapper1">
        <div id="container">
          <h1 className="head">SIGN IN</h1>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            className="input email"
            color="success"
            inputRef={emailRef}
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            className="input password"
            inputRef={passRef}
          />
          <br />
          <br />
          <Button variant="outlined" className="btn" onClick={userLogin}>
            Signin
          </Button>
          <br />
          <Snackbar open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            >
          
            
            
           <Alert onClose={handleClose} autoHideDuration={5000} severity="success" sx={{ width: '100%' }}>
          Login Success
        </Alert>
          </Snackbar>
          <span>
            {" "}
            Not a member?{" "}
            <Link to="/signup" underline="none">
              Signup
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
