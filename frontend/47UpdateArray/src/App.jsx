import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([
    'anil', 'sidhu', 'man', 'tony'
  ])

  const [dataDetails, setdatadetails] = useState([
    { name: 'ansh', age: '23' },
    { name: 'sidhu', age: '20' },
    { name: 'man', age: '24' },
    { name: 'tony', age: '25' }
  ])

  const handleUser = (name) => {

    const updatedData = [...data]

    updatedData[updatedData.length - 1] = name

    setData(updatedData)
  }

  const handleAge = (age) => {

    const updatedDetails = [...dataDetails]

    updatedDetails[updatedDetails.length - 1] = {
      ...updatedDetails[updatedDetails.length - 1],
      age: age
    }

    setdatadetails(updatedDetails)
  }

  return (
    <div>

      <h1>Updating Array in State</h1>

      <input
        type="text"
        placeholder="Enter last user name"
        onChange={(e) => handleUser(e.target.value)}
      />

      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

      <input
        type="text"
        placeholder="Enter last user age"
        onChange={(e) => handleAge(e.target.value)}
      />

      {
        dataDetails.map((item, index) => (
          <h4 key={index}>
            {item.name}, {item.age}
          </h4>
        ))
      }

    </div>
  )
}

export default App