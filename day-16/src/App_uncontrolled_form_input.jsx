import { useState } from "react";

const App = () => {
    const [name, setName] = useState("Raj");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.dir(e.target);
        if (e.target.userName.value.length < 2) {
            alert("Invalid Name");
        } else {
            setEmail(e.target.userEmail.value);
            setName(e.target.userName.value);
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input name="userName" placeholder="Type here..."></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input name="userEmail" placeholder="Type here..."></input>
                    </div>
                    <button>Submit</button>
                </form>
            )}
        </div>
    );
};

export default App;
