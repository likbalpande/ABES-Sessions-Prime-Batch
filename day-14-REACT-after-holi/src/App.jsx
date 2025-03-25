//re-render === re-run

import { useState } from "react";

const AppForm = () => {
    // let name = "Mohan";
    const [monitor, remote] = useState("OK");

    console.log("re-rendered", monitor);

    const handleChange = (e) => {
        // name = e.target.value;
        // console.log(name);
        setTimeout(() => {
            // THIS does not work --> remote(e.target.value);
            console.log(e);
            if (e.nativeEvent.inputType === "deleteContentBackward") {
                remote(e.target.value.substring(0, e.target.value.length - 1)); // Noted!
            } else {
                remote(e.target.value + e.nativeEvent.data); // Noted!
            }
        }, 2000);
        console.log("updated", monitor);
    };

    return (
        <div>
            <p>Name</p>
            <input value={monitor} placeholder="Please enter here..." onChange={handleChange} />
            <h3>Hello {monitor} !</h3>
            {/* <h3>Hello {name} !</h3> */}
        </div>
    );
};

export default AppForm;
