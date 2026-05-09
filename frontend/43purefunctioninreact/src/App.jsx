import React, { useRef, useState } from "react";
import UserInput from "../component/UserInput";

function App() {

  const inputRef = useRef(null);

  const [value, setValue] = useState("");
  const [color, setColor] = useState("black");

  const updateInput = () => {

    setColor("red");

    inputRef.current.focus();
  };

  return (
    <>
      <h1>Pure Component</h1>

      <UserInput
        value={value}
        setValue={setValue}
        color={color}
        ref={inputRef}
      />

      <h2>Output: {value}</h2>

      <button onClick={updateInput}>
        Update
      </button>
    </>
  );
}

export default App;