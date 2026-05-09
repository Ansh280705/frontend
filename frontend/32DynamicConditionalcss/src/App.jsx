import { useState } from "react";
function App() {
  const [bgcolour, setBgColor] = useState("white");
  const [textcolor, setTextColor] = useState("black");
  return (<>
    <div style={{ backgroundColor: bgcolour, color: textcolor }}><h1>Dynamic Inline Style</h1>

      <button
        onClick={() => {
          setBgColor("black");
          setTextColor("white");
        }}
      >
        Dark Theme
      </button>

      <button
        onClick={() => {
          setBgColor("white");
          setTextColor("black");
        }}
      >
        Light Theme
      </button>
    </div>

  </>)
}
export default App;
