import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const url = "http://localhost:3000/users";

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {

    setLoading(true);

    let response = await fetch(url);
    response = await response.json();

    setUserData(response);

    setLoading(false);
  };

  const editUser = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <div>

      <h1>User List</h1>

      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>

      {
        !loading ?

          userData.map((user) => (

            <ul key={user.id} className="user-list">

              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>{user.email}</li>

              <li>
                <button onClick={() => editUser(user.id)}>
                  Edit
                </button>
              </li>

            </ul>

          ))

          :

          <h2>Loading...</h2>
      }

    </div>
  );
}

export default UserList;