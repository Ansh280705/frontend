import { useContext } from "react";
import { SubjectContext } from "../context/context";


export default function Subject() {

    const subject = useContext(SubjectContext);

    return (
        <div style={{ backgroundColor: "pink", padding: 10 }}>

            <h1>Subject Component</h1>

            <h2>Selected Subject : {subject}</h2>

        </div>
    );
}