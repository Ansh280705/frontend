import Student from "./Students";
function College({ College }) {
    return (
        <>
            <h1>{College.name}</h1>
            <ul><li>{College.city}</li></ul>
            <Student Student={College.student} /> </>
    )
}
export default College;