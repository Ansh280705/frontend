import { useState } from "react";
import { Routes, Route, NavLink } from "react-router";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import 
function App() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;