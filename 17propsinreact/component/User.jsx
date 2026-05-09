// function User(props) {
//     return (<>
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     </>)
// }
// export default User;
function User({ name = "New User" }) {
    return <h1>Hi, {name}</h1>;
}

export default User;