import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Signup />} />
      <Route path="login" element={<Signin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
