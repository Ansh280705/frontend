import { useState } from 'react'
import Display from '../components/Display'
import Adduser from '../components/Adduser'
function App() {
  const [user, setuser] = useState([]);
  return (<>
    <div>
      <Adduser setuser={setuser} />
      <Display user={user} />
    </div>

  </>)
}
export default App;