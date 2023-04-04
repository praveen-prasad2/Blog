import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import AddBlog from "./Components/AddBlog";
import AllBlogs from "./Components/AllBlogs";
import AuthorBlog from "./Components/Author Blog/AuthorBlog";
import UserProvider from "./Components/Context/UserContext";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserRoute from "./Components/Private Route/UserRoute";

function App() {
 

  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>
      <Route path="" element={<Signup />} />
       <Route path="login" element={<Signin />} />
      <Route path="addblog" element={<UserRoute><AddBlog /></UserRoute>} /> 
       <Route path="allblogs" element={<AllBlogs />} />
       <Route path="authorblog" element={<AuthorBlog />} />
    </Routes>
    </BrowserRouter>

    </UserProvider>
  )
}

export default App;
