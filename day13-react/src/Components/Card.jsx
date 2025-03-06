const cardStyle = {
    backgroundColor: "yellow",
};

const Card = ({ title, text }) => {
    return (
        <div style={cardStyle}>
            <h3>{title}</h3>
            <label>{text}</label>
        </div>
    );
};

export default Card;
