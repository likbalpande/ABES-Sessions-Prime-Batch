import React from "react";
import ReactDOM from "react-dom/client";
import Wallpaper, { TITLE } from "./components/card";
import { Button } from "./components/button";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return (
        <div>
            <Button color="submit">Submit</Button>
            <Button color="danger">Cancel</Button>
            <Wallpaper></Wallpaper>
            <Wallpaper username={TITLE}></Wallpaper>
            <Wallpaper username="Likhilesh"></Wallpaper>
            <Wallpaper username="Ajay"></Wallpaper>
            <Wallpaper username="Raj" />
            {/* {Wallpaper()} */}
        </div>
    );
};

console.log("hello");

// reactRoot.render(App());
reactRoot.render(<App />);
