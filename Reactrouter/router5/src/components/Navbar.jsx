import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                    <li>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{ color: 'white', textDecoration: 'none' }} to="/users">Users List</Link>
                    </li>
                </ul>
            </nav>
            <div style={{ padding: '20px' }}>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar
