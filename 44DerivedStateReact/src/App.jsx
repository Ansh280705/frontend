import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {

    if (user.trim() === "") return;

    setUsers([...users, user]);

    setUser("");
  };

  const total = users.length;

  const last = users[users.length - 1];

  const unique = [...new Set(users)].length;

  return (
    <>
      <div>

        <h2>Total Users : {total}</h2>

        <h2>Last User : {last}</h2>

        <h2>Unique Total Users : {unique}</h2>

        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Add new user"
        />

        <button onClick={handleAddUsers}>
          Add User
        </button>

        {
          users.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))
        }

      </div>
    </>
  );
}

export default App;