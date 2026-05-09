import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AdminLayout from './components/Admin/AdminLayout'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import Settings from './components/Admin/Settings'

function App() {
  return (
    <div>
      {/* Basic Navigation */}
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/admin">Admin Panel (Prefix Example)</Link>
      </nav>

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* Route Prefix Example: All routes starting with /admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* Path: /admin */}
          <Route path="users" element={<Users />} /> {/* Path: /admin/users */}
          <Route path="settings" element={<Settings />} /> {/* Path: /admin/settings */}
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </div>
  )
}

export default App
