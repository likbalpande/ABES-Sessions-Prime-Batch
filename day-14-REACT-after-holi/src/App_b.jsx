import { useState } from "react";

const AppForm = () => {
    let greetings = "Hello";
    const [flag, setFlag] = useState(true);
    const [username, setUsername] = useState(true);

    const handleClick = () => {
        greetings = "Good Evening!";
        setFlag(false);
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <section>
            {flag === true ? (
                <div className="form">
                    <input onChange={handleChange}></input>
                    <button onClick={handleClick}>Submit</button>
                </div>
            ) : (
                <div className="card">
                    <p>
                        {greetings} {username}
                    </p>
                </div>
            )}
        </section>
    );
    // return (
    //     <section>
    //          <div style={{ display: "flex" }}>Hello</div>;
    //         <div style={{ display: "flex" }}>Hello</div>
    //         <button>Submit</button>
    //         <div style={{ display: "none" }}>Hi</div>
    //     </section>
    // );
};

export default AppForm;
