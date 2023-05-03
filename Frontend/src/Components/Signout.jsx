import React from "react";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material';

function Signout() {
  const { SetloggedinUser } = useContext(UserContext);

  const navigate = useNavigate();

  //

  const[open,setopen]=useState(false)


  const handleClickOpen = (e) => {

    e.preventDefault()
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  //

  async function logout(e) {
    e.preventDefault()
    console.log("hai");
    SetloggedinUser(null);
    localStorage.removeItem("loggedinuser");
    navigate("/");
  }
  return (
    <>
    <button className="login">
      <Link to="" onClick={(e)=>{handleClickOpen(e)}}>
        Signout
      </Link>{" "}
    </button>

    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logout"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={logout} autoFocus>
          Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      
    </>
  );
}

export default Signout;
