//main page, managing the nav bar and the routing of the different pages
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/header";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Myprojects from "./component/Myprojects";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Logout from "./component/Logout";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home/>} exact />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Myprojects" element={<Myprojects/>} />
        <Route path="Signup" element={<Signup/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Logout" element={<Logout/>} />


      </Routes>
    </div>
  )
}
export default App;