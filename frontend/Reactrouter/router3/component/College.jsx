import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const College = () => {
  return (
    <>
      <h2>College Section</h2>
      <nav style={{ display: 'flex', gap: '10px', margin: '10px 0' }}>
        <NavLink to="/College/student">Student</NavLink>
        <NavLink to="/College/teacher">Teacher</NavLink>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}

export default College