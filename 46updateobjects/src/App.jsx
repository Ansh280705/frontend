import React from 'react'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState({
    name: 'Anil',
    address: {
      city: 'Delhi',
      country: 'India'
    }
  })
  const handleName = (Val) => {

    setData({ ...data, name: Val })
  }
  const handleCity = (city) => {
    // data.address.city = city
    setData({ ...data, address: { ...data.address, city: city } })
  }
  return (
    <div><h1>Updating objects in state</h1>
      <input type="text" placeholder='Enter ur name' onChange={(event) => handleName(event.target.value)} />
      <input type="text" placeholder='update ur city' onChange={(event) => handleCity(event.target.value)} />
      <h3>{data.name}</h3>
      <h3>{data.address.city}</h3>
    </div>

  )
}

export default App