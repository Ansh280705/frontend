import { useState, useRef, useEffect } from "react"
function App() {
  const [count, setcount] = useState(0);
  const inputref = useRef(null);
  const previouscount = useRef(0);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  useEffect(() => {
    previouscount.current = count;
  }, [count]);
  function focusinput() {
    inputref.current.focus();
  }
  function hideinput() {
    inputref.current.style.display = "none";
  }
  function showinput() {
    inputref.current.style.display = "block";
  }
  return (<>
    <div style={{ padding: "20px" }}>
      <h1>React useRef Example</h1>
      <input type="text" placeholder="Entername" ref={inputref} />
      <br />
      <br />
      <button onClick={focusinput}>Focus</button>
      <button onClick={hideinput}>Hide</button>
      <button onClick={showinput}>Show</button>
      <hr />
      <h2>Current Count :{count}</h2>
      <h2>Previous Count :{previouscount.current}</h2>
      <button onClick={() => setcount(count + 1)}>Increment</button>

    </div>
  </>)
}
export default App;