import React from "react";
import College from "../components/College";
function App() {
  const CollegeData = [
    {
      name: "IET Alwer",
      city: "Alwer",
      website: "https://www.iet.ac.in/",
      student: [
        {
          name: "Anil Sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Peter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "https://www.iit.ac.in/",
      student: [
        {
          name: "Anil Sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Peter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "https://www.kciet.ac.in/",
      student: [
        {
          name: "Anil Sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Peter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
  ];
  return (<>
    <div>
      {CollegeData.map((college, index) => (
        <div key={index}>
          <College College={college} />
        </div>
      ))}
    </div>

  </>)
}
export default App;