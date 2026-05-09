import React from 'react'
import { useId } from 'react'

export const Userform = () => {
    const id = useId();
    return (
        <div>
            <form action="">
                <input type="text" id={id + "name"} />
                <label htmlFor={id + "name"}>name</label>
            </form>
        </div>
    )
}
