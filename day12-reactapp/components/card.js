const Card = ({ username }) => {
    // const Card = (abc) => {
    // console.log(abc);
    // console.log(abc.username);
    // const { username } = abc;
    // console.log(username);
    return (
        <div className="card">
            <h3>Hello {username}!</h3>
            <p>Nice to meet you!</p>
        </div>
    );
};

export default Card;

export const TITLE = "Hello World!";
