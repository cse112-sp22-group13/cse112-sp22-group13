import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/Navbar";
import Main from "./components/Main";

import "./App.css";

/**
 * Main component of our app
 * @returns
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
