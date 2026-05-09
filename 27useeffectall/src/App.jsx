import React from "react";
import { useEffect } from "react";
useEffect(() => {
  console.log("component has been mounted ")
}); //runs every after render
useEffect(() => {
  console.log("counter has changed");
}, [counter]); //runs only when counter has changed
useEffect(() => {
  return () => {
    console.log("component has been unmounted");
  }
}, []);
const [count, setcount] = useState(0);
function App() {
  return (<>
    <button onClick={() => { setcount(count + 1) }}>click me</button>
  </>)
}
export default App;

