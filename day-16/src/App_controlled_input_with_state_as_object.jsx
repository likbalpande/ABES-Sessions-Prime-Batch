import { useState } from "react";

const App = () => {
    const [userDetails, setUserDetails] = useState({
        name: "Raj",
        email: "Raj@abes.co.in",
        phoneNumber: "1900324",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (userDetails.name.length < 2) {
            alert("Invalid name");
        } else {
            setIsSubmitted(true);
        }
    };

    console.log(userDetails);

    return (
        <div>
            {isSubmitted === true ? (
                <section>
                    {Object.entries(userDetails).map(([key, val], idx) => {
                        return (
                            <h3 key={key}>
                                {idx}. {key} :: {val}
                            </h3>
                        );
                    })}
                    {Object.entries(userDetails).map((elem, idx) => {
                        return (
                            <h3 key={elem[0]}>
                                {idx}. {elem[0]} :: {elem[1]}
                            </h3>
                        );
                    })}
                </section>
            ) : (
                <section>
                    <div>
                        <label>Name</label>
                        <input
                            placeholder="Type here..."
                            value={userDetails.name}
                            onChange={(e) => {
                                const val = e.target.value;
                                const newItem = userDetails;
                                newItem.name = val;
                                setUserDetails({ ...newItem });
                            }}
                        ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            value={userDetails.email}
                            placeholder="Type here..."
                            onChange={(e) => {
                                const val = e.target.value;
                                const newItem = userDetails;
                                newItem.email = val;
                                setUserDetails({ ...newItem });
                            }}
                        ></input>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                            value={userDetails.phoneNumber}
                            placeholder="Type here..."
                            onChange={(e) => {
                                const val = e.target.value;
                                const newItem = { ...userDetails };
                                newItem.phoneNumber = val;
                                setUserDetails(newItem);
                            }}
                        ></input>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </section>
            )}
        </div>
    );
};

export default App;
