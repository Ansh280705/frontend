import { useReducer } from "react";

// 1. Initial data for our state
const emptydata = {
  name: '',
  password: '',
  email: '',
  city: '',
  Address: ''
}

// 2. Reducer function: Logic to update the state
const reducer = (data, action) => {
  // FIX: Added { } and used spread operator ...data to keep previous values
  // Without { }, it was a syntax error. Without ..., it would delete other fields.
  return { ...data, [action.type]: action.val }
}

const App = () => {
  // 3. useReducer initialization
  const [state, dispatch] = useReducer(reducer, emptydata);

  console.log(state);

  return (
    <>
      <h1>use Reducer</h1>

      {/* 4. Inputs: Fixed 'event' to 'e' and added all fields */}
      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: 'name' })}
        placeholder="enter name"
      />
      <br />

      <input
        type="password"
        onChange={(e) => dispatch({ val: e.target.value, type: 'password' })}
        placeholder="enter password"
      />
      <br />

      <input
        type="email"
        onChange={(e) => dispatch({ val: e.target.value, type: 'email' })}
        placeholder="enter email"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: 'city' })}
        placeholder="enter city"
      />
      <br />

      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: 'Address' })}
        placeholder="enter address"
      />

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Current Data:</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  )
}

export default App;