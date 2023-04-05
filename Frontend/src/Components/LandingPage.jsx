import React from "react";
import AllBlogs from "./AllBlogs";
import "../Stylesheets/landingpage.css";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <AllBlogs />
      </div>
        <Footer />
    </>
  );
}

export default LandingPage;
