import React from "react";
import "./footer.css";
import { TextField,Button} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <>
    <div className="container1" id="contact">

<div className="leftc">
    <h1>Praveen Prasad</h1>
    <p>8589920409</p>
    <p>praveenprasad2510@gmail.com</p>
    <div className="social">
<Link to="https://www.instagram.com/uglymallu/"><InstagramIcon className="footicon insta" /></Link>
<Link to="https://github.com/praveen-prasad2"><GitHubIcon className="footicon github"/></Link>
<Link to="https://twitter.com/uglymallu"><TwitterIcon className="footicon twitter"/></Link>
    </div>
<span><CopyrightIcon /> 2023 by Praveen Prasad</span>
</div>

<div className="line"></div>

        <div className="rightc">
      <div className="heads">
        <h1>Contact</h1>
        <h4>Ask me anything</h4>
      </div>
      <div className="forms">
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Placeholder"
        />{" "}
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Your message"
          multiline
          rows={4}
        />
        <br />
        <br />
        <Button variant="outlined">Submit</Button>
      </div>
    </div>
</div>

</>
  );
}

export default Footer;
