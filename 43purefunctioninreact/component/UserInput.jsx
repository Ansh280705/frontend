function UserInput({ value, setValue, color, ref }) {

    return (
        <>
            <input
                type="text"
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ color: color }}
                placeholder="Enter text"
            />
        </>
    );
}

export default UserInput;