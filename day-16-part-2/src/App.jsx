import P from "papaparse";
import { useState } from "react";
import Card from "./Components/Card";

const App = () => {
    const [profiles, setProfiles] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        P.parse(file, { header: true, complete: handleData });
    };

    const handleData = (res) => {
        const { data, errors } = res;
        if (errors.length > 0) {
            alert("Error!");
        } else {
            setProfiles(data);
        }
    };

    return (
        <div>
            <div>
                <input type="file" accept=".csv" onChange={handleFileUpload} />
            </div>
            <div>
                {profiles.map((elem) => (
                    <Card name={elem.name} email={elem.email} githubLink={elem.githubLink} />
                ))}
            </div>
        </div>
    );
};

export default App;
