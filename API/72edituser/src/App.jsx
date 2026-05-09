import { NavLink, Route, Routes } from "react-router";
import "./App.css";

import UserList from "./UserList";
import UserEdit from "./UserEdit";

function App() {
  return (
    <div>

      <ul className="nav-list">
        <li>
          <NavLink to="/">User List</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>

    </div>
  );
}

export default App;