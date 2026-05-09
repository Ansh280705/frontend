import React from 'react'
import Navbar from '../component/Navbar'
import { Routes, Route } from 'react-router'
import Home from '../component/Home'
import About from '../component/About'
import Contact from '../component/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App