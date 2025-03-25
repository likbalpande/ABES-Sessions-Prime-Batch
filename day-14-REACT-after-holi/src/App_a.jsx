import { useState } from "react";

const AppForm = () => {
    const [flag, setFlag] = useState(true);

    const handleClick = () => {
        setFlag(false);
    };

    if (flag === true) {
        return (
            <section>
                <div style={{ display: "flex" }}>
                    <p>Hello</p>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </section>
        );
    } else {
        return (
            <section>
                <div style={{ display: "flex" }}>
                    <p>Hi</p>
                </div>
            </section>
        );
    }
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
