import React from 'react'
import { useEffect, useState } from 'react'

const Fetchanddisplaydata = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchdata()
    setLoading(true)
  }, [])
  const fetchdata = async () => {
    const url = "https://dummyjson.com/users"
    let response = await fetch(url);
    let data = await response.json();
    setUserData(data.users) 
    setLoading(false)
  }

  return (
    <>
      {!loading ? (
        userData.map((user) => (
          <ul key={user.id} className="user-list">
            <li>{user.firstName} {user.lastName}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <h1> Data Loading...</h1>
      )}
    </>
  )
}

export default Fetchanddisplaydata