import useToggle from "../component/useToggle";

function App() {

  // Using custom hook
  const [value, toggleValue] = useToggle(true);

  return (
    <div>

      <h1>
        Status : {value ? "ON" : "OFF"}
      </h1>

      {/* Auto Toggle */}
      <button onClick={toggleValue}>
        Toggle
      </button>

      <br /><br />

      {/* Manual True */}
      <button onClick={() => toggleValue(true)}>
        Set True
      </button>

      <br /><br />

      {/* Manual False */}
      <button onClick={() => toggleValue(false)}>
        Set False
      </button>

    </div>
  );
}

export default App;