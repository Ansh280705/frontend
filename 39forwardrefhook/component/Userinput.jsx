function Userinput(props) {
    return (<>
        <div>
            <input type="text" ref={props.ref} placeholder="Entername" />
        </div>
    </>)
}
export default Userinput;