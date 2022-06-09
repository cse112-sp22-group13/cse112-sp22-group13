import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";

import "./stylesheets/App.css";

/**
 * Main component of our app
 * @returns Component representing our app
 */
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Main />
            </div>
        </BrowserRouter>
    );
};

export default App;
