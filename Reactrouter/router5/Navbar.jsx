import React from 'react'

const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/in/user/login">Login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/in/user/about">About</Link>
                        </li>
                        <li>
                            <Link className="link" to="/college">College</Link>
                        </li>
                        <li>
                            <Link className="link" to="/users">Users</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar