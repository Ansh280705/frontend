import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </>
    )
}

export default Navbar