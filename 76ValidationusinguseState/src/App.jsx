import { useActionState } from 'react';
import './App.css'
function App() {

  const handleLogin = (prevData, formData) => {
    let name = formData.get('name')
    let password = formData.get('password')
    let regex = /^[A-Z0-9]+$/i;


    if (!name || name.length > 5) {
      return { error: 'Name can not be empty or Name should not container more then 5 characters', name, password }
    } else if (!regex.test(password)) {
      return { error: 'Password can  container only numbers and alphabets', name, password }
    } else {
      return { message: 'Login done', name, password }
    }


  }
  const [data, action, pending] = useActionState(handleLogin);
  return (
    <div>
      <h1>Validation with useActionState in React</h1>
      {
        data?.message && <span style={{ color: 'green' }} > {data?.message}</span>
      }
      {
        data?.error && <span style={{ color: 'red' }}> {data?.error}</span>
      }
      <form action={action}>
        <input defaultValue={data?.name} type="text" name='name' placeholder='enter user name' />
        <br /><br />
        <input type="text" defaultValue={data?.password} name='password' placeholder='enter user password' />
        <br /><br />
        <button  >Login</button>
      </form>
    </div>

  );
}

export default App;

