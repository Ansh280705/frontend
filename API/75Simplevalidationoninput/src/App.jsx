import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState("");
  const [nameerror, setnameerror] = useState("");

  const [password, setpassword] = useState("");
  const [passworderror, setpassworderror] = useState("");

  const handleName = (event) => {

    setname(event.target.value);

    if (event.target.value.length < 3) {
      setnameerror("Name must be at least 3 characters");
    }
    else {
      setnameerror("");
    }
  }

  const handlepassword = (e) => {

    setpassword(e.target.value);

    let regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (!regex.test(e.target.value)) {
      setpassworderror("Password must be 8 to 16 characters");
    }
    else {
      setpassworderror("");
    }
  }

  return (
    <div>

      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder='Enter Name'
      />

      <p style={{ color: "red" }}>{nameerror}</p>

      <input
        type="password"
        value={password}
        onChange={handlepassword}
        placeholder='Enter Password'
      />

      <p style={{ color: "red" }}>{passworderror}</p>

    </div>
  )
}

export default App