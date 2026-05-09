import { useState } from "react";

function Adduser({ setuser }) {

    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <div>

                <h1>Add User</h1>

                <input
                    type="text"
                    placeholder="Enter User Name"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />

                <button onClick={() => setuser(inputValue)}>
                    Add
                </button>

            </div>
        </>
    );
}

export default Adduser;