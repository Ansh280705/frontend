import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UserDetails = () => {
  // useParams() extracts the dynamic parameters from the URL
  const { id, name } = useParams()
  const navigate = useNavigate()

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>User Profile</h2>
      <p><strong>User ID:</strong> {id}</p>
      <p><strong>Username:</strong> {name}</p>
      <button onClick={() => navigate('/users')}>Back to Users</button>
    </div>
  )
}

export default UserDetails
