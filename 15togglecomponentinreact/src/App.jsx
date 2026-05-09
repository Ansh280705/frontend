import { useState } from "react";
function app() {
  const [display, setdisplay] = useState(true)

  return (
    <>
      <div>
        <button onClick={() => setdisplay(!display)}>togglethecomponent</button>
        {display ? <h1>Anil Sidhu</h1> : null}
      </div>
    </>
  );
}
export default app;