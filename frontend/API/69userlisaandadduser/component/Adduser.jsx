import React, { useState } from 'react'

const Adduser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const finalsubmit = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify({ name, email, age })
        });
        if (response.ok) {
            alert("User added successfully!");
            setName('');
            setEmail('');
            setAge('');
        }
    }

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <h2>Add New User</h2>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter name' />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter email' />
            <input onChange={(e) => setAge(e.target.value)} value={age} type="number" placeholder='Age' />
            <button onClick={finalsubmit}>Add User</button>
        </div>
    )
}

export default Adduser