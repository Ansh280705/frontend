import React, { useTransition } from "react";

function App() {

  const [pending, startTransition] = useTransition();

  const handleFunc = () => {

    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
      console.log("ansh");

    });

  };

  return (
    <>
      <button disabled={pending} onClick={handleFunc}>
        {pending ? "Loading..." : "Click Me Hard"}
      </button>
      <button onClick={handleFunc}>
        Start Transition
      </button>
    </>
  );
}

export default App;