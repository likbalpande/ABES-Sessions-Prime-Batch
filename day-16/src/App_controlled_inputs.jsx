import { useState } from "react";

const App = () => {
    const [name, setName] = useState("Raj");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        // logic for validation
        if (name.length < 2) {
            alert("Invalid name");
        } else {
            setIsSubmitted(true);
        }
    };

    return (
        <div>
            {isSubmitted === true ? (
                <section>
                    <h2>Name: {name}</h2>
                    <h4>Email: {email}</h4>
                </section>
            ) : (
                <section>
                    <div>
                        <label>Name</label>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Type here..."
                        ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Type here..."
                        ></input>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </section>
            )}
        </div>
    );
};

export default App;
