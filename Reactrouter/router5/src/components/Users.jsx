import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
  ]

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}/${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <p>Click a name to see their dynamic profile page.</p>
    </div>
  )
}

export default Users
