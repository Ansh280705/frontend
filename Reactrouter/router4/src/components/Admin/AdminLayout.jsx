import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar for the Admin Prefix */}
      <aside style={{ width: '200px', background: '#2c3e50', color: 'white', padding: '20px' }}>
        <h3>Admin Panel</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink to="/admin" end style={({ isActive }) => ({ color: isActive ? '#3498db' : 'white', textDecoration: 'none' })}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" style={({ isActive }) => ({ color: isActive ? '#3498db' : 'white', textDecoration: 'none' })}>
            Users
          </NavLink>
          <NavLink to="/admin/settings" style={({ isActive }) => ({ color: isActive ? '#3498db' : 'white', textDecoration: 'none' })}>
            Settings
          </NavLink>
          <hr />
          <NavLink to="/" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Back to Home</NavLink>
        </nav>
      </aside>

      {/* Main content where child routes render */}
      <main style={{ flex: 1, padding: '20px', background: '#f4f4f4' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
