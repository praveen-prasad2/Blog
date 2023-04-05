import React from "react";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
  const { SetloggedinUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function logout(e) {
    e.preventDefault()
    console.log("hai");
    SetloggedinUser(null);
    localStorage.removeItem("loggedinuser");
    navigate("/");
  }
  return (
    <button className="login">
      <a href="" onClick={(e)=>{logout(e)}}>
        Signout
      </a>{" "}
    </button>
  );
}

export default Signout;
