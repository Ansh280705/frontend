import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from '../component/Home'
import College from '../component/College'
import About from '../component/About'
import Student from '../component/Student'
import Teacher from '../component/Teacher'

const App = () => {
  return (
    <>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/College">College</NavLink>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/College' element={<College />}>
          <Route path='student' element={<Student />} />
          <Route path='teacher' element={<Teacher />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
