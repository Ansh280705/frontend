import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "../component/Navbar";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Profile from "../component/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;