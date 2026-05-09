import React from 'react'
import Userlist from '../component/USerlist'
import Adduser from '../component/Adduser'
import { Routes, Route, NavLink } from 'react-router'

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management System</h1>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <NavLink to="/userlist" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>User List</NavLink>
        <NavLink to="/adduser" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', fontWeight: isActive ? 'bold' : 'normal' })}>Add User</NavLink>
      </nav>

      <Routes>
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/adduser" element={<Adduser />} />
      </Routes>
    </div>
  )
}

export default App