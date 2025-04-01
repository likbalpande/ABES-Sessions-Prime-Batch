import { useEffect, useState } from "react";

const Card = ({ name, email, githubLink }) => {
    const [data, setData] = useState({});
    const res = githubLink.split("/");
    const userId = res[3];

    const getData = async () => {
        const resp = await fetch(`https://api.github.com/users/${userId}`);
        const temp = await resp.json();
        setData(temp);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
            <a href={githubLink} target="_blank">
                View Profile
            </a>
            <img width="125" src={data.avatar_url} alt="profile photo" />
        </div>
    );
};

export default Card;
