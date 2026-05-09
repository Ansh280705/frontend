import React from 'react'
import { lazy, Suspense, useState } from "react";
const user = lazy(() => import('../component/User'));
const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <h1>Lazy laoding</h1>
        {show ?
          <Suspense fallback={<div>Loading...</div>}>
            <User />
          </Suspense>
          : null}
        <button onClick={() => setShow(!show)}>
          {show ? "Hide User" : "Show User"}
        </button>
      </div></>
  )
}

export default App