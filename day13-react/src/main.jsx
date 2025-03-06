import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const domRoot = document.getElementById("root");
const reactRoot = createRoot(domRoot);

reactRoot.render(
    <StrictMode>
        <App />
    </StrictMode>
);
