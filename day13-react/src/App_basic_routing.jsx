import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const App = () => {
    const { location } = window;
    const { pathname } = location;
    if (pathname === "/") {
        return (
            <div>
                <HomePage />
            </div>
        );
    } else if (pathname === "/search") {
        return (
            <div>
                <SearchPage />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Oops... Page not found!</h1>
                <a href="/">Home</a>
            </div>
        );
    }
};

export default App;
