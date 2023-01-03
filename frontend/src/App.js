//main page, managing the nav bar and the routing of the different pages
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/header";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Myprojects from "./component/Myprojects";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home/>} exact />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Myprojects" element={<Myprojects/>} />
      </Routes>
    </div>
  )
}
export default App;