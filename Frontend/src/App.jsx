import { useState } from "react";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import AddBlog from "./Components/AddBlog";
import AllBlogs from "./Components/AllBlogs";
import AuthorBlog from "./Components/Author Blog/AuthorBlog";
import UserProvider from "./Components/Context/UserContext";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserRoute from "./Components/Private Route/UserRoute";
import EditBlog from "./Components/Author Blog/EditBlog";

function App() {



  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>
      <Route path="" element={<Signup />} />
       <Route path="login" element={<Signin />} />
      <Route path="addblog" element={<UserRoute><AddBlog /></UserRoute>} /> 
       <Route path="allblogs" element={<AllBlogs />} />
       <Route path="authorblog" element={<UserRoute><AuthorBlog /></UserRoute>} />
       <Route path="editblog" element={<UserRoute><EditBlog /></UserRoute>} />
    </Routes>
    </BrowserRouter>

    </UserProvider>
  )
}

export default App;
