import { useState } from "react";

const useToggle = (defaultVal) => {

    // Create state
    const [value, setValue] = useState(defaultVal);

    // Toggle function
    function toggleValue(val) {

        console.log(val);

        // If no boolean passed
        if (typeof val != 'boolean') {

            console.log("if");

            // Toggle value
            setValue(!value);

        } else {

            console.log("else");

            // Set manual boolean value
            setValue(val);
        }
    }

    // Return value and function
    return [value, toggleValue];
}

export default useToggle;