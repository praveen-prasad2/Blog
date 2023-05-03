import { useState } from "react";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import AddBlog from "./Components/AddBlog";
import AuthorBlog from "./Components/Author Blog/AuthorBlog";
import UserProvider from "./Components/Context/UserContext";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserRoute from "./Components/Private Route/UserRoute";
import EditBlog from "./Components/Author Blog/EditBlog";
import LandingPage from "./Components/LandingPage";
import SortedBlog from "./Components/SortedBlog";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import AllAuthorBlog from "./Components/Allauthorblogs/AllAuthorBlog";

function App() {



  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/allauthorblog" element={<AllAuthorBlog />} />

      <Route path="signup" element={<Signup />} />  
       <Route path="login" element={<Signin />} />
      <Route path="addblog" element={<UserRoute><AddBlog /></UserRoute>} /> 
   
       {/* <Route path="allblogs" element={<AllBlogs />} /> */}
       <Route path="authorblog" element={<UserRoute><AuthorBlog /></UserRoute>} />
       <Route path="editblog" element={<UserRoute><EditBlog /></UserRoute>} />
       <Route path="sortblogs/:category" element={<SortedBlog />} />
       <Route path="singleblog/:id" element={<SingleBlog/>} />
    </Routes>
    </BrowserRouter>

    </UserProvider>
  )
}

export default App;
