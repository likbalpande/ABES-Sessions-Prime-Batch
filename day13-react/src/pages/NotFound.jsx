import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Oops... Page not found!</h2>
            <a href="/">Home Anchor</a>
            <br></br>
            <Link to="/">Home Link</Link>
        </div>
    );
};

export default NotFoundPage;
