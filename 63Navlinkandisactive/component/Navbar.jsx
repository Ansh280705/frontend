import React from 'react'
import { NavLink } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "custom-active" : "link"}><Home /></NavLink>
            <NavLink to="/About" className={({ isActive }) => isActive ? "custom-active" : "link"}><About /></NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "custom-active" : "link"}><Contact /></NavLink>
            <NavLink to="/Profile" className={({ isActive }) => isActive ? "custom-active" : "link"}><Profile /></NavLink>
        </>
    )
}

export default Navbar