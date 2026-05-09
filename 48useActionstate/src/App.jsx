import React from "react";
import { useActionState } from "react";

const handleSubmit = (prevData, formData) => {

  let name = formData.get("name");
  let password = formData.get("password");

  console.log(name, password);

  if (name && password) {
    return {
      message: "Successfully Submitted",
      name,
      password,
    };
  } else {
    return {
      error: "Cannot Submit",
      name,
      password,
    };
  }
};

const App = () => {

  const [data, action, pending] = useActionState(
    handleSubmit,
    undefined
  );

  return (
    <div>

      <form action={action}>

        <input
          type="text"
          placeholder="Enter your name"
          name="name"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password"
          name="password"
        />

        <br />
        <br />

        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>

      </form>

      {
        data?.error &&
        <span style={{ color: "red" }}>
          {data.error}
        </span>
      }

      <br />

      {
        data?.message &&
        <span style={{ color: "green" }}>
          {data.message}
        </span>
      }

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>

    </div>
  );
};

export default App;