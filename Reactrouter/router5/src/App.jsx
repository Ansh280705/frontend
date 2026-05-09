import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        
        {/* Dynamic Route: :id and :name are placeholders */}
        <Route path="user/:id/:name" element={<UserDetails />} />
      </Route>
    </Routes>
  )
}

export default App
