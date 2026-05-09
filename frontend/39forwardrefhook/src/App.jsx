import { useState, useRef } from "react"
import Userinpurtbefore18 from "../component/userinpurtbefore18"
function App() {
  const inputref = useRef(null);
  function UpdateInput() {
    inputref.current.value = "anshuman";
    inputref.current.style.color = "red";
  }
  return (
    <>
      <h1>forward ref Example</h1>
      <Userinpurtbefore18 ref={inputref} />
      <button onClick={UpdateInput}>Update input</button>


    </>
  )
}
export default App;