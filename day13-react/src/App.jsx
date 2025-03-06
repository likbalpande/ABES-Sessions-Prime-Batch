import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import SearchPage from "./pages/SearchPage";
// npm i react-router

import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
