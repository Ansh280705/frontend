import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const url = "http://localhost:3000/users";

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {

        let response = await fetch(url + "/" + params.id);
        response = await response.json();

        setName(response.name);
        setEmail(response.email);
        setAge(response.age);
    };

    const updateUser = async () => {

        let response = await fetch(url + "/" + params.id, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name,
                email,
                age,
            }),
        });

        response = await response.json();

        if (response) {
            alert("User Updated Successfully");

            navigate("/");
        }
    };

    return (
        <div style={{ textAlign: "center" }}>

            <h1>Edit User</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <br />
            <br />

            <input
                type="text"
                placeholder="Enter Age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
            />

            <br />
            <br />

            <button onClick={updateUser}>
                Update User
            </button>

        </div>
    );
}

export default UserEdit;