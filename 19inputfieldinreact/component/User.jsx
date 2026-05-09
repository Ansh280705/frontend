import { useState } from "react";
function user() {
    const [skills, setskills] = useState([]);
    const handleskill = (e) => {
        if (e.target.checked) {
            setskills([...skills, e.target.value])
        }
        else {
            setskills(skills.filter((item) => item !== e.target.value))
        }
    }
    return (
        <>
            <input type="checkbox" id="c++" value="c++" />
            <label htmlFor="c++">c++</label>
            <br />
            <input type="checkbox" id="javascript" value="javascript" />
            <label htmlFor="javascript">javascript</label>
            <br />
            <input type="checkbox" id="python" value="python" />
            <label htmlFor="python">python</label>
            <br />
            <input type="checkbox" id="java" value="java" />
            <label htmlFor="java">java</label>
            <br />
            <br />
            <br />
            <h2>{skills.toString()}</h2>
        </>
    )
}
export default user;